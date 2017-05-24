function f2() {
  console.log('this is f2, i am callback.');
}

function longTimeOperation(callback)
{
  console.log('this is longTimeOperation.');

  var delay = parseInt((Math.random() * 10000000) % 5000);

  setTimeout(function() {
    console.log('the work cost ' + delay + ' ms.');
    callback();
  }, delay);
}

longTimeOperation(f2);

longTimeOperation(function() {
  console.log('i am callback too!');
});

