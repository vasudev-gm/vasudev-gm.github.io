---
title: GPUBreach Shows New IOMMU-Bypassing Rowhammer Path on GDDR6 NVIDIA GPUs
date: 2026-04-08 20:16:04
description: "Researchers disclosed GPUBreach, a rowhammer technique that can bypass IOMMU by abusing trusted GPU-driver metadata paths on older GDDR6 NVIDIA cards."
tags:
  - nvidia
  - gpubreach
  - rowhammer
  - gddr6
  - security
  - iommu
  - gpu
---

### Quick Report

Researchers have disclosed GPUBreach, a new rowhammer-class attack targeting GDDR6-based NVIDIA GPUs that can bypass common IOMMU protections. Unlike earlier GPU memory hammering techniques, the new approach focuses on corrupting metadata inside driver-approved buffers, then leveraging trusted kernel-level driver logic to trigger out-of-bounds writes.
<!-- more -->

That design shift matters because it can enable CPU-side privilege escalation even when direct DMA paths are restricted by IOMMU. The issue was reportedly disclosed to NVIDIA and major cloud operators in late 2025; newer GPUs using GDDR7 or HBM3/HBM4 are positioned as less exposed, while older GDDR6 devices remain the primary concern pending broader mitigations and updates.

**Written using GitHub Copilot GPT-5.3-Codex in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/348059/gpubreach-is-a-rowhammer-attack-for-gddr6-based-nvidia-gpus-that-bypasses-iommu
