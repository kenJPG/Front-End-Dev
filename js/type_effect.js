// Alphabet list to choose random characters
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f',
				'g', 'h', 'i', 'j', 'k', 'l',
				'm', 'n', 'o', 'p', 'q', 'r',
				's', 't', 'u', 'v', 'w', 'x',
				'y', 'z'];

// Usage: typeEffectCreate(<typeDone object>, <real string to leave behind>).observe(<element>);
function typeEffectCreate(typeDone, realString) {
	const observer = new IntersectionObserver(function
		(entries, observer) {
			entries.forEach(element => {

				// Check if the element is intersecting with the viewport
				if (element.isIntersecting && typeDone.done == false) {

					// Set typeDone.done to true, to prevent the animation from 
					// occurring more than once in an element
					typeDone.done = true;

					// Run the blinking bar function for 2 blinks
					blinkingBar(2, element);

					// This base variable will be used to track the current timeline of
					// animation frames.
					// Each unit stands for 1 millisecond
					var base = 2000;

					// Generating the keyframes for the animation.
					// Precomputing the keyframes instead of doing it real time
					// makes it easier to animate as well as allow for more realistic
					// typing errors.
					var strArray = generateArray(realString);

					for (let i = 0; i < strArray.length; i++) {

						// randomWait is the number of milliseconds before the upcoming character is pressed.
						var randomWait = 60 + Math.floor(Math.random() * 100);

						base += randomWait;

						// Check if the character is intended to be a backspace. Backspaces
						// can be either "<" or "<<", hence the [0] index is used to efficiently
						// check both scenarios
						if (strArray[i][0] == "<") {

							// Remove the back letter. Additional time is added before removing letter, to simulate
							// the 'reaction time' of typing an incorrect letter.
							setTimeout(function() {removeLetter(element);}, base + 350);
							base += 350;

							// If the backspace is intended to be 2 in a row, we will remove once more
							// but with a shorter delay. This is because there is no need to simulate
							// the 'reaction time' anymore, as the typer has recognised they need to remove
							// 2 letters in a row.
							if (strArray[i] == "<<") {
								setTimeout(function() {removeLetter(element);}, base + 150);
								base += 150;
							}

							// Lastly, extra delay will be added after the removal of letters, simulating
							// the delay in the typer's mind, when they switch from 'deletion' mode to 'typing' mode.
							setTimeout(function() {}, base + 350);
							base += 350;

						} else {

							// If the character is not intended to be backspace, we will continue to type the next
							// character. Note there is no extra delay added as the typer is still in a 'typing' mode.
							setTimeout(function() {updateLetter(element, strArray[i]);}, base);
						}
					}

					// Lastly, set a blinkingBar occurring 2 times
					setTimeout(function() {blinkingBar(2, element);}, base);

					// After the blinking bar has occurred, we will remove the blinking bar.
					// NOTE the blinking bar takes 1 second for on and off. As a result,
					// setting the time delay of 2000 accounts for the above blinking bar.
					// The random delay added is to simulate the typer randomly clicking away from
					// being able to type.
					setTimeout(function() {
						var subStr = element.target.innerHTML.substring(0, element.target.innerHTML.length - 1);
						element.target.innerHTML = subStr;
					}, base + 2000 + Math.floor(Math.random() * 500));
				}
			});
		}
	);
	return observer;
}

// Blinking Bar function
// NOTE <duration> stands for the number of blinks(each appearance is 1 second in total), NOT the
// number of seconds.
function blinkingBar(duration, element) {

	// subStr gets the string, excluding the last character, which should be the bar
	var subStr = element.target.innerHTML.substring(0, element.target.innerHTML.length - 1);

	// Iterating from 2 * duration times
	for (var i = 1; i <= 2 * duration; i++) {

		// If i is even we will added the bar with a time of 500ms
		if (i % 2 == 0) {
			setTimeout(function() {element.target.innerHTML = subStr + '|';}, i * 500);
		} else {

			// Else we will remove the bar with a time of 500ms
			setTimeout(function() {element.target.innerHTML = subStr;}, i * 500);
		}
	}
}

// Generate Array is used to generate the animation frames.
// This array will randomly input incorrect characters to give a realistic effect.
function generateArray(realString) {

	// This array acts as the keyframe array and will be returned at the end of the function.
	var strArray = Array();

	// Position will keep track of the number of "correctly" typed letters
	var position = 0;

	while (position != realString.length) {

		// 1 in 7 probability of making a typo
		if (Math.floor(Math.random() * 7) == 1) {

			// If it decides to make a typo, it will next
			// decide the number of typos it will make in a row.
			// The maximum number of typos has been set to 2.
			var typoCount = Math.floor(Math.random() * 2) + 1;

			for (let i = 0; i < typoCount; i++) {

				var randomAlpha = alphabet[Math.floor(Math.random() * alphabet.length)];

				// If the random alphabet corresponds to the actual correct letter, we will
				// choose until it doesn't.
				while (randomAlpha == realString[position]) {
					randomAlpha = alphabet[Math.floor(Math.random() * alphabet.length)];
				}

				// Push the alphabet onto the keyframe array
				strArray.push(randomAlpha);
			}

			// Determine the number of backspaces needed to remove the typos
			var tmpStr = "";
			for (let i = 0; i < typoCount; i++) {
				tmpStr += "<";
			}

			// Push the backspaces onto the keyframe array
			strArray.push(tmpStr);

			// NOTE the backspaces are not pushed individually as characters, but as a string. This
			// is to allow for more realistic timing of removing characters
		} else {

			// If it is decided that a real character will be typed, push the real character
			strArray.push(realString[position]);

			position++;
		}
	}

	return strArray;
}

// Increase by one character and add the bar at the end
function updateLetter(element, character) {
	var subStr = element.target.innerHTML.substring(0, element.target.innerHTML.length - 1);
	element.target.innerHTML = subStr + character + "|";
}

// Remove the last character(not the bar) and add the bar at the end
function removeLetter(element) {
	var subStr = element.target.innerHTML.substring(0, element.target.innerHTML.length - 2);
	element.target.innerHTML = subStr + "|";
}