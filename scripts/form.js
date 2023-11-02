function checkPasswordMatch() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var message = document.getElementById("passwordMatchMessage");

    if (password !== confirmPassword) {
        message.innerHTML = "Passwords do not match. Please try again.";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
        document.getElementById("username").focus();
    } else {
        message.innerHTML = "";
    }
}

function showRatingValue() {
    var ratingValue = document.getElementById("rating").value;
    document.getElementById("ratingValue").innerHTML = ratingValue;
}