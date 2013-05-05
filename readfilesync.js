//readfilesync.js

var fs = require('fs');
var data = fs.readFileSync('app.js', 'utf-8');
console.log(data);
console.log('end.');
