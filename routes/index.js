var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

router.get('/', function (req, res) {
    res.render('wedding', {
        title: 'Anna And Michael - Welcome',
        layout: 'wedding-layout',
        pageId: 'home-page'
    });
});

router.get('/the-venue', function (req, res) {
    res.render('map', {
        title: 'Anna And Michael - The Venue',
        layout: 'wedding-layout',
        pageId: 'map-page'
    });
});

router.get('/rsvp', function (req, res) {
    res.render('rsvp', {
        title: 'Anna And Michael - RSVP',
        layout: 'wedding-layout',
        pageId: 'rsvp'
    });
});

router.post('/send-email', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var attending = req.body.attending;

    var options = {
        service: 'gmail',
        auth: {
            user: "annaandmichael8@gmail.com",
            pass: "hellokudo"
        }
    };

    var transporter = nodemailer.createTransport(smtpTransport(options));

    // setup e-mail data with unicode symbols
    var toSenderMailOptions = {
        from: "Anna and Michael <annaandmichael8@gmail.com>",
        to: email,
        subject: name + "'s RSVP",
        text: "RSVP Anna & Michael's Wedding!", //DOnt know what this is
        html: "<p>Thanks " + name + "</p>" +
        "<p>We've got your rsvp" + attending + "</p>" +
        "<p><b>Your message to them:</b> " + req.body.comment + "</p>"
    };


    // setup e-mail data with unicode symbols
    var toAnnaAndMichaelMailOptions = {
        from: "Anna and Michael <annaandmichael8@gmail.com>",
        to: 'annaandmichael8@gmail.com',
        subject: name + "'s RSVP",
        text: "RSVP Anna & Michael's Wedding!",
        html: "<p>Hi there Anna & Michael!</p>" +
        "<p>We've just received " + name + "'s RSVP. " + attending + "</p>" +
        "<p><b>Their message to you:</b> " + req.body.comment + "</p>"
    };


    transporter.sendMail(toAnnaAndMichaelMailOptions, function (error, response) {
        if (error) {
            console.log(error);
            res.sendStatus(500)
        } else {
            console.log("Message sent: " + response.message);
            res.sendStatus(200);
        }

        // if you don't want to use this transport object anymore, uncomment following line
        transporter.close(); // shut down the connection pool, no more messages
    });

    // send mail with defined transport object
    transporter.sendMail(toSenderMailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
        }

        // if you don't want to use this transport object anymore, uncomment following line
        transporter.close(); // shut down the connection pool, no more messages
    });
});

router.get('/contact-us', function (req, res) {
    res.render('contact-us', {
        title: 'Anna And Michael - Contact Us',
        layout: 'wedding-layout',
        pageId: 'contact-us'
    });
});

module.exports = router;