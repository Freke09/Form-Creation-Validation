document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault()
    })

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    passwordValue = password.value.trim();

    let isValid = true;
    let messages = [];

    if(username.length < 3){
        isValid = false;
        messages.push("The username is too short");
    }

    if(!email.includes("@") && !email.includes(".")){
        isValid = false;
        messages.push("Invalid email address");
    }

    if(!password.length >= 8){
        isValid = false;
        messages.push("Password is too short");
    }

    // const feedbackDiv = document.getElementById('form-feedback');
    feedbackDiv.style.display = "block";

    if(isValid){
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745";
    } else {
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545"
    }
});