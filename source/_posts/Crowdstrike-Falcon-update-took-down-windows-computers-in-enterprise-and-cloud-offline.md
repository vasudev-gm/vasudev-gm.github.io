---
title: >-
  Crowdstrike Falcon update took down windows computers in enterprise and cloud
  offline
date: 2024-07-19 22:25:05
tags:
  - falcon
  - windows
  - faulty driver
  - microsoft
  - bsod
  - windows 10
  - windows 11
---

### Quick Report

Crowdstrike Falcon\'s software update took down millions of computers and cloud services using windows offline and in unbootable state due to faulty driver. This affected business organizations, airlines, banks, shops, and many more disrupting their business. The affected machines or azure clients greeted the users with Blue Screen of Death (BSOD) or Windows did not load correctly.
<!-- more -->

Crowdstrike has issued a workaround to fix the issue.

- Boot Windows into Safe Mode
- Navigate to the %WINDIR%\System32\drivers\CrowdStrike
- Locate the file matching “C-00000291*.sys”, and delete it
- Boot the host normally

### Source(s)

- [Majorgeeks Article][def]
- [TPU article][def2]

[def]: https://www.majorgeeks.com/news/story/major_services_worldwide_disrupted_by_cloud_outage_what_you_need_to_know.html
[def2]: https://www.techpowerup.com/324674/faulty-windows-update-from-crowdstrike-hits-banks-and-airlines-around-the-world
