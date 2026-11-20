---
title: "Exploring inverse kinematics"
description: An early personal project in Python exploring numerical inverse kinematics for redundant manipulators, with a preference for solutions that require less joint motion.
category: Robotics · Kinematics
period: "December 2023"
order: 5
image: /images/zoning-ik.webp
imageAlt: A visualization of a serial robot manipulator used to explore inverse kinematics.
tags: [Inverse kinematics, Python, Robotics]
featured: true
layout: doc
---

# Exploring inverse kinematics

**Personal project · December 2023**

In this early personal project, I explored numerical inverse kinematics for serial-link manipulators with redundant degrees of freedom. I called the approach “zoning” inverse kinematics.

![A visualization of a serial robot manipulator used to explore inverse kinematics.](/images/zoning-ik.webp)

## The idea

A redundant manipulator can reach the same target with multiple joint configurations. I investigated how a numerical solution could favor configurations that require less joint motion.

## Implementation

I implemented the approach in Python as a way to learn about manipulator kinematics and explore how a joint-motion preference could guide the solution.

[View the code on GitHub](https://github.com/sawyer-greaves/Zoning-IK)
