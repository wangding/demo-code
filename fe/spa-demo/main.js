requirejs.config({
  baseUrl: "app/example",
  paths: {
    counter: "modules/counter",
    util: "modules/displayUtil"
  }
});

require(
  ["util"],
  function(utilModule) {
    utilModule.displayNewCount();
    utilModule.displayNewCount();
  }
);
