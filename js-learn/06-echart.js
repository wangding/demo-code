$(function() {
  var A = 15 * Math.PI / 180;   // 角度速度
  var S = 5;                    // 移动速度

  var xData = [],
    yData = [];

  var canvas = $('canvas').get(0);

  var ctx = canvas.getContext('2d');

  for(var i = 1; i <= 50; i += 1) {
    xData.push(roundFractional(calx(i), 2));
    yData.push(roundFractional(caly(i), 2));
  }

  ctx.translate(100, 100);
  ctx.moveTo(0, 0);

  for(var i=1; i <= 50; i += 1) ctx.lineTo(xData[i], yData[i]);

  ctx.stroke();

  /**
   * 小数点后面保留第 n 位
   *
   * @param x 做近似处理的数
   * @param n 小数点后第 n 位
   * @returns 近似处理后的数 
   */
  function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
  }


  function calx(t) {
    return (S * t) * Math.cos(A * t);
  }

  function caly(t) {
    return (S * t) * Math.sin(A * t);
  }
});
