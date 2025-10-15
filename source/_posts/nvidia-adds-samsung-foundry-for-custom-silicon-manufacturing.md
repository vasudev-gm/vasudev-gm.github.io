---
title: NVIDIA Adds Samsung Foundry for Custom Silicon Manufacturing
date: 2025-10-15 22:30:00
description: "NVIDIA expands NVLink Fusion ecosystem by adding Samsung Foundry for end-to-end design and manufacturing of custom CPUs and XPUs aimed at AI data centers."
tags:
  - nvidia
  - samsung
  - foundry
  - custom silicon
  - nvlink fusion
---

### Quick Report

TechPowerUp reports NVIDIA has added Samsung Foundry to its NVLink Fusion ecosystem, enabling Samsung to provide end-to-end design and manufacturing for custom CPUs and XPUs that interoperate with NVIDIA\'s NVLink-enabled MGX and OCP rack architectures. The collaboration promises faster prototyping, expanded fabrication capacity, and another route for hyperscalers seeking tighter CPU–GPU coupling.

<!-- more -->

The piece explains NVLink Fusion acts as an IP and chiplet framework: partners can design chips that speak NVIDIA\'s high-bandwidth fabric language but must integrate with NVIDIA\'s NVLink controllers, PHYs and switch chips. Samsung\'s entry brings both fabrication muscle and design services, shortening development cycles and reducing single-source risk — but partners remain bound by NVIDIA\\'s licensing and interface restrictions.

Key points:

- Samsung Foundry joins NVLink Fusion to offer design-through-manufacturing services for custom silicon targeting MGX and OCP racks.
- NVLink Fusion enables non-NVIDIA processors and accelerators to become first-class participants in NVIDIA\'s fabric, but requires adherence to NVIDIA\\'s proprietary controller/PHY and licensing.
- The collaboration should help hyperscalers and AI data centers prototype workload-specific hardware faster and access additional production capacity.

Bringing Samsung Foundry into NVLink Fusion is strategically significant: it adds a major fabs partner and design services capability, widening the ecosystem for custom silicon that tightly integrates with NVIDIA GPUs. For hyperscalers this reduces vendor lock-in risk and shortens time-to-volume for specialized XPUs and CPUs optimized for NVLink-C2C interconnects.

However, the proprietary nature of NVLink Fusion means partners still operate within NVIDIA\\'s ecosystem boundaries — they can build custom compute elements, but interoperability and critical link-management remain controlled by NVIDIA. That trade-off will matter for organizations balancing performance, control, and supplier diversity.

**Written using GitHub Copilot GPT-5 mini in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]
- [TrendForce][def2]

[def]: https://www.techpowerup.com/341889/nvidia-taps-samsung-foundry-for-custom-silicon-manufacturing
[def2]: https://www.trendforce.com/news/2025/10/14/news-nvidia-adds-samsung-foundry-to-nvlink-fusion-ecosystem-for-custom-silicon-manufacturing/
