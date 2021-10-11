// Defining elements

const mainWindow = window;

// Main Title Page and To Top Button
const mainTitle = document.querySelector(".mainTitle");
const mainTitleSpanList = document.querySelectorAll(".mainTitle span");
const toTopButton = document.querySelector("#toTopButton");

// Possible Career Content
const possibleCareersTitleList = document.querySelectorAll(".possibleCareersTitle span");
const possibleCareersTitle = document.querySelector(".possibleCareersTitle span");
const possibleCards = document.querySelectorAll(".fadeInTarget");

// My Course Content
const myCourseTitle = document.querySelector(".myCourseTitle span");
const myCourseTitleList = document.querySelectorAll(".myCourseTitle span");

// Table Elements

const courseTable = document.querySelector("table");

const FOPLegend = document.querySelector(".FOPLegend .icon");
const FOPTarget = document.querySelectorAll(".FOP");

const FEDLegend = document.querySelector(".FEDLegend .icon");
const FEDTarget = document.querySelectorAll(".FED");

const FOCLegend = document.querySelector(".FOCLegend .icon");
const FOCTarget = document.querySelectorAll(".FOC");

const MATHLegend = document.querySelector(".MATHLegend .icon");
const MATHTarget = document.querySelectorAll(".MATH");

const CPRLegend = document.querySelector(".CPRLegend .icon");
const CPRTarget = document.querySelectorAll(".CPR");

const CATLegend = document.querySelector(".CATLegend .icon");
const CATTarget = document.querySelectorAll(".CAT");

const ECGLegend = document.querySelector(".ECGLegend .icon");
const ECGTarget = document.querySelectorAll(".ECG");

// ============================================================

// Creating back to top button
createButton(toTopButton, mainWindow);



// The object below will be used to only allow the effect to occur once.
var randomDoneMain = {done: false};

// Giving letter random effect to main title
createLetterRandom(randomDoneMain, mainTitleSpanList, "The Future", 5, "#FFF").observe(mainTitle);

var randomDoneCareer = {done: false};
// Giving letter random effect to possible careers title
createLetterRandom(randomDoneCareer, possibleCareersTitleList, "Possible Careers", 2, "#FFF").observe(possibleCareersTitle);

// Giving a fade in effect to cards in possible careers
for (let i = 0; i < possibleCards.length; i++) {
	fadeInCreate(i * 100, (i+1) * 250).observe(possibleCards[i]);
}

var randomDoneCourse = {done: false};
// Giving letter random effect to my course title
createLetterRandom(randomDoneCourse, myCourseTitleList, "My Course", 3, "#000").observe(myCourseTitle);

// Linking table cells with their respective subject legends
// This is an effect that will make table cells increase in brightness depending on the legends one hovers over
createTableHighlight(FOPTarget, FOPLegend);
createTableHighlight(FOCTarget, FOCLegend);
createTableHighlight(FEDTarget, FEDLegend);
createTableHighlight(MATHTarget, MATHLegend);
createTableHighlight(CPRTarget, CPRLegend);
createTableHighlight(CATTarget, CATLegend);
createTableHighlight(ECGTarget, ECGLegend);
