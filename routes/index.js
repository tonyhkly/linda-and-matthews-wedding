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
      title: 'Anna And Michael - Welcome',
      layout: 'wedding-layout',
      pageId: 'home-page'
  });
});

router.get('/the-venue', function(req, res) {
    res.render('map', {
            title: 'Anna And Michael - The Venue',
            layout: 'wedding-layout',
            pageId: 'map-page'
    });
});

router.get('/contact-us', function(req, res) {
    res.render('contact-us', {
        title: 'Anna And Michael - Contact Us',
        layout: 'wedding-layout',
        pageId: 'contact-us'
    });
});

router.get('/cdc', function(req, res) {
    res.render('cdc', {
        title: 'CDC',
        layout: 'wedding-layout',
        pageId: 'contact-us'
    });
});

router.get('/arch', function(req, res) {
    res.render('arch', {
        title: 'Arch',
        layout: 'wedding-layout',
        pageId: 'arch'
    });
});

router.get('/fed', function(req, res) {
    res.render('fed', {
        title: 'fed',
        layout: 'wedding-layout',
        pageId: 'fed'
    });
});

module.exports = router;