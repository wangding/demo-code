#!/usr/bin/node
var http = require('https');
const { URL  } = require('url');

var addr = new URL('https://www.baidu.com/s?wd=整天就是背背背记记记，或者有些正，时间就这么浪费了');
addr.headers = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36", "Upgrade-Insecure-Requests":"1" };
console.log(addr);
http.get(addr, function(res) {
  var result = '';
  console.log(res.headers);

  res.on('data', function(data) {   result += data.toString('utf8');   });
  res.on('end', function() {    console.log(result);   });
});
