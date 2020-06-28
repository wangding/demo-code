function sum(a, b) {
  var x = Number(a),
      y = Number(b);

  if(isNaN(x) || isNaN(y)) return NaN;

  return a - b;
}

module.exports = sum;
