# GitHub Copilot Instructions for "Your Daily Tech Dose" Blog

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
```instructions

# Copilot Agent Guide — "Your Daily Tech Dose"

This file defines conventions and rules for agents and contributors. Keep instructions concise, actionable, and machine-readable.

## Agent Contract
- **Inputs:** User request (title, sources, or edits), target file(s) (usually in `source/_posts/`), and optional metadata (date, description, tags).
- **Outputs:** Markdown post(s) or code edits that follow all conventions; run quick validation (build/lint/tests) if possible.
- **Success:**
	- File saved in `source/_posts/` as a slug (no date prefix)
	- Valid front-matter: `title`, `date` (YYYY-MM-DD HH:MM:SS, current local time), `description` (≤160 chars), `tags`
	- Escaped apostrophes in post body (use `\'`), except in `title` and `description` fields
	- `<!-- more -->` after first paragraph
	- Copilot credit line before Sources
	- Build/tests pass, no new errors


## Key Files
- `package.json`: scripts (run `npm install` before scripts)
- `scripts/generate-clarity-config.js`: prebuild step (run before `hexo generate`)
- `source/_posts/`: all posts live here
- `.github/workflows/pages.yml`: CI/deploy logic


## Post Conventions (strict)
- **Filename:** Slug of title, no date prefix (e.g., `intel-panther-lake-configurations-leak.md`)
- **Front-matter:**
	- `title`: original, not copied verbatim from source
	- `date`: current local time at creation (YYYY-MM-DD HH:MM:SS)
	- `description`: ≤160 chars
	- `tags`: lowercase, hyphenate multi-word (except person names)
- **Body:**
	- Start with `### Quick Report`
	- Place `<!-- more -->` after first paragraph
	- Escape apostrophes in body (use `\'`), but not in `title` or `description`
	- Add Copilot credit line before Sources:
		- `Written using GitHub Copilot {model name} in agentic mode instructed to follow current codebase style and conventions for writing articles.`
- **Sources:** Use reference-style links

 - Credit line: add a single credit line immediately before the Sources section. Use this template exactly, replacing {model name} with the model identifier you used:

	Written using GitHub Copilot {model name} in agentic mode instructed to follow current codebase style and conventions for writing articles.

	Example:

	Written using GitHub Copilot GPT-5 mini in agentic mode instructed to follow current codebase style and conventions for writing articles.

	Notes for validators and agents:
	- The repository validator treats a missing credit line as a WARNING (not an error).
	- The validator looks for the phrase "Written using GitHub Copilot" (case-insensitive) and will accept optional model-name text following that phrase.


## Quality Gates (before commit)
1. Build: run prebuild and `npm run build` (or `node scripts/generate-clarity-config.js && npx hexo generate`); confirm no build errors
2. Test: run `npm test` (Mocha); add minimal test if code changes
3. Lint/Markdown: check structure, apostrophes, tag format

### Quick Agent Checks
- Fix unescaped apostrophes in new/updated posts
- Ensure description ≤160 chars
- Filename is slug-only, in `source/_posts/`


## Agent Behavior
- If user provides a full post (title, content, date, description, tags):
	- Create Markdown file, apply all conventions, run quick checks, commit
- If user provides only a headline or link:
	- Draft post from source, fill front-matter conservatively
	- Ask for publish date if not provided
	- Add TODO in post if critical metadata missing
- If multiple source links:
	- Process one at a time, fully validate each before next
- For code/build changes:
	- Run unit tests and local build, include build output in PR
- For CI/deploy-affecting changes:
	- Do not push to protected branch; open draft PR with risk summary


## Proactive Extras (encouraged)
- Add/update minimal tests for code changes
- Run Markdown fixes (spacing, headings) as a single commit
- Normalize tags (lowercase, hyphens; do not change person names)


## Suggested Automations
- Pre-commit hook: check filenames (no date), description length, apostrophes
- CI step: lint posts for these rules, fail early with clear messages


## Editing Rules
- Prefer small, atomic changes
- Keep style/indentation
- Use apply_patch format for in-place updates


## Example Agent Checklist (for posts)
1. Create `source/_posts/<slug>.md` with correct front-matter
2. Add `### Quick Report` and `<!-- more -->` after first paragraph
3. Escape apostrophes and normalize tags
4. Add Copilot credit line before `### Source(s)`
5. Run quick validations (description, filename, apostrophes)
6. Commit with clear message and PR summary


## Notes & Exceptions
- Never edit `public/` directly
- No affiliate links unless requested
- Mark speculation as analysis, not fact

## Reference files

If you want, the agent can apply an automatic pre-commit hook and a CI linter in a follow-up; ask for permission before making automation that modifies repo tooling.

## Example post (structure & format)

Below is a copyable example post agents should use as the canonical template. It demonstrates the required front-matter, the `### Quick Report` teaser with `<!-- more -->`, escaped apostrophes in the body, the exact Copilot credit line placement, and reference-style source links.

---
title: "AIB Partners Show Off Radeon 9070 Series GPU at CES 2025"
date: 2025-01-14 20:48:23
description: "AIB partners showcased AMD\'s RDNA 4 Radeon 9070 series at CES 2025; expect mainstream-targeted parts and improved ray tracing and ML upscaling support."
tags:
	- amd
	- radeon
	- gpu
	- aib
	- asus
	- gigabyte
	- msi
	- yeston
	- powercolor
	- 9070-series
---

### Quick Report

AIB partners have shown off their Radeon 9070 series GPUs at CES 2025. RDNA 4 GPUs are targeted at the mainstream market and are expected to be released globally by the end of January 2025. At the moment, there is no pricing information available. RDNA4 brings in better ray tracing performance than RDNA3 and FSR4 for ML based Upscaler to compete against NVIDIA DLSS.<!-- more -->

RDNA 4 is based on TSMC 4nm node with naming scheme similar to NVIDIA\'s 5070 series to indicate the performance level. The 9070 series is expected to be available in 16GB GDDR6 memory configuration. It comes in two variants (XT and non-XT) carrying 4096 and 3072 stream processors respectively.

**Written using GitHub Copilot {model name} in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [Tom\'s Hardware][def]

[def]: https://www.tomshardware.com/pc-components/gpus/amd-rdna-4-radeon-rx-9000-series-gpus-revealed-targeting-mainstream-price-and-performance-with-improved-ai-and-ray-tracing

---

## Reference files

- `package.json` — scripts and dependency list
- `scripts/generate-clarity-config.js` — prebuild script run before `hexo generate`
- `source/_posts/` — where new posts belong
- `.github/workflows/pages.yml` — deploy and build behavior

```
