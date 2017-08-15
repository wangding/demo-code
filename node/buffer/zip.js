// 把 linux 下的一个文件压缩成 gzip 格式
// 用 linux gzip -d file.gz 解压上面压缩的文件

// 把 linux 下用 gzip 压缩的一个文件，用本程序
// 解压缩开来

var zlib = require('zlib');
var gzip = zlib.createGzip();
var fs = require('fs');

var buf = fs.readFileSync('./test.html');

console.log(Buffer.isBuffer(buf));
console.log(buf.length);
console.log(buf);

zlib.gzip(buf, function(err, dbuf) {
  console.log(dbuf.length);
  console.log(dbuf);
  fs.writeFileSync('./test2.html.gz', dbuf);
}); 
