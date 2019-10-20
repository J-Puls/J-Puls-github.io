$(document).ready(function () {

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
        clicked.slideDown(200);
    }
});


var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'align': [] }],
    ['link', 'image']                                         // remove formatting button
];

var quill = new Quill('#editor', {
    modules: {
        toolbar: toolbarOptions
    },
    placeholder: 'Create new content...',
    theme: 'snow'
});
