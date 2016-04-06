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
                console.log('RSVP Sent!' + data);
                $('.overlay').removeClass('overlay-show');
                $('.rsvp-form').addClass('hide');
                $('.email-sent').removeClass('hide');
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
    var guestType;
    var foodOption;

    if ($('#proper-guest').is(':checked')) {
        guestType = 'Ceremony and Reception Guest';
    } else if ($('#evening-guest').is(':checked')) {
        guestType = 'Evening Guest';
    }

    if ($('#attending').is(':checked')) {
        attending = 'Yes';
    } else if ($('#not-attending').is(':checked')) {
        attending = 'No';
    }

    if ($('#chicken').is(':checked')) {
        foodOption = 'Chicken';
    } else if ($('#fish').is(':checked')) {
        foodOption = 'Fish';
    }

    var toSenderMailOptions;
    var toAnnaAndMichaelMailOptions;

    return {
        guestType: guestType,
        name: name,
        email: email,
        comment: comment,
        attending: attending,
        foodOption: foodOption,
        toSenderMailOptions: toSenderMailOptions,
        toAnnaAndMichaelMailOptions: toAnnaAndMichaelMailOptions
    };
}