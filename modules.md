MODULE: 

Module in Node.js has its own context, so it cannot interfere with other modules or pollute global scope. Also, each module can be placed 
in a separate .js file under a separate folder.
Module in Node.js is a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the
Node.js application.
Node.js implements CommonJS modules standard. CommonJS is a group of volunteers who define JavaScript standards for web server, 
desktop, and console application. There are three types of modules:
1.Core Modules
2.Local Modules
3.Third Party Modules

CORE MODULES:

Node.js is a light weight framework. The core modules include bare minimum functionalities of Node.js. These core modules are compiled 
into its binary distribution and load automatically when Node.js process starts. However, you need to import the core module 
first in order to use it in your application.
In order to use Node.js core or NPM modules, you first need to import it using require() function as shown below.
var module = require('module_name');

LOCAL MODULES:

Local modules are modules created locally in your Node.js application. These modules include different functionalities of your application 
in separate files and folders. You can also package it and distribute it via NPM, so that Node.js community can use it. For example, 
if you need to connect to MongoDB and fetch data then you can create a module for it, which can be reused in your application.
Loading Local Module
To use local modules in your application, you need to load it using require() function in the same way as core module.
However, you need to specify the path of JavaScript file of the module.
The following example demonstrates how to use the above logging module contained in Log.js.
app.js
var myLogModule = require('./Log.js');
myLogModule.info('Node.js started');

THIRD PARTY MODULES:

Third party modules are those that are provided by other external sources.
