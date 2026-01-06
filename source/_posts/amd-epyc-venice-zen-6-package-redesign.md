---
title: "AMD reworks EPYC Venice packaging with Zen 6 for denser AI racks"
date: 2026-01-06 20:50:00
description: "AMD EPYC Venice with Zen 6 debuts a radical package: dual 4 nm server I/O dies, eight 2 nm CCDs, 256 cores/512 threads, 16-channel DDR5, higher PCIe/CXL."
tags:
	- amd
	- epyc
	- zen-6
	- venice
	- server
	- packaging
	- cxl
	- ddr5
	- mi455x
---

### Quick Report

AMD unveiled EPYC **Venice** with Zen 6 at CES 2026, showing a radical package redesign aimed at dense AI racks. The chip places two slender server I/O dies (sIODs) on 4 nm at the center, flanked by up to eight 2 nm compute chiplets (CCDs), enabling a 256-core/512-thread configuration per socket with a 16-channel DDR5 memory interface and significantly expanded PCIe/CXL connectivity.
<!-- more -->

The company showcased "Helios" racks pairing one EPYC Venice CPU with four MI455X GPUs per node, highlighting the platform\'s interconnect bandwidth goals. Each CCD reportedly carries 32 Zen 6 cores, while the dual sIOD layout disaggregates I/O for higher lane counts and fabric scalability. AMD\'s Venice design focuses on memory bandwidth (16 channels, 32 sub-channels) and broad device connectivity for AI accelerators, DPUs, and 800G NICs.

**Written using GitHub Copilot GPT-5 in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/344788/amd-zen-6-epyc-venice-introduces-a-radical-package-redesign
