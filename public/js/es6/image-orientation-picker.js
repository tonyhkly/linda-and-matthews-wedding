function addPortraitClassToImg() {
    $('.thumbnail-gallery img').each(function(){
        var width = $(this).width();
        var height = $(this).height();

        if (height > width) {
            $(this).addClass("portrait")
        }
    });
}
