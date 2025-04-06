---
title: NVIDIA Open Sources PhysX and Flow with BSD-3 License
date: 2025-04-06 23:48:31
tags:
    - nvidia
    - physx
    - physics simulation
    - fluid simulation
    - flow
    - bsd-3 license
---

### Quick Report

NVIDIA has open sourced PhysX and Flow with a BSD-3 license. The entire source code is available on GitHub and they currently isn\'t any pre-built binaries as developers need to build it from source code to generate binaries.
<!-- more -->

NVIDIA PhysX provided realistic physics, fluid simulation and rigid body interactions. PhysX is used in many games and applications especially Borderlands series, Bioshock Infinite, Batman Arkham series etc. There were sources citing the use of x87 instruction set that lowered FPS and had choppy gameplay on competitor GPU such as Radeon and Intel. As of writing, NVIDIA does state they have ported the x87 instruction to make it compatible with modern multi-core CPUs that can scale well with many cores with optimized instruction sets that does not degrade performance.

This will help community to build wrappers since Blackwell and future GPUs will not run 32bit PhysX and CUDA.

### Source(s)

- [TPU][def]
- [Physx-32-64bit-wrapper WIP][def2]

[def]: https://www.techpowerup.com/335117/nvidia-physx-and-flow-made-fully-open-source
[def2]: https://github.com/LilithsSong/Physx-32-64bit-wrapper
