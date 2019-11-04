var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/trangchu.html', function(req, res, next) {
  res.render('index');
});
router.get('/quanlydonhang.html', function(req, res, next) {
  res.render('manageorder');
});
router.get('/thaydoithongtin.html', function(req, res, next) {
  res.render('infochange');
});
module.exports = router;
