// 用 Buffer 修改字符串编码
//
// 制造 data uri，把图片以 base64 编码的格式嵌入到网页文件中
// 这个网页文件可以在浏览器中打开


var fs = require('fs');
//data :[MIME-type][;charset=<encoding>[;base64],<data> ]

var mime = 'image/jpg';
var data = fs.readFileSync('./nodejs.jpg').toString('base64');
var uri = 'data:' + mime + ';base64,' + data;

console.log(uri);

var html = '<!DOCTYPE html><html><body><img alt="nodejs" src="' + uri + '"></body></html>'

console.log(html);
fs.writeFileSync('./test.html', new Buffer(html));


