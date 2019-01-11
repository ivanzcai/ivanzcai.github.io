---
layout: post
categories: backend
author: Ivan Cai
title: Docker Quick Reference
permalink: /:categories/:title
---

This quick reference is for me to keep track of useful Docker related commands and any other useful information, would be great if you also find it useful too. 

## useful docker command lines 

```docker help``` Lists all the command options and their usage  
```docker images``` Get all of the images in your local machine  
```docker build .``` Build an image from the current path using the default Dockerfile 
```docker build --build-arg ARG1="value1"  --tag <image_name>:<tag> <build_location> ```     Build visit[docker build reference]  (https://docs.docker.com/engine/reference/commandline/build/) for more detail.   
```docker build https://github.com/<username>/<repositoryname>.git#branch --tag <imageName>:<tagName>``` Build docker image from git hub.   

```docker run -p 49160:8080 -d <your username>/<your app>```  By default, if docker cannot locate your application image, it will do a search in https://dockerhub.com for the application image. 

```docker rmi <reponsitory_name>:<tag>``` remove image with specific repository name and tag  

```docker ps``` to see all the running docker containers with docker process id

```docker kill <processId>``` To kill a docker process

```docker-machine ip ``` To identify the IP of your docker-machine when not running on 127.0.0.1 - localhost (e.g. when using Docker Toolbox)

## Dockerhub related
You will need to have a [Docker hub](https://hub.docker.com/) account to run the following command.  

```docker login``` to login   

```docker build -t <Dockerhub username>/<image name>``` to build the image related to your Dockerhub username.   
```docker push <dockerhub username>/<image name>``` to push your image to Dockerhub

```docker run -t <dockerhub username>/<image name>``` to run an instance of the image using the Dockerhub repository. 


## Useful links 

[Dockerizing a Note.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
[Install Docker In Linux](https://runnable.com/docker/install-docker-on-linux)
[Docker hub](https://hub.docker.com/) for Docker image hosting
[Azure container Instance](https://docs.microsoft.com/en-us/azure/container-instances/container-instances-quickstart-portal) To get your container up and running quickly without having to worry about the underlying infrastructure. 