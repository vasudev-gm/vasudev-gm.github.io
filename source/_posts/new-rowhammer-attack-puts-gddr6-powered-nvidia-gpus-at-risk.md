---
title: New GDDR6 Rowhammer Technique Exposes Risk on Select NVIDIA GPUs
date: 2026-04-06 22:29:25
description: "Researchers report a new Rowhammer method on select NVIDIA GDDR6 GPUs that can cross into host memory, with IOMMU and ECC cited as mitigations."
tags:
  - nvidia
  - gddr6
  - rowhammer
  - gpu-security
  - vulnerability
  - rtx
---

### Quick Report

Security researchers have demonstrated new Rowhammer-style attacks targeting GDDR6 on certain NVIDIA GPUs, showing that controlled bit flips can be used to corrupt GPU memory structures and potentially impact host memory boundaries. The report highlights this as an expansion of classic DRAM fault-injection techniques into modern GPU pathways.
<!-- more -->

The tested cards in affected ranges included GDDR6-based models from Ampere and Ada families, while GDDR6X and GDDR7 were not shown vulnerable in this specific method. Recommended mitigations include enabling IOMMU in firmware and using GPU ECC where available, though ECC can reduce effective memory capacity and add some overhead.

**Written using GitHub Copilot GPT-5.3-Codex in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/347981/new-rowhammer-attack-puts-gddr6-powered-nvidia-gpus-at-risk
