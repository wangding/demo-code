var count = 0;

for(var i=0; i<5; i++) {
  longTimeOperation(i);
}

function longTimeOperation(i)
{
  var delay = parseInt((Math.random() * 10000000) % 2000, 10);

  console.log('the work is: ' + i )
  setTimeout(function() {
    console.log('the work ' + i + ' cost ' + delay + ' ms.');
    ++count;
    if(count === 5) end(i);
  }, delay);
}

function end(i)
{
  console.log('all the end! and is at ' + i);
}
