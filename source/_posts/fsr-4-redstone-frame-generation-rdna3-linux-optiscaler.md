---
title: "Community Workaround Runs FSR 4 Redstone Frame Generation on RDNA 3 GPUs Under Linux"
date: 2025-12-20 21:30:53
description: "A community workaround reportedly enables AMD FSR 4 Redstone frame generation on RDNA 3 under Linux using Proton, vkd3d-proton DLLs, and OptiScaler."
tags:
    - amd
    - fsr
    - fsr-4
    - redstone
    - frame-generation
    - rdna-3
    - linux
    - proton
    - optiscaler
---

### Quick Report

A Reddit user reports getting AMD\'s FSR 4 Redstone frame generation running on an RDNA 3 GPU, but only under Linux and only via a Proton-based setup. The approach uses OptiScaler and a vkd3d-proton workaround that is described as similar to earlier community experiments that brought parts of FSR 4 Super Resolution to older Radeon hardware.<!-- more -->

In the example cited by TechPowerUp, the user tested the setup on a Radeon RX 7800 XT and noted higher latency than the FSR 3.1.6 frame generation path (reported as roughly 0.14
ms per generated frame versus 0.07
ms). The post does not provide a full apples-to-apples image quality or performance comparison, but it does suggest the feature can be made functional on RDNA 3 in at least some configurations.

The biggest practical limitation is platform: the steps rely on Linux tooling (including Proton) and do not apply to Windows users today. Even on Linux, the technique involves swapping DLLs and toggling configuration variables, so it is best treated as an experiment rather than a stable, supported path.

**Written using GitHub Copilot GPT-5.2 in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]
- [Reddit post (r/radeon)][reddit]

[def]: https://www.techpowerup.com/344284/modder-runs-amd-fsr-4-redstone-frame-generation-on-rdna-3-but-only-on-linux
[reddit]: https://www.reddit.com/r/radeon/comments/1pqm4iv/fsr_4_fg_works_on_rdna_3_through_the_same_fp8/
