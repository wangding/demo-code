class Rectangle { 
  constructor(width, height) {
    this.width = width || 0;
    this.height = height || 0;
  }

  get area() {
    return this.width * this.height;
  }

  static getName() {
    console.log('Rectangle');
  }
}

var rect1 = new Rectangle(5, 10);
console.log(rect1.area);

var rect2 = new Rectangle();
console.log(rect2.area);

Rectangle.getName();
