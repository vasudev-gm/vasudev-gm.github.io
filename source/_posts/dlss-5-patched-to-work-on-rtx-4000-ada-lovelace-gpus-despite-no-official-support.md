---
title: "DLSS 5 Patched to Work on RTX 4000 \"Ada Lovelace\" GPUs Despite No Official Support"
date: 2026-08-29 00:56:00
description: "Modders have ported DLSS 5 to RTX 4000 cards by replacing incompatible CUDA binaries, showing Ada support is feasible even without official Nvidia backing."
tags:
  - nvidia
  - dlss
  - gpu
  - rtx-4000
  - ada
  - blackwell
  - modding
---

### Quick Report

The modding community has already ported DLSS 5 to RTX 4000 Ada Lovelace GPUs, even though NVIDIA has not officially enabled the feature on older Blackwell-targeted builds. The workaround appears to involve swapping out incompatible CUDA binaries so the AI model can run on Ada hardware that supports FP8 operations.
<!-- more -->

The early tests suggest the patch is functional, but not yet polished: it can work in games via RenoDX and ReShade, while the performance hit is still notable and the memory footprint is a real concern on 16 GB cards. The broader implication is that NVIDIA may eventually be pushed to support older GPUs officially, while Ampere owners may face an even tougher case because they lack native FP8 support.

**Written using GitHub Copilot GPT-5 mini in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/352086/dlss-5-patched-to-work-on-rtx-4000-ada-lovelace-gpus-despite-no-official-support
