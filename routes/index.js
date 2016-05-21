var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

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

router.post('/send-email', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var attending = req.body.attending;
    var guestType = req.body.guestType;
    var foodOption = req.body.foodOption;
    var foodOptionIsPresent = foodOption != null || foodOption != undefined;
    var foodOptionText = foodOptionIsPresent ? foodOption : 'None Selected';
    var comment = req.body.comment;

    var options = {
        service: 'outlook',
        auth: {
            user: "annaandmichael8@outlook.com",
            pass: "Pinguforce8"
        }
    };

    var transporter = nodemailer.createTransport(smtpTransport(options));

    var attendingHtml = '<b>Attending: </b>' + attending;
    var guestTypeHtml = '<b>Guest: </b>' + guestType;
    var foodOptionHtml = foodOptionIsPresent ? '<b>Food Option: </b>' + foodOptionText : '';

    var mannaIntroHtml = 'We\'ve just received ' + name + '\'s RSVP.';
    var mannaRsvp = '<b>RSVP Details:</b>';
    var mannaCommentHtml = comment ? '<b>Their message to you: </b>' + comment : '';
    var mannaEmailHtml = email ? '<b>Email Address: </b>' + email : '';

    var toAnnaAndMichaelMailOptions = {
        from: "Anna and Michael <annaandmichael8@outlook.com>",
        to: 'annaandmichael8@outlook.com',
        subject: name + "'s RSVP",
        text: "RSVP Anna & Michael's Wedding!",
        html: "<p>Hi there Anna & Michael!</p>" +
        "<p>" + mannaIntroHtml + "</p>" +
        "<p>" + mannaRsvp + "</p>" +
        "<p>" + mannaEmailHtml + "</p>" +
        "<p>" + attendingHtml + "</p>" +
        "<p>" + guestTypeHtml + "</p>" +
        "<p>" + foodOptionHtml + "</p>" +
        "<p>" + mannaCommentHtml + "</p>"
    };

    transporter.sendMail(toAnnaAndMichaelMailOptions, function (error, response) {
        if (error) {
            console.log(error);
            res.sendStatus(500)
        } else {
            console.log("Message sent: " + response.message);
            res.sendStatus(200);
        }

        transporter.close();
    });
});

module.exports = router;