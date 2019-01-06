---
layout: post
categories: backend
author: Ivan Cai
title: Creating microservices using .NET Core and Docker
permalink: /:categories/:title
---
Remember the old days when Microsoft "ships" out a new IE every few years and if you found an annoying quirk or bugs in the browser? tough luck, you would have to waiting for a fair while for the changes to come through. If you are a web developer, you will either work around the quirk or not use it all.  Thankfully those days are over with the ever increasing competition and rapid improvement in software delivering process. Updates to software are expected in days, not in months or years. 
With increasing expectation of faster bug fixes and feature update comes at a cost; Updates in a large monolithic system can be painful in many ways. A bug in small update in a large system could bring the who system down if not managed properly. This makes rapid updates to a large complex system rather risky and fragile. To over come this issue, a new type of software architecture has emerged in the past decade or so with the primary focus of resolve this problem. By separating a large system into a number of small loosely coupled independent components that communicated using a common protocol, it will make the system more resilient to minor issues and less risky when it comes to updates. This style of software design is Microservices architecture. 

### Microservices generally to have the following characteristics:

* It should be independent and easily testable in isolation. 
* It should be loosely coupled to other components.
* horizontally scalable. 
* It's operation does not depend on the other microservices, meaning that if a related services goes down, the microservice does not go down with it. 
* Each microservice should have clear definition of scope and responsibilities. 
* Communicate over a common, stateless protocol (e.g. HTTP)

### .NET Core as a microservices:

.NET Core has been designed ground up by Microsoft to make it highly portable and flexible. It can be ran in a container in all the major operation systems such as Linux, Mac and the traditional Windows servers. 

### Create a Dockerised Web API:

Create a new project in VS2017 goto **File > New > Project > ASP.NET Core Web Application**

Enter the **Name**, **Location** and **Solution Name**. I named it **DockerWebAPI**

Choose **.NET Core**, **ASP.NET Core 2.1**,  C**hoose API** and Tick **Enable Docker Support**  Click **Ok**

![.NET docker web API ](/assets/docker-web-api.PNG)

Once the project has been created, you will see the **DockerWebApi > Dockerfile** docker file. 

If you are using Mac or Windows 10, you change run the application natively in docker mode
![.NET docker web API Run](/assets/docker-web-api-run.PNG)

If you are using Windows 8 like me, you will need to install [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/). Once installed you can use the Docker CLI tool called **Docker Quickstart Terminal**  
![.NET docker terminal](/assets/docker-terminal.PNG)

Within the terminal change directory the root of your project. 

Enter ```Docker build .```