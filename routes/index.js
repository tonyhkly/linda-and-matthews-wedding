var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('wedding', {
        title: 'Anna and Michael\'s Wedding - Welcome',
        layout: 'wedding-layout',
        pageId: 'home-page'
    });
});

router.get('/the-venue', function (req, res) {
    res.render('map', {
        title: 'Anna and Michael\'s Wedding - The Venue',
        layout: 'wedding-layout',
        pageId: 'map-page'
    });
});

router.get('/wedding-details', function (req, res) {
    res.render('wedding-day-details', {
        title: 'Anna and Michael\'s Wedding - Wedding Day Details',
        layout: 'wedding-layout',
        pageId: 'map-page'
    });
});

router.get('/itinerary', function (req, res) {
    res.render('itinerary', {
        title: 'Anna and Michael\'s Wedding - Itinerary',
        layout: 'wedding-layout',
        pageId: 'map-page'
    });
});

router.get('/tea-ceremony', function (req, res) {
    res.render('tea-ceremony', {
        title: 'Anna and Michael\'s Wedding - Tea Ceremony',
        layout: 'wedding-layout',
        pageId: 'tea-ceremony'
    });
});

router.get('/rsvp', function (req, res) {
    res.render('rsvp', {
        title: 'Anna and Michael\'s Wedding - RSVP',
        layout: 'wedding-layout',
        pageId: 'rsvp'
    });
});

module.exports = router;