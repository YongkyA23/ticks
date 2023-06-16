const forms = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

// Retrieve the user accounts from localStorage
const users = JSON.parse(localStorage.getItem("users")) || [];

// Function to validate login credentials
function validateLogin(email, password) {
  // Loop through the user accounts array
  for (let i = 0; i < users.length; i++) {
    // Check if the email or username and password match any of the user accounts
    if (
      (users[i].email === email || users[i].username === email) &&
      users[i].password === password
    ) {
      // Return true if a match is found
      return true;
    }
  }
  // Return false if no match is found
  return false;
}

// Event listener to validate login credentials and prevent form submission
forms.addEventListener("submit", function (event) {
  event.preventDefault();
  // Reset error messages
  emailError.textContent = "";
  passwordError.textContent = "";
  // Retrieve the email and password entered by the user
  const email = emailInput.value;
  const password = passwordInput.value;
  if (validateLogin(email, password)) {
    sessionStorage.setItem("userEmail", email);
    sessionStorage.setItem("isLoggedIn", true);
    // Redirect to the dashboard or home page if the login credentials are valid
    window.location.href = "index.html";
  } else {
    // Display an error message if the login credentials are invalid
    if (!email || !password) {
      if (!email) {
        emailError.textContent = "Please enter your email";
      }
      if (!password) {
        passwordError.textContent = "Please enter your password";
      }
    } else {
      emailError.textContent = "Invalid email or password";
    }
  }
});
