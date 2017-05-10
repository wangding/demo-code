var items = [1, 2, 3, 4, 5, 6];
var results = [];
var running = 0;
var limit = 3;

function series(item) {
  if(item) {
    async(item, function(result) {
      results.push(result);
      return series(items.shift());
    });

  } else {
    return finall(results);
  }
}

function launcher() {
  while(running < limit && items.length > 0) {
    var item = items.shift();
    async(item, function(result) {
      results.push(result);
      running--;
      if(items.length > 0) {
        launcher();
      }else if(running == 0) {
        finall(results);
      }
    });
    running++;
  }
}

launcher();

//series(items.shift());

function async(arg, callback) {
  console.log('param is ' + arg + ' one second return the message');
  setTimeout(function() {
    callback(arg * 2);
  }, 3000);
}

function finall(value) {
  console.log('done: ', value);
}
/*
items.forEach(function(item) {
  async(item, function(result) {
    results.push(result);
    if(results.length == items.length) finall(results);
  });
});
*/


