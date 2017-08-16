// 文件路径解析

var path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.parse(__filename));

var objPath = path.parse(__filename);
console.log(objPath.ext);
console.log(path.sep);
