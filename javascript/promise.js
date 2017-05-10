getPageNum().then(getData());
//

function getPageNum() {
  console.log('getPageNum');

  return new Promise(function(resolve, reject) {
    // everything ok 
    resolve();

    // if something wrong
    // reject();
  });
}

function getData() {
  console.log('getData');
}
