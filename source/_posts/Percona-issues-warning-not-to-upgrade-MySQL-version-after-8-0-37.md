---
title: Percona issues warning not to upgrade MySQL version after 8.0.37
date: 2024-07-13 20:16:26
tags:
    - percona
    - mysql
    - warning
    - crash
    - large table
    - data loss
    - process killed
    - database
---

### Quick Report

Percona in their blog post issued strong warning not to upgrade MySQL version after 8.0.37. The upgrade may cause crash after restarting MySQL instance after adding large amount of tables.
<!-- more -->

At the moment, Percona is working on a fix for this issue and recommends not to upgrade to MySQL 8.0.37 until the issue is resolved. They created a [JIRA ticket][def] to track the progress of the fix after it was brought to attention by Jean-François Gagné bug report at [MySQL bug tracker][def2] which is now marked private and not available for public view.

In short if you issue a restart of MySQL instance i.e docker instance after creating large amount of tables say 10,000 the mysql daemon fails to start and constantly crashes.

### Source(s)

- [Percona Blogs][def]
- [MySQL Bug Tracker][def2]

[def]: https://perconadev.atlassian.net/browse/PS-9306
[def2]: https://bugs.mysql.com/bug.php?id=115517