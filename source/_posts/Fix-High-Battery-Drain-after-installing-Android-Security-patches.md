---
title: Fix High Battery Drain after installing Android Security patches
date: 2024-04-22 01:13:52
tags:
  - high battery drain
  - high thermals
  - reduced battery runtime
  - android
  - pixel
  - samsung
  - oppo
  - oneplus
  - xiaomi
  - batterydrain
---
Hello fellow readers, the objective of the article will be to reduce high battery drain after installing Android Security patches on your android device be it smartphone or tablet. This is applicable to any vendors after enabling developer options.

> ## Background
If you've heard the phone is being re-indexing or optimizing the apps and media in the background causing worse battery drain and thermals until the process is completed. The actual problem stems from a better user experience approach introduced in Android 7 or later which makes it optional to optimize the apps to reduce the installation time and enable quick startup.
If you had lower power devices from Samsung, Redmi etc you will notice it was a welcome change to quicken the patching process and minimize the time we pray to God it won\'t get stuck at **Updating Progress Screen**.
So ergo, with latest android version the optimizer logic works when one of the following conditions are met or satisfied:
1. The phone is connected to the charger,

    - fully charged,

    - turned on (the phone itself, not the screen),

    - idle or is not used,

    - inactive (like after at least 30 minutes).
2. Provided condition 1 is satisfied & Wi-Fi is connected,  you will notice device backups, photo backups, SSD/eMMC/UFS optimization aka TRIM is performed in the background even though the device is locked.

## Let\'s Cut To The Chase

We'll make use of Android Developer options and Android Debug Bridge to fix the issue. If you want a guide on how to install ADB and enable developer options, I will suggest taking a look at **well-written** XDA article.

---
XDA Articles:
[Enabling Developer Options in Android](https://www.xda-developers.com/android-developer-options/) <br>
[Install Android Debug Bridge on Mac, Linux or Windows](https://www.xda-developers.com/install-adb-windows-macos-linux/)

---

Connect the phone or tablet via USB cable(USB-A or USB-C) to your PC/Mac.
Type the following command:<br>
>`adb shell`

Make sure you allow authorization for the device to connect it in development mode.
<span>
![Authorization Prompt](https://i.imgur.com/WyTIxH4.jpg)
</span>

Now, type the commands or copy them:
>`pm bg-dexopt-job && reboot`

> Alternatively, if you want a single command:<br>
>`adb shell cmd package bg-dexopt-job`
>
>`adb shell reboot`

The above commands will run the background optimizer logic which are deferred to be run in foreground and reboot the phone once the process is completed. You will notice the phone or tablet will be warm to touch since it will force the clock frequencies to be run at the max.
The process should typically take 5-10 minutes. I tested it on OnePlus(Oppo), Samsung, Xiaomi and Pixel phones/tablets.
I currently use a Pixel 7(Main Phone) and Pixel 4a(Backup Phone).

> Sources:<br>
[Kelvin Craig's Script](https://github.com/KelvinCrag/Optimizer) <br>
[My YouTube Video](https://youtu.be/W7T1Gk0MtYo?si=cH8lXvOujdz8l_mr)
