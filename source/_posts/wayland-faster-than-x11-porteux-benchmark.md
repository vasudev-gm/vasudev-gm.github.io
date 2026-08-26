---
title: "PorteuX Benchmark Finds Wayland Faster Than X11, but Not Always More Efficient"
date: 2026-08-26 23:35:00
description: "PorteuX benchmarks find Wayland compositors generally faster than X11, while xfwm4-gl and Openbox remain competitive on efficiency."
tags:
  - linux
  - wayland
  - x11
  - porteux
  - performance
  - benchmarking
  - xfce
---

### Quick Report

A PorteuX Linux benchmark suggests that Wayland is intrinsically faster than X11 for compositing, but not necessarily more efficient. The tests used an AMD Ryzen 7 7840HS system with Radeon 780M integrated graphics and 32 GB of memory, comparing multiple window managers and compositors through the project\'s new `wmbench` tool.
<!-- more -->

KDE Plasma on Wayland delivered strong performance, with Labwc and COSMIC also close to the top in the tested workloads. For power efficiency and CPU utilization, however, LXDE with Openbox on X11 and Xfce with the OpenGL-based `xfwm4-gl` compositor performed slightly better than the Wayland alternatives, showing that raw compositing speed and overall efficiency do not always point to the same winner.

**Written using GitHub Copilot GPT-5 mini in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [Phoronix][def]

[def]: https://www.phoronix.com/news/Wayland-X11-Performance-PorteuX
