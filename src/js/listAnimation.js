const topicsList = document.querySelector('.topics-list');
const topic = document.querySelectorAll('.topic');

const speakersList = document.querySelector('.speakers-list');
const speakers = document.querySelectorAll('.speaker-card');

const sponsorsList = document.querySelector('.sponsors-list');
const sponsors = document.querySelectorAll('.sponsor-card');

const windowHeight = window.innerHeight;

const delay = 300;

const offset = 100;

function revealElements(elements) {
    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop <= windowHeight - offset) {
            setTimeout(() => {
                element.classList.add('show');
            }, delay);
        }
    });
}

function checkScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const topicsOffset = topicsList.getBoundingClientRect().top + scrollTop + offset;
    const speakersOffset = speakersList.getBoundingClientRect().top + scrollTop + offset;
    const sponsorsOffset = sponsorsList.getBoundingClientRect().top + scrollTop + offset;

    if (scrollTop + windowHeight >= speakersOffset) {
        revealElements(speakers);
    }

    if (scrollTop + windowHeight >= sponsorsOffset) {
        revealElements(sponsors);
    }

    if (scrollTop + windowHeight >= topicsOffset) {
        revealElements(topic);
    }
}

window.addEventListener('scroll', checkScroll);
