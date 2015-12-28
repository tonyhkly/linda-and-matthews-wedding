var express = require('express');
var router = express.Router();

router.get('/wedding-parallax', function(req, res) {
  res.render('wedding-parallax', {
      title: 'Tony Hao Kin Ly',
      layout: false
  });
});

router.get('/', function(req, res) {
  res.render('wedding', {
      title: 'Michael And Anna - Welcome',
      layout: 'wedding-layout',
      pageId: 'home-page'
  });
});

router.get('/the-venue', function(req, res) {
    res.render('map', {
            title: 'Michael And Anna - The Venue',
            layout: 'wedding-layout',
            pageId: 'map-page'
    });
});

router.get('/contact-us', function(req, res) {
    res.render('contact-us', {
        title: 'Michael And Anna - Contact Us',
        layout: 'wedding-layout',
        pageId: 'contact-us'
    });
});


module.exports = router;