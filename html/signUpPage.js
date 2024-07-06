document.getElementById("signupForm").addEventListener("submit", function(event) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("ConfirmPassword").value;

    // Email validation using regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email address");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Password strength validation
    var passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!passwordPattern.test(password)) {
        alert("Password must have minimum 8 characters, one uppercase character, one number, and one special character");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Confirm password match validation
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // If all validations pass, the form will be submitted automatically
});
