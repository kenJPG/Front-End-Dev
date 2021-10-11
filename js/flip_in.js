
// Usage: flipInCreate($delay, $duration).observe($element);
function flipInCreate(delay, duration = 150) {
	const observer = new IntersectionObserver(function
		(entries, observer) {
			entries.forEach(element => {

				// Check if the element is intersecting with the viewport
				if (element.isIntersecting) {

					// If so, setTimeout the flipIn function by $delay and pass
					// parameters $element and $duration
					setTimeout(function() {flipIn(element, duration);}, delay);
				}
			});
		}
	);
	return observer;
}

// Flip In function changes the opacity to 1 and makes the transition smooth
function flipIn(element, duration) {
	element.target.style.transform = "rotateY(720deg)";
	element.target.style.transition = `transform ${duration}ms ease-in-out`;
}
