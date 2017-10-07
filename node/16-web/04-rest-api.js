#!/usr/bin/node
// 04-rest-api.js

var http = require('http');
var items = [];

http.createServer(function(req, res) {
  console.log(req.headers);
  console.log('');

  switch(req.method) {
    case 'GET':
      get(req, res);
      break;

    case 'POST':
      insert(req, res);
      break;

    case 'DELETE':
      del(req, res);
      break;

    case 'PUT':
      change(req, res);
      break;

    default:
      break;
  }
}).listen(8080);

function get(req, res) {
  //console.log('GET');
  var body = JSON.stringify(items);
  
  res.setHeader('Content-Length', Buffer.byteLength(body));
  res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(body);
}

function insert(req, res) {
  //console.log('POST');
  var item = '';

  req.setEncoding('utf8');
 
  req.on('data', function(data) {
    item += data;
  });
 
  req.on('end', function() {
    items.push(item);
  });

  res.end();
}

function del(req, res) {
  //console.log('DELETE');
  console.log(req.url);
  console.log(req.url.split('/'));
  
  var arg = req.url.split('/');
  if(arg.length != 2) {
    res.statusCode(400);
    res.end('parameter wrong!');
    return;
  }
  
  if(arg[1] === '') {
    items = [];
    res.end('Delete all. OK!');
    return;
  }
  
  var i = parseInt(arg[1]);
  
  if(isNaN(i)) {
    res.statusCode = 400;
    res.end('Invalid item id.');
    return;
  }
  
  if(!items[i]) {
    res.statusCode = 404;
    res.end('Item not found.');
  } else {
    items.splice(i, 1);
    res.end('Delete OK!');
  } 
}

function change(req, res) {
  //console.log('PUT');
  console.log(req.url); 
  console.log(req.url.split('/'));
  
  var arg = req.url.split('/');
  if(arg.length != 2) {
    res.statusCode(400);
    res.end('parameter wrong!');
    return;
  }
  
  if(arg[1] === '') {
    res.end('Change all. OK!');
    return;
  }
  
  var i = parseInt(arg[1]);
  
  if(isNaN(i)) {
    res.statusCode = 400;
    res.end('Invalid item id.');
    return;
  }

  var item = '';
  req.setEncoding('utf8');
  req.on('data', function(data) {
    item += data;
  });

  req.on('end', function() {
     if(!items[i]) {
       res.statusCode = 404;
       res.end('Item not found.');
     } else {
       items[i] = item;
       res.end('Change OK!');
     } 
  });
}
