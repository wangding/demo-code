// 标准 I/O 流的读写
//
// 管道操作  cat ../buffer/buf.js | node std-in-out.js

console.log(process.pid);
process.stdout.write('hello world!\n');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(text) {
  process.stdout.write(text.toUpperCase());
});
