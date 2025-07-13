---
title: NVIDIA releases Developer Preview Driver Adding Smooth Motion to Ada GPUs
date: 2025-07-13 22:20:00
tags:
  - NVIDIA
  - RTX
  - Ada
  - Smooth-Motion
  - Frame-Generation
  - GPU
  - Gaming
---

### Quick Report

NVIDIA has released a developer preview driver (v590.26) that extends its **Smooth Motion** frame generation technology to the RTX 40 series GPUs based on the Ada Lovelace architecture, potentially doubling framerates in supported games.
<!-- more -->

- Smooth Motion generates an additional frame between two rendered frames, effectively doubling perceived frame rates
- Works on DirectX 11 and DirectX 12 titles, without requiring game-specific integration
- Currently accessible through NVIDIA Profile Inspector tool as a workaround
- Testing shows impressive results with framerates doubling in some games (e.g., 82 to 164 FPS in World of Warcraft)
- Technology is similar to AMD\'s Fluid Motion Frames (AFMF) but implemented by NVIDIA

NVIDIA\'s Smooth Motion is a driver-level AI-powered frame generation technology that inserts an additional frame between two rendered frames, effectively doubling the perceived framerate without requiring additional rendering work from the GPU. Unlike DLSS Frame Generation, which needs to be specifically integrated into games by developers, Smooth Motion works at the driver level and can enhance any DirectX 11 or DirectX 12 title.

This technology was initially introduced for NVIDIA\'s newest RTX 50 "Blackwell" series GPUs, but with the release of the 590.26 preview driver, it\'s now being extended to the RTX 40 "Ada Lovelace" series as well. This brings the benefits of frame generation to a much wider audience of NVIDIA GPU owners.

While the technology is still in preview and has some limitations compared to DLSS Frame Generation, the initial results are promising. As NVIDIA continues to refine the implementation, Smooth Motion could become a standard feature that RTX 40 series owners routinely enable for games without native DLSS support.

---

**Written using GitHub Copilot Claude 3.7 Sonnet in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [NVIDIA Introduces "Smooth Motion" Frame Generation for RTX 40 Series GPUs][def]

[def]: https://wccftech.com/nvidia-introduces-smooth-motion-frame-generation-for-rtx-40-series-gpu/
