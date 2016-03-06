'use strict';

$('.rsvp-form').validator().on('submit', function (e) {
    if (e.isDefaultPrevented()) {
        console.log('An error occurred');
    } else {
        e.preventDefault();
        var data = getFormData();

        console.log("Name: " + data.name);
        console.log("Email: " + data.email);

        $.ajax({
            url: '/send-email',
            data: data,
            type: 'POST',
            success: function success(data) {
                console.log('RSVP Sent!' + data);
                $('.email-sent').addClass('display-block');
                $('.rsvp-form').addClass('display-none');
            }
        });
    }
});

function getFormData() {
    var name = $('.rsvp #name').val();
    var email = $('.rsvp #email').val();
    var comment = $('.rsvp #comment').val();
    var attending;

    if ($('#attending').is(':checked')) {
        attending = 'They will be attending!';
    } else if ($('#not-attending').is(':checked')) {
        attending = 'They will not be attending. Because they\'re gay';
    }

    return {
        name: name,
        email: email,
        comment: comment,
        attending: attending
    };
}