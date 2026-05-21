
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
    spaceBetween: 0,

    breakpoints: {

        1440: {spaceBetween: 40},
        768: {spaceBetween: 100},
        430: {spaceBetween: 50},
        375: {spaceBetween: 10},
        360: {spaceBetween: 15},
        344: {spaceBetween: 20},
    },

    autoplay: {
    delay: 3000,
    },
});

//FAQ

const questions = document.querySelectorAll(".question")

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.querySelector('.question__answer')
        const answerCssClasses = answer.classList
        const cross = question.querySelector('.question__cross')

        let answerHeight = `${answer.scrollHeight}px`
        let crossDegree = 45

        if(answerCssClasses.contains('question_active')) {
            answerCssClasses.remove('question_active')
            answerHeight = 0
            crossDegree = 0
        } else {
            answerCssClasses.add('question_active')
        }
        cross.style.transform = `rotate(${crossDegree}deg)`
        answer.style.height = answerHeight
    });

})

//Burger-menu

const burgerMenu = document.querySelector('.bar')
const mobileMenu = document.querySelector('.menu-mobile')
const menuExit = document.querySelector('.menu-mobile__cross')

burgerMenu.addEventListener ('click', () => {
    mobileMenu.style.height = '100%'

});

menuExit.addEventListener('click', () => {
    mobileMenu.style.height = '0%'
});