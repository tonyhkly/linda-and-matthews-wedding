$('.rsvp-form').on('submit', function(e) {
    e.preventDefault();

    var name = $('.rsvp #name').val();
    var email = $('.rsvp #email').val();
    console.log('sdsdsd' + name + email);

    var data = {
        name: name,
        email: email
    };

    $.ajax({
        url: `/send-email?name=${name}&email=${email}`,
        data: data,
        processData: false,
        type: 'POST',
        success: function (data) {
            console.log('Email Sent!' + data);
        }
    });
});