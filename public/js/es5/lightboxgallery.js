'use strict';

function initLightboxGallery() {
    var iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
    if (iOS) {
        $('body').addClass('ios');
    }

    $.tosrus.defaults.media.image = {
        filterAnchors: function filterAnchors($anchor) {
            return true;
        }
    };

    $('#lightboxgallery a').tosrus({
        infinite: true,
        pagination: {
            add: true
        },
        keys: {
            prev: true,
            next: true,
            close: true
        },
        wrapper: {
            onClick: 'close'
        }
    });
}