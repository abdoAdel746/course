$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    items:2,
    dots:false,
    center:true,
    slideTransition:"ease-in-out",
    smartSpeed:1000,
    responsive:{
        800:{
            items:3,
        },
        600:{
            items:2,
        },
        500:{
            items:1,
        }
    }
})