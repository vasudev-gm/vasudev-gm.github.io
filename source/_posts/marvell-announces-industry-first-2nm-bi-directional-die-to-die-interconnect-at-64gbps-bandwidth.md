---
title: Marvell Announces Industry First 2nm Bi-Directional Die to Die Interconnect at 64Gbps Bandwidth
date: 2025-08-26 14:00:00
description: "Marvell unveils groundbreaking 2nm 64 Gbps bi-directional die-to-die interconnect technology with 3x bandwidth density of equivalent UCIe interfaces for next-gen XPUs."
tags:
  - marvell
  - interconnect
  - die to die
  - d2d
  - 2nm
  - xpu
  - bandwidth
  - ai
  - semiconductor
  - chiplet
---

### Quick Report

Marvell Technology has announced the industry\'s first 2nm 64 Gbps bi-directional die-to-die (D2D) interconnect technology, designed to significantly enhance the performance and efficiency of next-generation XPUs. This breakthrough interface delivers 32 Gbps of simultaneous two-way connectivity over a single wire and offers bandwidth density exceeding 30 Tbps/mm—more than three times that of equivalent Universal Chiplet Interconnect Express (UCIe) interfaces. The technology also features advanced adaptive power management that automatically adjusts to data center traffic patterns, reducing power consumption by up to 75% during normal workloads and 42% during peak periods. The new D2D interface is available in both 2nm and 3nm process nodes.

<!-- more -->

Die-to-die interconnects have become increasingly critical in modern semiconductor design as chipmakers move away from monolithic designs toward chiplet-based architectures. These interfaces function as the communication highways between different silicon dies within the same package, enabling modular chip designs that can overcome the limitations of traditional single-die approaches.

Marvell\'s new 64 Gbps bi-directional D2D interface represents a significant advance in this field, particularly as the industry pushes toward more complex AI accelerators and heterogeneous computing solutions. The bi-directional nature of the technology—allowing 32 Gbps of data to flow simultaneously in both directions on a single wire—is particularly noteworthy as it effectively doubles the wire efficiency compared to conventional approaches.

Excerpt from Marvell:
> The 64 Gbps bi-directional D2D interface IP marks an industry first and reflects our commitment to pioneering technologies that enhance performance while reducing total cost of ownership for next-generation AI devices," said Will Chu, senior vice president of Custom Cloud Solutions at Marvell. "By delivering higher bandwidth at lower power, we are enabling customers to scale their architectures to meet the demands of tomorrow\'s accelerated computing era.

While the headline 64 Gbps speed is impressive, Marvell\'s implementation offers several additional technical advantages that address critical challenges in advanced computing:

1. **Minimal Die Area Requirements**: The interface requires just 15% of the compute die area compared to conventional implementations, freeing up valuable silicon space for cores, caches, or other functional blocks.

2. **Advanced Power Management**: The interface includes intelligent power management that can detect and adapt to the bursty traffic patterns typical in data centers. This results in significant power savings—up to 75% during normal workloads and 42% during peak periods—compared to interfaces without adaptive capabilities.

3. **Enhanced Reliability**: The technology incorporates redundant lanes and automatic lane repair capabilities, which can improve manufacturing yields and reduce bit-error rates by eliminating weak links in the system.

4. **Complete Solution Stack**: Marvell is providing not just the physical layer interface but a complete solution that includes the application bridge, link layers, and physical interconnect, offering customers a turnkey platform to reduce time-to-market.

By significantly outperforming current industry standards like UCIe while reducing power consumption and silicon area requirements, Marvell\'s technology helps address key challenges in scaling AI and high-performance computing solutions. This could potentially accelerate the development of more powerful and efficient XPUs for a wide range of applications, from data center AI to edge computing.

**Written using GitHub Copilot Claude 3.7 Sonnet in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [Marvell Technology][def]
- [TPU][def2]
- [Marvell AI Event Slides][def3]

[def]: https://www.marvell.com/company/newsroom/marvell-unveils-64gbps-bidirectional-die-to-die-interface-ip-2nm-xpu.html
[def2]: https://www.techpowerup.com/340333/marvell-unveils-industrys-first-64-gbps-wire-bi-directional-die-to-die-interface-ip-in-2nm-to-power-next-generation-xpus
[def3]: https://www.marvell.com/content/dam/marvell/en/company/assets/marvell-custom-ai-investor-event-2025.pdf
