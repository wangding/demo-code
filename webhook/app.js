#!/usr/bin/env node

// 使用 gogs 的 webhook
// 查看 gogs webhook 发送的请求数据
// 包括：请求起始行，请求头，请求体

const http = require('http'),
      log  = console.log;

http.createServer((req, res) => {
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();

  req.pipe(process.stdout);

  res.end('Hello world!');
}).listen(8000);
