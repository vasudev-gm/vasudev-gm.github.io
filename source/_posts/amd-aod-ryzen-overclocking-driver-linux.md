---
title: "AMD's Ryzen Overclocking Driver for Linux Starts Kernel Review"
date: 2026-10-22 23:44:02
description: "AMD submitted a three-patch AOD driver series for Linux, exposing selected Ryzen power limits through sysfs but requiring a reboot to apply changes."
tags:
  - amd
  - ryzen
  - linux
  - overclocking
  - kernel
---

### Quick Report

AMD engineer Shyam Sundar S K has proposed a three-patch series for an AMD Overclocking Driver (AOD) on Linux. The WMI-based driver exposes selected Ryzen controls through sysfs, including PPT, TDC and EDC power limits, an SMT toggle, and a read-only memory clock value.
<!-- more -->

The proposal is still under review, with no confirmed kernel release for inclusion. Power-limit changes are stored by firmware and only take effect after a reboot, while the controls do not report the active limits back to userspace. AMD is not porting Ryzen Master itself; the approach leaves graphical controls to existing third-party utilities and desktop projects.

**Written using GitHub Copilot (model not disclosed) in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/353992/amd-readies-official-ryzen-overclocking-driver-for-linux
