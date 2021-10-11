// Array of letters that will be used to fill up our back to top button.
const letterString = "| Back to Top";

// This variable will be used to determine if we are allowed to increase
// This is used to prevent the button from glitching when the mouse enters and leaves
// the button at rapid speeds.
var changing = false;

// Creating the button
function createButton(element, myWindow) {

	// Scrolling to top when the button is clicked
	element.addEventListener("click", function() {
		myWindow.scrollTo({top: 0, behavior: "smooth"});
	}, false);

	// Adding the letters and words to the element when hovered
	element.addEventListener("mouseenter", function() {

		const spanChild = element.querySelector('span');
		spanChild.innerHTML = "";
		changing = true;
		for (let i = 0; i < letterString.length; i++) {

			setTimeout(function() {addLetter(spanChild, i);}, i * 9);
		}
	}, false);

	// If the mouse is not on the element, the text will be cleared and changing will be false
	element.addEventListener("mouseleave", function() {
		const spanChild = element.querySelector('span');
		changing = false;
		spanChild.innerHTML = "";
	}, false);

	// Disabling the button if the scrollY position is greater than 100
	myWindow.addEventListener("scroll", function() {

		if (myWindow.scrollY > 100) {
			element.style.visibility = "visible";
			element.style.opacity = "1";
			element.style.transition = "opacity 200ms ease-in-out";
		} else {
			element.style.opacity = "0";
			element.style.visibility = "hidden";
		}
	}, false);
}


function addLetter(element, position) {
	// If changing is true, we will change. Else, we will clear the text
	// By doing this, it prevents any glitches that may occur when the mouse
	// moves over the element at fast speeds.
	if (changing) {
		element.innerHTML = letterString.substring(0, position + 1);
	} else {
		element.innerHTML = "";
	}
}
