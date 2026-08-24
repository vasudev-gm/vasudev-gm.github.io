---
title: "Windows 11 Prepares Unified Memory Controls for RTX Spark Systems"
date: 2026-08-25 00:15:00
description: "A Windows 11 preview feature will let users manage memory partitions on unified-memory systems such as NVIDIA RTX Spark."
tags:
  - microsoft
  - windows-11
  - rtx-spark
  - unified-memory
  - nvidia
  - lpddr5x
---

### Quick Report

Microsoft is preparing new unified-memory controls for Windows 11 systems that combine CPU and GPU resources in a shared memory pool. A hidden IntelligentCarveout feature found in build 29648.1000 is designed for platforms such as NVIDIA RTX Spark and AMD Ryzen Halo systems using external LPDDR5X memory.
<!-- more -->

The controls should let the operating system assign more memory to the GPU when applications need larger AI models, complex rendering workloads, or games. The RTX Spark platform is expected to combine a 20-core Arm CPU, up to 6,140 CUDA cores, and as much as 128 GB of shared memory, making flexible partitioning more important than on conventional discrete GPU systems.

**Written using GitHub Copilot GPT-5 mini in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/351881/windows-11-to-get-unified-memory-control-options-ahead-of-rtx-spark-launch
