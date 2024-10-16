---
title: GitLab warns of arbitrary branch pipeline execution flaws
date: 2024-10-16 20:35:04
tags:
    - gitlab
    - security
    - arbitrary-code-execution
---

### Quick Report

GitLab has issued warning regarding a flaw that allowed unauthorized users to trigger CI/CD (Continuous Integration and Deployment) pipelines on any branch of a repository on both CE (Community Edition) and EE (Enterprise Edition) versions of the GitLab platform.
<!-- more -->

The vulnerability is tracked as **CVE-2024-9164** and GitLab has released a post to address the issue [linked here][def2]. GitLab recommends everyone to apply the update ASAP.

### Source(s)

- [Bleeping Computer][def]

[def]: https://www.bleepingcomputer.com/news/security/gitlab-warns-of-critical-arbitrary-branch-pipeline-execution-flaw/
[def2]: https://about.gitlab.com/releases/2024/10/09/patch-release-gitlab-17-4-2-released/
