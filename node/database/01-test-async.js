#!/usr/bin/node
var http = require('http');

var LongTimeOperation = function(taskID)
{
  this.id = taskID;
  this.go = function(callback) {
    console.log('task #%d start', this.id);
    http.get('http://192.168.174.144:8080/favicon', function(res) {
      var data = '';
      console.log('response header size:', Buffer.byteLength(JSON.stringify(res.headers)));
      res.on('data', function(chunk) { data += chunk; });
      res.on('end', function() { 
        console.log('response body size:', Buffer.byteLength(data));
        callback();
      });
    });
  };
};

function f2() {
  count++;
  console.log('task #%d finished', this.id);
  if(count == total) {  end();  }
}

function end() { console.timeEnd('FLOW-CONTROL'); }

var count = 0,
    total = process.argv[2] || 50;

console.time('FLOW-CONTROL');
for(var i=0; i<total; i++) {
  var task = new LongTimeOperation(i);
  task.go(f2);
}

