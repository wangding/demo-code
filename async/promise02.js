function fetchPage() {
  console.log('fetchPage');

  return new Promise(function(resolve, reject) {
    // if everything ok
    var delay = parseInt((Math.random() * 10000000) % 5000);

    setTimeout(function() {
      console.log('the task cost ' + delay + ' ms.');
      resolve('this is page data.');
    }, delay);

    // if something wrong
    // reject();
  })
}

fetchPage().then(function(data) {
  console.log(data);
});
