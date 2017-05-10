var fs = require('fs');

var data = [{"id": "00", "name": "wangding", "date": "2017-05-05"}];
fs.writeFileSync('abc.json', JSON.stringify(data));
