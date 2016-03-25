'use strict';

function disableRightClickOnThumbnail() {
    $('.thumbnail-img').bind('contextmenu', function () {
        return false;
    });
}

function disableRightClickOnTeaPhoto() {
    $('.tea-gallery img').bind('contextmenu', function () {
        return false;
    });
}