#!/usr/bin/node
var http = require('http');

var url = process.argv[2];

http.get(url, function(res) {
  res.pipe(process.stdout);
});
