---
title: "Windows Server 2025 Introduces Native NVMe Support for Major Storage Gains"
date: 2025-12-17 00:28:00
description: "Windows Server 2025 debuts native NVMe support, delivering up to 80% more IOPS, lower latency, and improved CPU efficiency for demanding workloads. Opt-in now."
tags:
  - microsoft
  - windows-server
  - windows-server-2025
  - nvme
  - storage
  - performance
  - enterprise
---

### Quick Report

Microsoft has announced native NVMe support in Windows Server 2025, marking a major leap in storage performance for enterprise workloads. The new stack eliminates legacy SCSI translation, enabling direct, multi-queue access to NVMe SSDs for up to 80% higher IOPS and 45% lower CPU usage in benchmarks.
<!-- more -->

Native NVMe is now generally available as an opt-in feature (disabled by default) after the latest cumulative update. Users can enable it via a registry key or Group Policy. The update benefits SQL Server, virtualization, file servers, and AI/analytics workloads with faster transactions and lower latency. Microsoft encourages early adoption to realize the full potential of modern NVMe hardware.

**Written using GitHub Copilot GPT-4.1 in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [Microsoft Tech Community][ms]

[ms]: https://techcommunity.microsoft.com/blog/windowsservernewsandbestpractices/announcing-native-nvme-in-windows-server-2025-ushering-in-a-new-era-of-storage-p/4477353
