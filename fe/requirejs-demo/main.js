requirejs.config({
  'paths': {
    'jquery': '//apps.bdimg.com/libs/jquery/2.1.4/jquery.min'
  }
});

require(['jquery'], function($) {
  $(function() {
    var $btnDisplay = $('.main input');

    $btnDisplay.click(function(e) {
      require(['mod1'], function(m) {
        alert(m.a);
      });
    });
  });
});
