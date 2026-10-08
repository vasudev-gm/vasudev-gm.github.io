---
title: "Zen 6 Adds a Low-Overhead Way to Locate Hot Memory Pages"
date: 2026-10-09 02:19:00
description: "A new Zen 6 IBS mode samples memory accesses and reports address and NUMA details to help Linux identify frequently used pages."
tags:
  - amd
  - zen-6
  - ibs
  - memory-profiler
  - linux
---

### Quick Report

An AMD engineer has detailed a Zen 6 Instruction-Based Sampling mode designed specifically to profile data-memory accesses with low overhead. Presented at the 2026 Linux Plumbers Conference, the feature can provide physical and virtual addresses along with NUMA-node information for sampled accesses.
<!-- more -->

That information can help identify hot pages, or memory regions accessed frequently, so Linux can make better placement decisions in systems with tiered memory. The work is being discussed alongside the kernel\'s pghot subsystem, which aims to use hardware-derived hints for page management.

The feature could be useful as server platforms add more memory tiers, including CXL-attached capacity, but the operational impact depends on the kernel integration and workload. The presentation describes a profiling capability, not a guarantee that every Zen 6 system will automatically move data between memory tiers.

**Written using GitHub Copilot (model not disclosed) in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]
- [Phoronix][phoronix]

[def]: https://www.techpowerup.com/353525/amd-engineer-details-zen-6-ibs-memory-profiler
[phoronix]: https://www.phoronix.com/news/AMD-Zen-6-IBS-Memory-Profiler
