function initLightboxGallery() {
    //	Add a custom filter to recognize images from lorempixel (that don't end with ".jpg" or something similar)
    $.tosrus.defaults.media.image = {
        filterAnchors: function ($anchor) {
            return true;
        }
    };

    $('#lightboxgallery a').tosrus({
        buttons: 'inline',
        pagination: {
            add: true,
            type: 'thumbnails'
        }
    });
}
