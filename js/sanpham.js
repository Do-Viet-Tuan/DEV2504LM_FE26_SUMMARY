$(document).ready(function() {
    // ===== Slick banner =====
    $('.banner-slick').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 500,
        pauseOnHover: false,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev" aria-label="previous">‹</button>',
        nextArrow: '<button type="button" class="slick-next" aria-label="next">›</button>',
        responsive: [
            { breakpoint: 992, settings: { arrows: false } }
        ]
    });

    // Product image lazy loading effect (simple fade-in)
    $('.img-product img').each(function(index) {
        $(this).delay(index * 100).animate({ opacity: 1 }, 500);
    });

});
