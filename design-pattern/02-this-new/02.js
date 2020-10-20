/* call 和 apply 用来修改 this 上下文 */

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

bbb.call(objA);         // this -> objA
objA.c.d.call(window);  // this -> window