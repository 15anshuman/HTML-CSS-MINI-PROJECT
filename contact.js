// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Target the form element
    var form = document.querySelector('form');

    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Validate the form fields
        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var messageInput = document.getElementById('message');

        var errorMessage = document.getElementById('errorMessage');
        errorMessage.innerHTML = ''; // Clear any previous error message

        if (nameInput.value.trim() === '') {
            errorMessage.innerHTML = 'Please enter your name.';
            return; // Exit the function if validation fails
        }

        if (emailInput.value.trim() === '') {
            errorMessage.innerHTML = 'Please enter your email.';
            return; // Exit the function if validation fails
        }

        if (messageInput.value.trim() === '') {
            errorMessage.innerHTML = 'Please enter your message.';
            return; // Exit the function if validation fails
        }

        // If all fields are valid, submit the form
        form.submit();
    });
});
