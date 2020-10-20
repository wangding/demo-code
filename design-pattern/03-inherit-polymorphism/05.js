/* 多态，不同对象，调用相同方法，产生不同结果 */

let log = console.log;

function Shap() {
  this.area = () => {};
}

function Rectangle(w, h) {
  let _width  = w,
      _height = h;

  Shap.call(this);
  this.area = () => _width * _height;
}

Rectangle.prototype = Shap.prototype;

let r = new Rectangle(2, 3);
log(r.area());

function Circle(r) {
  let _radius = r;

  Shap.call(this);
  this.area = () => 2 * Math.PI * _radius;
}

Circle.prototype = Shap.prototype;

let c = new Circle(5);
log(c.area());