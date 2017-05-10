var today = require('../libs/date.js').today;
var yesterday = require('../libs/date.js').yesterday;
var the_day_before_yesterday = require('../libs/date.js').the_day_before_yesterday;

console.log('today is: ' + today());
console.log('yesterday is: ' + yesterday());
console.log('the_day_before_yesterday is: ' + the_day_before_yesterday());

var d = new Date();

console.log(d.toUTCString());
console.log(d.toLocaleDateString());

d = new Date(Date.now() - 24*60*60*1000);
console.log(d.toUTCString());
console.log(d.toLocaleDateString());
