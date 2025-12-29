---
title: "Digital Foundry Flags Frame Pacing Issues in AMD's FSR 4 Redstone Frame Generation"
date: 2025-12-20 21:30:53
description: "Digital Foundry reports uneven frame pacing in AMD's FSR 4 Redstone ML frame generation, citing cases where capping FPS and enabling V-Sync can help."
tags:
    - amd
    - fsr
    - fsr-4
    - redstone
    - frame-generation
    - frame-pacing
    - gaming
    - digital-foundry
---
### Quick Report

Testing highlighted by Digital Foundry suggests AMD\'s FSR 4 \"Redstone\" machine learning frame generation can suffer from inconsistent frame pacing in some titles, making gameplay feel smoother with frame generation disabled in certain cases. The report argues the issue is tied to how frames are paced, contrasting it with approaches that use hardware flip metering.
<!-- more -->

According to the coverage, one example was Industria 2, where frame times were observed swinging widely (reported as a 40ms to 160ms range). Another example mentioned was God of War Ragnarok, where pacing reportedly degraded when the camera moved slowly.

A workaround described in the article is to apply a strict frame-rate cap and enable v-sync, which can force a steadier output cadence. That is not a perfect solution (it can add latency and does not address root cause), but it may be a practical mitigation until AMD ships an update.

More broadly, this is a reminder that headline FPS gains from frame generation only translate into a better experience if the delivery cadence is stable. When pacing breaks down, the perceived smoothness can regress even if the average framerate looks great.

**Written using GitHub Copilot GPT-5.2 in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]
- [Digital Foundry][df]

[def]: https://www.techpowerup.com/344255/amd-fsr-redstone-has-a-frame-pacing-problem-doesnt-use-flip-metering
[df]: https://www.digitalfoundry.net/features/fsr-redstone-frame-generation-better-images-still-too-shaky
