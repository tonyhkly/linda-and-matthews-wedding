"use strict";

function initMap() {
    var latLong = {
        lat: 51.265128,
        lng: -0.429342
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        center: latLong,
        zoom: 15
    });

    var contentString = '<div id="info-window">' + '<h4>De Vere Horsley Estate</h4>' + '<a href="https://goo.gl/maps/YHvbFPW7f9Q2" target="_blank">' + '<img class="img-responsive" src="/images/map-info-box.jpeg">' + '</a>' + '<ul class="action-list">' + '<li><a href="https://www.google.co.uk/maps/dir//De+Vere+Horsley+Estate,+Leatherhead/@51.2649807,-0.4994336,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4875de83cebfa7d7:0x5c67ac743333475b!2m2!1d-0.429394!2d51.2650016" target="_blank">Get directions</a></li>' + '<li><a href="https://www.google.co.uk/maps/place/De+Vere+Horsley+Estate/@51.2650016,-0.429394,15z/data=!4m5!3m4!1s0x0:0x5c67ac743333475b!8m2!3d51.2650016!4d-0.429394" target="_blank">See on Google maps</a></li>' + '</ul>' + '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 180
    });

    var marker = new google.maps.Marker({
        position: latLong,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Linda & Matthew\'s Wedding venue!'
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}