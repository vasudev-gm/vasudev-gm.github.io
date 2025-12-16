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
# Copilot / Agent Guide — "Your Daily Tech Dose"

This file documents repository conventions and actionable rules for automated agents and human contributors. Keep guidance concise and machine-readable where possible.

 Agent contract (inputs / outputs / success criteria):
 - Inputs: a clear user request (title, sources, or edits), target file paths (usually `source/_posts/`), and optional metadata (date, description, tags).
 - Outputs: one or more Markdown posts or code edits that follow repository conventions; small test or validation steps run locally (build/lint/tests) when possible.
 - Success criteria: file saved under `source/_posts/` as a slug filename, valid front-matter (title, date, description, tags), escaped apostrophes, `<!-- more -->` inserted after the first paragraph, and repository build + tests pass or produce no new errors. The `date:` field in the front-matter must always reflect the current date and time at the time of post creation (current local time when the post is generated).

Files and locations to check first:
- `package.json` — contains scripts (notably `prebuild` and `build`). Always run `npm install` before running scripts.
- `scripts/generate-clarity-config.js` — a prebuild step; must be executed before `hexo generate` (this repository runs it in `npm run build`).
- `source/_posts/` — Markdown posts live here. New posts should be created here.
- `.github/workflows/pages.yml` — review CI behavior if touching deploy/build logic.

Key conventions (must follow exactly):
- Filenames: use a URL-friendly slug of the title and DO NOT prefix with a date (e.g., `intel-panther-lake-configurations-leak.md`). The `date:` field in front-matter controls publication time.
- Front-matter: include `title`, `date` (YYYY-MM-DD HH:MM:SS), `description` (150–160 chars at max), and `tags` (lowercase; hyphenate multi-word tags; person names are exceptions).
- Post titles: always rewrite article titles to be original and avoid copyright/plagiarism. Do not copy titles verbatim from source articles. Create factually accurate titles that convey the same information using different wording and structure.
- Quick Report: start with a `### Quick Report` heading and put `<!-- more -->` immediately after the first paragraph to create the teaser.
- Escaped apostrophes: always escape contractions and possessives in post bodies `(use `\'`), e.g., `AMD\'s`.
	Exception: the `description` field in front-matter may contain unescaped apostrophes for readability and is excluded from the repository-wide apostrophe check.
- Credit line: add the exact credit line before Sources: **Written using GitHub Copilot {model name} in agentic mode instructed to follow current codebase style and conventions for writing articles.** Replace `{model name}` with the model used.

 - Credit line: add a single credit line immediately before the Sources section. Use this template exactly, replacing {model name} with the model identifier you used:

	Written using GitHub Copilot {model name} in agentic mode instructed to follow current codebase style and conventions for writing articles.

	Example:

	Written using GitHub Copilot GPT-5 mini in agentic mode instructed to follow current codebase style and conventions for writing articles.

	Notes for validators and agents:
	- The repository validator treats a missing credit line as a WARNING (not an error).
	- The validator looks for the phrase "Written using GitHub Copilot" (case-insensitive) and will accept optional model-name text following that phrase.

Quality gates (required before committing edits):
1. Build: run the prebuild step and `npm run build` (or locally `node scripts/generate-clarity-config.js && npx hexo generate`) and confirm no build-time errors.
2. Tests: run `npm test` (Mocha); include at least one minimal test when changing code behavior.
3. Lint / Markdown sanity: validate Markdown structure (blank lines around lists, headings hierarchy), check for unescaped apostrophes, and ensure tags are formatted.

Quick checks an agent should run automatically (fast):
- Search for unescaped apostrophes in newly created/updated posts and fix them.
- Verify `description` length is between 150 and 160 characters.
- Confirm filename is slug-only and present under `source/_posts/`.

Behavioral rules for agents (when to act vs ask):
- If the user provides a complete post (title, content, date, description, tags), create the Markdown file, apply conventions, and run quick checks; commit the change.
- If the user provides only a headline or a link to a source article, draft the post using the source, fill front-matter conservatively (ask for exact publish `date` if not provided), and add a TODO comment in the post if critical metadata (author/featured image) is missing.
- When multiple source links are provided for creating posts, process them one at a time in sequence. Create each post completely (including validation) before moving to the next. This ensures quality control and allows for individual review of each article.
- When code or build changes are requested (scripts, workflows, theme edits), run unit tests and a local `hexo generate` if possible and include the build output summary in the PR description.
- If a requested change could affect deployment or CI (workflows, prebuild scripts), do not push directly to a protected branch; create a draft PR and include a summary of risks and required approvals.

Small proactive extras (allowed and encouraged):
- Add or update minimal tests for code changes (happy path + one edge case).
- Run quick Markdown fixes (spacing around lists, headings) and include a single commit that only adjusts formatting when necessary.
- Normalize tags to lowercase and replace spaces with hyphens (do not change person-name tags).

Suggested automations (optional follow-ups):
- Add a lightweight pre-commit hook that checks: filenames in `source/_posts/` do not start with `YYYY-`, the description length, and no unescaped apostrophes (simple grep). Keep hooks small and fast.
- Add a CI step that lints posts for these rules and fails early with actionable messages.

Editing rules (apply_patch usage reminders):
- When an edit is needed, prefer small atomic changes. Keep existing style and indentation. Use the repository's apply_patch format (patches should update files in-place).

Example short checklist for creating a post (agent):
1. Create `source/_posts/<slug>.md` with correct front-matter.
2. Add `### Quick Report` and `<!-- more -->` after first paragraph.
3. Escape apostrophes and normalize tags.
4. Add the Copilot credit line before `### Source(s)`.
5. Run quick validations (description length, filename slug, grep for unescaped apostrophes).
6. Commit with a clear message and include PR description summarizing sources and changes.

Notes and exceptions:
- Do not change `public/` (generated site) directly.
- Do not include affiliate links unless explicitly requested.
- Keep speculative language clearly marked as analysis rather than fact.

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
