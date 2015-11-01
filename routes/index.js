var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tony Hao Kin Ly'}); //Add layout: false to not use template
});

router.get('/prac', function(req, res, next) {
  res.render('prac', { title: 'Tony Hao Kin Ly', layout: false});
});

router.get('/wedding', function(req, res, next) {
  res.render('wedding', { title: 'Tony Hao Kin Ly', layout: false});
});

module.exports = router;