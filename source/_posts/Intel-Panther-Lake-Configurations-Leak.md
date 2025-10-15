---
title: Intel Panther Lake Configurations Leak
date: 2025-10-06 21:00:00
description: "Leaked Panther Lake Core Ultra X9/X7/X5 H and U configurations reveal P, E and LPE core mixes and Xe3 iGPU counts for Intel's 18A mobile parts."
tags:
  - intel
  - panther lake
  - core ultra
  - leaks
  - ultra x
  - xe3
  - celestial
---

### Quick Report

A set of leaked configurations for Intel\'s upcoming **Panther Lake** Core Ultra X and Core Ultra series has surfaced, showing both H and U variants and a substantial rework of core mixes and iGPU counts. The top-tier X9/X7/X5 H parts reportedly include P-cores, E-cores and separate LPE (low-power) cores alongside beefed-up 12 Xe3 iGPU cores on X SKUs, while the regular H and U SKUs show fewer Xe3 cores and different core balances.

<!-- more -->

According to the leak, the Core Ultra X9 388H, X7 368H and X7 358H will pack a hybrid setup with 4 P-cores, 8 E-cores and 4 LPE-cores coupled with 12 Xe3 GPU cores. The Core Ultra X5 338H drops the E-core count to 4 and the Xe3 iGPU to 10. The standard PTL-H (non-X) SKUs such as the Core Ultra 9 375H and Core Ultra 7 355H use 4 Xe3 GPU cores and retain the 4 P / 8 E / 4 LPE arrangement on the higher-end parts.

On the low-power PTL-U side the leaked list shows Core Ultra 7 360U, Core Ultra 5 350U, Core Ultra 5 340U and Core Ultra 3 320U with a simplified layout: P-cores plus LPE cores and no E-cores, and 4 Xe3 cores on the iGPU.

These configurations were catalogued by TechPowerUp, which cites social and community sources (Golden Pig Upgrade on Weibo, Chiphell) and includes images and a full SKU listing. As always with early leaks, retail SKUs, clocks, and final power envelopes can change before launch.

What stands out is Intel\'s continued reliance on a multi-island, multi-core strategy: a mix of P (performance), E (efficiency), and LPE (ultra-low-power) cores gives the company finer-grained control over power and performance scaling across devices. The LPE cores appear consistently across both H and U families, suggesting Intel expects these cores to play a larger role in background and low-power tasks.

The X-branded SKUs appear aimed at significantly higher integrated graphics capability, with 12 Xe3 cores compared to 4 (or 10 in one X5 SKU) in other parts. That should help Intel compete in thin-and-light machines and handheld gaming devices where discrete GPUs aren\'t present, but real-world performance will depend on clocks, memory bandwidth (LPDDR5X vs LPDDR5), and power limits set by OEMs.

Notably, some community discussion points to a wide range of possible power envelopes — one community-cited coreboot reference even shows code paths indicating higher boost power limits — but code in a repo isn\'t a guarantee of final OEM configurations. Panther Lake being Intel\'s first major 18A-node product means expectations for efficiency and IPC improvements are high; however, process-level advantages (or shortcomings) versus competitors will influence final competitiveness.

**Written using GitHub Copilot GPT-5 mini in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]
- [Golden Pig Upgrade (Weibo)][def2]
- [Chiphell][def3]

[def]: https://www.techpowerup.com/341619/intel-core-ultra-x9-x7-x5-panther-lake-h-and-panther-lake-u-configurations-leak
[def2]: https://weibo.com/3219724922/Q7qj7C7JH
[def3]: https://www.chiphell.com/thread-2747417-1-1.html
