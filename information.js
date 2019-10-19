$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        if ($('.navbar-end').is(':hidden')) {
            $('.navbar-end').slideDown(200);
        } else {
            $('.navbar-end').hide(200);
            $('.navbar-end').fadeOut(200);
        }

    });
    $('.card-footer-item').hover(function () {
        $(this).toggleClass('has-background-black')
    })
});

function resizeElements(x) {
    if (x.matches) { // If media query matches
        $('.select').addClass('is-large')
        $('.navbar-end').show();
    } else {
        $('.select').removeClass('is-large')
    }
}

var x = window.matchMedia("(min-width: 1024px)")
resizeElements(x) // Call listener function at run time
x.addListener(resizeElements) // Attach listener function on state changes
