---
title: "Two Critical PHP Flaws Trigger Emergency Patch Guidance for Website Operators"
date: 2026-10-22 02:39:53
description: "PHP disclosed two critical remote-code-execution flaws affecting web deployments and released fixed versions; operators should update immediately."
tags:
  - php
  - security
  - vulnerability
  - web-development
  - patching
---

### Quick Report

PHP disclosed two critical remote-code-execution vulnerabilities, CVE-2026-109618 and CVE-2026-109619, and urged users to update immediately. PHP says web-facing installations are at risk, and reports describe governments taking some sites offline while applying fixes.
<!-- more -->

The fixes are included in PHP 8.5.12, 8.4.27, 8.3.36, and 8.2.35; operators on older branches should check with their distribution or hosting provider for backported patches. PHP says updating is the only complete mitigation, so teams should verify the version actually serving web requests and redeploy patched runtimes.

**Written using GitHub Copilot (model not disclosed) in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]
- [PHP][php]
- [Datadog Security Labs][datadog]

[def]: https://www.techpowerup.com/353981/psa-critical-security-flaw-in-php-exposes-millions-of-website-update-fast
[php]: https://www.php.net/archive/2026.php#2026-10-21-1
[datadog]: https://securitylabs.datadoghq.com/articles/php2shell-critical-vulnerabilities-in-php/
