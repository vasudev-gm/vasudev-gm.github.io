# Agents.md - Lightweight Runtime Rules

Canonical rules live in `.github/copilot-instructions.md`.
Keep this file short to reduce prompt bloat.

## Agent Priorities
1. Complete user task with minimal tokens.
2. Preserve strict post format rules.
3. Validate changes before handoff.

## Token-Efficient Behavior
- Use short progress updates.
- Avoid repeating plans and context.
- Read only necessary files.
- Prefer parallel read-only checks when possible.
- Keep final output compact: file list + validation status.

## Hexo Post Execution
- Write posts in `source/_posts/` with slug filenames.
- Enforce front matter and `### Quick Report` format.
- Insert `<!-- more -->` after first paragraph.
- Use `[TPU][def]` for TechPowerUp sources.
- Keep Copilot credit line exactly as specified in canonical instructions.

## Validation
- Run: `npm run validate-posts`
- If validation fails, fix and re-run before concluding.
