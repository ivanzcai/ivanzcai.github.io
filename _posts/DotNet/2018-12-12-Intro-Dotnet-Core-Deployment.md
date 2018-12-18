---
layout: post
categories: backend
author: Ivan Cai
title: Introduction to .NET Core Deployment Options
permalink: /:categories/:title
---

This post, I will give you an overview of .NET Core deployment options
There are three types of .NET core application deployments, those are:


### 1. Framework-dependent deployment(FDD)

This type of deployment relies on the existing version of .NET Core on the system. The application only contains the application code and any third-party packages outside of the .NET Core libraries. It should have  *.dll* files that can be run from command line  console dotnet myapp.dll 

#### Pros

* No need to define target operation system
* Small deployment package size
* Runs latest patched version of .NET Core runtime(unless specified)

#### Cons 
* No control of .NET Core libraries version 
* Risk of mismatch of .NET Core libraries and runtimes, it might change the behaviour of the application or not run at all. 

#### Usecase
* This deployment is useful for deploying to stable dedicated environment where changes to .NET Core dependencies are well managed and documented. 



### 2. Self-contained deployment(SCD):
As the name have suggested, this deployment type contains all the components needed for the application to run, this includes the .NET Core libraries and runtime. It contains executable files with *.exe* extensions. 

#### Pros
* Complete control of the .NET Core version and assured that the hosting system can run the .NET Core app since it's provided in the deployment. 
       
#### Cons 
* Large deployment package as all the .NET Core libraries are included. 
* Larger memory foot print if multiple .NET Core applications are running in the same target system. 
       

#### Usecase
* When you unsure of the target system can support your application. This deployment type will give you more control and certainty in your deployment. 


### 3. Framework-dependent executables(FDE):
This deployment type contains executables (*.exe*) that depends on existing system wide .NET Core libraries and runtime to run. 

#### Pros
* Similar to FDD, you will have a small package size since .NET Core libraries and runtime are excluded. 
* Smaller memory and disk space footprint in a multi .NET applications are running in the same environment. 
       
#### Cons 
* Lack of control on the version of .NET Core Libraries and runtime.
* The app needs to be published for each platform. 
       

#### Usecase
* When you unsure of the target system can support your application. This deployment type will give you more control and certainty in your deployment. 




[npmjs]:   https://www.npmjs.com/get-npm

