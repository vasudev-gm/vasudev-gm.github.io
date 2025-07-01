---
title: Nvidia Volta and older GPUs will be deprecated post 580 driver releases
date: 2025-07-01 23:25:00
tags:
  - nvidia
  - drivers
  - volta
  - pascal
  - maxwell
  - gpu
  - linux
  - eol
  - legacy
---

### Quick Report

Nvidia has officially confirmed that the upcoming R580 driver series will be the last to support GPUs based on the Maxwell, Pascal, and Volta architectures. This announcement, posted on Nvidia\'s developer forums, signals the end of driver updates for these older GPU generations as the company focuses on supporting newer hardware platforms.

<!-- more -->
- **Affected Architectures**: Maxwell (GTX 900 series), Pascal (GTX 10 series), and Volta (Titan V, Tesla V100)
- **Final Support Version**: Driver series 580 will be the last official release for these GPUs
- **Timing**: The end-of-support timeline coincides with Nvidia\'s previous announcement that CUDA 12.x would be the last to support these architectures
- **Newer Platforms**: Focus shifting to Turing, Ampere, Ada Lovelace, and Blackwell architectures
- **Open Kernel Modules**: Starting with the 560 series, Nvidia is recommending the use of open-flavor Linux kernel modules for Turing and newer GPUs

This change will primarily affect users of older Nvidia graphics cards, including popular models like the GeForce GTX 970, GTX 1080, and professional cards like the Tesla V100. While these GPUs will continue to function with the final R580 drivers, they won't receive new features, optimizations, or security updates after this release.

For datacenter customers using Volta-based accelerators like the V100, this announcement provides important information for planning hardware refresh cycles and migration strategies. Many AI and HPC workloads have already been shifting to newer architectures like Ampere (A100) and Hopper (H100) due to their significant performance advantages.

Nvidia\'s Unix driver deprecation schedule also includes other notable changes:

- The 560 series will install open kernel modules by default when compatible GPUs are present
- The minimum supported Linux kernel version will increase to 4.15 after the 550 series
- The minimum X.Org server version will increase to 1.17 after the 580 series

**Written using GitHub Copilot Claude 3.7 Sonnet in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [Nvidia Developer Forums][def]
- [Phoronix][def2]
- [TPU][def3]

[def]: https://forums.developer.nvidia.com/t/unix-graphics-feature-deprecation-schedule/60588/12
[def2]: https://www.phoronix.com/news/NVIDIA-580-Linux-Driver-Last-HW
[def3]: https://www.techpowerup.com/338497/nvidias-v580-driver-branch-ends-support-for-maxwell-pascal-and-volta-gpus
