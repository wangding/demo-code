// 读取配置文件

var fs = require('fs');

try {
  var conf = fs.readFileSync('./config.json');
  console.log(JSON.parse(conf.toString()));
}
catch (err) {
  console.log(err);
}
