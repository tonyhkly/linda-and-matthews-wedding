'use strict';

function Photo(photo) {
    var self = this;
    self.thumbnailUrl = `${thumbDirectory()}/${photo}.png`;
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
        new Photo("manna-1"),
        new Photo("manna-2"),
        new Photo("manna-3"),
        new Photo("manna-4"),
        new Photo("manna-5"),
        new Photo("manna-6"),
        new Photo("manna-7"),
        new Photo("manna-8"),
        new Photo("manna-9"),
        new Photo("manna-10"),
        new Photo("manna-11"),
        new Photo("manna-12"),
        new Photo("manna-13"),
        new Photo("manna-14"),
        new Photo("manna-15"),
        new Photo("manna-16")
    ];

    this.deviceClasses = addDeviceClasses();
}

ko.applyBindings(new AppViewModel());