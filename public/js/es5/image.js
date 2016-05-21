'use strict';

function disableRightClick() {
    $('.disable-rightclick').bind('contextmenu', function () {
        return false;
    });

    $('#print').on('click', function () {
        window.print();
    });
}