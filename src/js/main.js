
//Open - close modal-windows

function modalToggle(elem, displayValue) {
    elem.style.display = displayValue
}

const btnOpenModal = document.querySelectorAll('[data-show-modal]');
const modalWindow = document.querySelector('[data-modal]');

for (let button of btnOpenModal) {
    button.addEventListener('click', () => {
        modalToggle(modalWindow, 'block');
    });
}

const crossCloseModal = document.querySelectorAll('[data-close-modal]')

for (let close of crossCloseModal) {
    close.addEventListener('click', (event) => {
        const modal = event.target.closest ('[data-modal]')
        modalToggle(modal, 'none')
    })
}

//Slider-reviews

const reviewsSlider = new Swiper ( ".reviews", {
    navigation: {
        prevEl: ".reviews__nav-prev",
        nextEl: ".reviews__nav-next",
    },

    simulateTouch: true,
    touchRatio:1,
    touchAngle:45,
    grabCursor:true,
    loop: true,
    slidesPerView: 1,
spaceBetween:90,

    // breakpoints: {
    //     1440: {spaceBetween: 120},
    //     768: {spaceBetween: 100},
    //     540: {spaceBetween: 50},
    // },

    autoplay: {
    delay: 3000,
    },
});

//FAQ

const questions = document.querySelectorAll(".question")


