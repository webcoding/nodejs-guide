//loadmodule.js

var hello1 = require('./module');
hello1.setName('xiaohan1');

var hello2 = require('./module');
hello2.setName('xiaohan2');

hello1.sayHello();