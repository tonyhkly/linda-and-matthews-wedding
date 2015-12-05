function addPortraitClassToImg() {
    $('.thumbnail-gallery img').each(function(){
        var width = $(this).width();
        var height = $(this).height();

        console.log(`Width: ${width} Height: ${height}`);

        if (height > width) {
            $(this).addClass("portrait")
        } else {
            $(this).addClass("landscape")
        }
    });
}
