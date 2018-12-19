---
layout: post
categories: backend
author: Ivan Cai
title: Creating microservices using .NET Core and Docker
permalink: /:categories/:title
---
Remember the old days when Microsoft "ships" out a new IE every few years and if you found an annoying quirk or bugs in the browser? bad luck, you will be waiting forever for them to patch it. If you are a web developer, you will either work around the quirk or not use it all.  Thankfully those those days are over with the ever increase competition and rapid improvement in software delivering process. updates to software are expected in days, not in months or years as what it use to be. 
With increasing expectation of faster bug fixes and feature update comes at a cost; Updates in a large monolithic system can be painful in many ways. A bug in small update in a large system could bring the who system down if not managed properly. This makes rapid updates to a large complex system is rather risky and fragile. To over come this issue, a new type of software architecture has emerged in the past decade or so with the primary focus of resolve this problem. By separating a large system into a number of small loosely coupled independent components that communicated using a common protocol, it will make the system more resilient to minor issues and less risky when it comes to updates. This style of software design is Microservices architecture. 

### Microservices generally to have the following characteristics:

* It should be independent and easily testable in isolation. 
* It should be loosely coupled to other components.
* horizontally scalable. 
* It's operation does not depend on the other microservices, meaning that if a related. services goes down, the microservice does not go down with it. 
* Each microservice should have clear definition of scope and responsibilities. 
* Communicate over a common, stateless protocol (e.g. HTTP)

### .NET Core as a microservices:

.NET Core has been designed ground up by Microsoft to make it highly portable and flexible. It can be ran in a container in all the major operation systems such as Linux, Mac and the traditional Windows servers. 

### Create a Dockerised Web API: