var total = 10;
var limit = 3;
var i = 0;      // from 0 to total 
var count = 0;  // from 0 to limit

var id = setInterval(function() {
  if(i == total) {
    clearInterval(id);
    console.log('Game over!');
  }

  while(count < limit && i < total) {
    longTimeOperation(i);
    i++;
    count++;
  }
}, 500);

function longTimeOperation(i)
{
  var delay = parseInt((Math.random() * 10000000) % 4000, 10);

  console.log('the work is: ' + i )
  setTimeout(function() {
    console.log('the work ' + i + ' cost ' + delay + ' ms.');
    --count;
  }, delay);
}

function end(i)
{
  console.log('all the end! and is at ' + i);
}

