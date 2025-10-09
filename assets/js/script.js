// MENU RESPNSIVO DO SITE
let menuCelular = document.querySelector('#menu-celular')
let menuPrincipal = document.querySelector('.menu-principal') 

menuCelular.onclick = () => {
    menuCelular.classList.toggle('fa-times')
    menuPrincipal.classList.toggle('active')
}

// SLIDE DESTAQUE DO SITE 
let swiper = new Swiper(".slider-um", {
    spaceBetween: 30,
    centeredSlider: true,
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
})  