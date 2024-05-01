---
title: Slow Write Speed Fix on WD SN570
date: 2024-04-22 01:12:59
tags:
  - slow writes
  - SN570
  - WD NVMe
  - HMB SSD
  - steam
  - epic
---
Hello fellow readers, in this article I will be providing a fix for Slow Write Speed issues on WD SN570 when using Steam/Epic Downloads and media transfers.<!-- more -->

## Background <br>
The advent of Host Memory Buffer on budget NVMe drives to give better write performance instead of adding DRAM on the drive. With HMB, SSD manufacturers can save on BOM costs and make the drive more compact to focus on higher storage size. As you are aware, most NVMe SSDs are available in [M.2](https://en.wikipedia.org/wiki/M.2) format with different sizes aka lengths i.e 30mm, 42mm and 80mm. There are few sizes used in enterprise SSDs optimized for more write endurance such as 60mm and 110mm.

With newer PCIe generation and the current version being PCIe 5.0 with x4 lanes promising sequential reads of 12GB/s and writes of 9GB/s.
As of 2023, you will see general availability is PCIe 4 with x4 lanes with reads of 7GB/s and 5GB/s writes. In thin and light laptops you will either see M.2 30 or 40mm with 4 lanes with HMB enabled.

Theoretically if HMB and firmware is implemented properly that can properly perform garbage collection and cleanup the write cache once the data is written to the flash media. Now, you will ask me what's the point of writing this article if all's good.
Let's take a look at affected drive i.e [WD SN570](https://www.techpowerup.com/ssd-specs/western-digital-sn570-1-tb.d467) which is a budget NVMe with HMB cache size of 64MB. HMB cache is different from [pseudo-SLC cache](https://sabrent.com/blogs/storage/slc-caching) which uses part of the capacity to be used as SLC cache for faster write performance. Usually bigger sizes have bigger SLC cache in essence, 1TB will have double the SLC cache of 512GB drive of the same manufacturer.
## What\'s the fix? <br>
What I can I say, I found a fix after constantly going around review articles and finally came across reddit posts that provided a fix when there was nothing listed in WD articles about the issue.

Hey, don't test our patience! We're literally pulling our hairs out and going bald.
Yeah got it! Don't get mad I'm just trying a create a drama. Well in short, the fix is Disabling Write Cache for SN570 in Device Manager or Drive Properties.
There are 2 ways where you can change the drive settings:
1. Disk Drive Properties in This PC
2. Device Manager

---
**Let\'s discuss the First method:** <br>
1. Open File Explorer and click on **This PC** in the left sidebar. Right Click on the Drive and Select Properties. <br><br> <span>![This PC Page](https://i.imgur.com/SBF1bnu.png)</span>
2. Click on the Hardware Tab or Section of drive properties window. Click on Properties. <br><br><span>![Drive Properties](https://i.imgur.com/WDy5Mo2.png)</span>
3. Click on Change Settings which requires Administrator Privileges <br><br><span>![Change Global Drive Settings](https://i.imgur.com/23Iu9mz.png)</span>
4. Click on Policies Tab or Section, uncheck ***Enable write caching on the drive*** <br><br><span>![Policies Tab](https://i.imgur.com/wHXGsjQ.png)</span>
5. Click on OK button to close the window and now you can enjoy the drive without running into slow write speed issues (10-20MB/s) when the drive is heavily loaded while downloading from Steam/Epic/Hugging Face models etc..
<br>


**Let\'s discuss the Second Method:** <br>

1. Open Device Manager as Administrator and select the Drive i.e SN570 <br><br><span>![Device Manager](https://i.imgur.com/a5ICTCu.png)</span>
2. Double Click or Right Click on the selected drive and select **Properties** <br><br><span>![Device Manager](https://i.imgur.com/qL3qkNJ.png)</span>
3. Click on Policies Tab or Section, uncheck ***Enable write caching on the drive*** <br><br><span>![Policies Tab](https://i.imgur.com/wHXGsjQ.png)</span>
4. Click on OK button to close the window and now you can enjoy the drive without running into slow write speed issues (10-20MB/s) when the drive is heavily loaded while downloading from Steam/Epic/Hugging Face models etc..


> **Well, that's all folks! Hope you enjoyed the article and simply brought smiles after seeing those huge improvement write speed on your SN570.**
---
> ## Source(s) <br>
[Crazy Latency Spikes and Slow Writes on SN570](https://old.reddit.com/r/buildapc/comments/12jepzn/wd_blue_sn570_crazy_latency_spikes_and_extremely/)<br>
[Slow Writes with Steam Games on SN570](https://old.reddit.com/r/buildapc/comments/t0q6d0/steam_write_speed_to_ssd_very_slow_1020_mbs_how/)<br>
[Disable Write Caching policy on SN570](https://old.reddit.com/r/Windows10/comments/lf5sb5/should_i_enable_write_caching_policy_for_ssd_and/)<br>
[My YT Video about Slow Write Speed on SN570](https://youtu.be/W7EVpauavVc?si=j5p4eHpi8QDpdRU9)<br>
[What are HMB NVMe SSD](https://www.servethehome.com/what-are-host-memory-buffer-or-hmb-nvme-ssds/)
