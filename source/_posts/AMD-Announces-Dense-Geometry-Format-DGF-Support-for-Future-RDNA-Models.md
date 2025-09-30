---
title: AMD Announces Dense Geometry Format(DGF) Support for Future RDNA Models
date: 2025-09-30 20:10:00
description: "AMD updates the DGF SDK with animation-aware encoding and demonstrates animation support for future RDNA GPUs using an efficient block-based format."
tags:
  - amd
  - dgf
  - dense geometry format
  - rdna
  - geometry
  - compression
  - gpu
---

### Quick Report

AMD has published a GPUOpen technical article describing animation support for the Dense Geometry Format (DGF) and updated the DGF SDK with an animation-aware encoding pipeline; the changes target future RDNA architectures and show efficient, GPU-friendly quantization and block updates for animated meshlets.

<!-- more -->

The GPUOpen post explains that DGF stores compressed meshlets (up to 64 vertices / 64 triangles) in compact 128-byte blocks containing a header, geometry data and a topology representation optimized for random access and minimal memory per triangle. For animations that keep topology stable, AMD demonstrates a pipeline that updates quantized vertex positions inside DGF blocks at runtime by transforming key-frame data and re-quantizing into existing blocks.

Key technical points:

- Block format: Each DGF block uses a 24-bit signed anchor and per-channel quantization with configurable bit widths (1–16 bits) plus a biased exponent to scale positions back to floating-point, enabling compact storage while avoiding cracks when quantizing.
- Topology: DGF stores triangle connectivity as a generalized triangle strip with backtracking to reduce per-triangle index overhead to roughly 5 bits per triangle in reuse-friendly buffers.
- Animation pipeline: At startup the system uploads key-frame vertex data; every frame a compute shader interpolates positions, quantizes them (using wave intrinsics and LDS for per-block work), and atomically updates packed DWORDs in the DGF blocks. AMD shows that quantization and the update step are negligible in frame time (microseconds), making animated DGF practical.
- Baker options: The updated DGF Baker supports animation-specific options such as `config.quantizeForAnimations`, `config.clusterDeformationPadding`, `config.blockForcedOffsetWidth`, `config.generateVertexTable`, and `config.enableUserData` to reserve space and ensure offsets don\'t overflow during animation.
- Results: AMD\'s sample demonstrates updating large scenes (hundreds of thousands of triangles) with per-frame quantization costs that are a tiny fraction of total frame time; triangle density increases with higher forced offset widths, but overall DGF still provides significantly lower memory density than uncompressed geometry.

Implications for developers and engines:

- Real-time animation + compression: DGF enables tightly packed, cache-friendly geometry storage that can be updated at runtime for animations without major runtime overhead, opening the door for memory-efficient animated scenes in both rasterization and ray-tracing pipelines.
- Integration: Engine teams should consider baking DGF with animation extents, using the vertex table to scatter updates, and tuning `blockForcedOffsetWidth` and deformation padding to balance compression vs animation fidelity.
- Hardware support: Because DGF is designed for future GPU architectures, adopting DGF now helps pipelines be ready for hardware-accelerated decompression and block access when vendor GPUs add native support.

**Written using GitHub Copilot GPT-5 mini in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [GPUOpen: Animating geometry with AMD DGF][def]
- [DGF SDK on GitHub][def2]
- [TPU][def3]

[def]: https://gpuopen.com/learn/animating-geometry-with-amd-dgf/
[def2]: https://github.com/GPUOpen-LibrariesAndSDKs/DGF-SDK/
[def3]: https://www.techpowerup.com/341494/amd-dense-geometry-format-dgf-aims-to-increase-visual-detail-with-future-gpus
