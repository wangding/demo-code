const R = require('ramda');
const log = console.log;

Object.assign(global, R);

/* ----------------------  */
// 假设需要一个能够删除所有已完成项的 “TODO list”。

const tasks = [{
  titile: 'wang',
  complete: true,
}, {
  titile: 'ding',
  complete: false,
}, {
  titile: 'lou',
  complete: true,
}, {
  titile: 'ying',
  complete: false
}];

// Plain JS
const incompleteTasks = tasks.filter(task => !task.complete);
log(incompleteTasks)

// ramda
const incomplete = filter(complement(prop('complete')))
//R.where(spec, testObj)
log(incomplete(tasks))

