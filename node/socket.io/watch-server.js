var fs = require('fs'),
    url = require('url'),
    http = require('http'),
    path = require('path'),
    express = require('express');

var app = express(),
    server = http.createServer(app);

var io = require('socket.io').listen(server),
    root = __dirname;

app.use(function(req, res, next) {
  req.on('static', function() {
    var file = url.parse(req.url).pathname;
    var mode = 'stylesheet';

    console.log(file);
    if(file[file.length - 1] == '/') {
      console.log('hello');
      file += 'watch-index.html';
      mode = 'reload';
    }

    createWatcher(file, mode);
  });
  next();
});

app.use(express.static(root));

var watchers = {};

function createWatcher(file, event) {
  var absolute = path.join(root, file);

  if(watchers[absolute]) { return; }

  fs.watchFile(absolute, function(curr, prev) {
    if(curr.mtime !== prev.mtime) {
      io.sockets.emit(event, file);
    }
  });

  watchers[absolute] = true;
}

server.listen(8080);
