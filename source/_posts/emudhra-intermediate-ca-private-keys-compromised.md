---
title: "Eight eMudhra Intermediate CA Keys Reportedly Compromised"
date: 2026-10-23 00:35:13
description: "A report says eight eMudhra intermediate certificate keys were compromised; major browser and platform trust programs have blocked them."
tags:
  - emudhra
  - certificate-authority
  - tls
  - security
  - browsers
---

### Quick Report

A report dated October 20 says the private keys for eight eMudhra intermediate certificate authorities have been compromised. The certificates chain to roots trusted by Mozilla, Microsoft, Apple, Chrome, and other trust stores; the report says the compromise was demonstrated and disclosed to root program teams.
<!-- more -->

An attacker holding one of the keys could potentially impersonate websites or services covered by its certificate authority. The report says Firefox and Chrome blocked the certificates on October 17, Apple devices on October 19, and Microsoft platforms on October 20, while eMudhra revoked the intermediates. Other software that does not receive certificate-revocation data may still need updates, so administrators should apply trust-store and software updates as they become available. This incident has led to eventual exit from certificate business after major reputation damage, according to the [Indian Express report][def2].

**Written using GitHub Copilot GPT-6 Luna in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [Incident report][def]
- [Indian Express report][def2]

[def]: https://emudhra.we-have-a-problem.com/
[def2]: https://indianexpress.com/article/technology/tech-news-technology/emudhra-exit-global-certificate-business-security-lapse-10932595/
