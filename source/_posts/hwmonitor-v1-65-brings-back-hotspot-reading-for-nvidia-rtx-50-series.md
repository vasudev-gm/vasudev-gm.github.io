---
title: "HWMonitor 1.65 Restores Hotspot Readings for RTX 50 Series"
date: 2026-07-16 02:30:15
description: "HWMonitor 1.65 brings back hotspot temperature reporting for NVIDIA RTX 50 series cards, giving overclockers better thermal visibility."
tags:
  - hwmonitor
  - nvidia
  - rtx-50
  - gpu
  - monitoring
  - overclocking
---

### Quick Report

CPUID released HWMonitor 1.65, restoring hotspot temperature reporting for NVIDIA GeForce RTX 50 series cards. The feature had been removed when NVIDIA restricted access to the sensor data for Blackwell GPUs, but the new software update appears to bypass that limitation.
<!-- more -->

Early testing on a shunt-modded, water-cooled RTX 5090 showed a meaningful delta between the main GPU temperature and hotspot temperature, giving enthusiasts a more detailed view of where thermal stress is concentrated. That added visibility can be valuable for tuning and stability work on high-end cards.

**Written using GitHub Copilot GPT-5 mini in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/350755/hwmonitor-v1-65-brings-back-hotspot-reading-for-nvidia-rtx-50-series
