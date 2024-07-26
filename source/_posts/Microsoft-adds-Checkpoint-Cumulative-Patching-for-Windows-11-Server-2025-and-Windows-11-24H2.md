---
title: >-
  Microsoft adds Checkpoint Cumulative Patching for Windows 11 Server 2025 and
  Windows 11 24H2
date: 2024-07-26 20:26:07
tags:
  - microsoft
  - cumulative update
  - differential update
  - checkpoint
  - windows 11
  - small patch size
  - fast installs
---


### Quick Report

Microsoft announced they will add **Checkpoint Cumulative Updates** for systems running Windows 11 Server 2025 and Windows 11 24H2 and above.
<!-- more -->

This feature will significantly reduce the update size if you had previous CU (Cumulative Update) applied resulting in faster install speed, smaller network traffic and less disk usage.

There is no action required to enable this feature since it will available to all users. The update mechanism works by generating binary differentials using current checkpoint to generate new checkpoint which will be used for future updates.

The announcements comes five years after MSFT axed [Delta and Express Update Distribution][def] for full fat Cumulative Update Mechanism to streamline update process.

### Source(s)

- [Bleeping Computer Article][def2]

[def]: https://techcommunity.microsoft.com/t5/windows-it-pro-blog/windows-10-quality-updates-explained-and-the-end-of-delta/ba-p/214426
[def2]: https://www.bleepingcomputer.com/news/microsoft/microsoft-announces-new-windows-checkpoint-cumulative-updates/