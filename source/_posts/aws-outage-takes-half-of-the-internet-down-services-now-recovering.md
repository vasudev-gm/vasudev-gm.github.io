---
title: "AWS Outage Takes Half of the Internet Down, Services Now Recovering"
date: 2025-10-21 22:00:00
description: "A major AWS US-EAST-1 region outage disrupted Amazon, Alexa, ChatGPT, Epic Games, Fortnite, and Snapchat, exposing cloud infrastructure concentration risks."
tags:
  - aws
  - amazon
  - outage
  - us-east-1
  - cloud
  - dynamodb
  - chatgpt
  - fortnite
  - snapchat
---

### Quick Report

Amazon Web Services suffered a major outage on October 20, 2025, affecting the US-EAST-1 region and bringing down a substantial portion of internet services. Popular platforms including Amazon.com, Alexa, ChatGPT, Epic Games Store, Epic Online Services, Snapchat, and Fortnite experienced disruptions lasting several hours. AWS identified the root cause as a DNS issue affecting DynamoDB APIs, with cascading effects across dependent services. The company has since mitigated the underlying problem, though some customers may still need to flush DNS caches for full resolution.

<!-- more -->

The Incident Timeline:

The outage began early Monday morning Pacific Daylight Time (PDT) when AWS first acknowledged "increased error rates and latencies for multiple AWS services in the US-EAST-1 Region." Within hours, the impact became apparent across the internet:

- **Amazon.com**: E-commerce platform experienced reduced functionality
- **Alexa**: Voice assistant services interrupted
- **ChatGPT**: OpenAI\'s popular AI assistant went offline
- **Epic Games**: Store and online services unavailable
- **Fortnite**: Game servers disconnected players
- **Snapchat**: Social messaging platform disrupted

AWS later provided more specific details, stating they had "identified a potential root cause for error rates affecting the DynamoDB APIs in the US-EAST-1 Region" and noting "this issue also impacts other AWS services in the US-EAST-1 Region. Global services or features that rely on US-EAST-1 endpoints, such as IAM updates and DynamoDB Global tables, may also be experiencing issues."

The Root Cause:

The underlying issue stemmed from DNS (Domain Name System) problems within AWS\'s infrastructure. DNS translates human-readable domain names into IP addresses that computers use to communicate, making it a critical foundational service. When DNS fails, services cannot locate the servers they need to connect to, effectively breaking connectivity even when the underlying infrastructure remains operational.

AWS confirmed that "the underlying DNS issue has been fully mitigated, and most AWS service operations are now succeeding normally." However, they advised customers who continue experiencing issues to flush their DNS caches—a step that clears outdated or corrupted DNS information stored locally on computers and network equipment.

Infrastructure Concentration Risk:

The outage highlights the concentration risk inherent in modern cloud infrastructure. US-EAST-1 (located in Northern Virginia) is one of AWS\'s oldest and most heavily utilized regions, hosting critical services for countless organizations. When a single region experiences problems, the impact cascades across the internet.

TechPowerUp\'s editorial note emphasized their different approach: "At TechPowerUp, our sovereign infrastructure is intentionally designed to operate without relying on external cloud providers. When an AWS, Azure, or GCP outage occurs, any service dependent on them is affected. If our infrastructure fails, it is solely due to our own error."

This architectural decision reflects a growing recognition that cloud concentration creates systemic risk. While major cloud providers offer sophisticated redundancy and disaster recovery capabilities, regional outages can still impact thousands of services simultaneously.

Customer Impact:

For businesses relying on AWS, the outage demonstrated the importance of multi-region architectures and disaster recovery planning. Services designed to fail over to alternative regions automatically experienced minimal disruption, while those concentrated in US-EAST-1 faced extended downtime.

The incident affected several categories of users:

- **Enterprises**: Companies with production workloads in US-EAST-1 saw service interruptions affecting customer-facing applications
- **Developers**: Build pipelines, testing environments, and development tools became unavailable
- **Consumers**: Popular applications like ChatGPT and Fortnite left millions unable to access services they rely on daily
- **Support cases**: During the outage, customers couldn\'t create or update AWS support tickets, complicating communication

The Broader Context:

AWS dominates the cloud infrastructure market, with estimates suggesting over 30% of internet services rely on its infrastructure to some degree. This dominance creates efficiency and cost benefits for customers but also concentrates risk. When AWS experiences regional problems, the impact extends far beyond the company\'s direct customers to affect end-users worldwide.

Competing platforms like Google Cloud Platform (GCP), Microsoft Azure, and smaller providers offer alternatives, but the market remains heavily concentrated among a few major players. Critics argue this concentration stifles competition and creates "too big to fail" scenarios where a single provider\'s problems cascade across the digital economy.

The incident also raises questions about redundancy strategies. While AWS offers multiple regions and availability zones designed to provide resilience, many customers optimize for cost by concentrating resources in single regions rather than implementing expensive multi-region architectures. This trade-off between cost efficiency and resilience becomes painfully apparent during outages.

Recovery and Lessons:

AWS\'s relatively quick identification and mitigation of the DNS issue demonstrates the company\'s operational capabilities, but the incident serves as a reminder that even the most sophisticated infrastructure providers can experience failures. Organizations dependent on cloud services should:

- Implement multi-region architectures for critical applications
- Maintain tested disaster recovery procedures
- Monitor cloud provider status pages proactively
- Design applications to gracefully handle cloud service failures
- Consider hybrid approaches combining cloud and on-premises infrastructure

As cloud computing continues to dominate enterprise and consumer infrastructure, balancing the benefits of centralized platforms against the risks of concentrated failures remains an ongoing challenge for the technology industry.

**Written using GitHub Copilot Sonnet 4.5 in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [AWS Health Status Dashboard][def]
- [The Verge Coverage][def2]
- [TPU][def3]

[def]: https://health.aws.amazon.com/health/status
[def2]: https://www.theverge.com/news/802486/aws-outage-alexa-fortnite-snapchat-offline
[def3]: https://www.techpowerup.com/342052/aws-outage-takes-half-of-the-internet-down-services-now-recovering
