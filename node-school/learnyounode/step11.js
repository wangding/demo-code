var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
  console.log(req.method);
  console.log(req.url);
  var fileName = req.url.slice(1, req.url.length);
  console.log(fileName);
  var data; 
  if(fs.existsSync(fileName)) {
    data = fs.readFileSync(fileName, 'utf-8');
  }
  else {
    data = 'hello';
  }
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end(data);
});

server.listen(process.argv[2]);
