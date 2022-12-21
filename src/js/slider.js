/*СЛАЙДЕР*/

(function () {

    'use strict';

    const breakpoint = window.matchMedia('(min-width:767px)');
    let swiper;


    const breakpointChecker = function () {

        if (breakpoint.matches === true) {
            if (swiper !== undefined) swiper.destroy(true, true);
            return;

        } else if (breakpoint.matches === false) {
            return enableSwiper();
        }
    };

    const enableSwiper = function () {
        swiper = new Swiper('.swiper', {
            slidesPerView: '1.3',
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    };

    breakpoint.addListener(breakpointChecker);

    breakpointChecker();
})();

/*READMORE*/

let readmore = document.querySelectorAll('.readmore');
let read = document.querySelector('.read');
for (let i = 0; i < readmore.length; i++) {
    readmore[i].addEventListener('click', function () {
        readmore[i].parentNode.classList.toggle('active');
        if (read.textContent === 'Читать далее') {
            read.textContent = 'Скрыть';
        } else {
            read.textContent = 'Читать далее';
        }
    });
};

let showmoreTechnic = document.querySelectorAll('.showmore-technic');
let moreTechnic = document.querySelector(".more-technic");
for (let i = 0; i < showmoreTechnic.length; i++) {
    showmoreTechnic[i].addEventListener('click', function () {
        showmoreTechnic[i].parentNode.classList.toggle('active');
        if (moreTechnic.textContent === 'Показать всё') {
            moreTechnic.textContent = 'Скрыть';
        } else {
            moreTechnic.textContent = 'Показать всё';
        }
    });
}

let showmore = document.querySelectorAll('.showmore');
let more = document.querySelector(".more");
for (let i = 0; i < showmore.length; i++) {
    showmore[i].addEventListener('click', function () {
        showmore[i].parentNode.classList.toggle('active');
        if (more.textContent === 'Показать всё') {
            more.textContent = 'Скрыть';
        } else {
            more.textContent = 'Показать всё';
        }
    });
}

/*МЕНЮ-БУРГЕР*/

const btnMenu = document.querySelector(".menu-select__menu");
const btnMenuExit = document.querySelector(".menubar-burg__exit");
const menu = document.querySelector(".menubar");
const bg = document.querySelector('.page');

const toggleMenu = function () {
    menu.classList.toggle('menubar--active');
    bg.style.opacity = '0.1';
    window.onscroll = function () { window.scrollTo(0, 0); };
};
const removeMenu = function () {
    menu.classList.remove('menubar--active');
    bg.style.opacity = '1';
    window.onscroll = function () { window.scrollTo(x, y); };
};

btnMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
});
btnMenuExit.addEventListener("click", function (e) {
    e.stopPropagation();
    removeMenu();
    bg.style.opacity = '1';
});

document.addEventListener('click', function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains('menubar--active');

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
        bg.style.opacity = '1';
    }
});


/*МОДАЛЬНЫЕ ОКНА*/

const call = document.querySelector('.modal__call');
const feedback = document.querySelector('.modal__feedback');
const openCall = document.querySelectorAll('.call-btn');
const openFeedback = document.querySelectorAll('.feedback-btn');
const closeCall = document.querySelectorAll('.call__btn-model');
const closeFeedback = document.querySelectorAll('.feedback__btn-model');
const menubar = document.querySelector('.menubar');

openCall.forEach(function (button) {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        call.classList.add('call--active');
        feedback.classList.remove('feedback--active');
        menubar.classList.remove('menubar--active');
        bg.style.opacity = '0.1';
        menubar.style.opacity = '0.1';
        window.onscroll = function () { window.scrollTo(0, 0); };
    });

});

closeCall.forEach(function (button) {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        call.classList.remove('call--active');
        bg.style.opacity = '1';
        menubar.style.opacity = '1';
        window.onscroll = function () { window.scrollTo(x, y); };
    });
});

openFeedback.forEach(function (button) {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        feedback.classList.add('feedback--active');
        call.classList.remove('call--active');
        menubar.classList.remove('menubar--active');
        bg.style.opacity = '0.1';
        menubar.style.opacity = '0.1';
        window.onscroll = function () { window.scrollTo(0, 0); };
    });

});

closeFeedback.forEach(function (button) {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        feedback.classList.remove('feedback--active');
        bg.style.opacity = '1';
        menubar.style.opacity = '1';
        window.onscroll = function () { window.scrollTo(x, y); };
    });
});












