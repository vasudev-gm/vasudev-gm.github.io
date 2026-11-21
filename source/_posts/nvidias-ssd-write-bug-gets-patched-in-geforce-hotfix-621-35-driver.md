---
title: "NVIDIA Hotfix 621.35 Patches Excessive SSD Write Bug"
date: 2026-11-22 09:02:00
description: "NVIDIA has released GeForce Hotfix 621.35 to address an issue that could cause excessive SSD write activity."
tags:
  - nvidia
  - geforce
  - drivers
  - ssd
  - hotfix
---

### Quick Report

NVIDIA has issued GeForce Hotfix 621.35 to address excessive SSD write activity reported with recent graphics drivers. The update is a targeted hotfix rather than a broad WHQL release, aimed at correcting storage behavior without waiting for the next regular driver cycle.
<!-- more -->

The earlier reports raised concern because repeated, unnecessary writes can affect telemetry, diagnostics, and the long-term endurance expectations of some SSDs. The hotfix gives affected users a direct upgrade path, while NVIDIA can continue refining the fix in a later certified driver.

NVIDIA has not published the same long-term stability history for a hotfix as it does for a WHQL release, so users should verify that the package matches their GPU and Windows build before installing it.

**Written using GitHub Copilot MAI Code 2 Flash in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/355072/nvidias-ssd-write-bug-gets-patched-in-geforce-hotfix-621-35-driver
