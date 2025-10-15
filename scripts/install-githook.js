#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const hookSource = path.join(__dirname, '..', '.githooks', 'pre-commit');
const gitHookDir = path.join(process.cwd(), '.git', 'hooks');
const dest = path.join(gitHookDir, 'pre-commit');

if (!fs.existsSync(hookSource)) {
  console.error('Hook source not found:', hookSource);
  process.exit(1);
}

if (!fs.existsSync(path.join(process.cwd(), '.git'))) {
  console.error('.git directory not found. Run this inside a git repo.');
  process.exit(1);
}

try {
  if (!fs.existsSync(gitHookDir)) fs.mkdirSync(gitHookDir, { recursive: true });
  const content = fs.readFileSync(hookSource, 'utf8');
  fs.writeFileSync(dest, content, { mode: 0o755 });
  console.log('Installed pre-commit hook to', dest);
} catch (e) {
  console.error('Failed to install hook:', e && e.message);
  process.exit(2);
}
