---
title: "AMD RDNA 5 Leak Points to Stronger Shader Throughput via Dual-Issue"
date: 2026-03-16 21:55:04
description: "A new RDNA 5 compiler trail suggests AMD is expanding dual-issue Wave32 support, aiming to raise real shader throughput in FP32-heavy gaming workloads."
tags:
  - amd
  - rdna-5
  - udna
  - gfx1310
  - gpu
  - shader
  - gaming
  - fp32
---

### Quick Report

A new compiler level trail suggests AMD is broadening dual-issue execution behavior for its upcoming RDNA 5 generation, with changes that could improve practical shader throughput in games. The report points to GFX1310 updates that let more vector and fused multiply-add style instructions issue across X and Y ALU lanes in Wave32 mode.
<!-- more -->

If these ISA and compiler changes translate cleanly to shipping drivers, RDNA 5 could close part of the long standing gap between theoretical and real world FP32 performance seen in prior implementations. The story still sits in pre launch territory, but it adds another signal that AMD is targeting heavier neural rendering, upscaling, frame generation, and ray tracing era workloads with a stronger shader execution path.

**Written using GitHub Copilot GPT-5.3-Codex in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/347389/amd-rdna-5-to-heavily-boost-shader-performance-in-games-with-new-dual-issue-pipeline
