const openPopupButton = document.getElementById('openPopupButton');
const popupOverlay = document.getElementById('popupOverlay');
const openSubPopupButton = document.getElementById('openSubPopupButton');
const subPopupOverlay = document.getElementById('subPopupOverlay');
const closePopupButton = document.getElementById('closePopupButton');
const closeSubPopupButton = document.getElementById('closeSubPopupButton');

openPopupButton.addEventListener('click', () => {
    popupOverlay.style.display = 'block';
});

openSubPopupButton.addEventListener('click', () => {
    subPopupOverlay.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});

closeSubPopupButton.addEventListener('click', () => {
    subPopupOverlay.style.display = 'none';
});

subPopupOverlay.addEventListener('click', (event) => {
    if (event.target === subPopupOverlay) {
        subPopupOverlay.style.display = 'none';
    }
});
