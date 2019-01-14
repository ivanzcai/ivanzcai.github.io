---
layout: post
categories: backend
author: Ivan Cai
title: SOLID Design Principles
permalink: /:categories/:title
---

This post will give you a basic explanation of what the SOLID Principles are and how we can use it. 

### Why SOLID

As a programmer or software engineer, main reasons for adopting SOLID principles is to enable us to write easily maintainable, testable and flexible software in a methodological way. 

### What are SOLID principles 

SOLID principles are the acronyms for:   
S = **Single** Responsibility Principle (SRP)   
O = **Open** closed Principle (OSP)   
L =  **Liskov** substitution Principle (LSP)   
I  =  **Interface** Segregation Principle (ISP)   
D = **Dependency** Inversion Principle (DIP)  

**Single Responsibility Principle**   
Every class or module should have responsibility over just a single part of the functionality in a software system. 


**Open Close Principle**
"Software entities should be open for extension, but closed for modification" 
this means that software should be build with extensibility right from the beginning.   
This principle ties strongly with the Single responsibility principle as each class or module should do just one thing and one thing well. This would reduce the need the same piece of code from rewritten again.  

**Liskov Substitution Principle**
Barbara Liskov state that "objects in a program should be replaceable with instance of the sub types without altering the correctness of that program"
An analogy is that if a passenger has requested a rental car to get her from A to B, 
car of any brand or type should satisfy her needs as it's type of a car.

**Interface Segregation Principle**
"Many client-specific interfaces are better than one general-purpose interface"

**Dependency Inversion Principle**
High-level modules should not depend on low level modules. 

Abstractions should not depend on the details, whereas the details should depend on abstractions. 
In other words, The Abstractions are the templates or requirements provided by the higher level modules, it is up to the lower level modules to fulfil that requirement regardless of how it is implemented. 




###What's next?

I will create a demo in the near future to demonstrate the use of SOLID principles so tune to the blog! Thanks for your time!  