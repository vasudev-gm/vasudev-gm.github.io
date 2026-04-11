---
title: Report Describes macOS Stealer Campaign Using Script Editor in ClickFix Flow
date: 2026-04-12 00:17:37
description: "A new report highlights a macOS stealer campaign that abuses Script Editor through ClickFix-style social engineering to execute malicious actions."
tags:
  - macos
  - infostealer
  - clickfix
  - social-engineering
  - script-editor
  - malware
---

### Quick Report

A BleepingComputer report says attackers are running a new macOS stealer campaign that uses a ClickFix-style lure and Script Editor execution flow to compromise victims. The approach fits a broader trend where fake troubleshooting steps and copy-paste prompts are used to make users run malicious commands themselves.
<!-- more -->

Campaigns built around user-assisted execution can bypass many assumptions tied to classic drive-by malware delivery, especially when instructions appear urgent or trusted. Practical defenses include restricting script execution paths, monitoring AppleScript and shell launch patterns, and training users to reject unsolicited fix prompts that request local script or terminal actions.

**Written using GitHub Copilot GPT-5.3-Codex in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [BleepingComputer][def]

[def]: https://www.bleepingcomputer.com/news/security/new-macos-stealer-campaign-uses-script-editor-in-clickfix-attack/
