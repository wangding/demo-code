/* this 是函数的运行上下文 */

let log = console.log;

function bbb() {
  log(this);
}

let objA = {
  b: bbb,
  c: {
    d: bbb
  }
};

bbb();        // this -> window
objA.b();     // this -> objA
objA.c.d();   // this -> objA.c