'use strict';

function disableRightClick() {
    $('.disable-rightclick').bind('contextmenu', function () {
        return false;
    });
}