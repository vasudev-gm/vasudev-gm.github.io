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
- Insert `<!-- more -->` on its own line immediately after the first paragraph.
- Keep post body to 2-3 paragraphs total.
- Keep full coverage with no filler or repeated lines.
- Ensure each paragraph adds new value: event, context, implication.
- Use `[TPU][def]` for TechPowerUp sources.
- AI credit line is optional; if used, follow canonical instructions and place it before Sources.

## Validation

- Run: `npm run validate-posts`.
- Run: `npm run build` (which runs the Clarity prebuild) before handoff when Hexo or front matter changes are involved.
- Install dependencies with `npm ci` from the committed `package-lock.json`; do not use `vlt install` because its resolver can fail on npm alias packages such as `strip-ansi-cjs`.
- YAML front matter must be valid YAML: never write backslash-apostrophe inside double-quoted title or description values; use an unescaped apostrophe or YAML-safe single-quoted/block syntax.
- A passing post validator is not sufficient; Hexo must parse every post without YAMLException errors.
- If validation fails, fix and re-run before concluding.
