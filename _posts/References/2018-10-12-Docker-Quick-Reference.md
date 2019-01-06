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

## Useful links 

[Dockerizing a Note.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
[Install Docker In Linux](https://runnable.com/docker/install-docker-on-linux)
