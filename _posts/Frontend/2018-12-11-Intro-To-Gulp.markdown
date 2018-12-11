---
layout: post
categories: frontend
author: Ivan
title: Intro To Gulp
permalink: /:categories/:title
---

Gulp is a javascript task runner and automation tool that are typically used by developers to perform repetitive tasks typically within the CI/CD devops workflow. 

Those tasks included:

* CSS compilation via Less or Sass.
* Move or coping files to an output directory for deployment.
* Running unit testss and code analysis.
* Minifying and bundling javascript libraries and CSS style sheets.

## Install Gulp

The best way to install Gulp is via npm(Node Package Manager), if you are not familiar with npm please visit the [www.npmjs.com][npmjs] for more detail.  

I recommand that you install gulp from npm locally within your frontend application project. however you can also install Gulp globally if you wish.

1. Open a console and change directory to your project root
```console
cd yourproject
```

2. Install Gulp on your project locally
```console
npm install --save-dev gulp
```
The **--save-dev** option will add the package to development section of your **package.json** file. Since Gulp will be used to assist build and deployment automations, it is not required in the production environment. 

3. Now it's time to creat a test gulpfile. create a gulpfile.js in your project root with the following contents:
```javascript
var gulp = require('gulp');
gulp.task('test-task', function(){
    console.log('success!');
});
```
4. Run the task by entering the command below
```console
gulp test-task
```
You should get **success!** back as a result. 

5. If want to learn more on Gulp please see https://github.com/ivanzcai/gulp-demo for more detail! 




[npmjs]:   https://www.npmjs.com/get-npm
