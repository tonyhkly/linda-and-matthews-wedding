var express = require('express');
var router = express.Router();

router.get('/prac', function(req, res, next) {
  res.render('prac', {
      title: 'Tony Hao Kin Ly',
      layout: false
  });
});

router.get('/', function(req, res, next) {
  res.render('wedding', {
      title: 'Welcome',
      //title: 'Michael And Anna - Welcome',
      //layout: 'wedding-layout'
  });
});

router.get('/getting-there', function(req, res, next) {
    res.render('map', {
            title: 'Michael And Anna - Getting There',
            layout: 'wedding-layout'
        });
});

module.exports = router;