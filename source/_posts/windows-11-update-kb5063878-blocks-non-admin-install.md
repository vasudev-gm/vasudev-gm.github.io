---
title: Windows 11 Update KB5063878 Blocks Non-Admin install (Workaround:- Use Run as Admin)
date: 2025-09-07 02:30:00
description: "Microsoft's KB5063878 update blocks non-admin MSI operations, requiring administrator privileges for app installation and repairs. Learn about workarounds."
tags:
  - windows 11
  - kb5063878
  - uac
  - msi
  - security update
  - non admin
  - workaround
  - cve2025-50173
  - windows security
  - error 1730
---

### Quick Report

Microsoft\'s August 2025 security update KB5063878 for Windows 11 and Windows Server 2025 has introduced stricter User Account Control (UAC) requirements that block standard users from performing Windows Installer (MSI) repair operations without administrator privileges. This security improvement, which addresses vulnerability CVE-2025-50173, is causing unexpected UAC prompts and installation failures for non-administrator users.

<!-- more -->

After installing the August 2025 Windows security update (KB5063878), standard users are experiencing UAC prompts requesting administrator credentials when attempting to run MSI repair commands, launch certain applications like Autodesk AutoCAD, install applications that configure themselves per user, run Windows Installer during Active Setup, or deploy packages via Microsoft Configuration Manager that use user-specific "advertising" configurations.

For standard users without administrator rights, these operations simply fail. For example, installing and running Office Professional Plus 2010 as a standard user will fail with Error 1730 during the configuration process:

```plaintext
Error 1730: You must be an Administrator to install this product.
```

The issue affects multiple Windows versions including Windows 11 (versions 22H2, 23H2, 24H2), Windows 10 (versions 21H2, 22H2, and LTSC editions), Windows Server 2025, Windows Server 2022, and Windows Server 2019 and earlier server versions.

Workaround for Home Users:

The simplest workaround is to run the affected applications with administrator privileges:

1. From the Start menu or Search results, right-click the application icon
2. Select "Run as administrator"
3. Provide administrator credentials when prompted

Enterprise Workaround:

For enterprise environments where standard users cannot run applications as administrators, IT administrators can implement a special Group Policy using Known Issue Rollback (KIR). To apply this mitigation, contact Microsoft\'s Support for business.

Microsoft strongly recommends against using other workarounds, such as disabling related security features.

Technical Background:

This security improvement is part of Microsoft\'s response to CVE-2025-50173, which involves a privilege escalation vulnerability in Windows Installer. The update enforces the requirement that UAC prompt for administrator credentials when performing Windows Installer (MSI) repair and related operations, closing a potential security hole that could be exploited by malicious actors.

The change specifically targets operations like:

```powershell
msiexec /fu [ProductCode]  # Force update installation
msiexec /fa [ProductCode]  # Force application repair
```

**Written using GitHub Copilot Claude 3.7 Sonnet in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [Microsoft Learn - Windows Server 2025 known issues][def]
- [Microsoft Security Response Center - CVE-2025-50173][def2]
- [TPU][def3]

[def]: https://learn.microsoft.com/en-us/windows/release-health/status-windows-server-2025#non-admins-might-receive-unexpected-uac-prompts-when-doing-msi-repair-operations
[def2]: https://msrc.microsoft.com/update-guide/advisory/CVE-2025-50173
[def3]: https://www.techpowerup.com/340715/windows-august-patch-sparks-unexpected-uac-prompts-blocking-non-admin-app-installs
