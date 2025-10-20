---
title: "Longsys Announces Industry's First Integrated-Packaging mSSD"
date: 2025-10-21 00:30:00
description: "Longsys debuts chip-level micro SSD using System-in-Package tech, eliminating PCBs and solder joints while delivering PCIe Gen 4 speeds in compact 20×30mm form."
tags:
  - longsys
  - mssd
  - sip
  - system-in-package
  - pcie-gen-4
  - nand
  - ssd
  - storage
---

### Quick Report

Longsys has unveiled the industry\'s first integrated-packaging micro SSD (mSSD), employing wafer-level System-in-Package (SiP) technology to eliminate traditional PCB assembly. The compact 20×30×2mm device integrates controller, NAND flash, power management, and passive components into a single chip-level package, removing nearly 1,000 solder joints while achieving PCIe Gen4 ×4 performance with up to 7400 MB/s reads and 6500 MB/s writes. The design reduces manufacturing defects from ≤1000 DPPM to ≤100 DPPM, cuts production costs by over 10%, and supports capacities from 512 GB to 4 TB with modular heatsinks enabling M.2 2230/2242/2280 form factor compatibility.

<!-- more -->

Traditional SSDs consist of multiple discrete components—controller chip, NAND flash packages, DRAM cache (if present), power management IC, and various passive components—all mounted on a printed circuit board. This architecture requires surface-mount technology (SMT) assembly processes with hundreds or thousands of solder joints, each representing a potential failure point.

Longsys\'s integrated approach uses System-in-Package (SiP) technology to combine these components at the wafer level before final packaging. This method:

- **Eliminates the PCB**: Components integrate directly into a chip-level package
- **Removes ~1,000 solder joints**: Reduces interconnection complexity and failure modes
- **Improves reliability**: Defect rate drops from ≤1000 DPPM to ≤100 DPPM
- **Streamlines manufacturing**: Bypasses multiple SMT and reflow steps
- **Reduces costs**: Over 10% lower production costs compared to PCB-based designs
- **Decreases environmental impact**: Lower energy consumption and carbon emissions during manufacturing

The 20 × 30 × 2.0 mm package weighs just 2.2 grams yet delivers full PCIe Gen 4 ×4 NVMe performance. Despite the compact dimensions, the mSSD includes aluminum frame construction, a graphene thermal pad, and thermal silicone for heat dissipation—critical for maintaining performance during sustained workloads.

Performance and Specifications:

The integrated design doesn\'t compromise performance. Longsys\'s mSSD achieves specifications comparable to traditional M.2 SSDs:

- **Sequential read**: Up to 7,400 MB/s
- **Sequential write**: Up to 6,500 MB/s
- **Random read**: Up to 1,000,000 IOPS
- **Random write**: Up to 820,000 IOPS
- **Interface**: PCIe Gen 4 ×4 NVMe
- **NAND types**: TLC and QLC configurations available
- **Capacities**: 512 GB, 1 TB, 2 TB, 4 TB options

These figures place the mSSD in the high-performance tier of consumer SSDs, suitable for gaming, content creation, and general computing applications. The 4K random performance particularly matters for operating system responsiveness and application loading—areas where many QLC drives struggle.

Form Factor Flexibility:

One of the mSSD\'s most practical features is its modular heatsink system. The base 20×30mm package can attach to clip-on heatsinks that convert it into standard M.2 form factors:

- **M.2 2230**: 22mm × 30mm (common in handhelds and thin laptops)
- **M.2 2242**: 22mm × 42mm (used in some ultrabooks)
- **M.2 2280**: 22mm × 80mm (desktop and laptop standard)

This versatility allows a single SKU to serve multiple market segments. Manufacturers can stock the base mSSD package and apply appropriate heatsinks based on customer requirements, simplifying inventory management and potentially reducing time-to-market for new products.

Manufacturing Advantages:

The shift from PCB-based to chip-level integration offers several production benefits:

**Cost reduction**: Eliminating the PCB, SMT processes, and multiple reflow cycles reduces per-unit manufacturing costs by over 10% according to Longsys. These savings can translate to competitive pricing or improved margins.

**Quality improvement**: Reducing from thousands of solder joints to a fully integrated package dramatically decreases the attack surface for defects. The 10x improvement in DPPM (defects per million parts) suggests more reliable products with fewer warranty returns.

**Environmental benefits**: Fewer manufacturing steps mean lower energy consumption and reduced carbon emissions. The elimination of PCB fabrication also removes chemicals and materials associated with board production.

**Faster production**: Skipping SMT and reflow steps shortens manufacturing cycle times, enabling faster response to demand fluctuations and potentially reducing inventory holding costs.

Market Implications:

Longsys\'s integrated mSSD technology could influence future SSD design if it proves successful in volume production. Several market segments stand to benefit:

**Embedded systems**: Industrial PCs, point-of-sale terminals, and IoT devices often need storage in constrained spaces. The compact mSSD package offers more flexibility than M.2 2280 drives.

**Mobile devices**: Tablets, handheld gaming devices, and thin-and-light laptops increasingly adopt smaller storage form factors. The mSSD\'s native 20×30mm size fits tighter thermal and spatial constraints.

**Automotive**: In-vehicle infotainment systems and autonomous driving computers require reliable storage in vibration-prone environments. Fewer solder joints could improve shock and vibration resistance.

**Data centers**: While enterprise SSDs typically prioritize features like power-loss protection and high endurance over size reduction, the manufacturing cost advantages might appeal to hyperscale operators buying millions of units annually.

Challenges and Considerations:

Despite its advantages, the integrated approach faces some challenges:

**Repairability**: With everything in a single package, component-level repair becomes impossible. A failed controller or NAND die means replacing the entire drive.

**Thermal constraints**: Packing multiple heat-generating components into a dense package increases thermal management challenges. The graphene thermal pad and aluminum frame address this, but sustained high-performance workloads may still throttle.

**Market acceptance**: The storage industry has standardized around M.2 form factors and modular components. Convincing OEMs to adopt a proprietary packaging approach requires demonstrating clear advantages.

**Customization limits**: Traditional SSD designs allow manufacturers to mix and match controllers, NAND types, and DRAM configurations. SiP integration reduces this flexibility, potentially requiring different package designs for different performance tiers.

**Longsys has applied for international patents** on the technology, suggesting they intend to license it to other manufacturers or maintain a competitive advantage through exclusive use. The company is also the parent of Lexar, so we can expect similar products under that consumer-facing brand.

**Written using GitHub Copilot Sonnet 4.5 in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [Longsys Official Announcement][def]
- [ITHome Coverage][def2]
- [TPU][def3]

[def]: https://cn.longsys.com/about/news/11597.html
[def2]: https://www.ithome.com/0/890/819.htm
[def3]: https://www.techpowerup.com/342047/longsys-announces-industrys-first-integrated-packaging-mssd
