---
title: >-
  Older NVIDIA GPU might not boot properly with Secure Boot After June 2026
date: 2025-09-02 22:00:00
tags:
  - nvidia
  - secure boot
  - uefi
  - certificate
  - gop
  - vbios
  - windows 11
  - windows 10
---

### Quick Report

A major issue is set to affect older NVIDIA GPUs starting June 2026: the Microsoft UEFI CA 2011 certificate, used to sign many NVIDIA GOP (Graphics Output Protocol) option ROMs, will expire. If Secure Boot is enabled, affected GPUs may fail to POST (boot) on systems without integrated graphics, resulting in black screens and unusable PCs.
<!-- more -->

- **What breaks:**
  - GPUs with VBIOS GOP signed only by the Microsoft UEFI CA 2011 certificate.
  - After expiry, Secure Boot may block the GOP, causing no display output before OS boots.
  - Systems without iGPU may not POST at all.
- **Disabling Secure Boot is not always a workaround:**
  - Some anti-cheat software and security features require Secure Boot.
- **What vendors must do:**
  - Release updated VBIOS with GOP signed by the Microsoft Option ROM UEFI CA 2023 (ideally dual-signed for compatibility).
- **What users can do:**
  - Update motherboard firmware and Windows to ensure 2023 certificates are present.
  - Check if your GPU is affected using scripts or tools (see Reddit thread for details).
  - Contact your GPU vendor (ASUS, MSI, Gigabyte, Palit, EVGA, Zotac, etc.) and NVIDIA to request updated VBIOS before June 2026.

**Written using GitHub Copilot GPT-4.1 in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [Reddit: PSA Secure Boot 2026 June cert expiry can block older NVIDIA GOPs at POST][def]
- [Microsoft Secure Boot Certificate Expiration and CA Updates][def2]
- [TPU][def3]

[def]: https://old.reddit.com/r/nvidia/comments/1n1jroi/psa_secure_boot_2026_june_cert_expiry_can_block/
[def2]: https://support.microsoft.com/en-us/topic/windows-secure-boot-certificate-expiration-and-ca-updates-7ff40d33-95dc-4c3c-8725-a9b95457578e
[def3]: https://www.techpowerup.com/340520/some-older-nvidia-graphics-cards-may-not-boot-correctly-with-windows-secure-boot-after-june-2026#comments
