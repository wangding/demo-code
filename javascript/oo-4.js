var obj = {};

obj['2017-01'] = 0;
obj['2017-02'] = 0;

console.log(obj);

function initObj() {
  for(var i=1; i<10; i++) obj['2016-0'+i] = 0;
  for(var i=10; i<13; i++) obj['2016-'+i] = 0;
}

initObj();
console.log(obj);
