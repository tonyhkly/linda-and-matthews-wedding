var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tony Hao Kin Ly'}); //Add layout: false to not use template
});

router.get('/page2', function(req, res, next) {
  res.render('page2', { title: 'Tony Hao Kin Ly'}); //Add layout: false to not use template
});


router.get('/skroll', function(req, res, next) {
  res.render('skrollr', { title: 'Tony Hao Kin Ly', layout: false}); //Add layout: false to not use template
});

module.exports = router;