#!/usr/bin/node
// 01-buffer-base.js
// buffer 对象的实例化，遍历，切片操作，toJSON 操作

var buf = new Buffer(256);
buf[0] = 23;

console.log('buffer length:', buf.length);
console.log('\nbuf content:', buf);

for(var i=0; i<256; i++) buf[i] = i;
console.log('\nbuf content:', buf);

var end = buf.slice(250, 256);
console.log("\nbuf's end 6 items:", end);

end.fill(0);
console.log('\nend\'s JSON:', end.toJSON());
console.log('end\'s JSON:', JSON.stringify(end));

var array = ["a", 0xBA, 0xDF, 0x00, 0xD0, 255, 10];

var buf1 = new Buffer(array);
console.log('\nbuffer1:', buf1.length, buf1);

var buf2 = new Buffer('hello world', 'utf8');
console.log('buffer2:', buf2.length, buf2.toString());

var buf3 = new Buffer(buf2.length);
buf2.copy(buf3, 0, 0, buf2.length);
console.log('buffer3:', buf3.length, buf3.toString());

