requirejs.config({
  'paths': {
    'jquery': '//apps.bdimg.com/libs/jquery/2.1.4/jquery.min'
  }
});

requirejs(['jquery', 'mod1'], function($, m) {
  $('body').append('<h1>' + m.a + '</h1>');
});
