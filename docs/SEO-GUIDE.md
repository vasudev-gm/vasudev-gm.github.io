# Search Engine Optimization Guide

This document provides guidance on improving the search engine visibility of your blog.

## Current SEO Setup

- **Sitemap**: Generated at `/sitemap.xml`
- **Robots.txt**: Present with proper directives
- **Schema.org**: Basic blog schema implemented
- **Meta Tags**: Basic meta tags included in head.swig

## Steps to Improve Search Engine Visibility

### 1. Register with Search Engines

1. **Google Search Console**:
   - Visit [Google Search Console](https://search.google.com/search-console/)
   - Add your property ([https://vasudev-gm.github.io](https://vasudev-gm.github.io))
   - Verify ownership using HTML tag (add to `source/_data/head.swig`) or HTML file (add to `source/verification/`)
   - Submit your sitemap ([https://vasudev-gm.github.io/sitemap.xml](https://vasudev-gm.github.io/sitemap.xml))

2. **Bing Webmaster Tools**:
   - Visit [Bing Webmaster Tools](https://www.bing.com/webmasters/)
   - Add your site
   - Verify ownership
   - Submit your sitemap

3. **Yandex Webmaster**:
   - Visit [Yandex Webmaster](https://webmaster.yandex.com/)
   - Add your site
   - Verify ownership
   - Submit your sitemap

### 2. Improve Meta Tags

Ensure each post has:

- Proper title (less than 60 characters)
- Meta description (150-160 characters)
- Relevant tags

Example front matter:

```yaml
---
title: "Concise, Keyword-Rich Title (Under 60 chars)"
date: 2025-08-23 12:00:00
description: "A compelling meta description that summarizes the content and includes important keywords (150-160 chars)"
tags:
  - relevant-tag
  - important-keyword
---
```

### 3. Content Optimization

- Include target keywords in headers, especially H1 and H2
- Use descriptive image alt text
- Create internal links between related posts
- Update older content regularly

### 4. Performance Optimization

- Optimize images before uploading
- Use responsive images
- Minimize CSS and JavaScript
- Improve page load speed

### 5. Social Media Integration

- Share posts on relevant social platforms
- Add Open Graph meta tags for better social sharing

### 6. Monitor and Adjust

- Check indexing status in search console
- Review search analytics for keyword performance
- Address any crawl errors promptly

## Resources

- [Google's SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)
- [Schema.org Documentation](https://schema.org/docs/documents.html)
