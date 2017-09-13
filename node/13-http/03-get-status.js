#!/usr/bin/node
var http = require('http');

var options = {
  hostname: 'sample.wangding.in',
  port: 80,
  path: '/web/one-div.html',
  method: 'GET',
  agent: false
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('statusMessage:', res.statusMessage);
  console.log('httpVersion:', res.httpVersion);
  console.log('httpHeaders:', res.rawHeaders);
});

req.end();

