// 使用流的第三方模块
//
// express

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  console.log('method:' + req.method + ', url:' + req.url);
  res.send('hello world');
});

app.listen(8000);
