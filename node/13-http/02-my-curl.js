#!/usr/bin/node

var http = require('http');

var url = process.argv[2] || 'http://sample.wangding.in/web/one-div.html';

http.get(url, function(res) {
  console.log('status:', res.statusCode);
  console.log('status message:', res.statusMessage);
  console.log('HTTP version:', res.httpVersion);
  console.log('');
  console.log(res.headers);
  console.log('');
  res.pipe(process.stdout);
});
