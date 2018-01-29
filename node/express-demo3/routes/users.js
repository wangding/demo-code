var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user/:id', function(req, res, next) {
  res.send('user id: ' + req.params.id);
});

module.exports = router;
