#!/usr/bin/node

var http = require('http'),
    url  = require('url');

var addr = process.argv[2] || 'http://sample.wangding.in/web/one-div.html';

function opt(addr) {
  var options = url.parse(addr);

  options.method = 'GET';
  options.headers = { 'User-Agent': '02-my-curl.js' };

  return options;
}

function get(options) {
  http.get(options, function(res) {
    console.log('\nstatus:', res.statusCode);
    console.log('status message:', res.statusMessage);
    console.log('HTTP version:', res.httpVersion);
    console.log('');

    console.log(res.headers);
    console.log('');

    res.pipe(process.stdout);

    if(res.statusCode < 400 && res.statusCode >= 300) {
      get(opt(res.headers.location));
    }
  });
}

get(opt(addr));

