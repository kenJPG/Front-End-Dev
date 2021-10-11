// Fade In function will work only if the element has styling "opacity: 0";

// Usage: fadeInCreate($delay, $duration).observe($element);
function fadeInCreate(delay, duration = 150) {
	const observer = new IntersectionObserver(function
		(entries, observer) {
			entries.forEach(element => {

				// Check if the element is intersecting with the viewport
				if (element.isIntersecting) {

					// If so, setTimeout the fadeIn function by $delay and pass
					// parameters $element and $duration
					setTimeout(function() {fadeIn(element, duration);}, delay);
				}
			});
		}
	);
	return observer;
}

// Fade In function changes the opacity to 1 and makes the transition smooth
function fadeIn(element, duration) {
	element.target.style.opacity = 1;
	element.target.style.transition = `opacity ${duration}ms linear`;
}
