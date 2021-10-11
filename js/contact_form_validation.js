// Get the form needed for validation
var checkForm = document.querySelector(".needs-validation");

// Check for the submit event
checkForm.addEventListener("submit", function(event) {

	if (!checkForm.checkValidity()) {
		event.preventDefault();
		event.stopPropagation();
	}

	// Add was-validated class to display red/green error labels
	checkForm.classList.add('was-validated');
}, false);