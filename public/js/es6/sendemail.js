'use strict';

$('.rsvp-form').validator().on('submit', function (e) {
    if (e.isDefaultPrevented()) {
        console.log('An error occurred');
    } else {
        e.preventDefault();

        saveData();

        $('.overlay').removeClass('overlay-show');
        $('.rsvp-form').addClass('hide');
        $('.email-sent').fadeIn();
        animatedScroll(0);
    }
});

$("input[name='guestTypeOptions']").change(function () {
    if ($('#proper-guest').is(':checked')) {
        $('.food-group').fadeIn();
    } else if ($('#evening-guest').is(':checked')) {
        $('.food-group').fadeOut();
    }
});

function saveData() {
    var name = $('.rsvp #name').val();
    var comment = $('.rsvp #comment').val();
    var attending;
    var guestType;
    var foodOption = 'None Selected';
    // var hotelOption = 'Not provided';

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

    if ($('#meat').is(':checked')) {
        foodOption = 'Meat';
    } else if ($('#vege').is(':checked')) {
        foodOption = 'Vegetarian';
    }

    /*    if ($('#yes-hotel').is(':checked')) {
            hotelOption = 'Yes';
        } else if ($('#no-hotel').is(':checked')) {
            hotelOption = 'No';
        }*/

    var attendingText = '';
    if (attending == 'Yes') {
        attendingText = 'Attending';
    } else if (attending == 'No') {
        attendingText = 'Not Attending';
    }

    dataLayer.push({ 'guestType': guestType });
    dataLayer.push({ 'attending': attendingText });
    dataLayer.push({ 'foodOption': foodOption });

    var randomInt = Math.floor(Math.random() * (50000 - 10000 + 1)) + 1000;

    firebase.database().ref(`rsvp/${new Date().getTime()}-${randomInt.toString()}`).set({
        name: name,
        attending: attending,
        guestType: guestType,
        comment: comment,
        foodOption: foodOption,
        // hotelOption: hotelOption,
        createDate: new Date().toISOString()
    });
}