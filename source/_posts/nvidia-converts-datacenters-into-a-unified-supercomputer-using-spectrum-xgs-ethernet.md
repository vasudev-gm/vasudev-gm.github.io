---
title: NVIDIA Converts Datacenters into a Unified Supercomputer using Spectrum-XGS Ethernet
date: 2025-08-23 13:00:00
description: "NVIDIA introduces Spectrum-XGS Ethernet technology to connect geographically distributed data centers into unified AI super-factories, enabling giga-scale computing."
tags:
  - nvidia
  - spectrum xgs
  - ethernet
  - datacenter
  - networking
  - ai
  - supercomputer
  - coreweave
  - infrastructure
  - scale across
  - token factory
---

### Quick Report

NVIDIA has unveiled Spectrum-XGS Ethernet, a groundbreaking extension of its Spectrum-X networking platform designed to interconnect multiple, geographically separated data centers into unified, giga-scale AI super-factories.

<!-- more -->

The technology introduces what NVIDIA calls **scale-across** infrastructure—a new paradigm beyond traditional scale-up (within servers) and scale-out (within data centers) approaches. Spectrum-XGS delivers predictable, low-latency performance across campuses, cities, and even continents by incorporating distance-aware networking algorithms. CoreWeave, a leading cloud infrastructure provider, will be among the first to deploy this technology, enabling its distributed facilities to function as a single supercomputer.

NVIDIA\'s Spectrum-XGS Ethernet represents a significant advancement in data center networking technology that addresses a growing challenge in AI infrastructure deployment. As AI demand surges and individual data centers reach their power and space capacity limits, operators need ways to scale beyond single facilities. Traditional Ethernet solutions aren\'t optimized for the extreme performance requirements of distributed AI workloads, often introducing excessive latency, jitter, and unpredictable performance across long distances.

The most remarkable aspect of Spectrum-XGS is that it\'s primarily delivered through software and firmware updates to existing Spectrum-X switches and ConnectX SuperNICs, rather than requiring entirely new silicon. This approach allows data center operators to leverage their existing hardware investments while gaining transformative new capabilities.

According to NVIDIA CEO Jensen Huang
> The AI industrial revolution is here, and giant-scale AI factories are the essential infrastructure. With NVIDIA Spectrum-XGS Ethernet, we add scale-across to scale-up and scale-out capabilities to link data centers across cities, nations and continents into vast, giga-scale AI super-factories.

Spectrum-XGS introduces several technical innovations that enable its distance-spanning capabilities:

1. **Auto-adjusted congestion control** specifically optimized for long-haul links, which dynamically adapts to the physical distance between facilities

2. **Precision latency management** to minimize jitter and ensure consistent performance for time-sensitive AI operations

3. **Comprehensive end-to-end telemetry** that allows operators to visualize and control network traffic across multiple sites

NVIDIA reports these advancements nearly double the performance of the NVIDIA Collective Communications Library (NCCL) for multi-GPU, multi-node training jobs and large-scale experiments. This improvement significantly enhances efficiency for distributed AI workloads, enabling researchers and enterprises to run larger models and more complex simulations than previously possible.

The implications of Spectrum-XGS extend beyond just technical improvements—they potentially reshape how AI infrastructure is planned and deployed. Rather than building ever-larger single facilities, organizations can now distribute computing resources across multiple locations while maintaining performance characteristics similar to a single facility.

CoreWeave is positioned to be an early adopter of this technology. Peter Salanki, cofounder and CTO of CoreWeave, stated:
> With NVIDIA Spectrum-XGS, we can connect our data centers into a single, unified supercomputer, giving our customers access to giga-scale AI that will accelerate breakthroughs across every industry.

This approach offers several advantages:

- **Power distribution**: Organizations can work within the power constraints of individual regions while still creating massive virtual computing facilities
- **Geographic redundancy**: Distributing resources across locations improves disaster recovery capabilities
- **Reduced latency to end-users**: Computing resources can be positioned closer to users while still functioning as part of the larger system
- **Regulatory compliance**: Data can remain in specific jurisdictions as required by law while still participating in larger training runs

For AI researchers and enterprises deploying large language models and other compute-intensive AI applications, these advances mean they\'ll soon be able to access computational resources at scales that were previously unimaginable. As NVIDIA noted in their announcement, with Spectrum-XGS, "only the sky (and the power grid) is the limit."

**Written using GitHub Copilot Claude 3.7 Sonnet in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

[TechPowerUp][def]
[NVIDIA][def2]

[def]: https://www.techpowerup.com/340218/nvidia-links-data-centers-into-a-unified-supercomputer-with-spectrum-xgs-ethernet
[def2]: https://nvidianews.nvidia.com/news/nvidia-introduces-spectrum-xgs-ethernet-to-connect-distributed-data-centers-into-giga-scale-ai-super-factories