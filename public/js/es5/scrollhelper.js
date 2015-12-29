'use strict';

$('#backtotop').click(function (e) {
    e.preventDefault();
    animatedScroll(0);
});

function animatedScroll(scrollTop) {
    $('html, body').stop().animate({
        scrollTop: scrollTop
    }, 800);
}