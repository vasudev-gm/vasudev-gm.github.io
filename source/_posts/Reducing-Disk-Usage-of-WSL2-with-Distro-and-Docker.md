---
title: Reducing Disk Usage of WSL2 with Distro and Docker
date: 2025-05-26 21:30:00
tags:
    - wsl2
    - docker
    - windows
    - linux
    - disk usage
    - optimization
    - vhdx
    - diskpart
    - compact
    - distro
---

### Quick Report

Windows Subsystem for Linux 2 (WSL2) and Docker Desktop can consume significant disk space over time, especially for developers who regularly work with containers and Linux distributions. This post explores effective methods to reduce disk usage through proper management of the virtual hard disk files (VHDX) and Docker resources.

<!-- more -->

## Understanding the Problem

WSL2 stores its Linux distributions in VHDX (Virtual Hard Disk) files that can grow quite large but don't automatically shrink when content is deleted. Docker Desktop, which uses WSL2 on Windows, adds to this problem by storing images, containers, volumes, and build caches that accumulate over time.

These growing VHDX files can unexpectedly consume tens of gigabytes on your system drive. The good news is there are several effective ways to reclaim this space.

## Reducing WSL2 Distro Disk Usage

### Method 1: Compact the VHDX File

The most effective way to reduce the size of your WSL2 distribution is to compact its VHDX file:

1. Find your VHDX file location (typically for Docker: `%USERPROFILE%\AppData\Local\Docker\wsl\disk\`)
2. Terminate all WSL instances (needs admin privileges):

   ```powershell
   wsl --shutdown
   ```

3. For Windows 10/11 Pro, Enterprise, or Education editions with Hyper-V tools installed, optimize the disk using PowerShell (needs admin privileges):

   ```powershell
   Optimize-VHD -Path "C:\Users\your_username\AppData\Local\Docker\wsl\disk\docker_data.vhdx" -Mode Full
   ```

### Method 2: Using DiskPart

For Windows 10/11 Home edition or if you don't have Hyper-V tools installed, you can use DiskPart:

1. Shut down WSL (needs admin privileges):

   ```powershell
   wsl --shutdown
   ```

2. Run DiskPart as administrator:

   ```powershell
   diskpart
   ```

3. Within DiskPart (use the exact path to your VHDX file):

   ```shell
   select vdisk file="C:\Users\your_username\AppData\Local\Docker\wsl\disk\docker_data.vhdx"
   attach vdisk readonly
   compact vdisk
   detach vdisk
   exit
   ```

### Method 3: WSL-specific Settings

Use built-in WSL features to manage disk usage:

1. Create or edit your WSL configuration file at `%USERPROFILE%\.wslconfig` or simply use WSL2 Settings application to set to optimal values based on your machine.
2. Add these settings:

   ```wslconfig
   [wsl2]
   memory=4GB
   processors=4
   swap=1GB
   [experimental]
   ```

3. Additional useful commands:

   ```powershell
   # List installed distributions
   wsl --list --verbose

   # Export a distribution to a tar file
   wsl --export <distro-name> <file-name.tar>

   # Unregister the distribution
   wsl --unregister <distro-name>

   # Import the distribution from the tar file (with a smaller initial size)
   wsl --import <distro-name> <install-location> <file-name.tar>
   ```

## Managing Docker Disk Usage

Docker Desktop can be particularly resource-intensive when it comes to disk space. Here are several ways to optimize it:

### 1. Clean Docker Resources

Before compacting Docker\'s VHDX file, clean up unused Docker resources:

```powershell
# List all containers (running and stopped)
docker ps -a

# If needed, back up volumes of containers you're about to remove
# Then remove specific containers by ID
docker container remove container_id

# Clean everything at once (images, containers, networks)
docker system prune -a
```

You can also use these more targeted commands:

```powershell
# Remove all stopped containers
docker container prune -f

# Remove unused images
docker image prune -a -f

# Remove unused volumes
docker volume prune -f

# Remove all unused networks
docker network prune -f
```

### 2. Configure Docker Desktop

1. Open Docker Desktop
2. Go to Settings > Resources
3. Set reasonable limits for:
   - Disk image size
   - Memory
   - Virtual disk location (consider moving to a non-system drive)

### 3. Enable Disk Space Reclamation

In Docker Desktop settings, enable "Use the WSL 2 based engine" in the General tab, then in the Resources tab, check "Enable disk space reclamation".

## Best Practices

To maintain optimal disk usage over time:

1. Regularly clean up Docker resources
2. Be mindful of large container images
3. Set up scheduled tasks to periodically compact VHDX files
4. Consider using multi-stage Docker builds to reduce image sizes
5. Use `.dockerignore` files to prevent unnecessary files from being included in your images

## Conclusion

By implementing these techniques, you can significantly reduce the disk footprint of your WSL2 distributions and Docker environment while maintaining their full functionality. Regular maintenance will ensure that your development environment remains efficient and doesn't unnecessarily consume your system\'s resources.

### Source(s)

- [Microsoft Docs: WSL Commands and Configuration][def]
- [Docker Documentation: Prune Unused Objects][def2]
- [Managing Docker Disk Usage in Windows][def3]
- [YouTube: WSL2 & Docker Space-Saving Tricks on Windows 10/11][def4]

[def]: https://learn.microsoft.com/en-us/windows/wsl/wsl-config
[def2]: https://docs.docker.com/config/pruning/
[def3]: https://docs.docker.com/desktop/windows/
[def4]: https://www.youtube.com/watch?v=demQDkbjfa4
