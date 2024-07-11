---
title: 'Blast RADIUS: Man in the Middle Attack with RADIUS protocol'
date: 2024-07-11 22:17:19
tags:
    - security
    - RADIUS
    - man in the middle attack
    - network security
    - RADIUS protocol
---

### Quick Report

A new authentication bypass dubbed **[Blast RADIUS][def]** has been discovered by security researchers. This attack exploits vulnerabilities in the RADIUS protocol, a widely used authentication protocol for network devices. By intercepting and modifying RADIUS packets, an attacker can gain unauthorized access to a network and potentially compromise sensitive data.
<!-- more -->

According to the [research paper][def2] published by the team of researchers, they discovered a MiTM (Man in The Middle) attack that attacker can use to forge valid accept message between RADIUS client and server due to failed authentication request which allows access to all networked devices without needing to brute force password or shared secret. The attacker does not learn user credentials.

Excerpt from Blast Fail website:
> Blast-RADIUS is a vulnerability that affects the RADIUS protocol. RADIUS is a very common protocol used for authentication, authorization, and accounting (AAA) for networked devices on enterprise and telecommunication networks.
RADIUS is used in a wide variety of applications, including in enterprise networks to authenticate access to switches and other routing infrastructure, for VPN access, by ISPs for DSL and FTTH (Fiber to the Home), in 802.1X and Wi-Fi authentication, 2G and 3G cellular roaming and 5G DNN (Data Network Name) authentication, mobile Wi-Fi offload with SIM card-based authentication, private APN authentication, to authenticate access to critical infrastructure, and in the Eduroam and OpenRoaming wifi consortia.
The authors also briefed about affected entities mainly involving System Administrator who use RADIUS protocol for their vendor network devices and asked vendors to patch their devices.
Our attack combines a novel protocol vulnerability with an MD5 chosen-prefix collision attack and several new speed and space improvements. The attacker injects a malicious attribute into a request that causes a collision between the authentication information in the valid server response and the attacker’s desired forgery. This allows the attacker to turn a reject into an accept, and add arbitrary protocol attributes.

### Source(s)

- [Blast Radius Fail Website][def]
- [Bleeping Computer Article][def3]
- [CVE-2024-3596][def4]

[def]: https://www.blastradius.fail/
[def2]: https://www.blastradius.fail/pdf/radius.pdf
[def3]: https://www.bleepingcomputer.com/news/security/new-blast-radius-attack-bypasses-widely-used-radius-authentication/
[def4]: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-3596
