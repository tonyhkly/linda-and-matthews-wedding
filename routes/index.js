var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

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

router.get('/rsvp', function(req, res) {
    res.render('rsvp', {
        title: 'Anna And Michael - RSVP',
        layout: 'wedding-layout',
        pageId: 'rsvp'
    });
});

router.post('/send-email', function(req, res) {
    var options = {
        service: 'gmail',
        auth: {
            user: "tonyhkly@gmail.com",
            pass: "haokin88"
        }
    };

    var transporter = nodemailer.createTransport(smtpTransport(options));

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: "Tony Ly ✔ <tonyhkly@gmail.com>",
        to: "tonyhkly@gmail.com",
        subject: "Hello again ✔",
        text: "Hello world, Again ✔",
        html: "<b>Hello world ✔</b>"
    };


// send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.sendStatus(500)
        }else{
            console.log("Message sent: " + response.message);
            res.sendStatus(200);
        }

        // if you don't want to use this transport object anymore, uncomment following line
        transporter.close(); // shut down the connection pool, no more messages
    });
});

router.get('/contact-us', function(req, res) {
    res.render('contact-us', {
        title: 'Anna And Michael - Contact Us',
        layout: 'wedding-layout',
        pageId: 'contact-us'
    });
});

module.exports = router;