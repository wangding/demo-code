var http = require('http');

http.get('http://www.heuet.edu.cn/', function(res) {
  res.setEncoding('utf8');

  res.on('readable', function() {
    var data;
    while(data = res.read()) {
      console.log('\n\n=======[chunk]\n\n %s', data);
    }
  });

  res.once('end', function() {
    console.log('[ended]');
  });
});
