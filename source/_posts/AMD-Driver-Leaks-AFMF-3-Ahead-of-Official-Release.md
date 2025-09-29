---
title: AMD Driver Leaks AFMF 3 Ahead of Official Release
date: 2025-09-30 00:05:00
description: "Driver evidence suggests AMD Fluid Motion Frames 3 is present in a Windows preview driver, with uncertain GPU support and no official release date."
tags:
  - amd
  - afmf3
  - afmf
  - driver
  - radeon software
  - radeon
  - gpu
  - ai
  - rdna
  - rdna3
  - rdna4
---

### Quick Report

A Windows preview build of AMD\'s driver contains references to Fluid Motion Frames 3 (AFMF 3), discovered via exported GPU profiles and forum reports; AMD hasn\'t announced the feature publicly and it does not appear in the official beta release notes.

<!-- more -->

Recent posts on the Guru3D forums indicate AFMF 3 strings and references appeared in the 25.20.1 Windows Preview testing driver. The TechPowerUp report notes the feature wasn\'t listed in AMD\'s published beta driver update notes or visible in the AMD Software GUI, but exporting game profiles with the AMD GPU Profile Manager revealed the new AFMF 3 frame-generation entry.

Context and history:

- AMD first introduced Fluid Motion Frames (AFMF) 2 in July 2024, with version 2.1 arriving in March 2025. AFMF 2.1 has been available back to Radeon RX 6000 series GPUs in practice.
- AMD recently enabled PyTorch support on Radeon RX 7000 and 9000 GPUs in preview builds; the current preview driver that surfaces AFMF 3 includes the same testing channel where PyTorch was enabled.
- Community discussion notes uncertainty about which GPUs will receive AFMF 3. PyTorch support is presently limited to RX 7000 and 9000 series on preview releases, and it remains unclear whether AFMF 3 will be exposed to RX 6000 users.

Implications:

- Feature maturity: Appearance in a preview driver and in exported game profiles suggests AFMF 3 is under active testing, but not yet officially released or supported.
- Compatibility: AFMF 3 may require newer software components or ML-capable runtime features; the driver-level references could be a precursor to a staged rollout for newer GPU families.
- User experience: If AMD exposes AFMF 3 widely, it could improve motion-frame generation for supported titles and workloads, but hardware and driver compatibility will determine the practical reach.

Until AMD publishes official release notes or exposes AFMF 3 in the AMD Software GUI, users should treat these reports as preliminary. Watch for updates in the official driver release notes and future AMD announcements.

**Written using GitHub Copilot GPT-5 mini in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]
- [Guru3D forum thread][def2]
- [AMD driver beta release notes (PyTorch preview)][def3]

[def]: https://www.techpowerup.com/341462/amd-driver-leaks-fluid-motion-frames-3-ahead-of-official-announcement
[def2]: https://forums.guru3d.com/threads/amd-software-pytorch-on-windows-preview-edition-25-20-01-14.457857/page-2#post-6364141
[def3]: https://www.amd.com/en/resources/support-articles/release-notes/RN-AMDGPU-WINDOWS-PYTORCH-PREVIEW.html
