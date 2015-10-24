var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tony Hao Kin Ly'}); //Add layout: false to not use template
});

router.get('/page2', function(req, res, next) {
  res.render('page2', { title: 'Tony Hao Kin Ly'});
});

router.get('/page2', function(req, res, next) {
  res.render('page2', { title: 'Tony Hao Kin Ly'});
});

router.get('/prac', function(req, res, next) {
  res.render('prac', { title: 'Tony Hao Kin Ly'});
});

router.get('/wedding', function(req, res, next) {
  res.render('wedding', { title: 'Wedding', layout: false});
});


module.exports = router;