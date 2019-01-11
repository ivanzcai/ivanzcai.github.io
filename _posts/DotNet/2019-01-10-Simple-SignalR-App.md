---
layout: post
categories: backend
author: Ivan Cai
title: .Net SignalR Intro with Docker Demo 
permalink: /:categories/:title
---

This purpose of this page is to give a quick summery of what SignalR is and why we should we use it.
You will see how it works in the [Docker SignalR Demo](#demo)

### what is it?

SignalR is a library used in ASP.Net or .Net Core to provide real-time web functionalities to applications. 

### Why should I use it?
It uses [WebSocket protocol](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) when browser support is available and falls back to HTTP protocol if necessary. 
The main advantage of using it is that you won't have to worry about compatibility issues verses implementing WebSocket natively. 

### <a id="demo"></a>Docker SignalR Demo 

To see how it work Open [SignalR Chat demo](http://dockersignalrchat.australiaeast.azurecontainer.io/) in two separate browsers in the same or separate devices. Enter different name for each session and start sending messages. You will see the messages are being updated real time.  

You can also run it on your local machine using the following command: ```docker run -t ivancai/dockersignalrchat:latest``` if you have docker installed locally.  


### Github Repository 
My source code for this project is at [https://github.com/ivanzcai/DockerSignalRChat.git](https://github.com/ivanzcai/DockerSignalRChat.git)


### How do I do it?
 Microsoft Doc has an excellent tutorial on how to implement a simple SignalR application so make sure you try it out. 

[Signal R with Javascript on .Net Core 2](https://docs.microsoft.com/en-us/aspnet/core/tutorials/signalr?view=aspnetcore-2.2&tabs=visual-studio)

My [SignalRChat demo](http://TobeAdded.com/au) is based on this tutorial, however I have added Docker support for portability and flexibility. 

### Additional Info
For more information, please visit Microsoft's official [SignalR Documentation](https://docs.microsoft.com/en-us/aspnet/signalr/overview/getting-started/introduction-to-signalr)


