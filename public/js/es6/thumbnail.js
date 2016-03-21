function disableRightClickOnThumbnail() {
    $('.thumbnail-img').bind('contextmenu', function(e) {
        return false;
    });
}