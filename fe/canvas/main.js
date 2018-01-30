window.onload = function() {
  var can = document.querySelector('canvas'),
      ocan = can.getContext('2d');

  ocan.moveTo(100, 100);
  ocan.lineTo(300, 300);
  ocan.stroke();
  
};
