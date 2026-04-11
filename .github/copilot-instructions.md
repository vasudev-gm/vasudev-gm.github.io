# Copilot Instructions - Token Optimized

Use this file as the canonical instruction source for this repo.

## Goal
- Create or edit Hexo posts quickly with minimal token use.
- Keep prompts, context reads, and responses concise.
- Preserve repository format rules exactly.

## Token Policy
- Read only files required for the current task.
- Prefer direct edits over long planning text.
- Avoid repeating user input, prior summaries, or unchanged plans.
- Use short status updates (1-2 lines) while working.
- Keep final responses compact: changed files + validation result.
- Ask questions only when blocked by missing critical data.

## Project Scope
- Blog engine: Hexo
- Post folder: `source/_posts/`
- Do not edit generated output in `public/`.

## Strict Post Rules
- Filename: slug only, no date prefix.
- Front matter required:
  - `title`
  - `date` in `YYYY-MM-DD HH:MM:SS` (current local time)
  - `description` (max 160 chars)
  - `tags` (lowercase; hyphenate multi-word except person names)
- Body required:
  - Start with `### Quick Report`
  - Add `<!-- more -->` after the first paragraph
  - Escape apostrophes in body as `\'`
  - Do not escape apostrophes in `title` or `description`
- Sources required:
  - Use reference-style links
  - For TechPowerUp: link label must be exactly `[TPU][def]`
- Credit line required immediately before Sources:
  - `Written using GitHub Copilot {model name} in agentic mode instructed to follow current codebase style and conventions for writing articles.`

## Fast Workflow
1. Check whether target slug file already exists.
2. Create or update post with strict structure above.
3. Run validation:
   - `npm run validate-posts`
4. Report only what changed and whether validation passed.

## Commands
- Install deps (if needed): `npm install`
- Validate posts: `npm run validate-posts`
- Build fallback: `node scripts/generate-clarity-config.js && npx hexo generate`

## Minimal Post Skeleton
---
title: "<Title>"
date: 2026-01-01 00:00:00
description: "<160 chars max>"
tags:
  - tag-one
  - tag-two
---

### Quick Report

First paragraph.<!-- more -->

Second paragraph.

**Written using GitHub Copilot GPT-5.3-Codex in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/example
