let activePopupId;
let popupButtons = document.querySelectorAll('.button-popup');

popupButtons.forEach(btn => {
    btn.addEventListener('click', openPopup);
});

function openPopup(e) {
    let popupId = e.target.classList[0];
    let popup = document.getElementById('popup-' + popupId + '-container');
    popup.classList.toggle('active');
    activePopupId = e.target.classList[0];
}

function closePopup() {
    let popup = document.getElementById('popup-' + activePopupId + '-container');
    popup.classList.toggle('active');
    activePopupId = undefined;
}
