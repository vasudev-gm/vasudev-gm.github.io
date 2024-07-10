---
title: >-
  AMD Released updated FidelityFX SDK v1.1 and FSR 3.1 Source Code added to
  GPUOpen Initiative
date: 2024-07-10 21:36:46
tags:
  - AMD
  - FidelityFX
  - FSR
  - GPUOpen
  - FSR 3.1
  - Frame Generation
  - Upscaling
  - Super Resolution
  - Open Source
---

### Quick Report

AMD has released an updated version of its FidelityFX SDK, version 1.1, and has added the source code for FSR 3.1 to its GPUOpen initiative. The FidelityFX SDK is a collection of tools and libraries that help developers create high-quality visual effects in their games. FSR (FidelityFX Super Resolution) is a cutting-edge technology that uses advanced algorithms to upscale lower-resolution images to higher resolutions, providing a significant performance boost for gamers. The new version of the FidelityFX SDK includes several new features and improvements, including support for the latest graphics APIs and new effects such as FidelityFX [Brixelizer][def] GI.

The star of the release was its updated upscaler which fixes major issues related to ghosting and artifacts in FSR 2.2 and decoupled Frame Generation from upscaling and presents the users to use either NVIDIA DLSS, Intel XeSS or FSR 3.1 for upscaling. The new version also includes support for the latest graphics APIs, including DirectX 12 and Vulkan. So, a win-win situation for people with older RTX 30 series which did not make the cut for supporting DLSS 3 Frame Generation.

Press release for FidelityFX 3.1 can be found at [GPUOpen][def2] and source code at [GitHub][def3]

### Source(s)

- [TPU Article][def4]
- [GPUOpen][def2]
- [GitHub][def3]
- [FidelityFX Brixelizer][def]

[def]: https://gpuopen.com/learn/getting-the-most-out-of-fidelityfx-brixelizer/
[def2]: https://gpuopen.com/learn/amd_fsr_3_1_release/
[def3]: https://github.com/GPUOpen-LibrariesAndSDKs/FidelityFX-SDK
[def4]: https://www.techpowerup.com/324296/amd-releases-fidelityfx-sdk-v1-1-to-gpuopen-includes-fsr-3-1-source-code
