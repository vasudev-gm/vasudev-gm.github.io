---
title: Microsoft Azure outage due to massive DDoS
date: 2024-08-01 22:35:42
tags:
    - microsoft
    - azure
    - outage
    - ddos
    - attack
    - security
---

### Quick Report

Microsoft had a nine hour long outage due to massive Denial of Service (DDoS) attack disrupting Azure services such as Entra, Office 365, Purview and other services.

I\'ll add the excerpt from [Azure's Incident Report][def] below.

> While the initial trigger event was a Distributed Denial-of-Service (DDoS) attack, which activated our DDoS protection mechanisms, initial investigations suggest that an error in the implementation of our defenses amplified the impact of the attack rather than mitigating it. Once the nature of the usage spike was understood, we implemented networking configuration changes to support our DDoS protection efforts, and performed failovers to alternate networking paths to provide relief.

Microsoft said they noticed usage spikes in Azure Front Door (AFD) and Content Delivery Networks (CDN) causing intermittent errors, latency issues and timeout errors. Microsoft said it will release Preliminary Post-Incident Review (PIR) within 72 hours and a Final Post-Incident Review within the next two weeks with additional details and lessons learned from this week's outage.

### Source(s)

- [Bleeping Computer Article][def2]

[def]: https://azure.status.microsoft/en-us/status/history/#incident-history-collapse-KTY1-HW8
[def2]: https://www.bleepingcomputer.com/news/microsoft/microsoft-says-massive-azure-outage-was-caused-by-ddos-attack/
