---
layout: post
categories: backend
author: Ivan Cai
title: REST API best practice -  Resources
permalink: /:categories/:title
---

This is the first article of many to come about REST API best practice that I will be writing over the next few weeks. This series of article assumes you have basic knowledge of RESTful API and wants to dig a little deeper into some of intricate details on how to make it better.  

### What is resources?

Resources are often representation of real world entities such as customers, invoices, accounts, etc. relationship between resources are typically nested for example each customer might have multiple accounts, each account with have multiple invoices.  Resources are represented in URIs (Universal Resource Identifier)

#### How do I design the URIs?
 
The general rule for URI is that it should be easily understood with plain English words. Resources must be named as nouns as oppose to verbs or actions as. 
*	For URI Format, the forward **slash** (/) used in the path portion represents the hierarchical relationship between resources. For example: 
*https://api.somecompany.com/departments/sales/employees/{employeeId}*

*	**Hyphens** (-) should be used to improve the readabilities or URL
*https://api.somecompany.com/departments/it/employees/{employeeId}/recent-pay-slips* 

*	URI should be in lowercase letters. 

*	File extensions should not be included in the URLs. 

*	URI including queries should not exceed 8000 characters as all modern web servers are recommended to have minimum 8000 URL length support.  


### Archetypes 

API Resource archetypes serve as a design pattern models that we can follow to design the structure and behaviours of each of our API end points. 
Four basic archetypes in API resources are **document, collection, store** and **controller**.
Each endpoint should on only be aligned to type to ensure separation of responsibilities and uniformity.

#### Collection

A collection resource is a list of resources of zero or more of the same resource type. The resource should be plural. For example:  

***https://api.somecompany.com/departments***  
***https://api.myonlineshop.com/products***

#### Document
A document resource is a singular object instance or a database record that typically includes both fields with values and links to other related resources.   
For example:  

***https://api.somecompany.com/users/{userId}***  
***https://api.myonlineshop.com/products/{productId}*** 

#### Controller 
Controller resource model, some referred to as processor,  is a procedural concept that cannot be mapped to create, retrieve, update and delete. A POST to a controller will perform some task or operation such as performing computations complex operations atomically.   Even though the controller performs some action the controller is a thing and the resource is still named as a noun. For example:

POST  ***https://api.myonlineshop.com/users/{userId}/password-reset***

This would trigger a reset password process for a user specified by the identified by the user Id. This will usually involve in sending a reset password email or mobile SMS to validate the end user before allowing the user update their password.   For example:   
POST ***https://api.myonlineshop.com/cart/{cartId}/checkout***

In this case, the checkout requires a dedicated controller to accurately describe the action of the complex checkout process that a usual CRUD (Create, Retrieve, Update and Delete) operations cannot.

#### Store
A store resource archetype is used a client managed resource repository. It allows the client to perform CRUD action where client chooses the resource ID/URI. This archetype is not commonly used since collection type entities are usually more appropriate and sufficient in most cases.  
 
GET ***https://api.mymovieflix.com.au/users/{userId}/favourite-movie***  
PUT ***https://api.mymovieflix.com.au/users/{userId}/favourite-movie/groundhog-day***   

That's it for now, stay tune for more future blog on REST API best practice series.  