---
title: AMD Announces DGF 1.0 (Dense Geometry Format), a Revolutionary Geometry Compression Technology
date: 2025-08-14 23:30:00
tags:
  - amd
  - dgf
  - dense-geometry-format
  - geometry-compression
  - vulkan
  - gpuopen
  - raytracing
  - rasterization
  - triangle-density
---

### Quick Report

AMD has officially announced Dense Geometry Format (DGF) 1.0, a block-based geometry compression technology designed to solve the "dense geometry problem" in modern graphics. DGF will be natively supported by future AMD GPU architectures and aims to dramatically reduce memory requirements for complex 3D models while maintaining rendering quality. The technology works by compressing triangle data into cache-aligned blocks, reducing data transfer bottlenecks for both rasterization and ray tracing workflows. AMD has released an SDK to help developers integrate DGF into their content pipelines, alongside a Vulkan® extension (VK_AMDX_dense_geometry_format) that enables acceleration structure builds directly from compressed data.

<!-- more -->

Modern game engines and rendering techniques are increasingly using extremely complex geometric models with millions of triangles. Systems like Nanite have raised the bar for model complexity through specialized compression formats that work well for rasterization but create challenges for ray tracing.

The fundamental issue, which AMD calls the "dense geometry problem," occurs because custom compression formats can't be directly consumed by current ray tracing APIs. This leads to several problems:

1. **Increased memory pressure** - Compressed geometry must be decoded into standard formats before building acceleration structures
2. **Build latency** - Decompression adds significant time to BVH (Bounding Volume Hierarchy) build process
3. **Performance bottlenecks** - Existing hardware acceleration structures are too large to efficiently support ultra-detailed content
4. **Workflow disruption** - Different compression requirements for rasterization vs. ray tracing

These issues can cause unstable frame rates and limit the geometric complexity that can be practically used in real-time applications that employ both rendering techniques.

DGF addresses these challenges by providing a hardware-friendly compression format that will be directly supported by future AMD GPU architectures. Key features include:

- **Block-based compression** - Packs triangles into cache-aligned structures for efficient memory access
- **One-transaction retrieval** - Enables triangles to be retrieved using a single memory transaction
- **Topology preservation** - Maintains mesh connectivity without requiring remeshing
- **Fine-grained precision control** - Allows developers to make targeted trade-offs between accuracy and memory consumption
- **Hardware acceleration** - Native GPU support to eliminate decompression overhead

According to AMD, DGF compression achieves competitive ratios while preserving important features like sharp corners, UV chart boundaries, and LOD cluster boundaries. The format is positioned as doing for geometry what formats like DXT, ETC, and ASTC have done for texture data.

**Written using GitHub Copilot Claude 3.7 Sonnet in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [AMD Dense Geometry Format SDK][def]
- [Solving the Dense Geometry Problem][def2]
- [AMD releases Vulkan support for Dense Geometry Format][def3]
- [VK_AMDX_dense_geometry_format appendix][def4]

[def]: https://gpuopen.com/dgf/
[def2]: https://gpuopen.com/learn/problem_increasing_triangle_density/
[def3]: https://gpuopen.com/learn/dense-geometry-format-amd-vulkan-extension/
[def4]: https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/VK_AMDX_dense_geometry_format.html
