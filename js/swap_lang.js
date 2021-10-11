/* =======================================

The swapLangCreate function will create an intersection observer that gives a fast typing effect to the title that switches between
different languages.

Usage: swapLangCreate(<option object>).observe(<receiving element>);

The option object should consist of the property "working" with the property value "false";
This will be used to prevent any glitches that may occur with the animation.

   ======================================= */


// Word Array. Can be modified without the need to change constants
var wordArray = ["The Present", "现在", "сьогодення", "プレゼント", "지금"];

// Create swapLang Intersection Observer
function swapLangCreate(isWorking) {

	const observer = new IntersectionObserver(function
		(entries, observer) {
			entries.forEach(element => {
				if (element.isIntersecting) {

					// This isWorking if-condition prevents the animation from bugging out and restarting in case the user scrolls off and scrolls back
					// the intersection observer into the viewport.
					if (isWorking.working == false) {

						isWorking.working = true;

						// This base is a variable used to track of the time that has passed
						var base = 0;

						for (let j = 0; j < wordArray.length; j++) {

							// For-loop function adding a letter
							for (let i = 0; i < wordArray[j].length; i++) {
								setTimeout(function() {increaseLetter(element.target, i, j);}, (i + base) * 20);
							}

							// Constant here to adjust for the time for adding the letters + a little bit more to allow
							// the user to read
							var constant = wordArray[j].length + 50;

							// For-loop function removing a letter
							for (let i = 0; i < wordArray[j].length; i++) {
								// The timeout here uses the constant to prevent the removal from interfering with the addition of letters
								setTimeout(function () {removeLetter(element.target);}, (constant + i + base) * 20);
							}

							base += wordArray[j].length * 2 + 60;
						}

						// This sets working to false ONLY IF the complete animation has been done
						setTimeout(function() {isWorking.working = false;}, base * 20);
					}
				}
			});
		}
	);
	return observer;
}

// Increase the element by a specific letter, given the wordArray index and string index.
function increaseLetter(element, index, wordIdx) {
	element.textContent += wordArray[wordIdx][index];
}

// Remove the last character 
function removeLetter(element) {
	element.textContent = element.textContent.substring(0, element.textContent.length - 1);
}
