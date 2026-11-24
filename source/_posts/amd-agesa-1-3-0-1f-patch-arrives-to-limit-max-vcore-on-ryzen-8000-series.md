---
title: "AMD AGESA 1.3.0.1f Patch Limits Max VCore on Ryzen 8000"
date: 2026-11-25 09:08:00
description: "AMD's AGESA 1.3.0.1f firmware patch limits maximum VCore for Ryzen 8000 systems, reducing the risk of excessive voltage."
tags:
  - amd
  - agesa
  - ryzen-8000
  - voltage
  - motherboard
---

### Quick Report

AMD has released AGESA 1.3.0.1f, a firmware patch that limits maximum VCore on Ryzen 8000-series systems. The update is intended to prevent excessive voltage from reaching the processor under firmware or configuration conditions that could reduce longevity.
<!-- more -->

Motherboard vendors can distribute the patch through BIOS updates, although the exact limits and behavior may vary across models and memory configurations. Users with overclocked systems may need to recheck manual voltage profiles and stability after applying the firmware.

The change prioritizes processor protection over unrestricted tuning headroom. It will matter most to users who push manual voltages or rely on aggressive board defaults.

Some Ryzen 8840 HS Pro laptops have been observed reaching up to 1.5V in High performance power mode set by Lenovo Intelligent Thermal Service.

**Written using GitHub Copilot MAI Code 2 Flash in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/355153/amd-agesa-1-3-0-1f-patch-arrives-to-limit-max-vcore-on-ryzen-8000-series
