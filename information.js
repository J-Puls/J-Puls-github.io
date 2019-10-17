$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

        $(".hero").toggleClass("menu-active");
        $("#brand").toggleClass("menu-active");
    });
    $('.card').hover(function () {
        $(this).toggleClass('has-background-black-bis')
        $(this).toggleClass('has-background-black')
    })
});

