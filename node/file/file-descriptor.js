// 使用文件描述符

var fs = require('fs');

var id = fs.openSync('./config.json', 'r');

console.log(typeof id === 'number');
fs.writeSync(1, id);

