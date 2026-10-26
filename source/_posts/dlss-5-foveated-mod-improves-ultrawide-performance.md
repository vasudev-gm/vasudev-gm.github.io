---
title: "Foveated DLSS 5 Mod Targets the Performance Cost of Ultrawide Rendering"
date: 2026-10-27 00:57:32
description: "A ReShade add-on lowers DLSS 5 neural-rendering detail toward screen edges, with its creator reporting a large ultrawide gain in The Witcher 3."
tags:
  - nvidia
  - dlss-5
  - ultrawide
  - reshade
  - modding
  - gaming
---

### Quick Report

A community ReShade add-on called FoveatedDLSS5 applies a VR-style technique to reduce DLSS 5 neural-rendering work toward the edges of ultrawide screens. Its creator reports that The Witcher 3 rose from 49 to about 80 FPS on an RTX 4090 at 7680×2160 using 2× multipass, with the image rendered at full neural detail in the center and reduced detail in peripheral areas.
<!-- more -->

The trade-off depends on display shape: default settings leave about 71% of pixels at full processing for the tested ultrawide resolution, compared with 93% at 4K, while the mod disables itself at 3440×1440 unless users adjust the center zone. It remains a pre-release tool tested in one game and requires DLSS 5 neural rendering after upscaling, so it cannot be combined with the Neural Upstream method. DLSS 5 is not officially supported on RTX 4090, making that result dependent on a modified runtime.

**Written using GitHub Copilot (model not disclosed) in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/354149/new-dlss-5-mod-borrows-a-vr-trick-for-better-ultrawide-performance
