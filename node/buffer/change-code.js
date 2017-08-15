// 将 Buffer 转换为其他格式
//
// 把源字符串变成 base64 编码和 16 进制编码

var name = 'wangding';
var passwd = '123456';

var buf = new Buffer(name + ':' + passwd);

console.log(buf.toString());
console.log(buf.toString('base64'));
console.log(buf.toString('hex'));
