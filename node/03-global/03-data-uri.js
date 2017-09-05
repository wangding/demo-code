#!/usr/bin/node
// 03-data-uri.js
// 用 Buffer 修改字符串编码
//
// 制造 data uri，把图片以 base64 编码的格式嵌入到网页文件中
// 网页文件可以在浏览器中打开


var fs = require('fs');
//data :[MIME-type][;charset=<encoding>[;base64],<data> ]

var mime = 'image/jpg';
var data = fs.readFileSync('./nodejs-logo.jpg').toString('base64');
var uri = 'data:' + mime + ';base64,' + data;

console.log('data uri:\n%s', uri);

var html = '<!DOCTYPE html>\n<html>\n<body>\n<img alt="nodejs" src="' + uri + '">\n</body>\n</html>'

console.log('\nhtml file content:\n%s', html);
fs.writeFileSync('./data-uri.html', new Buffer(html));


