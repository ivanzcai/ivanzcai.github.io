---
layout: post
categories: backend
author: Ivan Cai
title: Deploy Docker Node.js in Redhat Linux
permalink: /:categories/:title
---

You can use your own dockerised Node.js in your Github repository or use the my repository for this [Dockerize Node.js repository](https://github.com/ivanzcai/DockerizeNodeJsApp.git)

This doc assumes that you already have a server running Redhat and that the ports are open to the internet for inbound and outbound. 


#### Install Docker with Yum 

1. First you need to login with system ```sudo``` privileges
2. Enter ```sudo su``` to change to system user
3. Update your system yum package manager ```yum update```
4. Enter ```vi  /etc/yum.repos.d/docker.repo``` to open vi editor 
5. Paste the following lines to the file
    [dockerrepo]
    name=Docker Repository
    baseurl=https://yum.dockerproject.org/repo/main/centos/7/
    enabled=1
    gpgcheck=1
    gpgkey=https://yum.dockerproject.org/gpg
6. Install Docker by run: 
    ```yum install docker-engine -y```
7. Start Docker, run: ```service docker start```
8. To check if your Docker process has started, run: ```sudo docker run hello-world ```


#### Run Node.Js the

1. You can build your dockerised Node.js or use [this demo repository](https://github.com/ivanzcai/DockerizeNodeJsApp.git). 
2. Run: ```docker build https://github.com/ivanzcai/DockerizeNodeJsApp.git#master -t ivancai/dockerizenodejsapp:latest```
3. Check if the image has been created by enter: ```docker images`` you should see the repository **ivancai/dockerizenodejsapp**
4. Run the image on your docker container:```docker run -p 8081:8080 -d ivancai/dockerizenodejsapp```
5. Check if the demo application has been successfully deployed, goto your favourite browser, goto **http://yourAddressOrPublicId.com:8081** you should see *hello World* displayed. 