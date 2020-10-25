#!/usr/bin/env node

const log = console.log;

/* es6 函数参数的默认值  */

// es6 允许给函数的参数（形参）赋初始值
// 1. 一般具有默认值的函数参数，通常在参数列表中的最后
// 通常最后的参数会省略
function add1(x, y, z) {
  return x + y + z;
}

log(add1(1, 2, 3));
log(add1(1, 2));

function add2(x, y, z=10) {
  return x + y + z;
}

log(add2(1, 2, 3));
log(add2(1, 2));

// 2. 与解构赋值结合使用
// es5 code
function connect1(config) {
  log(config.host);
  log(config.username);
  log(config.password);
  log(config.port);
}

connect1({
  host: 'localhost',
  username: 'root',
  password: 'root',
  port: 3306
});

// es6 code
function connect2({host='127.0.0.1', username, password, port}) {
  log(host);
  log(username);
  log(password);
  log(port);
}

connect2({
  username: 'root',
  password: 'root',
  port: 3306
});

connect2({
  host: 'www.baidu.com',
  username: 'root',
  password: 'root',
  port: 3306
});
