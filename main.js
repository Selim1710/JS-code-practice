////////////////////////     button-1        ////////////////////////\
$(document).ready(function () {
$('.navbar-light .dmenu').hover(function () {
        $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
    }, function () {
        $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
    });
});


// arrar short()
let elements = ['bananna', 'apple', 'cat', 'mouse', 'cannon'];
elements.sort();
document.getElementById('array-2').innerHTML = elements;

// JavaScript Math

let value = 5.5;

document.getElementById('round_vlaue').innerHTML = Math.round(value);
document.getElementById('floor_vlaue').innerHTML = Math.floor(value);
document.getElementById('ceil_value').innerHTML = Math.ceil(value);


////////////////////////     button-1        ////////////////////////