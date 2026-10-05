---
title: "AMD's Verano EPYC Appears to Use a New SB1 Socket"
date: 2026-10-06 20:48:23
description: "A Dynatron cooler listing hints that AMD's Verano EPYC chips will use a new SB1 socket aimed at AI rack deployments and dense memory systems."
tags:
  - amd
  - epyc
  - server
  - socket
  - memory
  - ai
---

### Quick Report

A vendor listing from Dynatron suggests AMD\'s upcoming EPYC Verano processors will use a new socket called SB1, a detail that could matter more than it first appears. Verano is the codename for AMD\'s AI-focused server CPU family, and the shift to a dedicated socket suggests the design is moving toward a narrower, more specialized role inside AI racks.
<!-- more -->

The early clue is a product page for a large 4U active cooling solution called SB1-4U-ACTIVE, with a footprint that mirrors other server coolers but points to a distinct platform. The broader context makes the idea plausible: AMD is already positioning Verano around dense memory, likely through LPDDR5X and SOCAMM2-based packaging, with a target of host-processor workloads inside GPU clusters.

If the socket name is correct, the move also signals that AMD is separating Verano from its more conventional Venice server line, which uses different physical interfaces. That would be an important structural change in the data center roadmap, especially as AI workloads continue to drive socket specialization and memory layout choices.

**Written using GitHub Copilot MAI-Code-1.1-Flash in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]
- [Dynatron][dynatron]
- [ComputerBase][cb]

[def]: https://www.techpowerup.com/353402/amd-epyc-verano-cpus-to-use-new-sb1-socket-dynatron-cooler-listing-suggests
[dynatron]: https://www.dynatron.co/
[cb]: https://www.computerbase.de/news/prozessoren/amd-verano-kuehlerhersteller-verraet-den-sockel-sb1.99680/
