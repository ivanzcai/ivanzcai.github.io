---
layout: post
categories: backend
author: Ivan Cai
title: Useful Software Development Terminologies 
permalink: /:categories/:title
---

The list below terms and acronyms that have special meaning in the world of software engineering. The descriptions are mostly worded from my understanding of those term. 

**YAGNI** - You Aren't Gonna Need It. As a software engineer, we are often think too far ahead of ourselves by over design our the solutions. This often leads to delays in delivery and over complicated solutions that are difficult to understand and maintain. YAGNI is a term we should use to remain ourselves that we should just do enough to solve a particular business problem and only add bits in the form of refactoring as we see fit when we need to satisfy a particular business requirement as it comes up. 

**KISS** - Keep It Simple Stupid: Similar to the term YAGNI. Do not over design things, keep it as simple as possible for the intended purpose.  


**DDD** - Domain Driven Design, a software design concept with the aim to simplify software that has multiple complex domains. The aim is to clearly define and classify a complex system in the form of subdomains and contexts. 

**TDD** - Test Driven Development  

**BDD** - Behaviour Driven Development

**CICD** - Continuous Integration and Continuous Deployment

**Factory Pattern** - Creating new objects, but not for persisting (e.g. saving to Database )

**Repository Pattern** - Fetching existing objects from persistent layer, it can also use Factory to create new objects and then manipulate and persist it. Repository sits between the Application layer(e.g. MVC or Web API) and the persistent layer (e.g Entity framework )
Repository should be context and aggregate root bounded. For example, if you have a form that updates the contact and address detail of an account, your aggregate root would likely to be a account, your repository should load details using the account ID along with the address and contact detail should it be needed. The need for direct persistent to address entity from an client application is not needed. the persistent of address and contact details during an account update should be the responsibility of the account Repository and not the client application directly.   

**ACID** Atomic, Consistent, Isolated and Durable. When we persisting application data, such as bank transactions, to the database we need ensure it complies to ACID to guarantee the validity and consistency even in the case of server or network failures. A a complete ACID transaction is to ensure that records are updated in all relevant systems. Any incomplete transactions should be roll back to it's original state. 



**Interfaces** - If a class is a Robot inherit the Interface, Interface would be the requirement contract. A class that implements the interface is the robot that are designed to fulfil the requirements by adding components and programing logic to make it work to satisfy the agreed specification. and  A class can also inherits from multiple Interfaces, which is equivalent to a robot designed to satisfy multiple set of requirement contracts providing that requirements not in conflict. 

**Abstracts** - To best understand what an abstract class is, I will give you a real world analogy;  if a class is robot, an abstract class would be the PC board kit that you use as the base of your build. It might have certain features such as range sensors and CPU (Concrete methods) that came with the package. There might also be a certain requirements that you need to satisfy before your Robot can be functional(Abstract methods that has not been implemented). You can also add additional features and components to it as you go. like most robot build kits, you could only use one board as the base, a class can only inherit from one abstract class.  

**Stay tune for more to come!**

 