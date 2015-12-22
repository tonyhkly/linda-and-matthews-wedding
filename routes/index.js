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
      title: 'Michael And Anna - Welcome',
      layout: 'wedding-layout',
      pageId: 'home-page'
  });
});

router.get('/getting-there', function(req, res, next) {
    res.render('map', {
            title: 'Michael And Anna - Getting There',
            layout: 'wedding-layout',
            pageId: 'map-page'
    });
});

module.exports = router;