$(function() {


    const counterUp = window.counterUp.default

    const callback = entries => {
        entries.forEach( entry => {
            const el = entry.target
            if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
                counterUp( el, {
                    duration: 2000,
                    delay: 16,
                } )
                el.classList.add( 'is-visible' )
            }
        } )
    }
    
    const IO = new IntersectionObserver( callback, { threshold: 1 } )
    
    const el = document.querySelector( '.counter' )
    IO.observe( el )
    $('.bannerSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnFocus: true,
        arrows: true,
        prevArrow: '.prevArrow',
        nextArrow: '.nextArrow',
        dots: true,

    });
});