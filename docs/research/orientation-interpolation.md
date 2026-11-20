---
title: Modeling orientation-dependent magnetic wrenches
description: I proposed and implemented an interpolation method that uses sparse force and torque measurements to construct continuous magnetic-wrench models over object orientation.
category: Magnetic-wrench modeling
period: "Started August 2026"
order: 3
image: /images/orientation-interpolation.webp
imageAlt: Illustration of interpolation between sampled orientations.
tags: [Orientation interpolation, Modeling, Magnetic manipulation]
featured: false
layout: doc
---

# Modeling orientation-dependent magnetic wrenches

**Magnetic & Medical Robotics Lab · University of Utah**\
Started August 2026

An object's shape and orientation affect the force and torque induced by a rotating magnetic field. My current work develops a way to model that response for non-spherical conductive objects using a sparse set of measurements.

![Illustration of interpolation between sampled orientations.](/images/orientation-interpolation.webp)

## From control to a modeling problem

While extending a magnetic-manipulation simulator and controller to non-spherical objects for space-debris detumbling, I found that the sphere-based model did not adequately predict their magnetic response. The resulting model mismatch made it difficult to control the simulated objects reliably.

This led me to propose studying the underlying force and torque model before continuing the control work.

## My contribution

I proposed and implemented a method for interpolating magnetic wrenches—the combined force and torque—over object orientation. The method uses sparse measured data to construct a continuous model on SO(3), the space of three-dimensional rotations.

The goal is to provide controllers with a more useful prediction of an object's magnetic response without requiring measurements at every orientation.

## Manuscript in preparation

I am preparing the first-author manuscript **“Interpolating Models of Magnetically Induced Wrenches in SO(3)”** with J. J. Abbott. The intended submission venue is **IEEE Robotics and Automation Letters**.

See the [research manuscripts page](../publications.md) for current status.
