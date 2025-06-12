---
title: TensorRT Speeds Up SD 3.5 on RTX GPUs
date: 2025-06-12 20:30:00
tags:
  - nvidia
  - tensorrt
  - rtx
  - ai
  - stable diffusion
  - nim
  - microservices
  - gtc
  - paris
---

### Quick Report

NVIDIA has announced significant performance improvements for Stable Diffusion 3.5 on GeForce RTX and RTX PRO GPUs through TensorRT optimization. The optimizations reduce VRAM requirements by 40% while doubling performance. Additionally, NVIDIA has released a standalone TensorRT for RTX SDK for developers.

<!-- more -->

NVIDIA founder and CEO Jensen Huang delivered a keynote address at GTC Paris at VivaTech on the latest breakthroughs in cloud AI infrastructure, agentic AI and physical AI. The event runs through Thursday, June 12, 2025, featuring hands-on demos and sessions led by industry leaders.

For those interested in learning more about NVIDIA NIM microservices and AI Blueprints, as well as building AI agents, creative workflows, digital humans, and productivity apps on AI PCs and workstations, NVIDIA\\'s RTX AI Garage blog series provides regular updates on community-driven AI innovations.

**Key Highlights includes**:

- **Performance Boost**: TensorRT delivers 2.3x performance boost on SD3.5 Large compared to running the original models in BF16 PyTorch.
- **Reduced Memory Usage**: VRAM requirements reduced by 40% to 11GB through FP8 quantization, allowing five GeForce RTX 50 Series GPUs to run the model from memory instead of just one.
- **New SDK**: TensorRT for RTX is now available as a standalone SDK for developers, with an 8x smaller package size for easier integration.
- **NIM Microservices**: NVIDIA and Stability AI are collaborating to release SD3.5 as an NVIDIA NIM microservice, making it easier for creators and developers to deploy the model (expected in July 2025).
- **JIT Compilation**: The new version of TensorRT allows developers to create a generic TensorRT engine that\'s optimized on device in seconds.

**Written using GitHub Copilot Claude 3.7 Sonnet in agentic mode instructed to follow current codebase style and conventions for writing articles.**

### Source(s)

- [NVIDIA Blog][def]
- [Stability AI Hugging Face][def2]
- [NVIDIA Developer][def3]
- [TPU][def4]

[def]: https://blogs.nvidia.com/blog/rtx-ai-garage-gtc-paris-tensorrt-rtx-nim-microservices/
[def2]: https://huggingface.co/stabilityai
[def3]: https://developer.nvidia.com/blog/run-high-performance-ai-applications-with-nvidia-tensorrt-for-rtx/
[def4]: https://www.techpowerup.com/337969/nvidia-tensorrt-boosts-stable-diffusion-3-5-performance-on-nvidia-geforce-rtx-and-rtx-pro-gpus
