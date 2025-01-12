---
title: Microsoft Lays the Ground Work for Neural rendering in DirectX 12 APIs
date: 2025-01-12 19:55:59
tags:
    - microsoft
    - directx
    - neural rendering
    - api
    - graphics
---

### Quick Report

Microsoft announced updates to DirectX 12 APIs to support neural rendering. Neural Rendering is a concept that allows for the creation of near realtime 3D graphics using Generative AI aka GenAI working alongside classic raster 3D graphics pipeline along with ray tracing.
<!-- more -->

The GenAI generates input frames are in lower resolution to generate super resolution images thereby reducing overall disk space and memory requirements. The foundation of this technology is cooperative vectors an information pathway between the conventional graphics pipeline and the generative AI, telling it what it's doing, what needs to be done by the AI model, and what the ground truth for the model is enabling AI to generate more close to accurate results without needing additional developer resources.

Microsoft said they are working with AMD, NVIDIA, Qualcomm, ARM and Intel to bring this technology to market using cross-vendor APIs. Nvidia\'s Blackwell uses cooperative vector to drive neural shading.

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/330981/microsoft-lays-directx-api-level-groundwork-for-neural-rendering
