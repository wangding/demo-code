//let request = require('request');

var http = require('https');
var options = { 
  method: 'GET',
  url: 'https://www.baidu.com/s',
  qs: { wd: '我是个大天赐好建华大街的,啦啦啦啦啦啦'  },
  headers: { 
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36' 
    }
};
http.get(options, function (response) {
  var data = '';

  response.on('data', function(chunk) {
    data += chunk;
  });

  response.on('end', function() {
    console.log(data);
  });
});
