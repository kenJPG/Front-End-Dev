// Note this function has 2 parameters, a target and the element.
// As a result, hovering of the element acts as the trigger to increase
// the brightness of the target element
function createTableHighlight(target, element) {

	// If mouseenter is activated, set the brightness to a factor of 1.2x
	element.addEventListener("mouseenter", function() {
		for (let i = 0; i < target.length; i++) {
			target[i].style.filter = "brightness(1.2)";
		}
	}, false);

	// If mouseleave is activated, revert the brightness back to the original
	element.addEventListener("mouseleave", function() {
		for (let i = 0; i < target.length; i++) {
			target[i].style.filter = "brightness(1)";
		}
	}, false);
}