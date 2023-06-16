const forms = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

const users = JSON.parse(localStorage.getItem("users")) || [];

function validateLogin(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (
      (users[i].email === email || users[i].username === email) &&
      users[i].password === password
    ) {
      return true;
    }
  }

  return false;
}

forms.addEventListener("submit", function (event) {
  event.preventDefault();

  emailError.textContent = "";
  passwordError.textContent = "";

  const email = emailInput.value;
  const password = passwordInput.value;
  if (validateLogin(email, password)) {
    sessionStorage.setItem("userEmail", email);
    sessionStorage.setItem("isLoggedIn", true);

    Swal.fire("Success!", "You have successfully logged in!", "success");
    window.location.href = "index.html";
  } else {
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
