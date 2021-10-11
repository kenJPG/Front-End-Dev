// Array of Colors
var colorArray = Array('#9C4F96', '#2AA8F2', '#8BD448', '#FAE442', '#FBA949', '#FF6355', '#000000');

// Create Observer for rainbowify.
// Usage: rainbowifyCreate(<list of spans>, <delay>, <object>).observe(<first span element>);
// The first span element will initiate the entire process
function rainbowifyCreate(spanList, delay = 0, rainbowDone) {
	const observer = new IntersectionObserver(function
		(entries, observer) {
			// Observer intended to only check the first element
			entries.forEach(element => {

				// Check if the element is intersecting with the viewport
				if (element.isIntersecting) {

					// spanList is passed as parameter
					setTimeout(function() {rainbowify(spanList, rainbowDone);}, delay);
				}
			});
		}
	);
	return observer;
}

// Rainbow function
function rainbowify(spanList, rainbowDone) {

	// Check if rainbowify has been done before.
	// If rainbowify is intended to be done multiple times(i.e. null), skip. Else set
	// false to true.
	if (rainbowDone.check != null) {
		if (rainbowDone.check) return;
		rainbowDone.check = true;
	}

	// dataArray will be used to track the color of each letter
	let dataArray = Array(spanList.length);

	// Ongoing will be used to track the timeline of the animation
	let ongoing = 0;

	// From left to right, set values in decreasing negative values, starting
	// from 0. This is done such that the rainbow effect starts from the left.
	// To start the rainbow from the right, start with negatives and end with 0 at
	// the right-most index
	for (let i = 0; i < dataArray.length; i++) {
		dataArray[i] = -i;
	}

	// While the last index of the dataArray has not reached the last color, run the loop
	while (dataArray[dataArray.length - 1] < 6) {
		for (let i = 0; i < dataArray.length; i++) {

			dataArray[i]++;

			// Local variable is needed to remember the value of dataArray[i] at this specific
			// time. This is because setTimeout is used and if we did not use this local variable,
			// it will reference the most updated value in dataArray[i] which will be incorrect.
			let data_var = dataArray[i];

			if (data_var >= 0 && data_var <= 6) {

				// Change the color according to the variable.
				setTimeout(function() {changeColor(spanList[i], data_var);}, ongoing * 10);
				ongoing++;
			}
		}
	}
}

// Change color according to the parameter
function changeColor(element, color_index) {
	element.style.color = `${colorArray[color_index]}`;
}