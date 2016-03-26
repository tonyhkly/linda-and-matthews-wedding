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

router.get('/tea-ceremony', function (req, res) {
    res.render('tea-ceremony', {
        title: 'Anna And Michael - Tea Ceremony',
        layout: 'wedding-layout',
        pageId: 'tea-ceremony'
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
    var attendingText = req.body.attendingText;
    var attending = req.body.attending;
    var foodOption = req.body.foodOption;
    var foodOptionText = foodOption != null  || foodOption != undefined ? foodOption : 'None Selected';
    var comment = req.body.comment;

    var options = {
        service: 'gmail',
        auth: {
            user: "annaandmichael8@gmail.com",
            pass: "hellokudo"
        }
    };

    var transporter = nodemailer.createTransport(smtpTransport(options));


    var senderIntroHtml = 'Thanks ' + name + '! We\'ve got your RSVP.';
    var senderAttendingHtml = '<b>Attending: </b>' + attending;
    var senderFoodOptionHtml = '<b>Food Option: </b>' + foodOptionText;
    var senderCommentHtml = comment ? '<b>Your message to them: </b>' + comment : '';

    var toSenderMailOptions = {
        from: "Anna and Michael <annaandmichael8@gmail.com>",
        to: email,
        text: "RSVP Anna & Michael's Wedding!",
        subject: "Your RSVP to Anna & Michael's wedding",
        html: "<p>" + senderIntroHtml + "</p>" +
        "<p><b>Your RSVP Details:</b></p>" +
        "<p>" + senderAttendingHtml + "</p>" +
        "<p>" + senderFoodOptionHtml + "</p>" +
        "<p>" + senderCommentHtml + "</p>" +
        "<br><p>If any of these details aren't quite right, feel free to reply to this email address.</p>"
    };

    var mannaIntroHtml = 'We\'ve just received ' + name + '\'s RSVP.';
    var mannaRsvp = '<b>RSVP Details:</b>';
    var mannaEmailHtml = email ? '<b>Email Address: </b>' + email : '';
    var mannaAttendingHtml = '<b>Attending: </b>' + attending;
    var mannaFoodOptionHtml = '<b>Food Option: </b>' + foodOptionText;
    var mannaCommentHtml = comment ? '<b>Their message to you: </b>' + comment : '';

    var toAnnaAndMichaelMailOptions = {
        from: "Anna and Michael <annaandmichael8@gmail.com>",
        to: 'annaandmichael8@gmail.com',
        subject: name + "'s RSVP",
        text: "RSVP Anna & Michael's Wedding!",
        html: "<p>Hi there Anna & Michael!</p>" +
        "<p>" + mannaIntroHtml + "</p>" +
        "<p>" + mannaRsvp + "</p>" +
        "<p>" + mannaEmailHtml + "</p>" +
        "<p>" + mannaAttendingHtml + "</p>" +
        "<p>" + mannaFoodOptionHtml + "</p>" +
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

    transporter.sendMail(toSenderMailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
        }

        transporter.close();
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