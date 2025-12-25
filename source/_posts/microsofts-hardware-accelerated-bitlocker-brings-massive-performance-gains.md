---
title: "Microsoft's Hardware-Accelerated BitLocker Delivers Significant Performance Improvements"
date: 2025-12-26 10:05:00
description: "Microsoft's hardware-accelerated BitLocker in Windows 11 25H2 reduces CPU usage by 70% and doubles storage performance via SoC crypto engines."
tags:
	- acceleration
	- aes
	- bitlocker
	- core-ultra
	- cpu
	- crypto
	- cryptography
	- encryption
	- intel
	- microsoft
	- panther-lake
	- performance
	- soc
	- vpro
	- windows
	- windows-11
---

### Quick Report

Microsoft has released hardware-accelerated BitLocker in Windows 11 version 25H2, shifting encryption operations from software to dedicated accelerators in future CPUs. This addresses the massive performance degradation caused by software BitLocker, which increases cycles per I/O by 375%. Early tests show up to double storage performance and 70% less CPU usage.
<!-- more -->

The feature offloads AES-XTS-256 encryption to a fixed-function cryptography engine in the SoC, with keys hardware-wrapped for security. It initially targets Intel vPro platforms with Core Ultra Series 3 "Panther Lake" processors, but Microsoft plans broader support. Benchmarks indicate 2.3 times faster random 4K operations and significant improvements in single-queue reads and writes.

**Written using GitHub Copilot Grok Code Fast 1 in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [Microsoft][def]

[def]: https://techcommunity.microsoft.com/blog/windows-itpro-blog/announcing-hardware-accelerated-bitlocker/4474609