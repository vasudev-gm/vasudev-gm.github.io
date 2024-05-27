---
title: Early tests for Qualcomm X Elite SoC
date: 2024-05-24 19:55:32
tags:
    - qualcomm
    - oryon
    - elite soc
    - better battery life
    - intel
    - amd
    - x86
    - arm
    - ARM
    - ARMv8
    - Copilot+
    - AI
    - AI PCs
    - Lenovo
    - HP
    - Microsoft
    - Surface
    - Dell
    - XPS
    - ASUS
    - Vivobook
    - Acer
    - Acer Swift
    - Samsung
    - Galaxy
    - laptops
    - 2 in 1 portables
    - surface pen
    - surface
---
## Intro

Hey there fellow tech readers and enthusiasts who have been patiently waiting for Qualcomm\'s new x86 competitor System-On-Chip (SoC) named [Oryon aka Nuvia Cores][def2] to beat Intel, AMD and take the fight with Apple Silicon.<!-- more -->

On this historic day that is, **May 20 2024** Microsoft announced their AI powered PCs tailored for best **CoPilot experiences** on Windows 11 called [Copilot+ PCs][def] certified PCs optimized for AI through the use of **NPU** (Neural Processing Unit).

## Highlights of AI powered Experiences

Some AI powered experiences include:

- Recall
- Co-create with AI-powered image creation and editing
- Better AI experience in creative apps such as Adobe, DaVinci Resolve, MS Photos & Paint, djay Pro etc..
- 45 TOPS NPU
- Base RAM of 16GB and higher along with 256GB and higher NVMe SSD for best local AI performance

### Early Test Results from Signal65

Microsoft has teamed up with Signal65 to give some marketing push for new shiny ARM laptops which will be shipping with Windows 11 24H2. For reference, Signal65 is headed by former Intel Chief Performance Strategist Ryan Shrout who is heading the organization as President and GM.

The test is aimed at best points and includes Cinebench 2024 Single and Multi-Threaded Test, Battery Life, System Noise under Load, AI performance, Media Performance, Productivity, Emulation and Pricing compared to Apple M3 Macbook Air 15-inch, Surface Pro 9 ARM Edition and MSI Prestige 16" w/ Intel Meteor Lake.

Listed some of the general Geekbench 6 Oryon CPU results including OEMs and CRD (Qualcomm Reference Device) [here][def8]

They tested the Surface Laptop 15 inch and others at ambient room temperature set to 20C (72F) with following specs:

- TSMC 4nm Process Node
- Uses the variant X1E-80-100 [Linked Here][def3]
- 12 Performance Cores with 3.8 GHz, 42MB Cache, Single and Dual Core Boost upto 4.3 GHz
- Qualcomm Hexagon NPU 45 TOPS
- WiFi 7 Qualcomm Fastconnect 7800, Bluetooth 5.4, X65 5G Modem
- 32GB RAM LPDDR5X-8448 (Max 64GB)
- 1TB PCIe 4 NVMe SSD

As of now, the scores are just relative performance baseline against Intel, M3 and SQ3.

Not sure, if these scores and test system are correct since there is no way to identify the exact model number. As starting point, I will pick up a Windows and Mac based on similar max clock frequencies of 3.8 GHz result randomly [Windows Result](https://browser.geekbench.com/v6/cpu/5019476) and [Mac M3](https://browser.geekbench.com/v6/cpu/6243224).

I will update the post once I get actual production results from tech reviewers who have pre-ordered their surfaces either 13 and 15" variants.

Microsoft just announced initial availability of Automatic Super Resolution ([Auto SR][def9]) on Copilot+ PCs feat. Qualcomm X Elite/Plus models
which upscales the visual elements by reducing input resolution just like FSR and DLSS.For now, there is a limited set of games which has Auto SR including Borderlands 3, God of War, The Witcher 3, and more. More games will be adding support and the status can be checked at [WoAGames website][def10] powered by Linaro.

## Source(s)

- [Signal65 Surface 15" Testing][def4]
- [Qualcomm X Elite Specs][def3]
- [Qualcomm X Elite Datasheet][def5]
- [TechSpot Article 1][def6]
- [TechSpot Copilot+][def7]
- [Automatic Super Resolution available in Qualcomm X Elite][def9]
- [WoAGames][def10]

[def]: https://blogs.microsoft.com/blog/2024/05/20/introducing-copilot-pcs/
[def2]: https://www.qualcomm.com/news/onq/2022/11/qualcomm-oryon-custom-cpu-at-center-of-next-gen-premium-experiences-on-snapdragon-platforms
[def3]: https://www.tomshardware.com/qualcomm-snapdragon-x-series-everything-we-know
[def4]: https://signal65.com/wp-content/uploads/2024/05/NewSurfaceLaptop2024_Signal65LabInsights_r1.01.pdf
[def5]: https://www.qualcomm.com/products/mobile/snapdragon/pcs-and-tablets/snapdragon-x-elite
[def6]: https://www.techspot.com/news/103086-here-all-new-copilot-ai-laptops-powered-snapdragon.html
[def7]: https://www.techspot.com/news/103096-snapdragon-x-elite-powered-microsoft-surface-laptop-tests.html
[def8]: https://browser.geekbench.com/v6/cpu/search?page=4&q=Qualcomm+Oryon&utf8=%E2%9C%93
[def9]: https://support.microsoft.com/en-us/windows/automatic-super-resolution-5d6d95fa-cc02-4673-b62c-2c50f06385aa
[def10]: https://www.worksonwoa.com/
