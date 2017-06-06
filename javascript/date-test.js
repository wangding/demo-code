/*
var today = require('../libs/date.js').today;
var yesterday = require('../libs/date.js').yesterday;
var the_day_before_yesterday = require('../libs/date.js').the_day_before_yesterday;

console.log('today is: ' + today());
console.log('yesterday is: ' + yesterday());
console.log('the_day_before_yesterday is: ' + the_day_before_yesterday());
*/
console.log(new Date().toLocaleDateString());
var d = new Date();

console.log(d.toUTCString());
console.log(d.toLocaleDateString());

d = new Date(Date.now() - 24*60*60*1000);
console.log(d.toUTCString());
console.log(d.toLocaleDateString());


d = Number((new Date()).toLocaleDateString().slice(0, 4));
var pre;

for(let j=2014; j<d; j++) {
  pre = j + '-0';
  console.log('d =', pre);
}

d = Number((new Date()).toLocaleDateString().slice(5,7));
console.log(d);

var newUserPerMonth = {};
initData();
console.log(newUserPerMonth);

function initData() {
  let preDate;

  // get current year
  let year = Number((new Date()).toLocaleDateString().slice(0, 4));

  for(let j=2014; j<year; j++) {
    for(let i=1; i<13; i++) {
      preDate = i<10 ? j + '-0' + i : j + '-' + i;
      newUserPerMonth[preDate] = 0;
    }
  }

  // get current month
  month = Number((new Date()).toLocaleDateString().slice(5, 7));
  for(let i=1; i<month; i++) {
    preDate = i<10 ? year + '-0' + i : year + '-' + i;
    newUserPerMonth[preDate] = 0;
  }
}

