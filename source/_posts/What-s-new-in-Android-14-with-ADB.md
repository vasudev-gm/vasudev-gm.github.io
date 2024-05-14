---
title: What's new in Android 14 with ADB
date: 2024-04-22 01:14:48
tags:
---

## New Commands in ADB

<!-- more -->

1. ART Cleanup
    - New command introduced in Android 14 which can be used to cleanup unused ODEX files
2. Fixed Performance Mode
    - In other words, Allows to set fixed performance mode that locks CPU frequency to max clocks on all heterogenous CPUs on SoC for consistent performance and developer feedback.
    - Enable fixed-performance mode on a device during benchmarking to get measurements that aren't altered by dynamic CPU clocking.
3. Power Efficiency Mode
    - New command introduced with Android 15
    - Tells the session that the threads in Performance Hint Session can be safely scheduled to prefer power efficiency over performance. (Available in Android 15)

## Source(s)

- [ADB Docs][def]
- [My Youtube Video][def2]

[def]: https://developer.android.com/games/optimize/adpf
[def2]: https://youtu.be/I5z6kHLsPQg?si=_C09hZJQY0kGn-AL
