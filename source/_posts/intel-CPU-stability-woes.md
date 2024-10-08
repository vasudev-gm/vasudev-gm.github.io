---
title: intel CPU stability woes (Microcode Fix Incoming August 2024)
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
   - intel
---

### Initial Reports

Couple of weeks ago, many Intel 13<sup>th</sup> and 14<sup>th</sup> Generation CPUs especially their unlocked series i.e. K, KF & KS series reported [performance and stability issues in NVIDIA forums][def] that few games and game development engines such as Epic's Unreal Engine 5.
There are several reports from lot of users from [Intel Community Forums][def2], News Outlets such as [TechPowerUp][def3], [PC GamesN][def4], [Ars Technica][def5], [OC.Net][def6] etc.
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
[Asus][def7],[MSI][def8] and [GigaByte][def9] have issued Beta BIOS/UEFI that adds Intel Baseline Profile that forces the affected SKUs to respect recommended power and thermal constraints.

Few updates as of 8 May 2024:

As per new thermal specifications from Intel which are applicable to all Notebook and Desktop (**under Section 4.4 Processor Line Thermal and Power Specifications**) which can be found in the PDF file [here][def14]

In a nutshell just for desktop CPUs the baseline power listed by [Steve from Hardware Unboxed](https://youtu.be/bHILyzooR58?si=jJ2ZyH17i6m_KLe4)

1. Baseline profile(Power Optimized) will have PL1 and PL2 set to 125W and 188W respectively.
2. Performance profile will have PL1 and PL2 set to 125W and 253W respectively.
3. Extreme profile will have PL1 and PL2 both set to 253W respectively.

Updates as of 23 July 2024:

Intel spokesperson Thomas Hannaford has confirmed in their [community forum][def15] they are root caused the issue to faulty microcode which exposed the CPU to higher voltages and the fix will be pushed via EFI firmware updates to motherboard vendors.

Here is the official statement or excerpt:
> Based on extensive analysis of Intel Core 13th/14th Gen desktop processors returned to us due to instability issues, we have determined that elevated operating voltage is causing instability issues in some 13th/14th Gen desktop processors. Our analysis of returned processors confirms that the elevated operating voltage is stemming from a microcode algorithm resulting in incorrect voltage requests to the processor.
Intel is delivering a microcode patch which addresses the root cause of exposure to elevated voltages. We are continuing validation to ensure that scenarios of instability reported to Intel regarding its Core 13th/14th Gen desktop processors are addressed. Intel is currently targeting mid-August for patch release to partners following full validation.
Intel is committed to making this right with our customers, and we continue asking any customers currently experiencing instability issues on their Intel Core 13th/14th Gen desktop processors reach out to Intel Customer Support for further assistance.

### Source(s)

[TechPowerUp](https://www.techpowerup.com/321959/intel-statement-on-stability-issues-motherboard-makers-to-blame)
[OC.Net][def6]
[PCGamesN][def4]
[Ars Technica][def5]
[Intel][def2]
[NVIDIA][def]
[Hardware Unboxed][def10]
[Actually Hardcore Overclocking Asus Motherboard][def11]
[Actually Hardcore Overclocking GigaByte Motherboard][def12]
[Raptor Lake CPU Wiki][def13]
[Microcode Fix for 13th and 14th gen desktop CPUs][def15]

[def]: https://www.nvidia.com/en-us/geforce/forums/game-ready-drivers/13/542018/performance-issues-and-stability-problems-with-nvi/#!%2Ffollowing
[def2]: https://community.intel.com/t5/Processors/Regarding-Reports-of-13th-14th-Gen-Unlocked-Desktop-Users/td-p/1575863?profile.language=en
[def3]: https://www.techpowerup.com/321461/nvidia-points-intel-raptor-lake-cpu-users-to-get-help-from-intel-amid-system-instability-issues
[def4]: https://www.pcgamesn.com/nvidia/gpu-intel-raptor-lake-issues
[def5]: https://arstechnica.com/gadgets/2024/04/intel-is-investigating-game-crashes-on-top-end-core-i9-desktop-cpus/
[def6]: https://www.overclock.net/threads/official-asus-strix-maximus-z790-owners-thread.1800191/page-853#post-29323821
[def7]: https://rog.asus.com/motherboards/rog-maximus/rog-maximus-z790-formula/helpdesk_bios/
[def8]: https://www.msi.com/blog/improving-gaming-stability-for-intel-core-i9-13900k-and-core-i9-14900k
[def9]: https://www.techpowerup.com/321905/superior-stability-by-gigabyte-beta-bios-with-intel-baseline-on-z790-b760-motherboards
[def10]: https://youtu.be/OdF5erDRO-c?si=P4tQYerS0MZJXHJx
[def11]: https://youtu.be/1LluNJiJ88A?si=RDIGdnwbGLJ1MbRE
[def12]: https://youtu.be/jNwFFJyAqQU?si=dlr4WgDM2IuKj0Bo
[def13]: https://en.wikipedia.org/wiki/Raptor_Lake
[def14]: https://cdrdv2.intel.com/v1/dl/getContent/743844?explicitVersion=true
[def15]: https://community.intel.com/t5/Processors/July-2024-Update-on-Instability-Reports-on-Intel-Core-13th-and/td-p/1617113
