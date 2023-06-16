const regisForm = document.getElementById("lr-form");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const genderInput = document.getElementById("gender");
const passwordInput = document.getElementById("password");
const termsInput = document.getElementById("terms");

let users = JSON.parse(localStorage.getItem("users")) || [];

regisForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailError = validateEmail(emailInput.value);
  const phoneError = validatePhoneNumber(phoneInput.value);
  const genderError = validateGender(genderInput.value);
  const passwordError = validatePassword(passwordInput.value);

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

  if (!emailError && !phoneError && !genderError && !passwordError) {
    const id = generateUniqueId();

    const user = {
      id: id,
      email: emailInput.value,
      phone: phoneInput.value,
      gender: genderInput.value,
      password: passwordInput.value,
      terms: termsInput.checked,
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    Swal.fire(
      "Success!",
      "Your account has been successfully registered!",
      "success"
    );
    window.location.href = "login.html";
  }
});

function validateEmail(email) {
  if (!email) {
    return "Email is required";
  }
  if (!email.includes("@")) {
    return "Invalid email format";
  }
  return null;
}

function validatePhoneNumber(phone) {
  if (!phone) {
    return "Phone number is required";
  }
  if (phone.length < 10 && phone.isNaN) {
    return "Invalid phone number format";
  }
  return null;
}

function validateGender(gender) {
  if (!gender) {
    return "Gender is required";
  }
  return null;
}

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
