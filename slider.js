const swiper = new Swiper(".swiper", {
    loop: true,
    speed: 700,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
})

const swiper2 = new Swiper(".slider-2", {
    centeredSlides: true,
    loop: true,
    slidesPerView: 1.35,
    spaceBetween: 8,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 16
        }
    },
    initialSlide: 1,
    speed: 700,
    navigation: {
        nextEl: ".slider-2-button-next",
        prevEl: ".slider-2-button-prev"
    }
})