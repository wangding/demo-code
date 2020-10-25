#!/usr/bin/env node

const log = console.log;

/* es6 简化对象写法 */

const radius = 5,
      diameter  = function(r) { return 2 * r; },
      perimeter = function(r) { return 2 * Math.PI * r; };

// es5 code
const crl = {
  radius: radius,
  area: function(r) {
    return Math.PI * r * r;
  },
  diameter: diameter,
  perimeter: perimeter
};

// es6 code
const circle = {
  radius,
  area(r) {
    return Math.PI * r * r;
  },
  diameter,
  perimeter
};

log(`circle radius: ${circle.radius}`);
log(`r=5, area: ${circle.area(5)}`);
log(`r=5, diameter: ${circle.diameter(5)}`);
log(`r=5, perimeter: ${circle.perimeter(5)}`);
