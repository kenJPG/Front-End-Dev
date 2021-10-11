// Character Array to allow for random characters
// The length will auto adjust and so new characters can be put in without hassle
const characterArray = ['0', '1', '2', '3', '4',
						'5', '6', '7', '8', '9',
						'a', 'b', 'c', 'd', 'e',
						'f', 'g', 'h', 'i', 'j',
						'k', 'l', 'm', 'n', 'o',
						'p', 'q', 'r', 's', 't',
						'u', 'v', 'w', 'x', 'y',
						'z', 'A', 'B', 'C', 'D',
						'E', 'F', 'G', 'H', 'I',
						'J', 'K', 'L', 'M', 'N',
						'O', 'P', 'Q', 'R', 'S',
						'T', 'U', 'V', 'W', 'X',
						'Y', 'Z', '!', '"', '#',
						'$', '%', '&', '\\', "'",
						'(', ')', '*', '+', ',',
						'-', '.', '/', ':', ';',
						'<', '=', '>', '?', '@',
						'[', ']', '^', '_', '{',
						'|', '}'];

// Color Array defining the colors that will be used in the animation
var colorLetterArray = ['#9C4F96', '#2AA8F2', '#8BD448', '#FAE442', '#FBA949', '#FF6355', "#FFF"];

// Usage: createLetterRandom(<randomDone object>, <receiving span list>, <the actual string to form>, <number of changes a letter will have>, <final color of the string>).observe(<element to activate animation>);
// Creating an intersection observer for letter random effect.
function createLetterRandom(randomDone, spanList, realString, duration, finalColor) {
	const observer = new IntersectionObserver(function
		(entries, observer) {
			entries.forEach(element => {
				
				if (element.isIntersecting) {

					if (!randomDone.done) {
						randomDone.done = true;

						// For every item in the span list, we will only apply the effect to underscores
						for (let i = 0; i < spanList.length; i++) {
							if (spanList[i].textContent == "_") {

								let delay = Math.floor(Math.random() * 500);

								setTimeout(function () {randomize(spanList, i, realString, duration, finalColor);}, delay);
							}
						}
					}
				}
			});
		}
	);
	return observer;
}
	
// Randomize Function
// Note this randomize function is responsible for changing only 1 character.
// The character that will be changed is defined by the position parameter.
function randomize(spanList, position, realString, duration, finalColor) {

	// Base variable will be used to track the time. This will prevent
	// animations from interfering with each other and allow for proper timing
	// of animations.
	var base = 0;

	for (let i = 0; i < duration; i++) {

		// Choosing random delay for the current letter
		let delay = Math.floor(Math.random() * 800);

		// Choosing random character for replacement
		let idx = Math.floor(Math.random() * characterArray.length);

		// Choosing random color for replacement
		let colorIdx = Math.floor(Math.random() * colorLetterArray.length);

		// Will be changing a letter to a "fake" character
		setTimeout(function() {changeLetter(spanList, position, idx, colorIdx);}, base + delay);

		base += delay;
	}

	// Wait slightly longer to give a "hanging" effect such that there will be a
	// slight pause before every "fake" character is changed to their "real"
	// character
	base += Math.floor(Math.random() * 300);

	// Change to the real character
	setTimeout(function() {realChangeLetter(spanList, position, realString, finalColor);}, base);
}

// Change letter to fake character
function changeLetter(spanList, position, idx, colorIdx) {
	spanList[position].textContent = characterArray[idx];
	spanList[position].style.color = colorLetterArray[colorIdx];
}

// Change letter to real character
function realChangeLetter(spanList, position, realString, finalColor) {
	spanList[position].textContent = realString[position];
	spanList[position].style.color = finalColor;
}