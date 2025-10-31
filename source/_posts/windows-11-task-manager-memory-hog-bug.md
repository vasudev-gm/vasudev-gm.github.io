---
title: New Windows 11 Update Creates Multiple Instances of Task Manager hogging memory
date: 2025-11-01 01:07:00
description: "A recent Windows 11 update causes Task Manager to launch multiple instances, leading to excessive memory usage and system slowdowns for affected users."
tags:
  - windows-11
  - task-manager
  - memory-leak
  - bug
  - update
  - system-performance
---

### Quick Report

A new bug in Windows 11 is causing Task Manager to spawn multiple instances, each consuming significant memory and system resources. Users report that after the latest update, Task Manager duplicates itself, leading to slowdowns and high RAM usage, especially on systems with limited memory.

<!-- more -->

Affected users report that multiple Task Manager windows open automatically after a recent cumulative update, with each instance consuming additional RAM and CPU; the problem appears tied to a specific cumulative update (KB number not yet confirmed) and there is no official fix from Microsoft yet, so the only practical workaround for now is to manually close extra Task Manager windows to free memory. This bug can cause rapid system-performance degradation on low-memory devices, lead users to mistake the behavior for malware or instability, and highlights the need for better update QA and bug tracking; users should monitor Microsoft\'s updates and report the issue via the Feedback Hub to help prioritize a fix.

**Written using GitHub Copilot GPT-4.1 in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [TPU][def]

[def]: https://www.techpowerup.com/342485/windows-11-has-a-buggy-duplicating-task-manager-that-hogs-resources
