'use strict';

function Photo(photo) {
    var self = this;
    self.thumbnailUrl = photoDirectory() + '/' + photo;
}

function photoDirectory() {
    if (isMobile()) {
        return '/images/manna/mobile-thumb';
    } else {
        return '/images/manna/thumb';
    }
}

function AppViewModel() {
    this.photos = [new Photo("manna-1.jpeg"), new Photo("manna-3.jpeg"), new Photo("manna-2.jpeg"), new Photo("manna-4.jpeg")];

    // shuffle(this.photos);

    this.deviceClasses = addDeviceClasses();
}

ko.applyBindings(new AppViewModel());