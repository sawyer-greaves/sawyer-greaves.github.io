---
title: Six-degree-of-freedom dynamics simulation
description: I developed the rigid-body dynamics component of a hardware-in-the-loop magnetic-manipulation simulator, using quaternions, a custom RK4 solver, and ROS 2.
category: Dynamics & simulation
period: "Started May 2025"
order: 2
image: /images/magnetic-manipulation.webp
imageAlt: A rigid-body simulation showing the manipulated object, coordinate frames, and magnetic sources.
tags: [Rigid-body dynamics, Simulation, ROS 2, Python]
featured: false
layout: doc
---

# Six-degree-of-freedom dynamics simulation

**Magnetic & Medical Robotics Lab · University of Utah**\
Started May 2025

Testing magnetic-manipulation controllers requires a way to predict how an object will translate and rotate in microgravity. I developed the rigid-body dynamics component of a hardware-in-the-loop simulator that connects measured magnetic forces and torques to a digital model of the object's motion.

![A rigid-body simulation showing the manipulated object, coordinate frames, and magnetic sources.](/images/magnetic-manipulation.webp)

## The experimental system

The lab's hardware-in-the-loop system uses robotic arms with rotating permanent-magnet end effectors and a force–torque sensor. The dynamics simulation uses force and torque measurements to calculate the object's six-degree-of-freedom motion: translation along three axes and rotation about three axes.

## My contribution

I designed a quaternion-based state representation, implemented the rigid-body equations of motion, and wrote a custom fourth-order Runge–Kutta (RK4) solver. This required learning quaternion representations and working through how to implement rotational dynamics numerically.

I integrated the simulator as a ROS 2 node and evaluated the effects of time step and zero-order hold, where the applied force is held constant between updates. In those tests, I identified settings that yielded less than 1% average position error.

I also built a separate, fully digital testing environment for trying controller architectures and a custom 3D visualization framework for magnetic-manipulation experiments. These tools made it easier to examine the simulated motion and test changes before using the physical setup.

## Related work and research outputs

I authored the dynamics-model derivation and implementation section for an associated manuscript in preparation. This project received semester-long support through the University of Utah's Undergraduate Research Opportunity Program (UROP), and I presented my contributions at the Undergraduate Research Symposium.

Alongside this simulation work, I contributed online vision-based state estimation to the lab's six-degree-of-freedom neutral-buoyancy magnetic-manipulation platform.

See the [research manuscripts page](../publications.md) for current manuscript statuses.
