// Usage: createCopyButton(<copy button>, <input element to read value>,
//                         <opacity 0 success text>, <document>); 
function createCopyButton(element, inputElement, successText, document) {
	element.addEventListener("click", function() {
		
		// Select and copy the selected text
		inputElement.select();
		document.execCommand("Copy");

		// Reveal "Copied!" text
		successText.style.opacity = 1;
		successText.style.transition = "opacity 100ms linear";

		// Hide "Copied!" text in 2 seconds
		setTimeout(function() {successText.style.opacity = 0;}, 2000);
	}, false);
}