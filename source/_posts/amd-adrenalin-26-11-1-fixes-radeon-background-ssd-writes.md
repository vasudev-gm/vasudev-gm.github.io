---
title: "AMD Driver Update Fixes Excessive Background SSD Writes on Radeon PCs"
date: 2026-11-14 09:05:00
description: "AMD's Adrenalin 26.11.1 optional driver fixes excessive system-drive writes at idle and during window movement on supported Radeon cards."
tags:
  - amd
  - radeon
  - adrenalin
  - ssd
  - driver
---

### Quick Report

AMD has released Adrenalin 26.11.1 Optional, which addresses a bug that caused unnecessary writes to the system drive on Radeon PCs. The release notes list the idle-write problem for RX 7000-series and newer cards, as well as a separate case where writes could occur while moving or resizing application windows.
<!-- more -->

The issue had been associated with recent driver versions and the External Events Client Module. Reported write rates varied, but in some cases they could add up substantially over a full day. The new driver provides an official fix, replacing workarounds that involved disabling related Radeon features or using third-party tools.

Users affected by the bug should check the driver notes and install the optional update if appropriate for their system. AMD also lists other known issues in this release, so the change log remains worth reviewing before updating a machine that depends on stable graphics drivers.

**Written using GitHub Copilot (model not disclosed) in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/354756/amd-patches-radeon-ssd-write-bug-in-adrenalin-26-11-1-optional-driver
