'use strict';

function initCustomValidators() {
    $().validator({
        custom: {
            'rsvp-checked': function rsvpChecked($el) {
                if (!$('#attending').is(':checked') && !$('#not-attending').is(':checked')) {
                    return true;
                }
            }
        }
    });
}