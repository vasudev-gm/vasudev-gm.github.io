---
title: Creating ReFS on Clean Install of Windows 11 24H2
date: 2025-05-26 22:30:00
tags:
    - windows
    - windows 11
    - 24H2
    - refs
    - file system
    - installation
    - secure boot
    - gpt
    - compression
    - data deduplication
---

### Quick Report

Windows 11 24H2 introduces improved support for the Resilient File System (ReFS), Microsoft\'s modern file system designed to maximize data availability and scalability. This post guides you through creating an ReFS partition during a clean Windows 11 installation and explores advanced ReFS utilities for compression and data deduplication.

<!-- more -->

## Understanding ReFS

Resilient File System (ReFS) is Microsoft\'s modern file system designed to address limitations in NTFS. It offers superior data integrity, automatic corruption detection and repair, improved scalability, and better performance for certain workloads. With Windows 11 24H2, Microsoft has enhanced ReFS support, making it accessible during the installation process.

## Prerequisites

Before attempting to install Windows 11 on an ReFS partition, ensure you meet these requirements:

1. A Windows 11 24H2 installation media (USB or ISO)
2. A GPT-formatted disk (not MBR)
3. Secure Boot enabled in BIOS/UEFI
4. Basic familiarity with command-line tools like diskpart

## Creating ReFS During Windows 11 Installation

Follow these steps during your Windows 11 24H2 installation to create an ReFS partition:

1. Start the Windows 11 installation process as normal
2. Progress through the installation until you reach the disk partition screen
3. Let the installer create the default partitions through the GUI
4. **Important Step**: Press **Shift+F10** to open a Command Prompt window
5. In the Command Prompt, enter the following commands:

```cmd
diskpart
list disk
select disk # (replace # with your target disk number)
list partition
select partition 3 (replace 3 with the main partition number for Windows)
format quick fs=refs
exit
exit
```

**Continue with the Windows installation as normal and once completed, you'll be running Windows 11 on an ReFS partition.**

## Advanced ReFS Utilities

After installation, you can leverage these advanced ReFS features through PowerShell:

### Data Deduplication

Data deduplication identifies and removes duplicate data within files, significantly reducing storage requirements:

```powershell
refsutil.exe dedup /d C:
```

### Compression Options

ReFS in Windows 11 24H2 supports multiple compression algorithms. Choose one based on your performance and space requirements:

```powershell
# For best compression ratio
refsutil.exe compression /c /f ZSTD C:

# For best performance with decent compression
refsutil.exe compression /c /f LZ4 C:

# To disable compression
refsutil.exe compression /c /f NONE C:
```

## Benefits of ReFS on Windows 11

Using ReFS as your system drive file system provides several advantages:

1. **Data Integrity**: ReFS includes built-in checksums for metadata and optionally for file data
2. **Self-Healing**: Can automatically repair corrupted data when redundant copies are available
3. **Scalability**: Designed for very large volumes and files
4. **Performance**: Optimized for certain workloads, particularly with large files
5. **Advanced Features**: Native support for data deduplication and multiple compression options

## Limitations and Considerations

While ReFS offers advantages, be aware of these limitations:

1. Not all applications may be fully compatible with ReFS
2. Some legacy features from NTFS are not available
3. Requires GPT disk format and Secure Boot
4. Drive recovery tools may have limited support for ReFS

## Conclusion

Creating an ReFS partition during Windows 11 24H2 installation allows you to leverage Microsoft\'s most advanced file system. By following the straightforward steps outlined in this guide, you can enjoy improved data integrity, potential space savings through compression and deduplication, and better performance for certain workloads. This approach is particularly beneficial for users who handle large files or need enhanced data protection.

### Source(s)

- [Microsoft Docs: Resilient File System (ReFS) overview][def]
- [Windows 11 24H2 Release Information][def2]
- [YouTube: Creating ReFS on Clean Install of Windows 11 24H2][def3]

[def]: https://learn.microsoft.com/en-us/windows-server/storage/refs/refs-overview
[def2]: https://learn.microsoft.com/en-us/windows/release-health/windows11-release-information
[def3]: https://www.youtube.com/watch?v=R-0pZt583rk
