function initCustomValidators() {
    $().validator({
        custom: {
            'rsvp-checked': function($el) {
                if (!$('#attending').is(':checked') && !$('#not-attending').is(':checked')) {
                    return true;
                }
            },
            'rsvp-type-checked': function($el) {
                if (!$('#proper-guest').is(':checked') && !$('#evening-guest').is(':checked')) {
                    return true;
                }
            }
        }
    });
}
