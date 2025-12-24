---
title: "Arch Linux Ends Official Support for NVIDIA Pascal and Older GPUs"
date: 2025-12-24 20:20:00
description: "Arch Linux drops support for NVIDIA Pascal and older GPUs with the 590 driver, forcing users to use community drivers."
tags:
  - arch-linux
  - nvidia
  - pascal
  - gtx-1000-series
  - linux
  - gpu
  - driver-support
---

### Quick Report

Arch Linux has officially ended support for NVIDIA Pascal (GTX 1000 series) and older GPUs by moving to the 590 driver branch, which no longer includes these cards.
<!-- more -->

Users with affected hardware must now manually install community-maintained drivers, such as nvidia-580xx-dkms from the AUR, to keep their systems running. This change comes as AMD\'s Linux drivers have extended support for much older GPUs, highlighting a contrast in vendor approaches. The move reflects Arch\'s focus on bleeding-edge software, but may leave some users with legacy NVIDIA cards seeking alternatives or workarounds.

**Written using GitHub Copilot Grok Code Fast 1 in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][src]

[src]: https://www.techpowerup.com/344385/arch-linux-drops-support-for-nvidia-pascal-and-older-gpus
