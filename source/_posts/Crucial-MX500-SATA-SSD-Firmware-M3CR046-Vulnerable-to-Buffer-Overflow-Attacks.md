---
title: Crucial MX500 SATA SSD Firmware M3CR046 Vulnerable to Buffer Overflow Attacks
date: 2024-09-15 01:31:51
tags:
    - crucial
    - micron
    - sata
    - ssd
    - firmware exploit
    - exploit
    - buffer overflow attacks
---

### Quick Report

One of the popular and best selling SATA SSDs from Crucial aka Micron is affected by buffer overflow attack for firmware version **M3CR046**. According to [CVE-2024-42642][def] report, a specially crafted ATA packets from host to drive controller can lead to buffer overflow and memory corruption issues.
<!-- more -->
At the moment, Crucial has not issued new firmware update and it is unknown whether older firmware is affected by this vulnerability. You can check for firmware updates at official [Crucial MX500][def2]
You can check for other crucial SSDs at [Crucial SSD Support][def3]

### Source(s)

- [TPU][def4]
- [CVE-2024-42642 buffer overflow exploit in MX500][def]

[def]: https://www.cve.org/CVERecord?id=CVE-2024-42642
[def2]: https://www.crucial.com/support/ssd-support/mx500-support
[def3]: https://www.crucial.com/support/ssd-support
[def4]: https://www.techpowerup.com/326587/crucial-mx500-ssd-firmware-m3cr046-vulnerable-to-buffer-overflow-attacks