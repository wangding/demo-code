
/*
 * spa.js
 * Root namespace module
*/

var spa = (function() {
  var initModule = function ($container) {
    $container.html('<h1>hello world!</h1>');
  };

  return { initModule: initModule };
}());
