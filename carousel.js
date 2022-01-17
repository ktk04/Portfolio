$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoWidth:true,
    autoplay:true,
    slideTransition: 'linear',
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    autoplaySpeed: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})