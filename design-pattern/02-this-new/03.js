/* call 和 apply 传递参数的方式不一样 */
/* bind 和 call, apply 作用相同，只是 bind 产生新的函数，需要 () 调用 */

let log = console.log;

function bbb(name, age) {
  this.name = name;
  this.age  = age;
}

let objA = {
  b: bbb
};

//bbb.call(objA, 'wangding', 42);         // this -> objA
bbb.bind(objA, 'wangding', 42)();         // this -> objA
log(objA);

bbb.apply(window, ['wangding', 42]);      // this -> objA
log(window);