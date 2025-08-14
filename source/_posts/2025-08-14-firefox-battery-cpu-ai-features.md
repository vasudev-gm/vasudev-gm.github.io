---
title: Firefox 141 Sipping More Battery and CPU, and the Culprit is AI-Backed Features
date: 2025-08-14 23:40:00
tags:
  - firefox
  - mozilla
  - browser
  - ai
  - battery drain
  - cpu usage
  - inference-engine
  - tab-groups
---

### Quick Report

Firefox users are reporting significant CPU and power usage spikes in recent versions of the browser, apparently caused by an **inference engine** built into Firefox. <!-- more -->

The issue appears to be linked to Mozilla\'s integration of on-device AI features, particularly for naming tab groups. A background process called "Inference" has been identified as the culprit. Mozilla has acknowledged the problem, calling it a "performance bug" that was "unintentionally shipped during the phased rollout" of their client-side matching feature in the address bar. The company has reportedly reversed the rollout and is working on a fix, though users can manually disable these features through Firefox\'s configuration settings.

<!-- more -->

## Firefox\'s Growing AI Ambitions

Over the past several months, Mozilla has been gradually introducing AI-powered features into Firefox. The integration began appearing visibly in Firefox 136 with the addition of an AI chatbot button in the browser\'s sidebar, followed by AI-enhanced tab groups in Firefox 138 and expanded in Firefox 141.

The tab groups feature was marketed as using "a local AI model to read your open tabs' titles and descriptions to suggest more tabs and group names," with Mozilla emphasizing that "everything happens on your device" rather than in the cloud. This was part of Mozilla\'s strategy to implement AI features while respecting user privacy through on-device processing.

## The Performance Issue

According to reports first highlighted on Reddit and documented in Mozilla\'s Bugzilla (bug #1982278), users have been experiencing unexplained CPU spikes and battery drain. When investigating through Firefox\'s built-in process monitor (accessible by typing `about:processes` in the address bar), many users identified a background process called "Inference" consuming significant resources.

The issue appears to be affecting battery life on laptops and causing noticeable performance degradation, with some users reporting their fans spinning up during what should be light browsing activity.

A Mozilla spokesperson clarified that "Inference is an isolated process in Firefox responsible for private on-device AI inference, like language translation for websites." This confirms that the process is related to Firefox\'s AI capabilities rather than being unintended or malicious software.

## Mozilla\'s Response

Mozilla has acknowledged the issue, explaining that they "unintentionally shipped a performance bug during the phased rollout" of their client-side matching feature for the address bar. This feature is designed to help "users recall previously visited websites without remembering exact keywords in the URL or page title."

The company stated that after receiving reports of issues that hadn't appeared during testing, they reversed the rollout, and "the performance issues should be resolved" without users needing to take action. Nevertheless, they are working on a permanent fix for the underlying problem.

## How to Disable Firefox\'s AI Features

For users who continue to experience issues or simply prefer not to have AI features in their browser, Mozilla has provided several ways to disable these functions:

1. **Disable the AI chatbot from the GUI**:
   - Click the Settings button (⚙️) and select "Customize Sidebar"
   - Uncheck "AI chatbot" in the "Firefox tools" section

2. **Disable via about:config**:
   - Type `about:config` in the address bar
   - Search for `browser.ml.chat.enabled` and set it to "false"

3. **Disable all AI features**:
   - Type `about:config` in the address bar
   - Search for `browser.ml.enable` and set it to "false"

This incident highlights a growing tension in the tech industry as companies race to integrate AI features into existing products, sometimes at the expense of performance and user experience. Mozilla is far from alone in this trend, as web browsers, productivity software, and operating systems increasingly embed AI capabilities.

**Written using GitHub Copilot Claude 3.7 Sonnet in agentic mode instructed to follow current codebase style and conventions for writing articles.**

## Source(s)

- [The Register: Some users report their Firefox browser is scoffing CPU power][def]
- [Mozilla Support: How to use AI-enhanced tab groups][def2]
- [Mozilla Bugzilla: Bug #1982278][def3]

[def]: https://www.theregister.com/2025/08/13/firefox_ai_scoffing_power/
[def2]: https://support.mozilla.org/en-US/kb/how-use-ai-enhanced-tab-groups
[def3]: https://bugzilla.mozilla.org/show_bug.cgi?id=1982278
