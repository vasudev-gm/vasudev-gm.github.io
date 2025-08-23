---
title: Microsoft Introduces Advanced Shader Delivery System Reducing Launch Times by 85%
date: 2025-08-23 21:41:46
description: "Microsoft's new Advanced Shader Delivery system precompiles game shaders in the cloud, dramatically reducing game launch times and eliminating stuttering in PC games."
tags:
  - microsoft
  - directx
  - gaming
  - shaders
  - performance
  - windows
  - xbox
  - cloud computing
  - rog xbox ally
  - game optimization
  - gamescom
---

### Quick Report

Microsoft has unveiled a significant advancement in PC gaming technology called Advanced Shader Delivery, which addresses one of the most frustrating challenges for gamers today – long load times and disruptive stuttering during a game\'s first launch. In testing with Obsidian Entertainment\'s Avowed, Microsoft engineers observed launch times reduced by as much as 85%, getting players into games faster while also preserving battery life on portable devices.

<!-- more -->

The innovation comes as part of Microsoft\'s gaming features announcement at Gamescom 2025 and will make its debut on the new ROG Xbox Ally and ROG Xbox Ally X handheld devices. The technology focuses on solving the shader compilation problem that has long plagued PC gaming, especially during first-time game launches.

A game interacts with the GPU using programs called shaders, which are responsible for lighting, texturing, physics, and other visual elements. Traditionally, these shaders need to be compiled to a GPU-specific format at game launch or during gameplay, leading to loading screens or in-game stuttering.

Microsoft\'s innovative solution takes this shader compilation process and moves it to the cloud:

1. The DirectX team has created a method to collect shader data from games and package it in a standardized format called a State Object Database (SODB)
2. Microsoft worked with hardware partners to separate the shader compiler from the graphics driver
3. The cloud service combines the game data in the SODB with the compiler to create a Precompiled Shader Database (PSDB)
4. This PSDB is distributed by the Xbox store alongside the game download
5. When a game runs for the first time, it sees all needed shaders already available in the Windows cache
6. If a device takes a driver update, the system automatically updates the shader cache

The end result is that an expensive workload that previously had to happen on each gaming device is now handled in the cloud and distributed at download time.

While the initial launch focuses on supporting the ROG Xbox Ally and ROG Xbox Ally X, Microsoft has announced plans to release an AgilitySDK in September that will provide developers and gaming storefronts with tools and APIs to expand this functionality across the industry.

Microsoft is also continuing to collaborate with hardware partners to increase the number of supported devices. The technology currently requires no work from game studios to integrate, but Microsoft plans to work with developers to integrate the capability directly into game engines to ensure games can take advantage of advanced shader delivery on launch day.

This technology could potentially revolutionize the PC gaming experience by eliminating one of its most persistent technical issues, providing console-like smoothness and startup times while maintaining the flexibility and power of PC gaming.

**Written using GitHub Copilot Claude 3.7 Sonnet in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [Microsoft DirectX Developer Blog][def]
- [TPU][def2]

[def]: https://devblogs.microsoft.com/directx/introducing-advanced-shader-delivery/
[def2]: https://www.techpowerup.com/340173/microsofts-advanced-shader-delivery-slashes-first-run-load-times-by-up-to-85
