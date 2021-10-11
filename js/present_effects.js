// Defining elements

const main_window = window;

const toTopButton = document.querySelector('#toTopButton');
const main_title = document.querySelector(".mainTitle");
const theCards = document.querySelectorAll(".fadeInTarget");
const locationText = document.getElementsByClassName("locationText")[0];
const theFigure = document.querySelector("figure");

// =========================================================================

// Creating the back to top button
createButton(toTopButton, main_window);


// This isWorking object will be used to track if the animation is running. Will be used to prevent glitches.
var isWorking = {working: false};

// Creating Language Swap effect for the main title
// Pass the isWorking object and the receiving element
swapLangCreate(isWorking).observe(main_title);

// Adding a fadeIn effect to the cards
for (let i = 0; i < theCards.length; i++) {
	fadeInCreate(i * 200, 200).observe(theCards[i]);
}


// Create a FadeIn effect for the location text
fadeInCreate(400, 400).observe(locationText);

// Create a Flip In effect for the figure
flipInCreate(200, 1000).observe(theFigure);

