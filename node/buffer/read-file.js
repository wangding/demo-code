// 读取一个文本文件，以不同的编码打印出来
// 因为文件中带中文，所以 utf8 编码是可以正确显示中文的
// ascii 编码，中文不能正常显示

var fs = require('fs');

fs.readFile('./words.txt', function(err, buf){
  console.log(Buffer.isBuffer(buf));
  console.log(buf);
  console.log(buf.toString());
  console.log(buf.toString('utf-8'));
  console.log(buf.toString('ascii'));
});
