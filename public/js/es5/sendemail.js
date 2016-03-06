'use strict';

$('.rsvp-form').on('submit', function (e) {
    e.preventDefault();

    $.ajax({
        url: '/send-email',
        data: null,
        processData: false,
        type: 'POST',
        success: function success(data) {
            console.log('Email Sent!');
        }
    });
});