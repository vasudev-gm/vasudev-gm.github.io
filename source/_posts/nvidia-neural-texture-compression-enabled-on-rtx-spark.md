---
title: "NVIDIA Enables Neural Texture Compression on RTX Spark"
date: 2026-08-09 23:35:11
description: "NVIDIA has enabled Neural Texture Compression on Windows-on-Arm RTX Spark systems, promising major VRAM savings for supported texture workloads."
tags:
  - nvidia
  - neural-texture-compression
  - rtx-spark
  - windows-on-arm
  - blackwell
  - cuda
---

### Quick Report

NVIDIA has brought its Neural Texture Compression technology to Windows-on-Arm and is preparing it for the RTX Spark PC platform. The company previously demonstrated scenes where NTC reduced texture memory usage from 6.5 GB to 970 MB, potentially allowing higher material quality or lower VRAM consumption.
<!-- more -->

NTC uses small neural networks to recreate texture data at render time instead of storing the full assets in conventional BCn block-compressed formats. RTX Spark systems pair a Blackwell GPU with a 20-core Arm processor and up to 128 GB of LPDDR5X memory, with configurations offering 5,120 or 6,144 CUDA cores. NVIDIA has also released a native Windows-on-Arm CUDA toolkit preview, while broader game support will depend on developer adoption and integration.

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/351402/nvidia-neural-texture-compression-now-runs-on-rtx-spark
