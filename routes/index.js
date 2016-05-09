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

/*
    var senderIntroHtml = 'Thanks ' + name + '! We\'ve got your RSVP.';
    var senderCommentHtml = comment ? '<b>Your message to them: </b>' + comment : '';

    var toSenderMailOptions = {
        from: "Anna and Michael <annaandmichael8@outlook.com>",
        to: email,
        text: "RSVP Anna & Michael's Wedding!",
        subject: "Your RSVP to Anna & Michael's wedding",
        html: "<p>" + senderIntroHtml + "</p>" +
        "<p><b>Your RSVP Details:</b></p>" +
        "<p>" + guestTypeHtml + "</p>" +
        "<p>" + attendingHtml + "</p>" +
        "<p>" + senderCommentHtml + "</p>" +
        "<p>" + foodOptionHtml + "</p>" +
        "<br><p><b>What Now?</b></p>" +
        "<p>You can go back to the website to have a look at the venue by heading to this <a href='http://www.annaandmichael.co.uk/the-venue'>link</a></p>" +
        "<p>Or you can have a look at some photos from <a href='http://www.annaandmichael.co.uk/tea-ceremony'>Anna and Michael's Tea Ceremony</a></p>" +
        "<br><p>If any of these details aren't quite right, feel free to send a reply to this email address.</p>"
    };
*/

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

/*    transporter.sendMail(toSenderMailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
        }

        transporter.close();
    });*/
});

module.exports = router;