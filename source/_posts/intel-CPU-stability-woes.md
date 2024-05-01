---
title: intel CPU stability woes
date: 2024-04-30 23:03:04
tags:
   - intel cpu
   - instability
   - performance issues
   - raptor lake
   - 13<sup>th</sup> gen
   - 14<sup>th</sup> gen
   - intel
   - asus
   - msi
   - gigabyte
---

### Initial Reports
Couple of weeks ago, many Intel 13<sup>th</sup> and 14<sup>th</sup> Generation CPUs especially their unlocked series i.e. K, KF & KS series reported [performance and stability issues in NVIDIA forums](https://www.nvidia.com/en-us/geforce/forums/game-ready-drivers/13/542018/performance-issues-and-stability-problems-with-nvi/#!%2Ffollowing) that few games and game development engines such as Epic's Unreal Engine 5.
There are several reports from lot of users from [Intel Community Forums](https://community.intel.com/t5/Processors/Regarding-Reports-of-13th-14th-Gen-Unlocked-Desktop-Users/td-p/1575863?profile.language=en), News Outlets such as [TechPowerUp](https://www.techpowerup.com/321461/nvidia-points-intel-raptor-lake-cpu-users-to-get-help-from-intel-amid-system-instability-issues), [PC GamesN](https://www.pcgamesn.com/nvidia/gpu-intel-raptor-lake-issues), [Ars Technica](https://arstechnica.com/gadgets/2024/04/intel-is-investigating-game-crashes-on-top-end-core-i9-desktop-cpus/), [OC.Net](https://www.overclock.net/threads/official-asus-strix-maximus-z790-owners-thread.1800191/page-853#post-29323821) etc.
<!-- more -->

### What is the fix officially or unofficially?

So, what is the fix or recommended fix suggested by Intel. After multiple investigations conducted by Intel and suggested that, Motherboard Vendors Optimized BIOS/UEFI settings sets higher than recommended safe voltage and frequency causing increased thermals and instability over period of time.

Intel did suggest few settings that vendors applied through the BIOS/UEFI that were out-of-spec such as:
- Disabling Current Excursion Protection (CEP)
- Enabling the IccMax Unlimited bit
- Disabling Thermal Velocity Boost (TVB) and/or Enhanced Thermal Velocity Boost (eTVB)
- Additional settings which may increase the risk of system instability:
- Disabling C-states
- Using Windows Ultimate Performance mode
- Increasing PL1 and PL2 beyond Intel recommended limits

Intel did ask motherboard vendors such as Asus,MSI,GigaByte,ASRock etc to provide end users with Intel Baseline profile that uses Intel Recommended CPU settings to ensure better stability with a performance penalty. Intel will issue public notice regarding the same and its status by May 2024.
[Asus](https://rog.asus.com/motherboards/rog-maximus/rog-maximus-z790-formula/helpdesk_bios/),[MSI](https://www.msi.com/blog/improving-gaming-stability-for-intel-core-i9-13900k-and-core-i9-14900k) and [GigaByte](https://www.techpowerup.com/321905/superior-stability-by-gigabyte-beta-bios-with-intel-baseline-on-z790-b760-motherboards) have issued Beta BIOS/UEFI that adds Intel Baseline Profile that forces the affected SKUs to respect recommended power and thermal constraints.

### Source(s)
[TechPowerUp](https://www.techpowerup.com/321959/intel-statement-on-stability-issues-motherboard-makers-to-blame)
[OC.Net](https://www.overclock.net/threads/official-asus-strix-maximus-z790-owners-thread.1800191/page-853#post-29323821)
[PCGamesN](https://www.pcgamesn.com/nvidia/gpu-intel-raptor-lake-issues)
[Ars Technica](https://arstechnica.com/gadgets/2024/04/intel-is-investigating-game-crashes-on-top-end-core-i9-desktop-cpus/)
[Intel](https://community.intel.com/t5/Processors/Regarding-Reports-of-13th-14th-Gen-Unlocked-Desktop-Users/td-p/1575863?profile.language=en)
[NVIDIA](https://www.nvidia.com/en-us/geforce/forums/game-ready-drivers/13/542018/performance-issues-and-stability-problems-with-nvi/#!%2Ffollowing)
[Hardware Unboxed](https://youtu.be/OdF5erDRO-c?si=P4tQYerS0MZJXHJx)
[Actually Hardcore Overclocking Asus Motherboard](https://youtu.be/1LluNJiJ88A?si=RDIGdnwbGLJ1MbRE)
[Actually Hardcore Overclocking GigaByte Motherboard](https://youtu.be/jNwFFJyAqQU?si=dlr4WgDM2IuKj0Bo)
[Raptor Lake CPU Wiki](https://en.wikipedia.org/wiki/Raptor_Lake)
