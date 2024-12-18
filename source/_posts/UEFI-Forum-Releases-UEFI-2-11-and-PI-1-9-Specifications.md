---
title: UEFI Forum Releases UEFI 2.11 and PI 1.9 Specifications
date: 2024-12-19 02:16:13
tags:
    - uefi
    - efi
    - PI
    - platform initialization
    - arm
    - LoongArch
    - x86
    - amd64
    - BIOS
    - firmware
---

### Quick Report

UEFI forum announced the release of UEFI (Unified Extensible Firmware Interface) 2.11 and PI (Platform Initialization) 1.9 specifications that brings improved cryptographic algorithm support, multiple hardware architecture such as LoonArch, AMD64, RISCV and ARM64, security updates and finally improved alignment implementation guidance.
<!-- more -->

Key Highlights of UEFI 2.11:

- Updates to memory management and allocation, such as the new memory attribute for hit plug and Arm memory allocation mandates
- Enhancements to protocols, algorithms and boot management
- Corrections to EFI_KMS_PROTOCOL, new crypto algorithms and support for Proxy Host URI in HTTP Boot
- Improvements to error handling and documentation updates, including Common Platform Error Record (CPER) definitions and Arm processor error information

Key Highlights of PI 1.9:

- Expands algorithm options by providing enhanced security with additional cryptographic algorithms for signed Firmware Volume (FV) and signed sections extending beyond the previous RSA2048_SHA256
- Adds Random Number Generator (RNG) PEIM-to-PEIM Interface (PPI) to serve as an entropy source for seeding other cryptographic services, allowing platforms to provide RNG services in PEI across binary boundaries effectively
- Includes new protocol for Multiple SPI Regions with varying block erase sizes, enhancing flexibility and functionality
- Adds support for LoongArch architecture, broadening the range of supported systems

For more info and detailed changes you can refer the announcement [here][def].

### Source(s)

- [TPU][def2]
- [UEFI Specs][def]

[def]: https://uefi.org/specifications
[def2]: https://www.techpowerup.com/329969/uefi-forum-releases-the-uefi-2-11-and-the-pi-1-9-specifications
