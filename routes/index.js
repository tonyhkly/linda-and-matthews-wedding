var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('wedding', {
        title: 'Linda and Matthew\'s Wedding - Welcome',
        layout: 'wedding-layout',
        pageId: 'home-page'
    });
});

router.get('/the-venue', function (req, res) {
    res.render('map', {
        title: 'Linda and Matthew\'s Wedding - The Venue',
        layout: 'wedding-layout',
        pageId: 'map-page'
    });
});

router.get('/wedding-details', function (req, res) {
    res.render('wedding-day-details', {
        title: 'Linda and Matthew\'s Wedding - Wedding Day Details',
        layout: 'wedding-layout',
        pageId: 'map-page'
    });
});

router.get('/tea-ceremony', function (req, res) {
    res.render('tea-ceremony', {
        title: 'Linda and Matthew\'s Wedding - Tea Ceremony',
        layout: 'wedding-layout',
        pageId: 'tea-ceremony'
    });
});

router.get('/rsvp', function (req, res) {
    res.render('rsvp', {
        title: 'Linda and Matthew\'s Wedding - RSVP',
        layout: 'wedding-layout',
        pageId: 'rsvp'
    });
});

module.exports = router;