// Defining elements

const main_window = window;

const toTopButton = document.querySelector('#toTopButton');
const main_title = document.querySelector(".mainTitle");
const secSchoolItems = document.querySelectorAll(".fadeInTarget");
const myGradesText = document.getElementsByClassName("gradesText")[0];
const myGradesTable = document.getElementsByClassName("gradesTable")[0];

// =========================================================================

// Creating the back to top button
createButton(toTopButton, main_window);

// Creating fadeIn effect for the main title
fadeInCreate(0, 1000).observe(main_title);

// For every item inside my secondary school content, apply fadeIn effect
for (let i = 0; i < secSchoolItems.length; i++) {
	fadeInCreate(i * 200, 500).observe(secSchoolItems[i]);
}

// Apply FadeIn My Grades' text and table
fadeInCreate(0, 500).observe(myGradesText);
fadeInCreate(200, 500).observe(myGradesTable);