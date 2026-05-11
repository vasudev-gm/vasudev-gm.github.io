---
title: "AMD Radeon 26.5.1 Driver Breaks Blender Cycles Path Tracing"
date: 2026-05-11 21:28:13
description: "AMD\'s Adrenalin 26.5.1 WHQL driver is crashing Blender 5.1.1 Cycles due to a ROCm 6 versus ROCm 7 runtime mismatch."
tags:
  - amd
  - radeon
  - drivers
  - blender
  - cycles
  - rocm
  - whql
---

### Quick Report

AMD\'s Adrenalin Edition 26.5.1 WHQL driver is causing crashes in Blender 5.1.1 when users render with Cycles. The issue appears tied to a runtime mismatch, because Blender 5.1.1 expects ROCm 6 while the new driver package ships with ROCm 7.
<!-- more -->

AMD ecosystem developer Sahar A. Kashi said the problem can surface after a clean install, when the older amdhip64_6.dll is removed and Cycles tries to load ROCm 7 kernels that Blender 5.1.1 cannot use. The current workaround is to roll back to 26.3.1 until Blender 5.2 lands with full ROCm 7 support.

**Written using GitHub Copilot GPT-5.4 mini in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/348925/amd-radeon-gpu-drivers-26-5-1-break-blender-cycles-path-tracing-engine
