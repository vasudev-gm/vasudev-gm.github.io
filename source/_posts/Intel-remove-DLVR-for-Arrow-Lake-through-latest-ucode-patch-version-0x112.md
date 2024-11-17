---
title: Intel remove DLVR for Arrow Lake through latest ucode patch version 0x112
date: 2024-11-17 23:00:23
tags:
  - intel
  - microcode
  - arrow lake
  - dlvr
  - patches
  - cpu
---

### Quick Report

After Intel released the latest microcode patch version 0x112, the  Digital Linear Voltage Regulator (DLVR) feature bypass by the user was removed from Arrow Lake according to Der8auer\'s testing.
<!-- more -->
DLVR is a technology designed to provide precise voltage control for individual performance cores and efficiency core clusters, offers optimal power consumption based on workloads. With DLVR enabled previously the power losses reduced to 20% on gaming workloads and without it the losses can be very high as it prefers running at performance and sacrificing power efficiency.

However Intel explained to HardwareLuxx that the change was made to prevent accidental misuse of the feature by restricting it extreme cooling say Liquid Nitrogen or Helium used to break Overclocking records. The update has been shipped to motherboard vendors for Z890 chipsets and are rolling out to users. Intel removed this to prevent Raptor Lake-like situations where these chips had an issue with Vmin shift aka min voltage requirement after faulty ucode supplied too much voltage and degraded the silicon.

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/328845/intel-removes-dlvr-bypass-for-arrow-lake-in-latest-0x112-microcode-update
