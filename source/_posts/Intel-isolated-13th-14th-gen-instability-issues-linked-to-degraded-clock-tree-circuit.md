---
title: Intel isolated 13th & 14th gen instability issues linked to degraded clock
  tree circuit
date: 2024-09-27 01:33:12
tags:
  - intel
  - raptor lake
  - instability
  - microcode update
---

### Quick Report

After Intel\'s Root Cause Analysis of 13th and 14th gen instability linked to microcode bug that delivered higher than optimal voltage degrading the CPU ultimately causing instability, Intel has released a microcode update to mitigate the issue. Now, Intel\'s research has determined that due to higher voltage supplied the CPUs now requires a higher minimum voltage called Vmin and the issue is linked to clock tree circuit in the IA core causing a shift in processor duty cycle resulting in system instability.

<!-- more -->

Intel is now working with OEM and motherboard vendors to ship the microcode update 0x12B and stresses the fact that Arrow Lake CPUs are not affected that is Core Ultra 200 series.

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/327004/intel-isolates-raptor-lake-vmin-shift-instability-root-cause-new-microcode-update-coming
