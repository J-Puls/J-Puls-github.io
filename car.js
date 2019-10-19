$(document).ready(function () {

    function resizeElements(x) {
        if (x.matches) { // If media query matches
            $('.select').addClass('is-large')
        } else {
            $('.select').removeClass('is-large')
        }
    }

    var x = window.matchMedia("(min-width: 1024px)")
    resizeElements(x) // Call listener function at run time
    x.addListener(resizeElements) // Attach listener function on state changes

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

        $(".hero").toggleClass("menu-active");
        $("#brand").toggleClass("menu-active");
        $('#profile').toggleClass("menu-active");
    });




});
let dropdowns = $('.dropdown');

dropdowns.on('click', function () {
    var clicked = $('.dropdown-ul', this)
    for (var i = 0; i < dropdowns.length; i++) {
        if (!$('.dropdown-ul', dropdowns[i]).is(':hidden')) {
            $('.dropdown-ul', dropdowns[i]).hide(220);
        }
    }
    if (clicked.is(':hidden')) {
        clicked.slideDown(200, "linear");
    }
});
