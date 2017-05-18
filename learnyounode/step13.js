var url = require('url');
var http = require('http');

var server = http.createServer(function(req, res) {
  var objUrl = url.parse(req.url);
  var data = '';

  if(objUrl.pathname === '/api/parsetime') {
    
    var d = new Date(objUrl.query.slice(4, objUrl.query.length));
    var time = {};

    time["hour"] = d.getHours();
    time["minute"] = d.getMinutes();
    time["second"] = d.getSeconds();
    data = JSON.stringify(time);
    res.writeHead(200, {"Content-Type": "application/json"});
  }
  else if(objUrl.pathname === '/api/unixtime') {
    var d = new Date(objUrl.query.slice(4, objUrl.query.length));
    var time = {};
    
    time["unixtime"] = d.getTime();
    data = JSON.stringify(time);
    res.writeHead(200, {"Content-Type": "application/json"});
  }
  else { 
    data = 'hello';
    res.writeHead(200, {"Content-Type": "text/plain"});
  }

  res.end(data);
});

server.listen(process.argv[2]);
