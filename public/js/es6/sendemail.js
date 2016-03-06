$('.rsvp-form').validator().on('submit', function (e) {
    if (e.isDefaultPrevented()) {
        console.log('An error occurred');
    } else {
        e.preventDefault();
        var data = getFormData();

        console.log("Name: " + data.name);
        console.log("Email: "+data.email);

        $.ajax({
            url: '/send-email',
            data: data,
            type: 'POST',
            success: function (data) {
                console.log('Email Sent!' + data);
            }
        });
    }
});

function getFormData() {
    var name = $('.rsvp #name').val();
    var email = $('.rsvp #email').val();
    var comment = $('.rsvp #comment').val();
    var attending;

    if ($('#attending').checked == true) {
        attending = 'they will be attending';
    } else if($('#not-attending').checked == true) {
        attending = 'they will not be attending';
    }

    return {
        name: name,
        email: email,
        comment: comment,
        attending: attending
    };
}