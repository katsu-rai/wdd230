function checkPasswordMatch() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var message = document.getElementById("passwordMatchMessage");

    if (password !== confirmPassword) {
        message.innerText = "Passwords do not match. Please try again.";
        document.getElementById("confirmPassword").value = "";
        document.getElementById("confirmPassword").focus();
    } else {
        message.innerHTL = "";
    }
}

function showRatingValue() {
    var ratingValue = document.getElementById("rating").value;
    document.getElementById("ratingValue").innerHTML = ratingValue;
}