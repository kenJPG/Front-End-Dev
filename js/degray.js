
// Receiver is the element you want the action to occur on
function degrayCreate(duration = 150, receiver, degrayDone) {

	const observer = new IntersectionObserver(function
		(entries, observer) {
			entries.forEach(element => {

				// Check if the element is intersecting with the viewport AND (degray has not been done OR degrayDone is null)
				if (element.isIntersecting && (degrayDone.check == false || degrayDone.check == null)) {

					receiver.style.transition = `filter ${duration}ms linear`;
					receiver.style.filter = `grayscale(0)`;

					if (degrayDone.check == false) degrayDone.check = true;
				}
			});
		}
	);
	return observer;
}

