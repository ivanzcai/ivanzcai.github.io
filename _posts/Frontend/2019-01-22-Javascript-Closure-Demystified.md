---
layout: post
categories: backend
author: Ivan Cai
title: Javascript closure
permalink: /:categories/:title
---
This purpose of this post is to demystify what closure is in Javascript.  
If you are coming from a object orientated programming language background such as C# or Java, the best way you can associate 
Javascript closure that you are creating a object with private variable. 

The local variables are similar to your private properties such that you cannot directly access it. 
However you can expose functions using the  **return**  to access and update your private variables. Those return functions are similar to your public functions in your OOP language. 
 
```
function CreateCar(brand){
  
  var mileage = 0;
  
  return{
    report: function(){
      console.log("your "+brand+" has travelled " +mileage +" miles")
    },
    addMileage: function(distance){
      mileage += distance
    }
  };
    
}

var newCar = CreateCar("Merc");

newCar.report();
newCar.addMileage(20);
newCar.report();
newCar.addMileage(20);
newCar.report();

```

