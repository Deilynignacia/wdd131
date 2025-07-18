// Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Footer
const currentYearSpan = document.getElementById('currentyear');
const today = new Date();
const currentYear = today.getFullYear();
currentYearSpan.textContent = currentYear;

const lastModifiedParagraph = document.getElementById('lastModified');
const lastModifiedDate = document.lastModified;
lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;