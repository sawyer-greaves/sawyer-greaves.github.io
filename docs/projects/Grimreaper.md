---
title: "Broadhead manufacturing device"
description: "An industrial hunting broadhead manufacturing device to apply a nylon coating to threads for reuseable thread-locker."
category: "Manufacturing · Full stack"
period: "January 2025–December 2025"
order: 2
image: /images/grimreaper.webp
imageAlt: "Industrial manufacturing device with vibratory bowl and induction heater"
tags: [Manufacturing, Electrical Systems, PLC]
featured: false
layout: doc
---

<script setup>
import { withBase } from 'vitepress'
</script>

# Broadhead manufacturing device

**University of Utah · Team of four · January 2025–December 2025**

An industrial partner at Grimreaper Broadheads sponsored our senior design team to build an autonomous manufacturing device to apply a nylon coating to the threads of a variety of hunting broadheads for reuseable thread-locker.

![Industrial manufacturing device with vibratory bowl and induction heater](/images/grimreaper.webp)

## How it works

The broadheads are placed into the large gray vibratory bowl, where they are all oriented, ordered, and placed into the rotary index table holes. The rotary table then rotates until the broadhead is within the red induction coils, where it is heated up to over 600°F. Then it rotates into the spray chamber and is coated with nylon powder. The system consists of a electronics, water cooling, pneumatics and PLC programming.

## My contribution

I designed the electrical panel, programmed the PLC, sourced and implemented the induction heating system and designed the passive orienting mechanism. 

## Results and resources

This machine is now in production use at the Grimreaper Broadheads facility. 

![Industrial manufacturing device with vibratory bowl and induction heater](/images/grimreaper_alt.webp)
<video
  controls
  playsinline
  preload="metadata"
  :src="withBase('/images/grimreaper.webm')"
  :poster="withBase('/images/grimreaper.webp')"
  style="width: 100%; height: auto;"
  aria-label="Video of the broadhead manufacturing machine"
>
  <a :href="withBase('/images/grimreaper.webm')">Download the machine demonstration video</a>.
</video>
