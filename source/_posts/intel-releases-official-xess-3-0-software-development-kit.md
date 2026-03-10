---
title: "Intel Publishes XeSS 3.0 SDK With Multi-Frame Generation Support"
date: 2026-03-10 20:02:28
description: "Intel has published the XeSS 3.0 SDK as precompiled Windows DLLs, adding multi-frame generation and external heap support for easier engine integration."
tags:
  - intel
  - xess
  - xess-3
  - sdk
  - gaming
  - gpu
  - upscaling
  - frame-generation
---

### Quick Report

Intel has officially released the XeSS 3.0 SDK for developers, packaging the update as precompiled binaries and enabling straightforward drop-in updates for projects already using older XeSS branches. The release emphasizes multi-frame generation support, with Intel describing up to three AI-generated frames inserted between rendered frames for substantially higher displayed frame rates.
<!-- more -->

The update also introduces external memory heap support so engines can manage shared VRAM allocations more directly, which can reduce buffer duplication and improve integration efficiency. The current delivery model remains Windows DLL focused, and the broader open-source expectations around XeSS are still unresolved.

**Written using GitHub Copilot GPT-5.3-Codex in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/347202/intel-releases-official-xess-3-0-software-development-kit
