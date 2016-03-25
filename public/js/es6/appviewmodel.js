'use strict';

function Photo(photo) {
    var self = this;
    self.thumbnailUrl = `${thumbDirectory()}/${photo}`;
}

function TeaPhoto(photo) {
    var self = this;
    self.url = `/images/tea/${photo}`;
}

function thumbDirectory() {
    if (isMobile()) {
        return '/images/manna/mobile-thumb';
    } else {
        return '/images/manna/thumb';
    }
}

function AppViewModel() {
    this.photos = [
        new Photo("manna-1.png"),
        new Photo("manna-2.png"),
        new Photo("manna-3.jpeg"),
        new Photo("manna-4.jpeg"),
        new Photo("manna-5.jpeg"),
        new Photo("manna-6.jpeg"),
        new Photo("manna-7.jpeg"),
        new Photo("manna-8.jpeg"),
        new Photo("manna-9.jpeg"),
        new Photo("manna-10.jpeg"),
        new Photo("manna-11.jpeg"),
        new Photo("manna-12.png"),
        new Photo("manna-13.png"),
        new Photo("manna-14.jpeg"),
        new Photo("manna-15.png"),
        new Photo("manna-16.jpeg")
    ];

    this.teaPhotos = [
        new TeaPhoto("tea-1.JPG"),
        new TeaPhoto("tea-2.JPG"),
        new TeaPhoto("tea-3.JPG"),
        new TeaPhoto("tea-4.JPG"),
        new TeaPhoto("tea-5.JPG"),
        new TeaPhoto("tea-6.JPG"),
        new TeaPhoto("tea-7.JPG"),
        new TeaPhoto("tea-8.JPG")
    ];

    shuffle(this.photos);

    this.deviceClasses = addDeviceClasses();
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

ko.applyBindings(new AppViewModel());