---
title: NVIDIA postpones Advanced Blackwell AI GPUs due to design issues
date: 2024-08-05 22:22:30
tags:
    - nvidia
    - blackwell
    - AI
    - ai
    - GPU
    - CUDA
---


### Quick Report

Anonymous sources close to [Bloomberg][def5] hinted that NVIDIA's Advanced version of Blackwell GPU will be delayed due to design issues fabbed at TSMC. TSMC noticed interconnect issues with multi-chip Blackwell GB200 during production testing and NVIDIA will be prioritizing the production of the single-chip Blackwell version to expedite delivery.

Dylan Patel from SemiAnalysis posted on [X (formerly Twitter)][def] that Blackwell supply will be lower than anticipated in Q4 2024 and early quarter of 2025. The delay is due to transitioning from [CoWoS (Chip-on-Wafer-on-Substrate)][def2] to [CoWoS-L (Chip-on-Wafer-on-Substrate with Local Silicon Interconnect)][def3] which requires NVIDIA to re-design the entire multi-die Blackwell GPUs. At the moment, TSMC\'s AP3 packaging facility is dedicated to CoWoS-S production, while initial CoWoS-L capacity is being installed in the AP6 facility.

NVIDIA is currently prioritizing the production multi GPU in rack called NVL72 over NVL36 which features 72 GPUs in a single rack paired with 18 double GB200 compute nodes or spread across two racks for high compute density and leadership AI performance to power through multi billion or trillion parameters models. Meanwhile, NVL36 features 36 GPUs which is being delayed until further notice.

### Source(s)

- [Bloomberg][def5]
- [TPU Article][def4]
- [X Article][def]

[def]: https://x.com/dylan522p/status/1819693289689198800
[def2]: https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/cowos.htm#tbc_CoWoS-S
[def3]: https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/cowos.htm#tbc_CoWoS-L
[def4]: https://www.techpowerup.com/325190/design-issues-may-postpone-launch-of-nvidias-advanced-blackwell-ai-chips
[def5]: https://www.bloomberg.com/news/articles/2024-08-03/nvidia-s-new-ai-chip-delayed-due-to-design-flaws-information