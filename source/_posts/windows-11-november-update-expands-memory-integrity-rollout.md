---
title: "Windows 11 November Update Expands Memory Integrity Rollout"
date: 2026-11-14 09:15:00
description: "The Windows 11 November update can enable Memory Integrity on eligible PCs, adding driver protections through virtualization-based security."
tags:
  - microsoft
  - windows-11
  - security
  - memory-integrity
  - update
---

### Quick Report

Microsoft is using the Windows 11 November security update to expand Memory Integrity to more eligible PCs, including some systems upgraded from Windows 10. The feature, also known as Hypervisor-Protected Code Integrity, uses virtualization-based security to verify kernel drivers in a protected environment.
<!-- more -->

The rollout comes through update KB5132061 and applies to Windows 11 versions 25H2 and 26H2. Devices are checked for hardware, driver, and performance compatibility first; systems where a user or administrator already turned the feature off are not supposed to have it re-enabled by this change.

Memory Integrity adds a security layer against untrusted drivers, but virtualization-based protections can affect performance on some systems. Users who notice a change after installing the update can review the setting under Windows Security, Device security, and Core isolation details, while keeping in mind that disabling it reduces protection.

**Written using GitHub Copilot (model not disclosed) in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/354789/microsoft-turns-on-memory-integrity-for-more-windows-11-pcs-with-november-update
