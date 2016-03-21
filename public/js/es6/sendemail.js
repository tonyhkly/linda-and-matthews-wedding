$('.rsvp-form').validator().on('submit', function (e) {
    if (e.isDefaultPrevented()) {
        console.log('An error occurred');
    } else {
        e.preventDefault();
        $('.overlay').addClass('overlay-show');

        var data = getFormData();

        $.ajax({
            url: '/send-email',
            data: data,
            //data: {dto: JSON.stringify(data)},
            type: 'POST',
            success: function (data) {
                console.log('RSVP Sent!' + data);
                $('.overlay').removeClass('overlay-show');
                $('.email-sent').addClass('display-block');
                $('.rsvp-form').addClass('display-none');
                animatedScroll(0);
            }
        });

    }
});

function getFormData() {
    var name = $('.rsvp #name').val();
    var email = $('.rsvp #email').val();
    var comment = $('.rsvp #comment').val();
    var attending;
    var foodOption;

    if ($('#attending').is(':checked')) {
        attending = 'They will be attending!';
    } else if($('#not-attending').is(':checked')) {
        attending = 'They will not be attending. Because they\'re gay';
    }

    if ($('#chicken').is(':checked')) {
        foodOption = 'chicken';
    } else if($('#fish').is(':checked')) {
        foodOption = 'fish';
    }

    var toSenderMailOptions = {
        from: "Anna and Michael <annaandmichael8@gmail.com>",
        to: email,
        subject: "We've received your RSVP",
        text: "RSVP Anna & Michael's Wedding!",
        html: "<p>Thanks " + name + "</p>" +
        "<p>We've got your rsvp" + attending + "</p>" +
        "<p><b>Your message to them:</b> " + comment + "</p>"
    };


    var toAnnaAndMichaelMailOptions = {
        from: "Anna and Michael <annaandmichael8@gmail.com>",
        to: 'annaandmichael8@gmail.com',
        subject: name + "'s RSVP",
        text: "RSVP Anna & Michael's Wedding!",
        html: "<p>Hi there Anna & Michael!</p>" +
        "<p>We've just received " + name + "'s RSVP. " + attending + "</p>" +
        "<p><b>Their message to you:</b> " + comment + "</p>"
    };

    return {
        name: name,
        email: email,
        comment: comment,
        attending: attending,
        foodOption: foodOption,
        toSenderMailOptions: toSenderMailOptions,
        toAnnaAndMichaelMailOptions: toAnnaAndMichaelMailOptions
    };
}