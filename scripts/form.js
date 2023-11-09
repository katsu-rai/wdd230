function checkPasswordMatch() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var message = document.getElementById("passwordMatchMessage");

    if (password !== confirmPassword) {
        message.innerText = "Passwords do not match. Please try again.";
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
        document.getElementById("password").focus();
    } else {
        message.innerHTL = "";
    }
}

function showRatingValue() {
    var ratingValue = document.getElementById("rating").value;
    document.getElementById("ratingValue").innerHTML = ratingValue;
}


function validateInput(inputText) {
    var alphanumericPattern = /^[a-zA-Z0-9]{8,}$/; // 8 alphanumeric characters
    var validationMessage = document.getElementById("validationMessage");

    if (alphanumericPattern.test(inputText)) {
        validationMessage.style.display = "none"
    } else {
        validationMessage.style.display = "block"
    }
}