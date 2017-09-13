#!/usr/bin/node
var http = require('http');

http.get('http://sample.wangding.in/web/one-div.html', function(res) {
  res.pipe(process.stdout);
});
