var i = 0;

function longTimeOperation(i)
{
  if(i > 5) return;

  var delay = parseInt((Math.random() * 10000000) % 2000, 10);

  console.log('the work is: ' + i )
  setTimeout(function() {
    console.log('the work ' + i + ' cost ' + delay + ' ms.');
    ++i;
    if(i === 5) {
      end(i);
    } 
    else {
      longTimeOperation(i);
    }
  }, delay);
}

function end(i)
{
  console.log('all the end! and is at ' + i);
}

longTimeOperation(0);
