var fs = require('fs');

var w = fs.watch(__dirname, console.log);

process.on('SIGINT', function() {
  w.close();

  console.log('unwatch the directory');
  console.log('Game over afer ten seconds ...');

  setTimeout(function() {
    process.exit(0);
  }, 10000);
})
