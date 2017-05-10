function f2() {
  console.log('this is f2, i am callback.');
}

function longTimeOperation(callback)
{
  console.log('this is longTimeOperation.');

  var delay = parseInt((Math.random() * 10000000) % 2000, 10);

  setTimeout(function() {
    console.log('the work cost ' + delay + ' ms.');
    callback();
  }, delay);
}

longTimeOperation(f2);

longTimeOperation(function() {
  console.log('i am callback too!');
});

function longTimeOperation2()
{
  console.log('this is longTimeOperation2.');

  var delay = parseInt((Math.random() * 10000000) % 2000, 10);

  setTimeout(function() {
    console.log('the longTimeOperation2 cost ' + delay + ' ms.');
    f2();     // here less flexable
  }, delay);
}

longTimeOperation2();
