'use strict';

function initLightboxGallery() {
    //	Add a custom filter to recognize images from lorempixel (that don't end with ".jpg" or something similar)
    $.tosrus.defaults.media.image = {
        filterAnchors: function filterAnchors($anchor) {
            return true;
        }
    };

    $('#lightboxgallery a').tosrus({
        //drag: true,
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