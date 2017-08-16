// 使用内置的流来实现静态 web 服务器
//
// 不用流的代码

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  console.log('method:' + req.method + ', url:' + req.url);
  fs.readFile(__dirname + '/index.html', function(err, data) {
    if(err) {
      res.statusCode = 500;
      res.end(String(err));
    } else {
      res.end(data);
    }
  });
}).listen(8000);

