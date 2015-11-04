"use strict";

function initMap() {
    var latLong = {lat: 51.44244339999999, lng: -0.2944414};

    var map = new google.maps.Map(document.getElementById('map'), {
        center: latLong,
        zoom: 14
    });

    var marker = new google.maps.Marker({
        position: latLong,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Michael & Anna\'s Wedding venue!'
    });
}

(function () {
    //function initMap() {
    //    var latLong = {lat: 51.44244339999999, lng: -0.2944414};
    //
    //    var map = new google.maps.Map(document.getElementById('map'), {
    //        center: latLong,
    //        zoom: 14
    //    });
    //
    //    var marker = new google.maps.Marker({
    //        position: latLong,
    //        map: map,
    //        animation: google.maps.Animation.DROP,
    //        title: 'Michael & Anna\'s Wedding venue'
    //    });
    //}
})();