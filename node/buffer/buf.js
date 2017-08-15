// buffer 对象的实例化，遍历，切片操作，toJSON 操作

var buf = new Buffer(256);
buf[0] = 23;

for(var i=0; i<256; i++) buf[i] = i;

console.log(buf);

var end = buf.slice(200, 256);

console.log(end);

console.log(buf.toJSON());

