const log = console.log;

function double(x) {
  return x * 2
}

log(double(3));

const doubleArrow = x => x * 2;

log(doubleArrow(2));
