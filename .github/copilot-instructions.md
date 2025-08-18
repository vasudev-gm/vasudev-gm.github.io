# GitHub Copilot Instructions for vasudev-gm.github.io Blog

## Project Overview

This repository contains a tech blog built with Hexo, a static site generator, using the NexT theme. The blog focuses on technology news and analysis covering AMD, Apple, Intel, NVIDIA, and emerging technologies, with in-depth coverage of CPUs, GPUs, AI developments, and industry trends.

## Architecture and Structure

- **Hexo Framework**: Static site generator that converts Markdown to HTML
- **NexT Theme**: Provides the UI components and styling
- **GitHub Pages**: Hosts the published site at vasudev-gm.github.io

Key directories:
- `source/_posts/`: Contains all blog post content as Markdown files
- `themes/`: Contains the NexT theme customizations
- `public/`: Generated static site (not to be edited directly)
- `.github/workflows/`: CI/CD pipelines for deployment and image optimization

## Development Workflow

### Setup and Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run server

# Clean the site
npm run clean

# Generate static files
npm run build

# Deploy to GitHub Pages (rarely needed, handled by CI)
npm run deploy
```

### Content Creation Process

1. Create a new post with proper front matter
2. Write content following the established structure
3. Commit changes to the repository
4. GitHub Actions automatically deploys to GitHub Pages

## Content Conventions

### Post Front Matter

```yaml
---
title: Descriptive and SEO-friendly title
date: YYYY-MM-DD HH:MM:SS
tags:
  - relevant
  - tags
  - here
  - lowercase
---
```

### Post Structure

1. **Quick Report**: Start with `### Quick Report` heading followed by a concise summary
2. **Read More Break**: Add `<!-- more -->` after the first paragraph
3. **Detailed Analysis**: Main content with proper heading hierarchy (h3, h4)
4. **Credit Line**: Include AI attribution before sources
5. **Sources**: End with `### Source(s)` heading and properly formatted links

### Writing Style Guidelines

- Use escaped apostrophes in contractions and possessives (\'t, \'s)
- Write in a professional but accessible tone
- Keep paragraphs concise (3-5 sentences)
- Use bold for emphasis on key terms or product names
- Tags should be lowercase and hyphenated when multiple words

## Configuration

- `_config.yml`: Main Hexo configuration (site metadata, URLs, plugins)
- `_config.next.yml`: Theme-specific settings (layout, styling, features)

## Deployment

Deployment is automated via GitHub Actions:
- The workflow in `.github/workflows/pages.yml` triggers on pushes to the master branch
- It builds the site using Node.js 20 and deploys to GitHub Pages
- Image optimization is handled separately via `calibreapp-image-actions.yml`

## Common Tasks

1. **Creating a new post**:
   ```bash
   hexo new post "Your Post Title"
   ```

2. **Adding images**:
   - Store images in the appropriate directory
   - Reference them using Markdown: `![Alt text](/path/to/image.jpg)`
   - Images will be automatically optimized when committed

3. **Updating theme**:
   - Modify `_config.next.yml` for theme-specific settings
   - Custom CSS can be added through theme customization options

## Best Practices

- Always escape apostrophes in Markdown content
- Use semantic and descriptive tags for better categorization
- Maintain consistent formatting for product names
- Include proper attribution for sources
- Focus on providing unique insights rather than rewriting source material
- Keep the site structure clean by following the established patterns

## Reference Files

- Blog post example: `source/_posts/Latest-Windows-11-24H2-August-Update-Causing-SSD-failures-with-CU-KB5063878.md`
- Configuration: `_config.yml` and `_config.next.yml`
- Deployment workflow: `.github/workflows/pages.yml`
