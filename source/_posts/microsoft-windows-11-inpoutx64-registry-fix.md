---
title: "Microsoft Uses a Registry Workaround for Windows 11 Game Crashes"
date: 2026-08-28 00:45:00
description: "Microsoft recommends disabling the inpoutx64 driver through the registry after Windows 11 updates caused crashes in games using RGB peripherals."
tags:
  - microsoft
  - windows-11
  - gaming
  - registry
  - drivers
  - rgb
---

### Quick Report

Microsoft has marked a Windows 11 gaming problem as resolved by blocking the inpoutx64 driver from loading on affected systems. The issue caused crashes, freezes, errors, and restarts in games such as ARC Raiders when certain RGB peripherals and the legacy driver were present.
<!-- more -->

The current workaround requires users to open the registry key `HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\inpoutx64`, change the `Start` value to `4`, and restart Windows. Microsoft plans to include the driver block in the September 2026 security updates, but the approach prevents the driver from working rather than fixing the compatibility problem at its source.

**Written using GitHub Copilot GPT-5 mini in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/352030/microsoft-resolves-windows-11-crashing-games-with-a-registry-hack
