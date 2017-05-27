function fetchPage() {
  console.log('fetchPage');
  
  return new Promise(function(resolve, reject) {
    // if everything ok
    setTimeout(function() {
      console.log('the task cost 1000 ms.');
      resolve('This is the page data.');
    }, 1000);

    // if something wrong
    // reject();
  });
}

fetchPage().then(function(data) {
  console.log(data);
});
