let activePopupId;
const popupButtons = document.querySelectorAll('.button-popup');

popupButtons.forEach(btn => btn.addEventListener('click', openPopup));

function closePopup() {
    const popup = document.getElementById(`popup-${activePopupId}-container`);
    popup.classList.toggle('active-popup');
    activePopupId = undefined;
}

function openPopup(e) {
    const popupId = e.target.classList[0];
    const popup = document.getElementById(`popup-${popupId}-container`);
    popup.classList.toggle('active-popup');
    activePopupId = popupId;
}

const speakersList = document.querySelector('.speakers-list');
const speakers = document.querySelectorAll('.speaker-card');

const sponsorsList = document.querySelector('.sponsors-list');
const sponsors = document.querySelectorAll('.sponsor-card');

const windowHeight = window.innerHeight;

const delay = 800;

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