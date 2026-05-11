---
title: "AMD's DGF SuperCompression Cuts Geometry File Size by 22%"
date: 2026-05-11 21:28:13
description: "AMD says DGF SuperCompression can reduce geometry asset streams by up to 22%, trimming game install sizes before assets are decompressed at load time."
tags:
  - amd
  - dgf
  - compression
  - geometry-format
  - radeon
  - gpu
  - storage
---

### Quick Report

AMD has unveiled DGF SuperCompression, a new layer in its Dense Geometry Format stack that claims up to a 22% reduction in geometry file size. The format is meant to shrink asset streams before they are decompressed at load time, which could help games consume less storage without changing the final rendered output.
<!-- more -->

AMD says the decoding happens in real time through a CPU-based process, with the company noting that the work should be fast enough for streaming workloads. The feature was tested on a Ryzen 9 7950X system with 64 GB of DDR5-6000 memory and a Radeon RX 9070 XT, and AMD indicates that the current stack is aligned with RDNA 4-era hardware.

**Written using GitHub Copilot GPT-5.4 mini in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/348923/amds-dgf-supercompression-shrinks-geometry-file-size-by-22
