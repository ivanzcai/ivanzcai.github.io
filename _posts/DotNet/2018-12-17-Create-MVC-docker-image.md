---
layout: post
categories: backend
author: Ivan Cai
title: Building your first Docker .Net core MVC image
permalink: /:categories/:title
---

Once you have some idea of what Docker is and how you can download docker images and learnt how to [run .NET Core on docker](Running-Docker-and-DotNet) on your own machine, you are ready to learn how we can create and customise docker image for deployment. 


### Create and use a docker file

To enable your application to use Docker, first you will need to create a **Dockerfile** in your .NET Core project. If you want to learn more about Dockerfile configuration. please see docker [reference documentation](https://docs.docker.com/reference/)

The way it works is that when you enter **docker build** command, docker builds an image from from a **Dockerfile**

    FROM microsoft/dotnet:sdk AS build-env
    WORKDIR /app

    # Copy csproj and restore as distinct layers
    COPY *.csproj ./
    RUN dotnet restore

    # Copy everything else and build
    COPY . ./
    RUN dotnet publish -c Release -o out

    # Build runtime image
    FROM microsoft/dotnet:aspnetcore-runtime
    WORKDIR /app
    COPY --from=microsoft/dotnet:sdk /app/out .
    ENTRYPOINT ["dotnet", "aspnetapp.dll"]

