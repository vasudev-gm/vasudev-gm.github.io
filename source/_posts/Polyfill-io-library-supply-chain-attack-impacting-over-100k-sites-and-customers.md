---
title: >-
  Polyfill.io library supply chain attack impacting over 100k sites and
  customers
date: 2024-06-29 20:56:14
tags:
  - supply chain attack
  - polyfill.io
  - polyfill
  - javascript library
  - library
---

## Quick Report

A supply chain attack has been discovered in the popular javascript library, Polyfill.io, which has impacted over 100,000 websites and their customers. The attack was carried out by injecting malicious code into the source code, allowing the attackers to steal sensitive information from users.
<!-- more -->

The domain and service were purchased by a Chinese company named **[Funnull][def]** and modified the source code to inject malicious code in websites using the script. Polyfill is a javascript library that adds modern functionality found in Chrome, Mozilla and Webkit based browsers to older browsers. This allows developers to write code that works across all browsers.

The issue was brought to attention by a cybersecurity company called Sansec. The original [developer][def2] also hinted the fact he never owned the domain, code repo and its sale.

Fortunately, Cloudflare and Fastly CDN quickly reverted to older version which did not have malicious script injection attacks and notified its customers. They also made the CDNs available for free and premium users.

Even Google started sending email notification to affected customers and its advertisers.

## Source(s)

- [Archived Polyfill.io github PR link][def]
- [Bleeping Computer Article][def3]

[def]: https://web.archive.org/web/20240229113710/https://github.com/polyfillpolyfill/polyfill-service/issues/2834#issuecomment-1963842875
[def2]: https://twitter.com/triblondon/status/1761852117579427975
[def3]: https://www.bleepingcomputer.com/news/security/polyfillio-javascript-supply-chain-attack-impacts-over-100k-sites/
