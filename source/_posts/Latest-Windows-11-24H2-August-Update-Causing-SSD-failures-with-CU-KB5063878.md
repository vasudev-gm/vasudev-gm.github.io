---
title: Latest Windows 11 24H2 August Update Causing SSD failures with CU KB5063878
date: 2025-08-18 22:30:00
tags:
  - windows 11
  - 24h2
  - kb5063878
  - ssd failures
  - phison
  - file transfers
  - microsoft
  - windows update
  - ssd
  - nvme
  - troubleshooting
---

### Quick report

Microsoft\'s recently released Windows 11 update KB5063878 (build 26100.4946) for the 24H2 version is reportedly causing serious SSD failures during heavy file transfers. According to multiple reports, the issue manifests when users attempt continuous file transfers larger than 50GB.
<!-- more -->

The problem appears particularly severe for users with SSDs featuring Phison NAND controllers, although drives with other controllers have also been affected. When the issue occurs, Windows is unable to recognize the SSD after extended file transfers i.e >50GB, and in some cases, the drive becomes completely inaccessible after system restart.

Japanese tech outlet NichePCGamer has compiled a list of known affected SSDs:

- Corsair Force MP600 (Phison E16 controller)
- Phison PS5012-E12 (Phison PS5012-E12 controller)
- SanDisk Extreme Pro M.2 NVMe (Triton MP28 controller)
- Fikwot FN955 (MAP1602 + WDS X3 9070 controllers)
- Kioxia Exceria Plus G4 1 TB (Phison E31T controller)

Some SSDs may become temporarily inaccessible but recover after rebooting the system. These include:

- WD Blue SN5000 2 TB (Polaris 3 controller)
- WD Red SA500 2 TB SATA (Marvell 88SS1074)
- Corsair MP510 960 GB (Phison PS5012-E12 controller)
- Crucial P3 Plus (Phison E21T controller)

As of this writing, Microsoft has not acknowledged the issue, and SSD manufacturers have yet to release official statements regarding the problem. The issue was first reported by X (formerly Twitter) user @Necoru_cat, who conducted tests on multiple SSD models to identify patterns in affected hardware.

If you're running Windows 11 24H2 with the KB5063878 update, here are some precautionary measures:

1. **Avoid large file transfers**: Particularly continuous transfers exceeding 50GB
2. **Consider deferring the update**: If you haven\'t installed KB5063878 yet, it might be prudent to wait until Microsoft addresses the issue
3. **Roll back the update**: If you have already installed the update, consider rolling back to the previous version
4. **Backup important data**: As a general precaution, ensure all critical data is backed up

**Written using GitHub Copilot Claude 3.7 Sonnet in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

[NotebookCheck][def]
[TPU][def2]

[def]: https://www.notebookcheck.net/Latest-Windows-11-update-reportedly-triggers-SSD-failures-during-heavy-file-transfers.1089249.0.html
[def2]: https://www.techpowerup.com/340032/microsoft-windows-11-24h2-update-may-cause-ssd-failures
