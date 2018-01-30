#!/usr/bin/node

var connect = require('connect');
var assert = require('assert');

/*
function logger(req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
}
*/
function hello(req, res, next) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('hello world');
}

function restrict(req, res, next) {
  if(!req.headers.authorization) return next(new Error('Unauthorized'));

  var account = userNamePasswd(req.headers.authorization);

  if(account.userName !== 'wangding' || account.passWord !== '123') return next(new Error('account is incorrect!'));

  next();
}

function admin(req, res, next) {
  switch(req.url) {
    case '/':
      res.end('try /users');
      break;

    case '/users':
      res.writeHead(200, {'Content-Type': 'Application/json'});
      res.end(JSON.stringify(['wangidng', 'wangrui', 'louying']));
      break;
  }
}

function userNamePasswd(str) {
  var msg = str.split(' ');
  assert.equal(msg.length, 2, 'must to be 2');
  assert.equal(msg[0], 'Basic', 'must to be Basic');

  var account = Buffer.from(msg[1], 'base64');
  msg = account.toString('utf8').split(':');

  return {
    userName: msg[0],
    passWord: msg[1]
  };
}

var app = connect()
  .use('/admin', restrict)
  .use('/admin', admin)
  .listen(8080);
