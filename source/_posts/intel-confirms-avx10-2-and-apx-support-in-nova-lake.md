---
title: "Intel Confirms AVX10.2 and APX Support in Nova Lake"
date: 2025-11-15 00:05:00
description: "Intel officially confirms Nova Lake will support AVX10.2 and APX instruction sets, ending rumors and bringing 512-bit vector processing to all cores."
tags:
  - intel
  - nova-lake
  - avx10
  - avx-512
  - apx
  - cpu
  - instruction-set
  - x86
---

### Quick Report

Intel has officially confirmed that its next-generation Nova Lake processors will support AVX10.2 and APX instruction sets, ending months of speculation. The confirmation came through Intel\'s 60th Architecture Instruction Set Extensions and Future Features manual. This means both P-cores (Coyote Cove) and E-cores (Arctic Wolf) in Nova Lake will support 512-bit vector acceleration, a significant upgrade that brings advanced vector processing across the entire CPU lineup.
<!-- more -->

AVX10.2 mandates 512-bit AVX support on both performance and efficiency cores, making Nova Lake\'s rumored 52-core design highly capable for applications optimized for vector processing. This puts Intel on par with AMD, which introduced full native 512-bit AVX-512 support with Zen 5, eliminating the need to split operations into two 256-bit cycles. AMD has already confirmed AVX-512 and additional features for Zen 6, setting the stage for ongoing competition in advanced instruction sets for desktop CPUs. APX (Advanced Performance Extensions) will also be included, further enhancing Nova Lake\'s capabilities.

**Written using GitHub Copilot Claude Sonnet 4.5 in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][tpu]
- [@InstLatX64 on X][twitter]

[tpu]: https://www.techpowerup.com/342881/intel-officially-confirms-avx10-2-and-apx-support-in-nova-lake
[twitter]: https://x.com/InstLatX64/status/1988881875243340113
