/* 箭头函数的 this 是静态的，跟箭头函数定义的上下文有关 */
/* function 的 this 是动态的，跟 function 执行的上下文有关 */

let log = console.log;

function A(name) {
  this.name  = name;
  this.print = () => log(this);
}

A.prototype.hello = () => log(this);

let a = new A('xiaoA');
let b = A.call(window, 'xiaoB');

a.print();
a.hello();
print();

log(a);
log(b);