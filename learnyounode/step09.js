var http = require('http');
var datas = ['', '', ''];
var num = 0;

for(var i=0; i<3; i++) getUrl(i);

function printData() {
  datas.forEach(function(e) {
    console.log(e);
  });
}

function getUrl(i) {
  http.get(process.argv[2+i], function (res) {
      res.setEncoding('utf-8');
      res.on('data', function (data) {
          datas[i] += data;
      });

      res.on('end', function () {
        num++;
        if(num === 3) printData();
      });
  });
}

