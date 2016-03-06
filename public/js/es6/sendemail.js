$('.rsvp-form').on('submit', function(e) {
    e.preventDefault();

    $.ajax({
       url: '/send-email',
        data: null,
        processData: false,
        type: 'POST',
        success: function (data) {
            console.log('Email Sent!');
        }
    });
});