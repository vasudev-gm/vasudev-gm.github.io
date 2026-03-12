---
title: "Microsoft Ships DirectStorage 1.4 With Zstandard and Asset Conditioning"
date: 2026-03-12 22:52:10
description: "DirectStorage 1.4 adds Zstandard support and a new Game Asset Conditioning Library to improve compression efficiency and reduce streaming overhead."
tags:
  - microsoft
  - directstorage
  - windows-11
  - directx-12
  - zstd
  - gaming
  - ssd
---

### Quick Report

Microsoft has released DirectStorage 1.4 with a focus on improving the practical asset pipeline from storage to GPU. The update adds Zstandard compression support and introduces the Game Asset Conditioning Library, a preprocessing stage that rearranges and conditions texture data so runtime transfer and decompression can happen with lower overhead.
<!-- more -->

The company says conditioning can materially improve compression outcomes while preserving visual quality, and that DirectStorage automatically reconstructs standard textures during runtime. Public preview support currently targets BC1, BC3, BC4, and BC5 formats, with BC7 and additional optimization work planned for later updates.

**Written using GitHub Copilot GPT-5.3-Codex in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/347321/microsoft-directstorage-1-4-brings-quicker-load-times-and-smoother-asset-streaming
