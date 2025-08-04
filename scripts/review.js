// This file counts the number of times some one has submitted a review. 
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);
document.getElementById("counter").textContent = reviewCount;


// Footer
const currentYearSpan = document.getElementById('currentyear');
const today = new Date();
const currentYear = today.getFullYear();
currentYearSpan.textContent = currentYear;

const lastModifiedParagraph = document.getElementById('lastModified');
const lastModifiedDate = document.lastModified; 
lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;