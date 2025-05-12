---
title: >-
  Bluetooth SIG announces 6.1 with enhanced privacy thanks to randomized RPA
  timing
date: 2025-05-13 00:23:45
tags:
  - Bluetooth
  - Bluetooth SIG
  - Bluetooth 6.1
  - privacy
  - RPA
  - randomized RPA
  - timing
  - security
  - technology
---

### Quick Report

Bluetooth SIG has announced the release of Bluetooth 6.1, which includes a new feature that enhances privacy by randomizing the timing of the Resolvable Private Address (RPA) generation. This update aims to improve security and protect user data from potential tracking and eavesdropping attacks.
<!-- more -->

A Resolvable Private Address (RPA) is a Bluetooth address created to look random and is used in place of a device's fixed MAC address to protect user privacy. It allows trusted devices to securely reconnect without revealing their true identity. Currently, RPAs are updated at fixed intervals, usually every 15 minutes, which introduces a level of predictability. This predictability can be exploited in correlation attacks, making long-term tracking possible.

Bluetooth 6.1 improves privacy by randomizing the RPA updates between 8 and 15 minutes (default), while also allowing custom values between the range of 1 second to 1 hour. RPA timing of address changes makes it much more difficult for third parties to track or correlate device activity over time.

### Source(s)

- [Bluetooth SIG][def]
- [Bleeping Computer][def2]

[def]: https://www.bluetooth.com/blog/delivering-on-the-bi-annual-release-schedule-bluetooth-core-6-1-is-here/
[def2]: https://www.bleepingcomputer.com/news/security/bluetooth-61-enhances-privacy-with-randomized-rpa-timing/
