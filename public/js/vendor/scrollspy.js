// Cache selectors
var lastId,
    topMenu = $("#scrollspy-menu"),
// All list items
    menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
    var href = $(this).attr("href");
    var offsetTop = href === "#" ? 0 : $(href).offset().top + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 600);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + 420; //increase number to make scroll spy activate sooner

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class

        $('#scrollspy-menu')
            .removeClass('our-story-active')
            .removeClass('proposal-active')
            .removeClass('gallery-section-active')
            .removeClass('venue-details-active')
            .removeClass('-active')
            .addClass(id + '-active');

        menuItems
            .parent().removeClass("active")
            .end().filter("[href=#" + id + "]").parent().addClass("active");
    }
});