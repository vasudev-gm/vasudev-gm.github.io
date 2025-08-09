# GitHub Copilot Instructions for "Your Daily Tech Dose" Blog

## Blog Overview

This is a tech blog focused on the latest news and analysis covering AMD, Apple, Intel, NVIDIA, and emerging technologies. The blog provides in-depth coverage of CPUs, GPUs, AI developments, and industry trends.

## Content Structure

Each blog post should follow this structure:

1. **Front Matter**:

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

2. **Quick Report Section**:
   Start with "### Quick Report" heading
   Provide a concise summary of the news (1-2 paragraphs)
   Use `<!-- more -->` after the first paragraph to create a read-more break

3. **Detailed Analysis**:
   Provide in-depth analysis and additional details
   Use clear, concise language
   Break down complex technical concepts

4. **Credit Line**:
   Add the following line before the Sources section:
   **Written using GitHub Copilot {model name} in agentic mode instructed to follow current codebase style and conventions for writing articles.**
   Replace {model name} with the actual model being used (e.g., Claude 3.7 Sonnet)

5. **Sources**:
   End with "### Source(s)" heading
   List sources in Markdown format with hyperlinks

## Writing Style Guidelines

- Write in a professional but accessible tone
- Use technical terminology appropriately but explain complex concepts
- Keep paragraphs concise (3-5 sentences)
- Use bold for emphasis on key terms or product names
- Maintain objectivity while providing insightful analysis
- Focus on factual reporting rather than speculation
- Always use escaped apostrophes in contractions and possessives (\'t, \'s) instead of straight apostrophes (t, s)

## Common Topics

- CPU and GPU architectures and releases
- Performance benchmarks and comparisons
- Industry news and market trends
- AI and machine learning advancements
- Mobile technology developments
- Enterprise hardware and solutions

## SEO Practices

- Use descriptive, keyword-rich titles
- Include relevant tags (lowercase)
- Ensure first paragraph contains key information
- Use proper headings (h3, h4) for structure
- Include product names and technical specifications accurately

## Example Post Structure

```markdown
---
title: AMD Announces New Ryzen Processor with Enhanced AI Capabilities
date: 2025-08-01 09:30:00
tags:
  - amd
  - ryzen
  - ai
  - cpu
  - processors
---

### Quick Report

AMD has unveiled its latest Ryzen processor featuring enhanced AI capabilities and improved performance metrics. The new chip promises 20% better multi-threaded performance and 15% improved single-core performance compared to the previous generation.

<!-- more -->

The processor incorporates AMD\'s new neural processing unit (NPU) designed specifically for AI workloads, allowing for more efficient handling of machine learning tasks directly on the CPU. This development represents AMD\'s continued push into the AI computing space, competing directly with Intel\'s recent offerings.

Technical specifications include 16 cores/32 threads, base clock speeds of 4.5GHz with boost up to 5.7GHz, and a redesigned cache structure that improves data throughput for AI operations.

Industry analysts suggest this release could significantly strengthen AMD\'s position in both consumer and enterprise markets, particularly for workloads that benefit from integrated AI acceleration.

**Written using GitHub Copilot Claude 3.7 Sonnet in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

[TechPowerUp](https://www.techpowerup.com)
[AnandTech](https://www.anandtech.com)
```

## Specific Instructions for Copilot

1. When drafting new posts, prioritize accuracy of technical details
2. Use current industry terminology and standards
3. Maintain the established voice and tone of the blog
4. Ensure proper formatting of code blocks, lists, and links
5. Tag posts appropriately using lowercase tags for consistency
6. Include proper attribution for all sources
7. Focus on providing unique insights rather than rewriting source material
8. Proofread all content to ensure apostrophes in contractions and possessives are properly escaped (\'t, \'s)

## Images and Media

- Reference images by URL when available
- Suggest descriptive alt text for images
- Do not embed videos directly; link to them instead

## Content Restrictions

- Avoid speculation presented as fact
- Do not include affiliate links without explicit approval
- Maintain objectivity when comparing competing products
- Do not copy content verbatim from sources

## Proofreading Guidelines

- Always use escaped apostrophes in contractions and possessives
  - Correct: AMD\'s, doesn\'t, it\'s, company\'s
  - Incorrect: AMD's, doesn't, it's, company's
- Ensure consistent formatting of product names
- Check for technical accuracy in specifications and details
- Verify that all links in the Sources section are properly formatted
- Ensure tags are lowercase and use hyphens instead of spaces
