---
title: "Intel Details Xeon 7 \"Diamond Rapids\" Package Design at HOT CHIPS"
date: 2026-08-24 23:15:00
description: "Intel outlines a multi-chip Xeon 7 Diamond Rapids design with 256 cores, pooled cache, and DDR5 memory plus PCIe Gen 6 and CXL 3.0 support."
tags:
  - intel
  - xeon
  - diamond-rapids
  - hot-chips
  - server
  - cpu
  - cxl
---

### Quick Report

Intel has detailed the package design of its next-generation Xeon 7 "Diamond Rapids" server processor at Hot Chips, outlining a modular architecture built for AI and enterprise-scale compute. The chip is designed as a multi-chip module with 16 core chiplets, two Fabric Hub Tiles, and four compute base tiles for up to 256 Panther Cove P-cores and roughly 1.28 GB of shared last-level cache per socket.
<!-- more -->

The design follows an EPYC-style disaggregation model: each base tile groups four core chiplets and exposes a 320 MB pooled L3 cache to 64 cores, while the Fabric Hub Tiles handle memory, I/O, and CXL 3.0 or PCIe Gen 6 connectivity. Intel is building the compute chiplets on Intel 18A-P, the base tiles on Intel 3-T, and the Fabric Hub Tiles on Intel 3, with support for 16 DDR5 channels, 12,800 MT/s MRDIMMs, and fixed-function accelerators such as TDX, SGX, QAT, and DSA.

**Written using GitHub Copilot GPT-5 mini in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/351893/intel-details-xeon-7-diamond-rapids-package-design-at-hot-chips
