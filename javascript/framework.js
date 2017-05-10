var num = 32;
var count = 0;

var i = 0;
var id;

dooo();

function dooo() {

  if(i> num) return;
  
  getUserData(++i);
  getUserData(++i);
  getUserData(++i);

  id = setInterval(check, 1000);
}

function check() {
  if(count < 3) {
    console.log('please wait 1 second...');
    if(i > num) clearInterval(id);
  }
  else {
    clearInterval(id);
    console.log('finished three fetching! will continue...');
    count = 0;
    dooo();
  }
}

function getUserData(i) {
  if(i > num) return;

  // do something

  setTimeout(function() {
    console.log('Parse page num: ' + i);
    ++count;
  }, 1000);
}
