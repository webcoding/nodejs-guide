//app.js

var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>你好</h1>');
    res.end('<p>Node.js，使用supervisor后，这里修改的话，浏览器会同步刷新了。</p>');
}).listen(3000);

console.log('HTTP server is listening at port 3000.');