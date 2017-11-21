global.setInterval(function() {
  console.log('this is c');
}, 1500);


setTimeout(function() { 
  console.log('Game Over!');
  process.exit(0);
}, 10000);
