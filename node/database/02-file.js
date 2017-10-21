#!/usr/bin/node
// 02-file.js

var http = require('http'),
    fs = require('fs');

var items = loadData();

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

process.on('SIGINT', function(code) {
  console.log(items);
  fs.writeFileSync('./data.txt', JSON.stringify(items));
  process.exit();
});

function loadData() {
  try {
    return JSON.parse(fs.readFileSync('./data.txt', 'utf8'));
  } catch (e) { return []; }
}

// maybe save items every 10 seconds is ok

function get(req, res) {
  var body = JSON.stringify(items) || '';
  
  console.log(body);
  res.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain; charset="utf-8"',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(body);
}

function insert(req, res) {
  var item = '';

  req.setEncoding('utf8');
 
  req.on('data', function(data) { item += data; });
  req.on('end', function() { items.push(item);  });
  res.end();
}

function del(req, res) {
  var arg = req.url.split('/');
  if(arg.length != 2) {
    res.statusCode = 400;
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
  var arg = req.url.split('/');

  if(arg.length != 2) {
    res.statusCode = 400;
    return res.end('parameter wrong!');
  }
  
  if(arg[1] === '') { return res.end('Change all. OK!');  }
  
  var i = parseInt(arg[1]);
  
  if(isNaN(i)) {
    res.statusCode = 400;
    return res.end('Invalid item id.');
  }

  var item = '';
  req.setEncoding('utf8');
  req.on('data', function(data) { item += data; });
  req.on('end', function() {
     if(!items[i]) {
       res.statusCode = 404;
       return res.end('Item not found.');
     } 

     items[i] = item;
     res.end('Change OK!');
  });
}
