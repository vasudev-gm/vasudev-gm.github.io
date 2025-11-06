---
title: "AMD Acknowledges Zen 5 RDSEED Cryptographic Randome Key Generation Bug with microcode fixes"
date: 2025-11-06 21:00:00
description: "AMD confirms Zen 5 RDSEED bug affecting crypto key generation; microcode fixes rolling out, users should update BIOS and regenerate sensitive keys."
tags:
    - amd
    - zen-5
    - rdseed
    - cpu
    - security
    - microcode
    - cryptography
    - bug
    - agesa
    - cve-2025-62626
---

### Quick Report

AMD has officially acknowledged a hardware bug in the RDSEED instruction on Zen 5 CPUs, cataloged as AMD-SB-7055 (CVE-2025-62626). The 16-bit and 32-bit forms of RDSEED can return zero values, potentially weakening cryptographic key generation if undetected. The 64-bit variant is unaffected. AMD rates the issue as high severity and is distributing microcode and firmware updates to OEMs, with AGESA TurinPI 1.0.0.8 for EPYC 9005 due November 14 and consumer updates later in November.<!-- more -->

Short-term workarounds include prioritizing the 64-bit RDSEED path, masking RDSEED from software, or treating zero returns as failures. Users should install BIOS/microcode updates as soon as available and consider regenerating sensitive keys created on unpatched systems. The bug can impact entropy for cryptographic keys and nonces, making timely updates critical for security.

**Written using GitHub Copilot GPT-4.1 in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]
- [AMD Security Bulletin][amd]
- [Tom\'s Hardware][th]

[def]: https://www.techpowerup.com/342582/amd-zen-5-rdseed-bug-threatens-cryptographic-key-generation
[amd]: https://www.amd.com/en/resources/product-security/bulletin/amd-sb-7055.html
[th]: https://www.tomshardware.com/pc-components/cpus/amd-confirms-security-vulnerability-on-zen-5-based-cpus-that-generates-potentially-predictable-keys-rdseed-fix-coming-through-an-agesa-firmware-update-for-desktop-chips
