var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('订单首页');
});

router.get('/list', function(req, res, next) {
  res.send('订单列表');
});

module.exports = router;
