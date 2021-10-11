// Defining elements

const mainWindow = window;

const mainTitle = document.querySelector(".mainTitle");
const mainTitleFirstSpan = document.querySelector(".mainTitle span");
const mainTitleSpanList = document.querySelectorAll(".mainTitle span");
const cardList = document.getElementsByClassName("card");
const myValuesContainer = document.getElementsByClassName("myValuesContainer")[0]; // This returns object, we only want one element.
const myPersonalityContainer = document.getElementsByClassName("myPersonalityContainer")[0]; // This returns object, we only want one element.
const myValuesItem = document.getElementById("myValuesItem");
const myPersonalityItem = document.getElementById("myPersonalityItem");
const toTopButton = document.querySelector('#toTopButton');

// =========================================================================


// Adding fade in effect to main_title
fadeInCreate(0, 1000).observe(mainTitle);

// Rainbowify the main title. 
// rainbowDone is an object used to check if this rainbowify process has been done
// It is made such that null means it will activate every time it intersects,
// false means it will do it once and true means it will not be done.
var rainbowDone = {check: null};

// This observes the first span, if it is intersecting with the viewport it will fire
rainbowifyCreate(mainTitleSpanList, 250, rainbowDone).observe(mainTitleFirstSpan);



// Adding fade-in effect to each of the cards.
// Using for-loop to define the time delay between each card
for (let i = 0; i < cardList.length; i++) {
	fadeInCreate(i * 225, 1000).observe(cardList[i]);
}



// Create fadeIn effects for the texts in the myValue and myPersonality carousel
fadeInCreate(0, 1000).observe(myValuesContainer);
fadeInCreate(0, 1000).observe(myPersonalityContainer);

// Similar to rainbowDone, these degray objects below have the same logic. By setting it to false
// we will only do it once.
var degrayValueDone = {check: false};
var degrayPersonalityDone = {check: false};

// From the grayscale filter from the div that contains the above carousel texts
degrayCreate(1500, myValuesItem, degrayValueDone).observe(myValuesContainer);
degrayCreate(1500, myPersonalityItem, degrayPersonalityDone).observe(myPersonalityContainer);

// Create a "Back to Top" button
createButton(toTopButton, mainWindow);