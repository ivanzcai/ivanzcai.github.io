---
layout: post
categories: frontend
author: Ivan
title: Javascript Build Using Gulp
permalink: /:categories/:title
---

# Gulp Demo - Javascript build

The code base is located in [https://github.com/ivanzcai/gulp-demo][thisgit]

This project is used for demonstrating what Gulp is and how it works. It perform a couple of simple tasks to give you a quick overview of what it does. First it converts newer js to ES5 for backward browser compitibility and copy the modified files in the stream to **deploy** folder. 

* Create package.json
```console
npm init
```

* Create **deploy** and **vendor** in the **gulp-demo** root directory

* install gulp package in your devDependencies
```console
npm install --save-dev gulp
```

* Verify your gulp installation
```console
gulp --version
```


* Install gulp cli, babel and uglify
```console
npm install gulp-cli -g
npm install --save-dev gulp-babel @babel/core @babel/preset-env
```
**babel** is used for converting javascript to ES5 so even the older browsers can render the site.

* Add fsevents library to your devDependencies in your **package.json**
```javascript
"fsevents": "*"
```

* Then run: 
```console
npm i -f
npm install --save-dev gulp-uglify
```
* run the default work flow 
```console
gulp 
```
If this works, you will see files generated in the **deploy** folder

For if you want to learn about gulp bundle assets in an extensive way, there are some great examples in [this github repository] [bundleassets]

[bundleassets]: https://github.com/dowjones/gulp-bundle-assets/blob/master/docs/API.md


[thisgit]:   https://github.com/ivanzcai/gulp-demo