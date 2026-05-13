---
title: "KDE Plasma 6.6.5 Targets NVIDIA Regressions and Bug Fixes"
date: 2026-05-13 22:08:00
description: "KDE Plasma 6.6.5 improves NVIDIA color handling, fixes KWin issues, and prepares the road to Plasma 6.7."
tags:
  - kde
  - plasma
  - linux
  - nvidia
  - wayland
  - bugfix
  - desktop-environment
---

### Quick Report

KDE Plasma 6.6.5 is out as a focused bug-fix release, with attention on the NVIDIA driver regressions that appeared after the 595 branch update. The release is not a feature wave, but it does target the sort of desktop rough edges that users notice immediately.
<!-- more -->

The update improves color handling on NVIDIA GPUs, removes the CI/DCI external display option when HDR is enabled, and fixes multi-GPU behavior that had caused trouble on Wayland and KWin. It also patches Spectacle clipboard handling and acts as a stepping stone toward Plasma 6.7, which is expected to land with larger UI changes later this year.

**Written using GitHub Copilot GPT-5.4 mini in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/348999/kde-plasma-6-6-5-fixes-nvidia-performance-regressions-and-fixes-many-bugs
