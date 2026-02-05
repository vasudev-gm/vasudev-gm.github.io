---
title: "Tenstorrent Cuts 20 Cores from Blackhole P150 AI Cards"
date: 2026-02-05 20:50:00
description: "Tenstorrent reduces core count on Blackhole P150 AI accelerators from 140 to 120 via firmware, citing minimal performance impact but raising industry concerns."
tags:
  - tenstorrent
  - blackhole-p150
  - ai
  - accelerator
  - jim-keller
  - firmware
  - silicon-yield
  - hardware
  - cores
  - hpc
---

### Quick Report

Tenstorrent has reduced the number of active cores on its Blackhole P150 AI accelerator cards from 140 to 120 through a firmware update, affecting both new and already-shipped units. The company claims only a 1-2% performance drop, but the move has sparked criticism in the HPC community.
<!-- more -->

Possible reasons include thermal limits, silicon yield improvements, or shipping experimental silicon. The change drops BLOCKFP8 performance from 774 to 664 TeraFLOPS. Some users are frustrated by the retroactive downgrade, comparing it to controversial moves by larger chipmakers.

**Written using GitHub Copilot GPT-4.1 in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][src]

[src]: https://www.techpowerup.com/345977/tenstorrent-cuts-20-cores-from-already-shipping-blackhole-p150-cards
