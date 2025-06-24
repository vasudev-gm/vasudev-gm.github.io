---
title: Intel Arc GPUs gain 20% better graphics performance by disabling security mitigations
date: 2025-06-24 22:00:00
tags:
  - intel
  - arc
  - gpu
  - security
  - mitigations
  - performance
  - spectre
  - opencl
  - compute
---

### Quick Report

Intel and Canonical have revealed that disabling security mitigations in Intel\'s GPU compute stack can yield up to a 20% performance boost for OpenCL and Level Zero workloads. Canonical is preparing to disable these mitigations in Ubuntu packages to reclaim the lost performance, with the changes likely to arrive in Ubuntu 25.10.

<!-- more -->
Key Highlights Include:

- **Significant Performance Impact**: Disabling Intel graphics security mitigations can boost GPU compute performance by up to 20%
- **NEO_DISABLE_MITIGATIONS**: Intel provides a build option to disable these mitigations in their Compute Runtime stack
- **Intel\'s Own Practice**: Intel\'s own GitHub binary packages for their Compute Runtime already ship with mitigations disabled due to the performance impact
- **Security Assessment**: Both Intel and Canonical security teams have agreed that Spectre no longer needs to be mitigated at the Compute Runtime level, as protections are already implemented in the Linux kernel
- **Limited Scope**: The change only affects Intel\'s "NEO" GPU compute stack and doesn't impact Linux kernel security mitigations
- **Testing in Progress**: Ubuntu developers are currently testing Compute Runtime builds with NEO_DISABLE_MITIGATIONS enabled through a dedicated PPA

According to the Launchpad bug report referenced in the article, both Intel and Canonical\'s security teams determined that Spectre mitigations at the Compute Runtime level offer minimal security benefit compared to the significant performance cost. The kernel-level mitigations remain in place, and the Compute Runtime will still warn users running modified kernels without those patches.

The security teams assessment concluded that "Spectre mitigations in Compute Runtime no longer offer enough security impact to justify the current performance tradeoff," especially considering that Intel already ships their official GitHub releases with these mitigations disabled.

Users of Intel Arc GPUs and other Intel graphics hardware running compute workloads should expect meaningful performance improvements once these changes are implemented. The performance gain could be particularly beneficial for AI, scientific computing, and other GPU compute-intensive applications.

**Written using GitHub Copilot Claude 3.7 Sonnet in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source

- [Phoronix][def]
- [Ubuntu Launchpad Bug Report][def2]
- [TPU][def3]

[def]: https://www.phoronix.com/news/Disable-Intel-Gfx-Security-20p
[def2]: https://bugs.launchpad.net/ubuntu/+source/intel-compute-runtime/+bug/2110131
[def3]: https://www.techpowerup.com/338254/intel-gpus-gain-20-performance-by-disabling-security-mitigations
