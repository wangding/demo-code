var dialog = {};

dialog.init = function($container, opt) {
  var colors = ['red', 'green', 'yellow', 'blue', 'black', 'orange'];

  $container.html('<div class="dialog"></div>');
  $('.dialog').css({
    'width': opt.width,
    'height': opt.height
  });

  var i = 0;

  window.setInterval(function() {
    $('.dialog').css({'background': colors[i++%6]});
  }, opt.speed);
}

