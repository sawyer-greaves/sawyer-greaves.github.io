---
title: “Zoning” inverse kinematics
description: An exploration of inverse kinematics for redundant serial manipulators, favoring poses that reach a target with less joint motion.
category: Robotics · Kinematics
period: "December 2023"
order: 3
image: /images/zoning-ik.webp
imageAlt: A visualization of a serial robot manipulator used to explore inverse kinematics.
tags: [Inverse kinematics, Python, Robotics]
featured: true
layout: doc
---

# “Zoning” inverse kinematics

**Personal project · December 2023**

I developed a numerical approach to inverse kinematics for serial link manipulators with redundant degrees of freedom.

![A visualization of a serial robot manipulator used to explore inverse kinematics.](/images/zoning-ik.webp)

## The idea

A redundant manipulator can have multiple joint configurations that reach the same target. This project explores an approach that favors a configuration reaching the target while moving the joints as little as possible.

## Implementation

I implemented the approach in Python to explore how that preference could guide the numerical solution.

[View the code on GitHub](https://github.com/Rodeosocks/Zoning-IK)
