---
layout: post
categories: backend
author: Ivan Cai
title: Running .Net core MVC on docker
permalink: /:categories/:title
---

This article will show you how to run a simple .Net core in a Docker container. 


the advantages of running your .NET Core MVC App on a containerised environment are 
* Flexible to deploy
* Better scalability with the right architecture 
* Enhance resilience with the right architecture

### Prerequisites
* Some experience of running Docker. If not please see [Get started with Docker](https://www.docker.com/get-started)
* Some experience with .Net Web API development. If not please see [Create a web API with ASP.NET Core MVC](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-2.2&tabs=visual-studio)
* Some context of what Microservices is all about and what role Docker can play in the grand scheme of things. Please checkout [Docker Demo and Microservices Architecture](https://www.youtube.com/watch?v=3cvCtovrKWg)


### Where to get the right docker images

Microsoft has created official Docker images and made publicly available on Docker Hub. 
There are multiple responsitories that you can download and each repository has multiple images with various versions of .NET and OS.
[Microsoft Docker Hub Repositories](https://hub.docker.com/r/microsoft/dotnet/)


### Lets Get Started 

#### Install Docker
 First you will need to install docker Desktop on your development machine 

[Windows 10 Docker Destop](https://hub.docker.com/editions/community/docker-ce-desktop-windows)

[Mac Docker Destop](https://hub.docker.com/editions/community/docker-ce-desktop-mac)

If you are using Windows 8 or below, you will need to use docker tool box, it can be a little bit tricky so take your time and follow the instructions carefully. 

[Windows 8 - Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/)

#### Running a .NET Console App in Docker
To create a simple console app in a Linux container, open your docker console and run:
```Console
docker run --rm microsoft/dotnet-samples
```
If it ran successfully, The console will return  **Hello from .NET Core!** and an image of a cartoon robot. 

#### Running a .NET MVC Web App in Docker
Type the following command to run a sample web application:

    docker run -it --rm -p 8000:80 --name aspnetcore_sample microsoft/dotnet-samples:aspnetapp


To test it, in windows 10 or Mac goto **http://localhost:8000**
If you are using Docker Toolbox in Windows 8 goto **http://192.168.99.100:8000/**
Now you should see the sample .NET MVC web app. 


![.NET mvc app docker](/assets/docker-dotnet-mvc.PNG)

That's it! you have successfully ran your first .NET MVC app on your local Docker container!

