'use strict';

function initLightboxGallery() {
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