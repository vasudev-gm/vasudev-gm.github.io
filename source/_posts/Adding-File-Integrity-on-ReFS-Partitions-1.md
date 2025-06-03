---
title: Adding File Integrity on ReFS Partitions
date: 2025-06-03 23:41:36
tags:
    - ReFS
    - Windows
    - file system
    - integrity streams
    - data integrity
    - checksums
    - storage
    - windows server
    - windows
    - windows 11
    - windows 10
    - NTFS
---

### Understanding ReFS Integrity Streams

ReFS (Resilient File System) offers an optional feature called integrity streams that validates and maintains data integrity using checksums. While ReFS always uses checksums for metadata, it doesn't by default generate or validate checksums for file data. Enabling integrity streams allows users to leverage checksums for file data, providing a way to clearly determine if data is valid or corrupt.
<!-- more -->

### How ReFS Integrity Streams Work

Integrity streams can be enabled at multiple levels:

- Individual files
- Directories
- Entire volumes

Once enabled, ReFS creates and maintains a checksum for the specified file(s) in the file\'s metadata. Before returning any data that has integrity streams enabled, ReFS calculates its checksum and compares it to the stored checksum:

- If checksums match: Data is marked as valid and returned to the user
- If checksums don't match: Data is considered corrupt

How ReFS responds to corruptions depends on the resiliency of the volume:

- On non-resilient simple spaces or bare drives: ReFS returns an error without returning corrupted data
- On resilient mirror or parity spaces: ReFS attempts to correct the corruption
  - If successful: ReFS applies a corrective write to restore data integrity
  - If unsuccessful: ReFS returns an error

All corruption events are recorded in the System Event Log, including whether they were fixed.

### The Integrity Scrubber

Beyond validating data on access, ReFS uses a background scrubber to check infrequently accessed data. This scrubber:

- Periodically scans the volume
- Identifies latent corruptions
- Proactively triggers repairs of corrupt data

By default, the scrubber runs every four weeks. This interval can be configured in Task Scheduler under Microsoft\Windows\Data Integrity Scan.

> Note: The scrubber can only validate file data for files where integrity streams is enabled.

### Performance Considerations

While integrity streams provide greater data integrity, they do incur a performance cost:

- All write operations become allocate-on-write operations, which can lead to file fragmentation
- Computing and validating checksums adds computational overhead, potentially increasing I/O latency

Microsoft recommends leaving integrity streams disabled on performance-sensitive systems.

### Managing Integrity Streams with PowerShell

#### Checking Integrity Stream Status

To check if integrity streams are enabled for a file:

```powershell
Get-FileIntegrity -FileName 'C:\Docs\TextDocument.txt'
```

For all files in a directory:

```powershell
Get-Item -Path 'C:\Docs\*' | Get-FileIntegrity
```

#### Enabling or Disabling Integrity Streams

For a single file:

```powershell
Set-FileIntegrity -FileName 'H:\Docs\TextDocument.txt' -Enable $True
```

For all files in a directory:

```powershell
Get-Item -Path 'H:\Docs\*' | Set-FileIntegrity -Enable $True
```

For an entire volume or directory:

```powershell
Set-FileIntegrity H:\ -Enable $True
Set-FileIntegrity H:\Docs -Enable $True
```

### Conclusion

ReFS integrity streams provide a robust solution for ensuring data integrity through checksums. While there is a performance trade-off, the ability to detect and potentially repair corrupted data makes it a valuable feature for data-critical systems, especially when combined with resilient storage configurations like mirror or parity spaces.

### Resources

For more information about ReFS, check out these Microsoft resources:

- [ReFS overview][def]
- [ReFS block cloning][def2]
- [Storage Spaces Direct overview][def3]
- [My YouTube Short Video](TBD)


[def]: https://learn.microsoft.com/en-us/windows-server/storage/refs/refs-overview
[def2]: https://learn.microsoft.com/en-us/windows-server/storage/refs/block-cloning
[def3]: https://learn.microsoft.com/en-us/windows-server/storage/storage-spaces/storage-spaces-direct-overview