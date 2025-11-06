
const fs = require('fs');
const path = require('path');
const validate = require('./validate-posts');

// Reuse validate-posts.js by requiring it. That file runs main when executed directly;
// to reuse its functions, we'll load it and call validateFile exported function.
// To support this, ensure validate-posts exports validateFile when required.

const os = require('os');
const POSTS_DIR = path.join(__dirname, '..', 'source', '_posts');
// Default to an OS temp directory so reports are local and not tracked in the repo.
// Allow override via REPORT_DIR environment variable for flexibility.
const defaultBase = path.join(os.tmpdir(), 'vasudev-gm-reports');
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const OUT_DIR = process.env.REPORT_DIR || path.join(defaultBase, timestamp);

function findMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const all = fs.readdirSync(dir);
  return all.filter(f => f.endsWith('.md')).map(f => path.join(dir, f));
}

function ensureOutDir() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
}

function generate() {
  ensureOutDir();
  const files = findMarkdownFiles(POSTS_DIR);
  const results = [];
  for (const f of files) {
    const rel = path.relative(process.cwd(), f);
    const { errors, warnings } = validate.validateFile(f);
    results.push({ file: rel, errors, warnings });
  }

  const jsonOut = path.join(OUT_DIR, 'remediation-report.json');
  fs.writeFileSync(jsonOut, JSON.stringify(results, null, 2), 'utf8');

  // Create CSV: file, error_count, warning_count, errors(combined), warnings(combined)
  const csvOut = path.join(OUT_DIR, 'remediation-report.csv');
  const header = ['file','error_count','warning_count','errors','warnings'].join(',') + '\n';
  const rows = results.map(r => {
    const e = (r.errors||[]).map(s => s.replace(/"/g,'""')).join(' | ');
    const w = (r.warnings||[]).map(s => s.replace(/"/g,'""')).join(' | ');
    return `"${r.file}",${(r.errors||[]).length},${(r.warnings||[]).length},"${e}","${w}"`;
  }).join('\n');
  fs.writeFileSync(csvOut, header + rows, 'utf8');

  console.log('Wrote reports to', OUT_DIR);
  console.log('To re-run and write to a specific location set REPORT_DIR=/path/to/dir');
}

if (require.main === module) generate();

module.exports = { generate };
