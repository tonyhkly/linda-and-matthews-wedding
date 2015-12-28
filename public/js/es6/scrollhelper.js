$('#backtotop').click(function () {
    animatedScroll(0);
});

function animatedScroll(scrollTop) {
    $('html, body').stop().animate({
        scrollTop: scrollTop
    }, 800);
}