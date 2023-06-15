// Get the form and input elements
const regisForm = document.getElementById("register-form");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const genderInput = document.getElementById("gender");
const passwordInput = document.getElementById("password");
const termsInput = document.getElementById("terms");

// Load existing users from localStorage
let users = JSON.parse(localStorage.getItem("users")) || [];

// Add event listener to the form submission
regisForm.addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Validate the input
  const emailError = validateEmail(emailInput.value);
  const phoneError = validatePhoneNumber(phoneInput.value);
  const genderError = validateGender(genderInput.value);
  const passwordError = validatePassword(passwordInput.value);

  // If there are errors, display them and highlight the input fields
  if (emailError) {
    showError(emailError, emailInput);
  } else {
    removeError(emailInput);
  }
  if (phoneError) {
    showError(phoneError, phoneInput);
  } else {
    removeError(phoneInput);
  }
  if (genderError) {
    showError(genderError, genderInput);
  } else {
    removeError(genderInput);
  }
  if (passwordError) {
    showError(passwordError, passwordInput);
  } else {
    removeError(passwordInput);
  }

  // If there are no errors, store the data in the users array and in localStorage
  if (!emailError && !phoneError && !genderError && !passwordError) {
    // Generate a unique ID for the user
    const id = generateUniqueId();

    // Create an object with the user data
    const user = {
      id: id,
      email: emailInput.value,
      phone: phoneInput.value,
      gender: genderInput.value,
      password: passwordInput.value,
      terms: termsInput.checked,
    };

    // Add the user data to the users array
    users.push(user);

    // Store the users array in localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect to a success page
    Swal.fire(
      "Success!",
      "Your account has been successfully registered!",
      "success"
    );
    window.location.href = "index.html";
  }
});

// Function to validate the email format
function validateEmail(email) {
  if (!email) {
    return "Email is required";
  }
  if (!email.includes("@")) {
    return "Invalid email format";
  }
  return null;
}

// Function to validate the phone number format
function validatePhoneNumber(phone) {
  if (!phone) {
    return "Phone number is required";
  }
  if (phone.length < 10 && phone.isNaN) {
    return "Invalid phone number format";
  }
  return null;
}

// Function to validate the gender selection
function validateGender(gender) {
  if (!gender) {
    return "Gender is required";
  }
  return null;
}

// Function to validate the password length
function validatePassword(password) {
  if (!password) {
    return "Password is required";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters long";
  }
  return null;
}

function showError(error, input) {
  const errorElement = input.parentElement.querySelector(".error");

  removeError(input);

  errorElement.innerText = error;
  input.classList.add("error");
}

function removeError(input) {
  const errorElement = input.parentElement.querySelector(".error");
  errorElement.innerText = "";
  input.classList.remove("error");
}

function generateUniqueId() {
  let id;
  let customerId = 0;
  do {
    customerId++;
    id = "U" + customerId.toString().padStart(3, "0");
  } while (users.some((user) => user.id === id));
  return id;
}
