$('#backtotop').click(function (e) {
    e.preventDefault();
    animatedScroll(0);
});

function animatedScroll(scrollTop) {
    $('html, body').stop().animate({
        scrollTop: scrollTop
    }, 700);
}

$('.hero-angle-down').click(function (e) {
    e.preventDefault();
    var href = $('.hero-angle-down').attr('href');
    animatedScroll($(href).offset().top);
});