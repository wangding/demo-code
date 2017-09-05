#!/usr/bin/node
// 01-file-dir-name.js

console.log('file name:', __filename);
console.log('dir name:', __dirname);

// 实际用途，用来拼接路径，找到其他文件
var fileName = __dirname + '/view/' + 'view.html';    // not very good, use path.join

console.log(fileName);  

// not very good
switch(process.platform)  {
  case 'linux':
    fileName = __dirname + '/view/' + 'view.html';
    break;
  
  case 'win32':
    fileName = __dirname + "\\view\\" + 'view.html';
    break;

  default:
    fileName = 'Some thing wrong!';
}

console.log(fileName);

// use path.join is good
