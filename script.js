// Wait until the HTML DOM is fully loaded befor applying the script
document.addEventListener("DOMContentLoaded", function() {

    // Get the form and feedback display element
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault() // prevent the form from submitting and refreshing the page
    })

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Extract and trim user input
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    passwordValue = password.value.trim();

    let isValid = true;
    let messages = [];

    // Validate username
    if(username.length < 3){
        isValid = false;
        messages.push("The username is too short");
    }

    // Validate email (check if the email has @ and .)
    if(!email.includes("@") && !email.includes(".")){
        isValid = false;
        messages.push("Invalid email address");
    }

    // Validate password length
    if(!password.length >= 8){
        isValid = false;
        messages.push("Password is too short");
    }

    // Display the feedback div
    feedbackDiv.style.display = "block";

    // Show either success of error messages
    if(isValid){
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745";
    } else {
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545"
    }
});