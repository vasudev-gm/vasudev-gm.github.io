---
title: Intel Raptor Lake Stability linked to faulty eTVB microcode settings
date: 2024-06-15 22:13:53
tags:
    - Intel
    - intel
    - raptor lake
    - stability issue
    - eTVB microcode settings
    - eTVB
    - microcode fix
---

## Quick Report

[Igor][def4] from Igor Labs has been tipped off by an anonymous source that the stability issues plaguing Intel\'s upcoming Raptor Lake processors are linked to faulty eTVB microcode settings. The source claims that the eTVB microcode settings are causing the processors to crash and freeze under heavy workloads.<!-- more -->

The [eTVB][def] (enhanced Turbo Voltage Boost) is a opportunistic feature that allows the processor to boost automatically single core and multi core workloads than default intel turbo boost frequencies based on available power budget and operational temperature. The issues is isolated to certain eTVB microcode settings that are causing the processors to draw too much power and overheat, leading to instability and crashes. He mentions that the issue is under NDA and can only share text excerpts below:

> Root cause is an incorrect value in a microcode algorithm associated with the eTVB feature.
Implication Increased frequency and corresponding voltage at high temperature may reduce processor reliability.
Observed Found internally.
Impacted platforms Raptor Lake S, Raptor Lake Refresh S (CPUID 0xB0671)

It seems intel has already made the new microcode version (0x125) available to its vendors and motherboard manufacturers which is applicable to Intel Raptor Lake CPUs aka 13th gen and 14th gen SKUs. So, users can update their BIOS to the latest version to fix the issue.

## Source(s)

- [Igor Labs Article][def2]
- [TechPowerup Article][def3]
- [Intel TVB Technology][def]

[def]: https://www.intel.com/content/www/us/en/support/articles/000097061/processors.html
[def2]: https://www.igorslab.de/en/intel-comments-internally-on-the-13th-and-14th-generation-k-sku-processor-instability-issue-and-finally-brings-a-comprehensive-update-of-its-own-investigation-leak/
[def3]: https://www.techpowerup.com/323616/intel-isolates-root-cause-of-raptor-lake-stability-issues-to-a-faulty-etvb-microcode-algorithm
[def4]: https://www.igorslab.de/community/members/3/
