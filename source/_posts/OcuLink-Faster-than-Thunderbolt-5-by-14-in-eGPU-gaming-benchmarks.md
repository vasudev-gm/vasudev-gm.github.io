---
title: OCuLink Faster than Thunderbolt 5 by 14% in eGPU gaming benchmarks
date: 2025-10-06 22:30:00
description: "Tom's Hardware reports OCuLink outperformed Thunderbolt 5 in RTX 5070 Ti eGPU tests, delivering higher bandwidth and roughly 13–14% better average gaming performance in a 12-game test set."
tags:
  - oculink
  - thunderbolt 5
  - egpu
  - benchmarks
  - rtx 5070 ti
  - rtx
  - gaming
  - ai
---

### Quick Report

Tom\'s Hardware summarized tests showing OCuLink outperformed Thunderbolt 5 when an Nvidia GeForce RTX 5070 Ti was used as an external GPU. In raw throughput measurements OCuLink recorded roughly 6.6–6.7 GB/s while Thunderbolt 5 peaked around 5.6–5.8 GB/s. Across a 12-game suite the TB5 configuration trailed OCuLink by about 13%–14% on average, with heavier losses in demanding titles such as Spider-Man: Miles Morales and Red Dead Redemption 2.

<!-- more -->

Try Some Tech\'s practical tests used an Intel Core Ultra 7 265K host and an eGPU enclosure (PELADN Link S-3) to compare native, OCuLink and TB5-connected configurations. The setup shows that raw PCIe connectivity (OCuLink) avoids some protocol overhead present in TB5, delivering higher effective bandwidth and lower latency for graphics workloads. TB5 narrows the gap compared to TB4, but the added protocol layers still cost performance in eGPU scenarios.

The benchmarks revealed:

- OCuLink host-to-device: ~6.6 GB/s; device-to-host: ~6.7 GB/s.
- Thunderbolt 5 host-to-device: ~5.6 GB/s; device-to-host: ~5.8 GB/s.
- Average gaming performance: TB5 ~13%–14% slower than OCuLink across 12 titles.
- Worst-case deltas: Spider-Man: Miles Morales (~20% drop for TB5 vs OCuLink) and Red Dead Redemption 2 (~23% drop).

Tom\'s Hardware and Try Some Tech note that OCuLink is not a consumer-facing connector and its adoption is limited, so the practical choice for most users remains Thunderbolt (4/5). OCuLink, however, remains the performance leader where compatible hardware and cables exist.

OCuLink is effectively a more native PCIe connection with less encapsulation overhead than Thunderbolt. That delivers higher sustained throughput and lower latency — both important for eGPU gaming. TB5 adds features (display and charging over USB-C style connectors) but introduces protocol layers that reduce effective PCIe bandwidth compared to a direct OCuLink link.

Practical considerations:

- Adoption: OCuLink is rare on laptops and consumer hardware; TB5 is far more practical for plug-and-play external GPU use.
- Cables and enclosures: The PELADN Link S-3 used in the tests required vendor-specific arrangements; results can vary with cable quality and enclosure firmware.
- Workloads: The gap is larger in GPU-bound, high-bandwidth titles. Titles hitting CPU limits show similar behavior across all interfaces.

Edge cases and unknowns:

- Results used an RTX 5070 Ti; behavior might differ with higher-end GPUs or different host CPUs.
- Future TB5 implementations or vendor firmware might close the protocol-overhead gap.

**Written using GitHub Copilot Claude Sonnet-4 in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [Tom\'s Hardware — OCuLink outpaces Thunderbolt 5 in Nvidia RTX 5070 Ti tests — latter up to 14% slower on average in gaming benchmarks][def]
- [Try Some Tech — YouTube tests referenced in Tom\'s Hardware article][def2]
- [TPU][def3]

[def]: https://www.tomshardware.com/pc-components/gpus/oculink-outpaces-thunderbolt-5-in-nvidia-rtx-5070-ti-tests-latter-up-to-14-percent-slower-on-average-in-gaming-benchmarks
[def2]: https://www.youtube.com/watch?v=fJxafsLZu7U
[def3]: https://www.techpowerup.com/341632/external-gpu-connection-battle-oculink-beats-thunderbolt-5-by-about-16
