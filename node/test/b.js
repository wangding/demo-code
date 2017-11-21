global.setInterval(function() {
  console.log('this is b');
}, 1000);


setTimeout(function() { 
  console.log('Game Over!');
  process.exit(0);
}, 10000);
