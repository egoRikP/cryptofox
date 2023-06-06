let activePopupId;
let popupButtons = document.querySelectorAll('.button-popup');

popupButtons.forEach(btn => {
    btn.addEventListener('click', openPopup);
});

function openPopup(e) {
    let popupId = e.target.classList[0];
    let popup = document.getElementById('popup-' + popupId + '-container');
    popup.classList.toggle('active-popup');
    activePopupId = e.target.classList[0];
}

function closePopup() {
    let popup = document.getElementById('popup-' + activePopupId + '-container');
    popup.classList.toggle('active-popup');
    activePopupId = undefined;
}

const menuBurgerButton = document.querySelector('.menu-burger-button');
const menu = document.querySelector('.responsive-menu');

menuBurgerButton.addEventListener('click', function () {
    menu.classList.toggle('active');
});

// let speakersList = document.querySelector('.speakers-list');
// let sponsorsList = document.querySelector('.sponsors-list');
// let sponsors = document.querySelectorAll('.sponsor');
// var speakerCards = document.querySelectorAll('.speaker-card');
// var windowHeight = window.innerHeight;
// var delay = 300; // Затримка в мілісекундах між елементами списку
//
// function revealSpeakers() {
//     for (var i = 0; i < speakerCards.length; i++) {
//         (function (index) {
//             setTimeout(function () {
//                 speakerCards[index].classList.add('show');
//             }, delay * index);
//         })(i);
//     }
// }
//
// function revealSponsors() {
//     for (var i = 0; i < sponsors.length; i++) {
//         (function (index) {
//             setTimeout(function () {
//                 sponsors[index].classList.add('show');
//             }, delay * index);
//         })(i);
//     }
// }
//
// function checkScroll() {
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     var offset = speakersList.offsetTop;
//     let offsetSponsor = sponsorsList.offsetTop;
//
//     if (scrollTop + windowHeight >= offset) {
//         revealSpeakers();
//         // window.removeEventListener('scroll', checkScroll);
//     }
//
//     if (scrollTop + windowHeight >= offsetSponsor) {
//         revealSponsors();
//         window.removeEventListener('scroll', checkScroll);
//
//     }
//
// }
//
// window.addEventListener('scroll', checkScroll);
//
// // var sponsors = document.querySelectorAll('.sponsor');
// // var index = 0;
// //
// // function showNext() {
// //     sponsors[index].classList.add('show');
// //     index++;
// //     if (index < sponsors.length) {
// //         setTimeout(showNext, 500);
// //     }
// // }
// //
// // showNext();

// Вибір елементів списків та спонсорів
const speakersList = document.querySelector('.speakers-list');
const speakers = document.querySelectorAll('.speaker-card');

const sponsorsList = document.querySelector('.sponsors-list');
const sponsors = document.querySelectorAll('.sponsor-card');

const windowHeight = window.innerHeight;

const delay = 400;

function revealElements(elements) {
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show');
        }, delay * index);
    });
}

function checkScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const speakersOffset = speakersList.offsetTop;
    const sponsorsOffset = sponsorsList.offsetTop;

    if (scrollTop + windowHeight >= speakersOffset) {
        revealElements(speakers);
    }

    if (scrollTop + windowHeight >= sponsorsOffset) {
        revealElements(sponsors);
    }
}

window.addEventListener('scroll', checkScroll);

