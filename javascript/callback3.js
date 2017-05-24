function f2() {
  console.log('this is f2, i am callback.\n');
}

var LongTimeOperation = function(taskID) {
  var id = taskID;

  this.go = function(callback) {
    console.log('this is longTimeOperation #' + id);
    var delay = parseInt((Math.random() * 10000000) % 5000);

    setTimeout(function() {
      console.log('the task #' + id + ' cost ' + delay + ' ms.');
      callback();
    }, delay);
  }
}

for(var i=0; i<5; i++) {
  var task = new LongTimeOperation(i);
  task.go(f2);
}
