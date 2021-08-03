Function.prototype.before = function(beforefn){
  let _self = this;    // 保存原函数的引用

  return function() {  // 返回包含了新函数和原函数的代理函数
    beforefn.apply(this, arguments);     // 执行新函数，修正this
    _self.apply(this, arguments);        // 执行原函数
  }
}

Function.prototype.after = function(afterfn){
  let _self = this;

  return function(){
    _self.apply(this, arguments);
    afterfn.apply(this, arguments);
  }
}

let func = function(){
  console.log(4)
}

// before 函数返回一个函数，取决于调用它的函数
func =  func.before(function(){
  console.log(1);
}).before(function() {
  console.log(2);
}).after(function(){
  console.log(7);
}).after(function() {
  console.log(8);
});
console.log(func.toString());
func();
