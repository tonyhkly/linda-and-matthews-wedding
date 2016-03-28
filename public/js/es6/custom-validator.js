function initCustomValidators() {
    $().validator({
        custom: {
            'rsvp-checked': function($el) {
                if (!$('#attending').is(':checked') && !$('#not-attending').is(':checked')) {
                    return true;
                }
            }
        }
    });
}
