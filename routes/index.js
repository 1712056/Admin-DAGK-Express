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
router.get('/bangdulieu.html', function(req, res, next) {
  res.render('table');
});
router.get('/bieudo.html', function(req, res, next) {
  res.render('charts');
});
router.get('/dangky.html', function(req, res, next) {
  res.render('signup');
});
router.get('/dangnhap.html', function(req, res, next) {
  res.render('login');
});
module.exports = router;
