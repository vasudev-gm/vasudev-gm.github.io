---
title: "AMD Brings RDNA 4m Integrated Graphics Support to Mesa"
date: 2026-08-09 23:35:11
description: "AMD has merged RDNA 4m support into Mesa 26.3, preparing the GFX1171 integrated GPU for upcoming Medusa Point APUs and possible FSR 4 features."
tags:
  - amd
  - rdna-4m
  - mesa
  - igpu
  - medusa-point
  - fsr-4
---

### Quick Report

AMD has merged support for its RDNA 4m integrated graphics architecture into the open-source Mesa 26.3 driver stack. The GFX1171 target is expected to appear first in the upcoming Medusa Point APUs, giving AMD a newer integrated GPU design for future desktop systems.
<!-- more -->

RDNA 4m is positioned between RDNA 3.5 and full RDNA 4 rather than being a direct copy of either architecture. The implementation includes newer instruction extensions such as WMMA and SWMMAC, while reported INT8 and FP8 capabilities could help enable machine-learning features and native FSR 4 support. Mesa updates cover both the RADV and RadeonSI drivers, although AMD has not yet detailed the final products or performance.

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/351431/amd-rdna-4m-igpu-support-arrives-in-open-source-mesa-gpu-driver
