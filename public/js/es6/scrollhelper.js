$('#backtotop').click(function (e) {
    e.preventDefault();
    animatedScroll(0);
});

function animatedScroll(scrollTop) {
    $('html, body').stop().animate({
        scrollTop: scrollTop
    }, 700);
}

$('.taxi-button').click(function (e) {
    e.preventDefault();
    var href = $('.taxi-button').attr('href');
    animatedScroll($(href).offset().top);
});