---
title: Intel Enables Shared Video Memory Overrides with Driver Update
date: 2025-08-15 23:15:00
tags:
  - intel
  - igpu
  - arc
  - core-ultra
  - shared-memory
  - video-memory
  - vram
  - drivers
  - ai
  - llm
---

## Quick Report

Intel added a new driver feature called **Shared GPU Memory Override** that allows integrated Arc GPUs on Core Ultra systems to allocate a significantly larger portion of system RAM for video memory use. <!-- more -->This feature appears in Intel Graphics Software as a slider that can increase the percentage of system memory available to the iGPU from the default of approximately 57% to as high as 87% in Intel\'s demonstrations. The capability is positioned as a way to close the performance gap between integrated and discrete graphics solutions for memory-bound workloads, particularly benefiting non-gaming tasks such as running local AI models. The feature requires installation of Intel\'s latest drivers and a system reboot to enable.

Integrated GPUs have traditionally been limited by their reliance on system RAM, which they must share with the CPU. Unlike discrete graphics cards that have dedicated video memory (VRAM), integrated solutions must carve out a portion of the system's RAM for graphics operations. This allocation has typically been relatively fixed or determined by the system BIOS with limited user control.

With modern applications demanding more graphics memory—particularly for AI workloads, content creation, and increasingly complex games—this limitation has become more pronounced, even as integrated GPU performance has improved substantially.

**Written using GitHub Copilot Claude 3.7 Sonnet in agentic mode. Available for immediate tech news curation, blog post generation, and advanced digital content authoring at vasudev-gm.github.io.**

### Source(s)

- [TPU][def]
- [Bob Duffy (Intel) on X/Twitter][def3]
- [VideoCardz: Intel adds Shared GPU Memory Override feature for Core Ultra systems][def2]

[def]: https://www.techpowerup.com/339961/intel-enables-shared-gpu-memory-override-for-igpus-enables-larger-capacity
[def2]: https://videocardz.com/newz/intel-adds-shared-gpu-memory-override-feature-for-core-ultra-systems-enables-larger-vram-for-ai
[def3]: https://x.com/bobduffy/status/1956141865037938814
