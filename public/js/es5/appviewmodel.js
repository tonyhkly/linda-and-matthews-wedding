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

function createRsvpTable() {
    var table = document.getElementsByTagName('tbody')[0];
    var tableIndex = 1;

    firebase.database().ref('rsvp').on("value", function (snapshot) {
        snapshot.forEach(function (child) {
            var tr = document.createElement('tr');

            var numTd = document.createElement('td');
            var nameTd = document.createElement('td');
            // var emailTd = document.createElement('td');
            var attendingTd = document.createElement('td');
            var foodOptionTd = document.createElement('td');
            var guestTypeTd = document.createElement('td');
            // var hotelOptionTd = document.createElement('td');
            var createDateTd = document.createElement('td');
            var commentTd = document.createElement('td');

            numTd.innerText = tableIndex++;
            nameTd.innerText = child.val().name;
            // emailTd.innerText = child.val().email;
            attendingTd.innerText = child.val().attending;
            foodOptionTd.innerText = child.val().foodOption;
            guestTypeTd.innerText = child.val().guestType;
            // hotelOptionTd.innerText = child.val().hotelOption;
            createDateTd.innerText = new Date(child.val().createDate).toLocaleString();
            commentTd.innerText = child.val().comment;

            tr.appendChild(numTd);
            tr.appendChild(nameTd);
            // tr.appendChild(emailTd);
            tr.appendChild(attendingTd);
            tr.appendChild(foodOptionTd);
            tr.appendChild(guestTypeTd);
            // tr.appendChild(hotelOptionTd);
            tr.appendChild(createDateTd);
            tr.appendChild(commentTd);

            table.appendChild(tr);
        });
    });
}

function AppViewModel() {
    this.photos = [new Photo("manna-1.jpeg"), new Photo("manna-3.jpeg"), new Photo("manna-2.jpeg"), new Photo("manna-4.jpeg")];

    if (document.getElementsByClassName("rsvp-list").length !== 0) {
        createRsvpTable();
    }

    this.deviceClasses = addDeviceClasses();
}

ko.applyBindings(new AppViewModel());