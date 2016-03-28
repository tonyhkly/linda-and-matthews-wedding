'use strict';

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
            success: function success(data) {
                //console.log('RSVP Sent!' + data);
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
    var attendingText;
    var attending;
    var foodOption;

    if ($('#attending').is(':checked')) {
        attending = 'Yes';
        attendingText = 'They will be attending!';
    } else if ($('#not-attending').is(':checked')) {
        attending = 'No';
        attendingText = 'They will not be attending. Because they\'re gay';
    }

    if ($('#chicken').is(':checked')) {
        foodOption = 'Chicken';
    } else if ($('#fish').is(':checked')) {
        foodOption = 'Fish';
    }

    var toSenderMailOptions;
    var toAnnaAndMichaelMailOptions;

    return {
        name: name,
        email: email,
        comment: comment,
        attending: attending,
        attendingText: attendingText,
        foodOption: foodOption,
        toSenderMailOptions: toSenderMailOptions,
        toAnnaAndMichaelMailOptions: toAnnaAndMichaelMailOptions
    };
}