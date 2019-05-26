$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    items:1
});

$(document).on('click', 'a.anchor', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 77
    }, 500);
});