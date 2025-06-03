---
title: >-
  Microsoft Agility SDK Update 1.7 Preview Brings Shader Execution, Co-Op Vectors,
  Opacity Micromaps and Tiled Resource 4 Support
date: 2025-06-03 22:34:11
tags:
  - Microsoft
  - Agility SDK
  - Shader Execution
  - Co-Op Vectors
  - Opacity Micromaps
  - Tiled Resource
  - microsoft
  - omm
  - nvidia
  - intel
  - amd
---

### Quick Report

Microsoft has released the Agility SDK Update 1.7 Preview, which introduces several new features and improvements for developers working with DirectX 12. Key highlights include:

- **Shader Execution**: Enhancements to shader execution capabilities, allowing for more efficient and flexible rendering by re-organizing the order in which shader threads execute.
- **Co-Op Vectors**: Introduction of cooperative vectors, which enable better AI based effects processing.
- **Opacity Micromaps (OMMs)**: OMMs is a new feature in DirectX Raytracing that takes advantage of hardware accelerated alpha testing during raytracing workloads. This reduces AnyHit shader invocations, which boosts efficiency without sacrificing visual quality in heavily **path traced games** by 2.3x on average.
- **Tiled Resource 4 Support**: Enhanced support for tiled resources, allowing for more efficient memory usage and rendering performance.
- **Compatibility**: The update is compatible with NVIDIA, Intel, Qualcomm ARM and AMD hardware, ensuring broad support across different platforms.
- **Direct3D Video Encoding Updates**: Improvements to Direct3D video encoding capabilities, enhancing video processing performance.
<!-- more -->

The updated driver for Intel Arc can be downloaded from the [Intel Graphics Driver Download Center][def2]. NVIDIA will support these SDK features and did not publish any link for updated driver while AMD is expected to release their updated drivers early June 2025. Qualcomm ARM has not yet provided a timeline for their driver update.

You can find the full details of the update in the [official release notes][def].

### Source(s)

- [Microsoft DevBlogs][def]
- [TPU][def3]

[def]: https://devblogs.microsoft.com/directx/agility-sdk-1-717-preview-and-1-616-retail/
[def2]: http://intel.com/arcdrivers
[def3]: https://www.techpowerup.com/337553/microsofts-agility-sdk-update-brings-shader-execution-reordering-opacity-micromaps-and-tiled-resource-tier-4-support