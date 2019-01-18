---
layout: post
categories: backend
author: Ivan Cai
title: Creating microservices using .NET Core and Docker
permalink: /:categories/:title
---
 
Over the years, software development and architecture has evolved dramatically, more so than perhaps another profession. Gone are the days that yearly software releases are acceptable; now customers or clients are expecting feature to be added and bugs to be fixed with weeks or even days. With the increasing expectation of faster bug fixes and feature update comes at a cost; develop and release updates in a large monolithic system can be painful in many ways. A bug in small update could bring the whole system down if not managed properly. This makes rapid updates to a large complex system rather risky and fragile. To over come this issue, a new type of software architecture has emerged in the past decade with the primary focus of resolve this problem. By separating a large system into a number of small loosely coupled independent components that communicated using a common protocol, it makes the system more resilient to minor issues and less risky when it comes to updates. This style of software design is know as Microservices architecture. 

### Microservices generally to have the following characteristics:

* It should be independent and easily testable in isolation. 
* It should be loosely coupled to other components.
* horizontally scalable. 
* It's operation does not depend on the other microservices, meaning that if a related services goes down, the microservice does not go down with it. 
* Each microservice should have clear definition of scope and responsibilities. 
* Communicate over a common, stateless protocol (e.g. HTTP)
* Microservices in a large system can use different programing language, framework or infrastructure as long as it conform to the communication structure using a standard protocol(Typically RESTful HTTP API)
  
### .NET Core as a microservices:

Microservices can be written in different programing languages and frameworks running on various type of infrastructures, It can be written in Java, NodeJs, Python or the Traditional .Net Framework. .Net Core is just one of many option out of many that can used.  
If you are experienced in the .NET space, .NET Core is a better option compared to the Traditional .NET framework because it has been designed ground up by Microsoft to be highly portable and flexible. It can be ran on major operation systems such as Linux, Mac and the default Windows servers. 

### Create a Dockerised Web API:

* Create a new project in VS2017 goto **File > New > Project > ASP.NET Core Web Application**
* Enter the **Name**, **Location** and **Solution Name**. I named it **DockerWebAPI**
* Choose **.NET Core**, **ASP.NET Core 2.1**, Choose **API** and Tick **Enable Docker Support**  Click **Ok**

![.NET docker web API ](/assets/docker-web-api.PNG)

* Once the project has been created, you will see the **DockerWebApi > Dockerfile** docker file. 

* Open your **Dockerfile** and replace the content with the following:
    ```
    FROM microsoft/dotnet:sdk AS build-env
    WORKDIR /app

    # Copy csproj and restore as distinct layers
    COPY *.csproj ./

    # use NuGet to restore dependencies and project-specific tools that 
    # are specified in the project file. Can be excluded in .net 2.0
    RUN dotnet restore 

    # Copy everything else and build
    COPY . ./
    RUN dotnet publish -c Release -o out  #folder is out

    # Build runtime image
    FROM microsoft/dotnet:aspnetcore-runtime
    WORKDIR /app
    COPY --from=build-env /app/out .
    ENTRYPOINT ["dotnet", "WebApplicationDocker.dll"]
```
* If you are using Mac or Windows 10, you change run the application natively in Docker mode
    ![.NET docker web API Run](/assets/docker-web-api-run.PNG)

If you are using Windows 8 like me, you will need to install [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/). Once installed you can use the Docker CLI tool called **Docker Quickstart Terminal**  
![.NET docker terminal](/assets/docker-terminal.PNG)

* In the Docker terminal, change directory the root of your project, enter ```Docker build -t dockerwebapi:latest .```.
If your build is successful you should see **successfully built <imageid> **

* To check if your build image has been created, enter: ```docker images```
You should see **dockerwebapi** on the top of the list of repositories returned by the command. 

* To test the build, You can run 
```docker run -d -p 8080:80 --name mydockerwebapi dockerwebapi```

If you are running native docker on your machine, [http://localhost:8080/api/values](http://localhost:8080/api/values)  
If you are using Docker tools, goto [http://192.168.99.100:8080/api/values](http://192.168.99.100:8080/api/values)
You should the following:
    
    [
    "value1",
    "value2"
    ]

Congrats! you have created your first Dotnet Core Webapi microservices on Docker! 