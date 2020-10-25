#!/usr/bin/env node

const log = console.log;

/* es6 模板字符串 */

// 字符串 '', "", ``
// 1. 声明
let str = `我也是一个字符串哦！`;
log(str, typeof str);

// 2. 模板串中内容可以直接出现换行符
let dom1 = ''
  + '<form>'
    + '<label>用户名：</label><input type="text" name="username"><br>'
    + '<label>密　码：</label><input type="password" name="password"><br>'
    + '<input type="submit" value="login">'
  + '</form>';

log(dom1);

let dom2 = '\
  <form>\
    <label>用户名：</label><input type="text" name="username"><br>\
    <label>密　码：</label><input type="password" name="password"><br>\
    <input type="submit" value="login">\
  </form>';

log(dom2);

let dom3 = `
  <form>
    <label>用户名：</label><input type="text" name="username"><br>
    <label>密　码：</label><input type="password" name="password"><br>
    <input type="submit" value="login">
  </form>`;

log(dom3);

// 3. 模板串中可以出现变量
let usr = {
  name: 'wangding',
  pwd : '123'
};

log(`username: ${usr.name}\npassword: ${usr.pwd}`);
