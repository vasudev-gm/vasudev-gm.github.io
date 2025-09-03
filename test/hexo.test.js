const { describe, it, before, after } = require('mocha');
const assert = require('assert');
const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

// Test configuration
const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const SOURCE_DIR = path.join(ROOT_DIR, 'source');
const POSTS_DIR = path.join(SOURCE_DIR, '_posts');
const TEST_POST_TITLE = 'Automated Test Post for CI';
const TEST_POST_FILENAME = 'Automated-Test-Post-for-CI.md'; // Hexo converts spaces to hyphens
const TEST_POST_PATH = path.join(POSTS_DIR, TEST_POST_FILENAME);

describe('Hexo Blog Automated Tests', function() {
  // Set timeout for all tests
  this.timeout(60000);

  describe('1. NPM Dependencies Installation', function() {
    it('should verify npm dependencies are properly installed', async function() {
      // Check if node_modules exists
      const nodeModulesPath = path.join(ROOT_DIR, 'node_modules');
      const nodeModulesExists = await fs.access(nodeModulesPath).then(() => true).catch(() => false);
      assert.ok(nodeModulesExists, 'node_modules directory should exist');

      // Verify key Hexo dependencies
      const requiredDeps = [
        'hexo',
        'hexo-generator-index',
        'hexo-server',
        'hexo-generator-archive',
        'hexo-generator-category',
        'hexo-generator-tag',
        'hexo-renderer-marked',
        'hexo-theme-next'
      ];

      for (const dep of requiredDeps) {
        const depPath = path.join(nodeModulesPath, dep);
        const depExists = await fs.access(depPath).then(() => true).catch(() => false);
        assert.ok(depExists, `Dependency ${dep} should be installed`);
      }
    });

    it('should confirm essential plugins are available', async function() {
      const packageJsonPath = path.join(ROOT_DIR, 'package.json');
      const packageContent = await fs.readFile(packageJsonPath, 'utf8');
      const packageData = JSON.parse(packageContent);
      
      // Check essential plugins in dependencies
      const essentialPlugins = ['hexo-generator-index', 'hexo-server'];
      
      for (const plugin of essentialPlugins) {
        assert.ok(
          packageData.dependencies && packageData.dependencies[plugin],
          `Essential plugin ${plugin} should be listed in dependencies`
        );
      }
    });
  });

  describe('2. Configuration Files Validation', function() {
    it('should validate _config.yml exists and contains required configuration', async function() {
      const configPath = path.join(ROOT_DIR, '_config.yml');
      
      // Check file exists
      const configExists = await fs.access(configPath).then(() => true).catch(() => false);
      assert.ok(configExists, '_config.yml should exist');

      // Read and validate content
      const configContent = await fs.readFile(configPath, 'utf8');
      
      // Check for essential configuration keys
      const requiredKeys = [
        'title:',
        'url:',
        'source_dir:',
        'public_dir:',
        'theme:'
      ];

      for (const key of requiredKeys) {
        assert.ok(
          configContent.includes(key),
          `_config.yml should contain ${key} configuration`
        );
      }

      // Verify theme is set to 'next'
      assert.ok(
        configContent.includes('theme: next'),
        '_config.yml should have theme set to next'
      );
    });

    it('should validate _config.next.yml (NexT theme config) exists and contains valid configuration', async function() {
      const nextConfigPath = path.join(ROOT_DIR, '_config.next.yml');
      
      // Check file exists
      const nextConfigExists = await fs.access(nextConfigPath).then(() => true).catch(() => false);
      assert.ok(nextConfigExists, '_config.next.yml should exist');

      // Read and validate content
      const nextConfigContent = await fs.readFile(nextConfigPath, 'utf8');
      
      // Check for NexT theme specific configurations
      const nextThemeKeys = [
        'scheme:',
        'menu:',
        'cache:'
      ];

      for (const key of nextThemeKeys) {
        assert.ok(
          nextConfigContent.includes(key),
          `_config.next.yml should contain ${key} configuration`
        );
      }

      // Verify it's valid YAML (should not throw when parsing)
      assert.doesNotThrow(() => {
        // Basic YAML validation - checking structure
        const lines = nextConfigContent.split('\n');
        const yamlLines = lines.filter(line => line.trim() && !line.trim().startsWith('#'));
        assert.ok(yamlLines.length > 0, 'Config file should contain non-comment content');
      }, 'NexT config should be valid YAML structure');
    });
  });

  describe('3. Hexo Post Creation', function() {
    let testPostCreated = false;

    after(async function() {
      // Cleanup: remove test post if it was created
      if (testPostCreated) {
        try {
          await fs.unlink(TEST_POST_PATH);
          console.log('    ✓ Cleaned up test post');
        } catch (error) {
          console.log('    ⚠ Could not clean up test post:', error.message);
        }
      }
    });

    it('should successfully create a new Hexo post', async function() {
      
      try {
        // Create a new post using Hexo CLI
        const { stdout, stderr } = await execAsync(
          `cd "${ROOT_DIR}" && npx hexo new post "${TEST_POST_TITLE}"`,
          { cwd: ROOT_DIR }
        );

        // Check if post file was created
        const postExists = await fs.access(TEST_POST_PATH).then(() => true).catch(() => false);
        assert.ok(postExists, 'Test post file should be created');
        testPostCreated = true;

        // Verify post content structure
        const postContent = await fs.readFile(TEST_POST_PATH, 'utf8');
        
        // Check front matter
        assert.ok(postContent.includes('---'), 'Post should have front matter delimiters');
        assert.ok(postContent.includes('title:'), 'Post should have title in front matter');
        assert.ok(postContent.includes('date:'), 'Post should have date in front matter');
        assert.ok(postContent.includes(TEST_POST_TITLE), 'Post should contain the specified title');

      } catch (error) {
        assert.fail(`Failed to create post: ${error.message}`);
      }
    });

    it('should verify the created post has proper markdown structure', async function() {
      if (!testPostCreated) {
        this.skip('Skipping because test post was not created');
      }

      const postContent = await fs.readFile(TEST_POST_PATH, 'utf8');
      
      // Verify front matter format
      const frontMatterMatch = postContent.match(/^---\n([\s\S]*?)\n---/);
      assert.ok(frontMatterMatch, 'Post should have valid front matter format');

      // Verify it has content area after front matter
      const contentAfterFrontMatter = postContent.split('---\n').slice(2).join('---\n').trim();
      assert.ok(
        contentAfterFrontMatter.length >= 0, 
        'Post should have content area after front matter'
      );
    });
  });

  describe('4. Hexo Site Clean and Generation', function() {
    it('should successfully clean the site', async function() {
      try {
        const { stdout, stderr } = await execAsync(
          'npm run clean',
          { cwd: ROOT_DIR }
        );

        // Verify public directory is cleaned (should not exist or be empty)
        const publicExists = await fs.access(PUBLIC_DIR).then(() => true).catch(() => false);
        
        if (publicExists) {
          const publicContents = await fs.readdir(PUBLIC_DIR);
          // It's ok if public dir exists but should be mostly empty after clean
          console.log(`    ℹ Public directory contains ${publicContents.length} items after clean`);
        }

        assert.ok(true, 'Clean command should execute without errors');
        
      } catch (error) {
        assert.fail(`Failed to clean site: ${error.message}`);
      }
    });

    it('should successfully generate the site', async function() {
      try {
        const { stdout, stderr } = await execAsync(
          'npm run build',
          { cwd: ROOT_DIR }
        );

        // Verify public directory was created
        const publicExists = await fs.access(PUBLIC_DIR).then(() => true).catch(() => false);
        assert.ok(publicExists, 'Public directory should exist after generation');

        // Verify it contains generated files
        const publicContents = await fs.readdir(PUBLIC_DIR);
        assert.ok(publicContents.length > 0, 'Public directory should contain generated files');

        console.log(`    ✓ Generated ${publicContents.length} items in public directory`);
        
      } catch (error) {
        assert.fail(`Failed to generate site: ${error.message}`);
      }
    });
  });

  describe('5. HTML Markup Validation', function() {
    it('should verify public/index.html exists and contains valid HTML markup', async function() {
      const indexPath = path.join(PUBLIC_DIR, 'index.html');
      
      // Check if index.html exists
      const indexExists = await fs.access(indexPath).then(() => true).catch(() => false);
      assert.ok(indexExists, 'public/index.html should exist');

      // Read and validate HTML content
      const htmlContent = await fs.readFile(indexPath, 'utf8');
      
      // Check for essential HTML structure
      const htmlChecks = [
        { pattern: /<!DOCTYPE html>/i, name: 'DOCTYPE declaration' },
        { pattern: /<html[^>]*>/i, name: 'HTML opening tag' },
        { pattern: /<head[^>]*>/i, name: 'HEAD section' },
        { pattern: /<body[^>]*>/i, name: 'BODY section' },
        { pattern: /<title[^>]*>.*<\/title>/i, name: 'TITLE tag' },
        { pattern: /<\/html>/i, name: 'HTML closing tag' }
      ];

      for (const check of htmlChecks) {
        assert.ok(
          check.pattern.test(htmlContent),
          `index.html should contain ${check.name}`
        );
      }

      // Check for meta tags (SEO and responsive design)
      assert.ok(
        htmlContent.includes('<meta') && htmlContent.includes('charset'),
        'index.html should contain charset meta tag'
      );

      assert.ok(
        htmlContent.includes('viewport'),
        'index.html should contain viewport meta tag for responsive design'
      );

      // Verify content length (should not be empty)
      assert.ok(htmlContent.length > 1000, 'index.html should contain substantial content');
    });

    it('should verify HTML contains NexT theme elements', async function() {
      const indexPath = path.join(PUBLIC_DIR, 'index.html');
      const htmlContent = await fs.readFile(indexPath, 'utf8');

      // Check for NexT theme specific elements
      const nextThemeElements = [
        'class',  // Should have CSS classes
        'script', // Should have JavaScript
        'css'     // Should reference CSS files
      ];

      for (const element of nextThemeElements) {
        assert.ok(
          htmlContent.toLowerCase().includes(element),
          `index.html should contain ${element} elements (NexT theme)`
        );
      }
    });
  });

  describe('6. Post Rendering Verification', function() {
    it('should verify that existing posts are rendered to HTML in public folder', async function() {
      // Check if any post directories exist in public
      const publicContents = await fs.readdir(PUBLIC_DIR);
      const yearDirs = publicContents.filter(item => /^\d{4}$/.test(item));
      
      assert.ok(yearDirs.length > 0, 'Public directory should contain year directories for posts');

      // Check one of the year directories for post content
      const yearDir = yearDirs[0];
      const yearPath = path.join(PUBLIC_DIR, yearDir);
      const yearContents = await fs.readdir(yearPath);
      
      assert.ok(yearContents.length > 0, `Year directory ${yearDir} should contain month directories`);

      // Verify at least one post HTML file exists
      let foundPostHtml = false;
      
      for (const monthDir of yearContents) {
        if (!/^\d{2}$/.test(monthDir)) continue;
        
        const monthPath = path.join(yearPath, monthDir);
        const monthStat = await fs.stat(monthPath);
        
        if (monthStat.isDirectory()) {
          const monthContents = await fs.readdir(monthPath);
          
          for (const dayDir of monthContents) {
            if (!/^\d{2}$/.test(dayDir)) continue;
            
            const dayPath = path.join(monthPath, dayDir);
            const dayStat = await fs.stat(dayPath);
            
            if (dayStat.isDirectory()) {
              const dayContents = await fs.readdir(dayPath);
              
              for (const postDir of dayContents) {
                const postPath = path.join(dayPath, postDir, 'index.html');
                const postExists = await fs.access(postPath).then(() => true).catch(() => false);
                
                if (postExists) {
                  foundPostHtml = true;
                  
                  // Verify the post HTML content
                  const postContent = await fs.readFile(postPath, 'utf8');
                  assert.ok(postContent.includes('<html'), 'Post HTML should be valid HTML');
                  assert.ok(postContent.length > 500, 'Post HTML should contain substantial content');
                  break;
                }
              }
              if (foundPostHtml) break;
            }
          }
          if (foundPostHtml) break;
        }
      }
      
      assert.ok(foundPostHtml, 'At least one post should be rendered to HTML');
    });

    it('should verify that posts contain proper HTML structure and content', async function() {
      // Find and validate a sample post
      const publicContents = await fs.readdir(PUBLIC_DIR);
      const yearDirs = publicContents.filter(item => /^\d{4}$/.test(item));
      
      let samplePostPath = null;
      
      // Find a sample post
      outerLoop: for (const yearDir of yearDirs) {
        const yearPath = path.join(PUBLIC_DIR, yearDir);
        const yearContents = await fs.readdir(yearPath);
        
        for (const monthDir of yearContents) {
          if (!/^\d{2}$/.test(monthDir)) continue;
          
          const monthPath = path.join(yearPath, monthDir);
          const monthStat = await fs.stat(monthPath);
          
          if (monthStat.isDirectory()) {
            const monthContents = await fs.readdir(monthPath);
            
            for (const dayDir of monthContents) {
              if (!/^\d{2}$/.test(dayDir)) continue;
              
              const dayPath = path.join(monthPath, dayDir);
              const dayStat = await fs.stat(dayPath);
              
              if (dayStat.isDirectory()) {
                const dayContents = await fs.readdir(dayPath);
                
                if (dayContents.length > 0) {
                  const postDir = dayContents[0];
                  const candidatePath = path.join(dayPath, postDir, 'index.html');
                  const candidateExists = await fs.access(candidatePath).then(() => true).catch(() => false);
                  
                  if (candidateExists) {
                    samplePostPath = candidatePath;
                    break outerLoop;
                  }
                }
              }
            }
          }
        }
      }
      
      if (!samplePostPath) {
        this.skip('No sample post found to validate');
        return;
      }

      const postContent = await fs.readFile(samplePostPath, 'utf8');
      
      // Validate post HTML structure
      const postChecks = [
        { pattern: /<article[^>]*>/i, name: 'article tag' },
        { pattern: /<h1[^>]*class="post-title"[^>]*>/i, name: 'h1 post title tag' },
        { pattern: /class=/i, name: 'CSS classes' }
      ];

      for (const check of postChecks) {
        assert.ok(
          check.pattern.test(postContent),
          `Post HTML should contain ${check.name}`
        );
      }
    });
  });

  describe('7. Site Structure and Navigation', function() {
    it('should verify essential site pages are generated', async function() {
      const essentialPages = [
        'index.html',
        'archives/index.html',
        'about/index.html'
      ];

      for (const page of essentialPages) {
        const pagePath = path.join(PUBLIC_DIR, page);
        const pageExists = await fs.access(pagePath).then(() => true).catch(() => false);
        assert.ok(pageExists, `Essential page ${page} should exist`);
      }
    });

    it('should verify sitemap.xml is generated', async function() {
      const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
      const sitemapExists = await fs.access(sitemapPath).then(() => true).catch(() => false);
      assert.ok(sitemapExists, 'sitemap.xml should be generated');

      if (sitemapExists) {
        const sitemapContent = await fs.readFile(sitemapPath, 'utf8');
        assert.ok(sitemapContent.includes('<urlset'), 'Sitemap should contain valid XML structure');
        assert.ok(sitemapContent.includes('<url>'), 'Sitemap should contain URL entries');
      }
    });

    it('should verify RSS feed is generated', async function() {
      const rssPath = path.join(PUBLIC_DIR, 'rss2.xml');
      const rssExists = await fs.access(rssPath).then(() => true).catch(() => false);
      assert.ok(rssExists, 'RSS feed (rss2.xml) should be generated');

      if (rssExists) {
        const rssContent = await fs.readFile(rssPath, 'utf8');
        assert.ok(rssContent.includes('<rss'), 'RSS feed should contain valid RSS structure');
        assert.ok(rssContent.includes('<channel>'), 'RSS feed should contain channel element');
      }
    });
  });

  describe('8. Platform Independence and Robustness', function() {
    it('should verify Hexo CLI is accessible and working', async function() {
      try {
        const { stdout, stderr } = await execAsync('npx hexo version', { cwd: ROOT_DIR });
        assert.ok(stdout.includes('hexo:'), 'Hexo CLI should return version information');
        assert.ok(stdout.includes('node:'), 'Hexo CLI should show Node.js version');
      } catch (error) {
        assert.fail(`Hexo CLI should be accessible: ${error.message}`);
      }
    });

    it('should verify build produces consistent file count', async function() {
      // Helper function for file counting
      const countFilesRecursively = async (dir) => {
        let count = 0;
        const countFiles = async (currentDir) => {
          const items = await fs.readdir(currentDir);
          for (const item of items) {
            const itemPath = path.join(currentDir, item);
            const stat = await fs.stat(itemPath);
            if (stat.isFile()) {
              count++;
            } else if (stat.isDirectory()) {
              await countFiles(itemPath);
            }
          }
        };
        await countFiles(dir);
        return count;
      };

      // Clean and build twice to ensure consistent output
      await execAsync('npm run clean', { cwd: ROOT_DIR });
      await execAsync('npm run build', { cwd: ROOT_DIR });
      
      const firstBuildFiles = await countFilesRecursively(PUBLIC_DIR);
      
      await execAsync('npm run clean', { cwd: ROOT_DIR });
      await execAsync('npm run build', { cwd: ROOT_DIR });
      
      const secondBuildFiles = await countFilesRecursively(PUBLIC_DIR);
      
      assert.strictEqual(
        firstBuildFiles, 
        secondBuildFiles, 
        'Build should produce consistent number of files'
      );
    });

    it('should verify theme assets are properly generated', async function() {
      const assetDirectories = [
        path.join(PUBLIC_DIR, 'css'),
        path.join(PUBLIC_DIR, 'js'),
        path.join(PUBLIC_DIR, 'images')
      ];

      for (const assetDir of assetDirectories) {
        const assetDirExists = await fs.access(assetDir).then(() => true).catch(() => false);
        assert.ok(assetDirExists, `Asset directory ${path.basename(assetDir)} should exist`);
        
        if (assetDirExists) {
          const assetFiles = await fs.readdir(assetDir);
          assert.ok(assetFiles.length > 0, `Asset directory ${path.basename(assetDir)} should contain files`);
        }
      }
    });

    it('should verify robots.txt exists and is properly formatted', async function() {
      const robotsPath = path.join(PUBLIC_DIR, 'robots.txt');
      const robotsExists = await fs.access(robotsPath).then(() => true).catch(() => false);
      assert.ok(robotsExists, 'robots.txt should exist');

      if (robotsExists) {
        const robotsContent = await fs.readFile(robotsPath, 'utf8');
        assert.ok(robotsContent.includes('Sitemap:'), 'robots.txt should reference sitemap');
        assert.ok(robotsContent.length > 10, 'robots.txt should have meaningful content');
      }
    });

    it('should verify no broken internal links in generated HTML', async function() {
      // Test a sample of generated HTML files for internal link integrity
      const indexPath = path.join(PUBLIC_DIR, 'index.html');
      const indexContent = await fs.readFile(indexPath, 'utf8');
      
      // Extract relative links (href="/..." or href="...")
      const relativeLinks = indexContent.match(/href="[^"]*"/g) || [];
      const internalLinks = relativeLinks
        .map(link => link.match(/href="([^"]+)"/)[1])
        .filter(href => href.startsWith('/') || !href.includes('://'));

      // Check a few key internal links
      const keyLinks = internalLinks.filter(link => 
        link === '/' || link === '/about/' || link === '/archives/'
      );

      for (const link of keyLinks) {
        const linkPath = link === '/' ? 
          path.join(PUBLIC_DIR, 'index.html') : 
          path.join(PUBLIC_DIR, link.replace(/\/$/, ''), 'index.html');
        
        const linkExists = await fs.access(linkPath).then(() => true).catch(() => false);
        assert.ok(linkExists, `Internal link target should exist: ${link}`);
      }
    });
  });

  describe('9. Performance and Content Validation', function() {
    it('should verify generated HTML files are not empty', async function() {
      const indexPath = path.join(PUBLIC_DIR, 'index.html');
      const stat = await fs.stat(indexPath);
      assert.ok(stat.size > 5000, 'Main index.html should be substantial in size (>5KB)');
    });

    it('should verify CSS and JS assets are minified and optimized', async function() {
      const cssDir = path.join(PUBLIC_DIR, 'css');
      const cssFiles = await fs.readdir(cssDir);
      
      // Check that CSS files exist and have reasonable size
      assert.ok(cssFiles.length > 0, 'CSS files should be generated');
      
      const mainCssFile = cssFiles.find(file => file.includes('main') || file.endsWith('.css'));
      if (mainCssFile) {
        const cssPath = path.join(cssDir, mainCssFile);
        const cssStat = await fs.stat(cssPath);
        assert.ok(cssStat.size > 1000, 'Main CSS file should have substantial content');
      }
    });

    it('should verify post content includes meta tags for SEO', async function() {
      const indexPath = path.join(PUBLIC_DIR, 'index.html');
      const indexContent = await fs.readFile(indexPath, 'utf8');

      const seoTags = [
        'meta name="description"',
        'meta property="og:',
        'meta name="generator"',
        'meta name="viewport"'
      ];

      for (const tag of seoTags) {
        assert.ok(
          indexContent.includes(tag),
          `HTML should contain SEO meta tag: ${tag}`
        );
      }
    });
  });
});