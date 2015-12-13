function initLightboxGallery() {
    var iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
    if(iOS){
        $('.hero').css('min-height', '0');
    }

    $.tosrus.defaults.media.image = {
        filterAnchors: function ($anchor) {
            return true;
        }
    };

    $('#lightboxgallery a').tosrus({
        drag: true,
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
