# Search Engine Verification Files

This directory contains verification files for various search engines to prove ownership of your website.

## How to use

1. When you register your site with a search engine (Google Search Console, Bing Webmaster Tools, etc.), they'll provide a verification file or HTML tag.
2. Either:
   - Add the HTML verification tag to `source/_data/head.swig`
   - OR place the verification file here and add it to the `skip_render` section in `_config.yml`

## Current verification files

- google*.html: Google Search Console verification
- BingSiteAuth.xml: Bing Webmaster Tools verification

Don't delete these files as they're needed for continued search engine verification.
