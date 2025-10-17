#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, '..', 'source', '_posts');
const CACHE_DIR = path.join(__dirname, '..', '.cache');
const CACHE_FILE = path.join(CACHE_DIR, 'post-validation-cache.json');
const crypto = require('crypto');

function readFile(filepath) {
  return fs.readFileSync(filepath, 'utf8');
}

function hashContent(content) {
  return crypto.createHash('sha1').update(content, 'utf8').digest('hex');
}

function parseFrontMatter(content) {
  if (!content.startsWith('---')) return null;
  const end = content.indexOf('\n---', 3);
  if (end === -1) return null;
  const yaml = content.slice(3, end).trim();
  const lines = yaml.split(/\r?\n/);
  const result = {};
  let currentKey = null;
  for (let line of lines) {
    if (/^\s*-\s+/.test(line) && currentKey) {
      // list item
      const val = line.replace(/^\s*-\s+/, '').trim();
      if (!Array.isArray(result[currentKey])) result[currentKey] = [];
      result[currentKey].push(val);
    } else {
      const m = line.match(/^([a-zA-Z0-9_\-]+):\s*(.*)$/);
      if (m) {
        currentKey = m[1];
        const v = m[2] === '' ? null : m[2].replace(/^"|"$/g, '').trim();
        result[currentKey] = v;
      }
    }
  }
  // Return parsed front-matter and the end index of the front-matter block
  return { data: result, end };
}

function isSlugFilename(filename) {
  // disallow leading date like 2025-10-15-title.md
  return !/^\d{4}-\d{2}-\d{2}-/.test(filename);
}

function hasQuickReport(content) {
  return /### Quick Report/.test(content) && /<!-- more -->/.test(content);
}

function hasCreditLine(content) {
  return /written using github copilot/i.test(content);
}

function hasEscapedApostrophes(content) {
  // Fail if there are any unescaped single apostrophes in contractions/possessives
  // We'll look for common patterns like "n't", "'s", "'re", "'ve", "'ll", "'d"
  const patterns = ["n't", "'s", "'re", "'ve", "'ll", "'d"];
  for (const p of patterns) {
    const re = new RegExp("[^\\\\]" + p); // any char not backslash followed by pattern
    if (re.test(content)) return false;
  }
  return true;
}

function descriptionLengthOK(desc) {
  if (!desc) return false;
  const len = desc.replace(/^"|"$/g, '').length;
  return len >= 150 && len <= 160;
}

function tagsOK(tags) {
  if (!Array.isArray(tags)) return false;
  for (const t of tags) {
    if (/[A-Z]/.test(t)) return false;
    if (/\s/.test(t) && !/^[a-z][a-z\s]+$/.test(t)) return false; // allow person names to have spaces but agents shouldn't change them
  }
  return true;
}

function validateFile(filepath) {
  const content = readFile(filepath);
  const currentHash = hashContent(content);
  const parsed = parseFrontMatter(content);
  const fm = parsed ? parsed.data : null;
  const filename = path.basename(filepath);
  const errors = [];
  const warnings = [];

  // If the front-matter contains skip_validation: true, short-circuit and treat as skipped
  if (fm && fm.skip_validation && (fm.skip_validation === true || fm.skip_validation === 'true')) {
    return { skipped: true, errors: [], warnings: [] };
  }

  // Determine cutoff once (start of today local time) or from env var.
  let cutoff;
  if (process.env.DESCRIPTION_CUTOFF) {
    cutoff = new Date(process.env.DESCRIPTION_CUTOFF);
  } else {
    const now = new Date();
    cutoff = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // today 00:00 local
  }
  // Determine a file-based date to apply cutoff rules for files missing valid front-matter date.
  let fileDate = null;
  try {
    if (fm && fm.date) fileDate = new Date(fm.date);
    else {
      const stat = fs.statSync(filepath);
      fileDate = stat.mtime;
    }
  } catch (e) {
    fileDate = null;
  }

  // Filename slug: style check (warning for older posts, error for recent)
  if (!isSlugFilename(filename)) {
    if (fileDate && fileDate < cutoff) warnings.push('Filename should be a slug without YYYY-MM-DD- prefix (older post — optional).');
    else errors.push('Filename should be a slug without YYYY-MM-DD- prefix.');
  }

  if (!fm) {
    if (fileDate && fileDate < cutoff) warnings.push('Missing or invalid front-matter (older post — optional).');
    else errors.push('Missing or invalid front-matter.');
  } else {
    if (!fm.title) {
      if (fileDate && fileDate < cutoff) warnings.push('Missing title in front-matter (older post — optional).');
      else errors.push('Missing title in front-matter.');
    }
    if (!fm.date) {
      if (fileDate && fileDate < cutoff) warnings.push('Missing date in front-matter (older post — optional).');
      else errors.push('Missing date in front-matter.');
    }

    // Use postDate where available; otherwise fall back to fileDate
    let postDate = null;
    try {
      postDate = fm && fm.date ? new Date(fm.date) : fileDate;
    } catch (e) {
      postDate = fileDate;
    }

    // Description requirement: structural for recent posts, optional (warning) for older posts
    if (!fm.description) {
      if (postDate && postDate < cutoff) warnings.push('Missing description in front-matter (older post — optional).');
      else errors.push('Missing description in front-matter.');
    } else if (!descriptionLengthOK(fm.description)) {
      if (postDate && postDate < cutoff) warnings.push('Description length should be 150-160 characters (older post — optional).');
      else errors.push('Description length must be 150-160 characters.');
    }

    // Tags: treat as warnings for older posts, errors for recent posts
    if (!fm.tags) {
      if (postDate && postDate < cutoff) warnings.push('Missing tags in front-matter (older post — optional).');
      else errors.push('Missing tags in front-matter.');
    } else if (!tagsOK(fm.tags)) {
      if (postDate && postDate < cutoff) warnings.push('Tags should be lowercase; hyphenate multi-word tags except person names (older post — optional).');
      else errors.push('Tags should be lowercase; hyphenate multi-word tags except person names.');
    }
  }

  // Quick Report requirement: treat as warning for older posts, error for recent posts
  if (!hasQuickReport(content)) {
    const postDateForQuick = (fm && fm.date) ? new Date(fm.date) : fileDate;
    if (postDateForQuick && postDateForQuick < cutoff) warnings.push('Missing "### Quick Report" section or missing <!-- more --> after first paragraph (older post — optional).');
    else errors.push('Missing "### Quick Report" section or missing <!-- more --> after first paragraph.');
  }
  // Copilot credit line is optional if the author did not use Copilot; flag as WARNING only
  if (!hasCreditLine(content)) warnings.push('Missing Copilot credit line before Sources (optional if authored without Copilot).');
  // Only enforce escaped apostrophes in the post body (exclude front-matter description)
  let body = content;
  if (parsed && typeof parsed.end === 'number') {
    body = content.slice(parsed.end + 4); // skip '\n---' marker
  }
  // Apostrophe escaping: errors for recent posts, warnings for older posts
  if (!hasEscapedApostrophes(body)) {
    const postDateForApos = (fm && fm.date) ? new Date(fm.date) : fileDate;
    if (postDateForApos && postDateForApos < cutoff) warnings.push("Found unescaped apostrophes in content — use \' to escape (older post — optional).");
    else errors.push("Found unescaped apostrophes in content — use \' to escape.");
  }

  return { errors, warnings };
}

function loadCache() {
  try {
    if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true });
    if (!fs.existsSync(CACHE_FILE)) return {};
    const raw = fs.readFileSync(CACHE_FILE, 'utf8');
    return JSON.parse(raw || '{}');
  } catch (e) {
    return {};
  }
}

function saveCache(cache) {
  try {
    if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true });
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf8');
  } catch (e) {
    // best-effort
  }
}

function findMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const all = fs.readdirSync(dir);
  return all.filter(f => f.endsWith('.md')).map(f => path.join(dir, f));
}

function main() {
  const files = findMarkdownFiles(POSTS_DIR);
  if (files.length === 0) {
    console.log('No markdown files found in', POSTS_DIR);
    process.exit(0);
  }
  const cache = loadCache();
  const force = process.argv.includes('--force');
  let hasErrors = false;
  for (const file of files) {
    let content;
    try { content = readFile(file); } catch (e) { console.error('Could not read', file); hasErrors = true; continue; }
    const currentHash = hashContent(content);
    const rel = path.relative(process.cwd(), file);

    const cached = cache[rel];
    if (!force && cached && cached.hash === currentHash && cached.errors === 0) {
      console.log('\nSKIPPED (cached clean) in', rel);
      continue;
    }

    const result = validateFile(file);
    if (result && result.skipped) {
      // mark as skipped in cache and continue
      cache[rel] = { hash: currentHash, errors: 0, warnings: 0, checkedAt: new Date().toISOString() };
      console.log('\nSKIPPED (skip_validation) in', rel);
      continue;
    }
    const { errors, warnings } = result;
    // update cache entry
    cache[rel] = { hash: currentHash, errors: errors.length, warnings: warnings.length, checkedAt: new Date().toISOString() };

    if ((errors && errors.length > 0)) {
      hasErrors = true;
      console.error('\nERRORS in', rel);
      for (const e of errors) console.error(' -', e);
    }
    if (warnings && warnings.length > 0) {
      console.warn('\nWARNINGS in', rel);
      for (const w of warnings) console.warn(' -', w);
    }
  }

  // persist cache
  saveCache(cache);

  if (hasErrors) {
    console.error('\nValidation failed. Fix the above issues and retry.');
    process.exit(2);
  }

  console.log('All posts validated successfully.');
}
// Export validateFile for programmatic use and preserve CLI when run directly.
module.exports = { validateFile };

if (require.main === module) main();
