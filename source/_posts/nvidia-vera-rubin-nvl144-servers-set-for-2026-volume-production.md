---
title: "NVIDIA Vera Rubin NVL144 Servers Set for 2026 Volume Production"
date: 2025-10-20 23:30:00
description: "Foxconn starts validation for NVIDIA's Vera Rubin NVL144 racks with 144 GPUs and HBM4 memory, doubling compute density for late 2026 volume production."
tags:
  - nvidia
  - vera-rubin
  - rubin
  - nvl144
  - foxconn
  - ai-servers
  - hbm4
  - datacenter
---

### Quick Report

Foxconn has commenced engineering validation for NVIDIA\'s Vera Rubin NVL144 MGX liquid-cooled server racks, with mass production scheduled for the second half of 2026 according to Taiwan supply-chain sources. Each NVL144 unit will pack 144 Rubin GPUs equipped with next-generation HBM4 memory, updated 88-core Vera CPUs, and NVLink 6 interconnect technology—effectively doubling the compute density of current NVL72 Blackwell systems. This represents NVIDIA\'s fastest generational transition, with only six to eight months between GB300 peak shipments and Rubin\'s first silicon.

<!-- more -->

NVIDIA\'s Vera Rubin architecture represents the successor to Blackwell, continuing the company\'s tradition of naming datacenter GPU platforms after prominent astronomers and physicists. The NVL144 configuration combines several key technologies:

- **144 Rubin GPUs**: Doubles the compute density of current NVL72 Blackwell racks
- **HBM4 memory**: Next-generation high-bandwidth memory offering improved capacity and bandwidth over HBM3e
- **88-core Vera CPUs**: Enhanced ARM-based processors for system management and networking
- **NVLink 6 interconnect**: Latest iteration of NVIDIA\'s GPU-to-GPU and CPU-to-GPU communication fabric
- **ConnectX-9 NICs**: Advanced network adapters for datacenter connectivity
- **Liquid cooling**: Immersion or direct-to-chip cooling required for the increased power density

The platform uses NVIDIA\'s MGX modular system architecture, allowing server manufacturers like Foxconn to customize rack configurations for different customer requirements while maintaining compatibility across the ecosystem.

Foxconn currently handles approximately 60% of NVIDIA\'s AI server production, making it the dominant manufacturing partner for datacenter GPU systems. The company is expanding infrastructure to support Vera Rubin\'s demanding requirements:

- **Immersion cooling facilities**: Specialized production lines for liquid-cooled server assemblies
- **Copper plating capacity**: Enhanced capabilities for high-density interconnect substrates
- **Domestic manufacturing**: Expanding Wisconsin and Houston facilities to meet new geographic requirements
- **Quality validation**: Engineering validation testing (EVT) to verify design before mass production

These investments reflect the complexity of modern AI servers, which require specialized manufacturing techniques beyond traditional electronics assembly. Liquid cooling systems demand precise machining, leak testing, and fluid management that differ significantly from air-cooled server production.

The gap between Blackwell\'s GB300 peak shipments and Rubin\'s initial silicon represents NVIDIA\'s fastest generational transition:

- **Hopper to Blackwell**: Approximately 18 months between H100 and B100 volume production
- **Blackwell to Rubin**: Only 6-8 months between GB300 peak and Rubin samples
- **Market implications**: Shortened depreciation cycles for hyperscale operators
- **Software challenges**: Reduced time for ecosystem optimization and customer validation

This acceleration puts pressure on cloud providers and enterprises that invested heavily in Hopper or Blackwell deployments. Traditional datacenter hardware depreciated over 3-5 years, but the rapid pace of AI accelerator development compresses that timeline to 18-24 months or less.

Despite Rubin\'s imminent arrival, Blackwell remains NVIDIA\'s primary revenue driver through mid-2026. Supply-chain data indicates robust demand:

- **400,000 GB300 nodes**: Reserved by cloud providers for late 2025 and early 2026 delivery
- **Blackwell Ultra**: Incremental update to Blackwell architecture before Rubin transition
- **OpenAI preorders**: Large volumes of Vera Rubin silicon already committed for initial production
- **Mainstream adoption**: Blackwell achieving full production scale in Q1-Q2 2026

Foxconn\'s capacity investments support both Blackwell ramp-up and Rubin preparation simultaneously, reflecting NVIDIA\'s multi-generation production strategy where new architectures begin manufacturing while previous generations remain in high volume.

The rapid hardware evolution creates several challenges for the AI infrastructure market:

**For cloud providers**: Balancing current-generation purchases against imminent next-generation availability requires careful capacity planning. Over-investing in soon-to-be-superseded hardware reduces ROI, while under-investing risks losing customers to competitors with newer technology.

**For NVIDIA**: Maintaining margins while accelerating development increases R&D costs and shortens revenue windows for each architecture. However, the company\'s dominant market position (94% discrete GPU share as of Q3 2025) allows premium pricing that offsets these pressures.

**For customers**: Training large models on Hopper or Blackwell infrastructure that will be obsoleted by Rubin within 18 months forces difficult decisions about whether to delay projects, accept lower performance, or plan for hardware refreshes mid-project.

**For the environment**: The energy consumption of AI datacenters continues climbing despite efficiency improvements, as total compute capacity grows faster than per-GPU efficiency gains.

**Written using GitHub Copilot Sonnet 4.5 in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [Taiwan Economics Daily][def]
- [Wccftech][def2]
- [TPU][def3]

[def]: https://money.udn.com/money/story/5612/9080853?from=edn_subcatelist_cate
[def2]: https://wccftech.com/nvidia-vera-rubin-ai-servers-are-already-in-development-by-foxconn/
[def3]: https://www.techpowerup.com/342049/nvidia-vera-rubin-nvl144-servers-set-for-2026-volume-production
