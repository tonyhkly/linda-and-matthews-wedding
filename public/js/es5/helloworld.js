'use strict';

var name = 'Hello';
var surname = 'TonyLy';

document.addEventListener("DOMContentLoaded", function () {
    console.log(name);
    var button = document.getElementById('button');

    button.addEventListener('click', function (event) {
        event.preventDefault();
        alert('What up???');
    });
});