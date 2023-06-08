const popupButtons = document.querySelectorAll('.button-popup');
popupButtons.forEach(btn => btn.addEventListener('click', openPopup));

let activePopupId;

function closePopup() {
    const popup = document.getElementById(`popup-${activePopupId}-container`);
    popup.classList.remove('active-popup');
    document.body.classList.remove('no-scroll');
    activePopupId = undefined;
}

function openPopup(e) {
    const popupId = e.target.classList[0];
    const popup = document.getElementById(`popup-${popupId}-container`);
    popup.classList.toggle('active-popup');
    document.body.classList.add('no-scroll');
    if (e.target.closest('.responsive-menu')) {
        document.body.classList.toggle('no-scroll');
    } else {
        document.body.classList.add('no-scroll');
    }
    activePopupId = popupId;
}

function buttonSubmit() {
    closePopup();
}