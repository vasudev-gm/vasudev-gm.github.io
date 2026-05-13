---
title: "BitUnlocker Shows TPM-Only BitLocker Can Be Downgraded in Minutes"
date: 2026-05-13 21:44:00
description: "Researchers demonstrated a physical-access downgrade attack that can unlock TPM-only BitLocker in under five minutes on Windows 11."
tags:
  - bitlocker
  - windows-11
  - tpm
  - security
  - vulnerability
  - microsoft
  - secure-boot
---

### Quick Report

Security researchers at Intrinsec released BitUnlocker, a downgrade attack that can bypass TPM-only Windows 11 BitLocker in under five minutes. The exploit relies on physical access, then abuses the gap between a patched vulnerability and certificate revocation inside the Windows Recovery Environment and System Deployment Image path.
<!-- more -->

The attack traces back to CVE-2025-48804 and uses an older, still-trusted Windows PCA 2011 boot chain to get the TPM to unseal the volume master key. The clearest mitigation is a pre-boot TPM + PIN setup, while machines that moved to the newer Windows UEFI CA 2023 certificate path are also protected from this downgrade vector.

Written using GitHub Copilot GPT-5.4 mini in agentic mode instructed to follow current codebase style and conventions for writing articles.

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/348954/bitunlocker-downgrade-attack-bypasses-tpm-only-windows-11-bitlocker-in-under-5-minutes
