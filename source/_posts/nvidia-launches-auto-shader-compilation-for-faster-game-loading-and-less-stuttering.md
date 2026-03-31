---
title: NVIDIA Introduces Auto Shader Compilation to Cut Load Times and Runtime Hitching
date: 2026-04-01 01:17:38
description: "NVIDIA App beta adds Auto Shader Compilation for DirectX 12 games to precompile shaders in idle time and reduce loading delays and stutter."
tags:
  - nvidia
  - shader-compilation
  - directx-12
  - game-loading
  - stuttering
  - drivers
---

### Quick Report

NVIDIA has added a beta Auto Shader Compilation (ASC) feature to the NVIDIA App, aiming to reduce first-run shader waits and in-game stutter by compiling DirectX 12 shaders when the system is idle. Instead of pushing all compilation work to game launch, ASC pre-processes shader workloads in the background under configurable system usage limits.
<!-- more -->

The feature is opt-in via Graphics > Global Settings > Shader Cache, supports an immediate **Compile Now** trigger, and stores outputs in a dedicated folder that requires user-allocated disk space. NVIDIA says ASC reacts to game installs and fresh driver updates, requires GeForce Game Ready Driver 595.97 WHQL or newer, and is expected to improve further as beta testing continues.

**Written using GitHub Copilot GPT-5.3-Codex in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/347912/nvidia-launches-auto-shader-compilation-for-faster-game-loading-and-less-stuttering
