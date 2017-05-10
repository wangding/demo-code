var start = new Date();
var now;
setTimeout(function() {
  now = Date.now();
  console.log(now - start);
}, 4000);
