var express = require('express');
var router = express.Router();

/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tony Hao Kin Ly'});
});
*/

router.get('/prac', function(req, res, next) {
  res.render('prac', { title: 'Tony Hao Kin Ly', layout: false});
});

router.get('/', function(req, res, next) {
  res.render('wedding', {
      title: 'Tony Hao Kin Ly',
      layout: 'wedding-layout'
  });
});

router.get('/getting-there', function(req, res, next) {
    res.render('map', { title: 'Getting There', layout: 'wedding-layout'});
});

module.exports = router;