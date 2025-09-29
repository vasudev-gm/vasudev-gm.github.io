---
title: Intel Panther Lake Stepping B0_3 Revealed in Coreboot Patches
date: 2025-09-29 23:55:00
description: "Coreboot firmware patches reveal a PTL_B0_3 (C06C3) stepping for Intel's Panther Lake family, suggesting a near-final silicon revision ahead of shipments."
tags:
  - intel
  - panther lake
  - coreboot
  - firmware
  - cpu
---

### Quick Report

Coreboot patches have revealed a new PTL_B0_3 (C06C3) stepping for Intel\'s Panther Lake processors, indicating Intel may be finalizing the silicon ahead of shipments expected by the end of 2025 for some SKUs. The B0 stepping typically reflects a mature revision, and its appearance in open-source firmware suggests engineers are preparing platform support for imminent launches.

<!-- more -->

The leaked metadata references PTL-U low-power models (15 W TDP) with 6-core and 8-core variants, configurations mixing P-cores and LPE cores, and Xe3-based integrated graphics with up to four GPU cores on entry models. Panther Lake\'s PTL-H family is expected to scale higher in core counts and GPU capability, with some SKUs potentially shipping up to 16 CPU cores and up to 12 Xe3 GPU cores in higher-end H-series parts.

Silicon steppings usually start at A0 and iterate; B0 signals maturation toward final production-ready revisions. Coreboot\'s patch visibility gives motherboard and firmware developers early sight lines to upcoming platform support needs and helps vendors prepare UEFI/BIOS updates.

Potential implications:

- OEM readiness: Early firmware patches mean system integrators and board vendors can begin validation earlier, shortening time-to-market.
- Platform support: Coreboot entries often precede official firmware releases, enabling quicker support for open firmware platforms.
- SKU timing: The presence of B0_3 hints some Panther Lake parts could begin shipping in late 2025 with more models following into 2026.

**Written using GitHub Copilot GPT-5 mini in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TechPowerUp][def]
- [@InstLatX64 on X][def2]

[def]: https://www.techpowerup.com/341446/intel-panther-lake-b0-3-stepping-surfaces-in-firmware-patches
[def2]: https://x.com/InstLatX64/status/1971924499630293283
