function Polygon(sides) {
  if (this instanceof Polygon) {
    console.log('this', this);
    this.sides = sides;
    this.getArea = function(){   return 0;    };
  } else {
    return new Polygon(sides);
  }
}

function Rectangle(width, height) { 
  Polygon.call(this, 2);
  this.width = width;
  this.height = height;
  this.getArea = function (){
    return this.width * this.height;
  };
}

Rectangle.prototype = new Polygon();
var rect1 = new Rectangle(5, 10);
console.log(rect1.sides);
