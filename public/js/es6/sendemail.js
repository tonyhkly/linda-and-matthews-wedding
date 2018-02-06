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
    var email = $('.rsvp #email').val();
    var comment = $('.rsvp #comment').val();
    var attending;
    var guestType;
    var foodOption;
    var hotelOption = 'Not provided';

    if ($('#proper-guest').is(':checked')) {
        guestType = 'Ceremony and Reception Guest';
        dataLayer.push({ 'guestType': 'reception' });
    } else if ($('#evening-guest').is(':checked')) {
        guestType = 'Evening Guest';
        dataLayer.push({ 'guestType': 'evening' });
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

    if ($('#yes-hotel').is(':checked')) {
        hotelOption = 'Yes';
    } else if ($('#no-hotel').is(':checked')) {
        hotelOption = 'No';
    }

    var foodOptionIsPresent = foodOption != null || foodOption != undefined;
    var foodOptionText = foodOptionIsPresent ? foodOption : 'None Selected';

    var randomInt = Math.floor(Math.random() * (50000 - 10000 + 1)) + 1000;

    firebase.database().ref(`rsvp/${new Date().getTime()}-${randomInt.toString()}`).set({
        name: name,
        email: email,
        attending: attending,
        guestType: guestType,
        comment: comment,
        foodOption: foodOptionText,
        hotelOption: hotelOption,
        createDate: new Date().toISOString()
    });
}