---
title: "Microsoft Unveils Maia 200 AI Accelerator for Next-Gen Cloud Inference"
date: 2026-01-26 23:52:00
description: "Microsoft launches Maia 200, a 3nm AI inference accelerator with HBM3e memory, targeting cloud-scale AI workloads and OpenAI GPT-5.2 deployments."
tags:
  - microsoft
  - maia-200
  - ai
  - accelerator
  - azure
  - hbm3e
  - tsmc
  - openai
---

### Quick Report

Microsoft has introduced the Maia 200, its latest AI inference accelerator, designed to boost the performance and efficiency of large-scale cloud AI workloads. Built on TSMC\'s 3 nm process, Maia 200 features native FP8/FP4 tensor cores, 216 GB of HBM3e memory at 7 TB/s, and over 140 billion transistors.
<!-- more -->

The Maia 200 delivers over 10 petaFLOPS (FP4) and 5 petaFLOPS (FP8) per chip, with a 750 W TDP. It is deployed in Microsoft\'s US Central datacenter, with more regions planned. The accelerator is integrated with Azure and supports the latest OpenAI GPT-5.2 models, offering 30% better performance per dollar than previous hardware. Maia 200\'s architecture includes a novel Ethernet-based scale-up network and a cloud-native development stack, aiming to reduce power usage and total cost of ownership for hyperscale AI. Microsoft is previewing a Maia SDK for developers, with PyTorch and Triton support.

**Written using GitHub Copilot GPT-4.1 in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][src]
- [Microsoft Blog][msblog]

[src]: https://www.techpowerup.com/345639/microsoft-introduces-its-newest-ai-accelerator-maia-200
[msblog]: https://blogs.microsoft.com/blog/2026/01/26/maia-200-the-ai-accelerator-built-for-inference/
