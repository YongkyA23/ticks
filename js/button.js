const registerButton = document.querySelector(".register-button");
const loginButton = document.querySelector(".login-button");
const navbar = document.querySelector(".login-regis");

if (sessionStorage.getItem("isLoggedIn")) {
  // User is logged in
  const userEmail = sessionStorage.getItem("userEmail");

  // Create a new button with the user's email and dropdown menu
  const buttonHTML = `
    <div class="dropdown">
      <button type="menu" class="nav-button">${userEmail}</button>
      <div class="dropdown-content">
        <a href="#" id="logout-button">Logout</a>
      </div>
    </div>
  `;

  // Replace the register and login buttons with the new button
  navbar.innerHTML = buttonHTML;

  // Add a click event listener to the logout button
  const logoutButton = document.querySelector("#logout-button");
  logoutButton.addEventListener("click", () => {
    // Remove the isLoggedIn and userEmail keys from sessionStorage
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("userEmail");

    // Reload the page to update the buttons
    window.location.reload();
  });
} else {
  // User is not logged in
  registerButton.innerHTML = '<a href="register.html">Register</a>';
  loginButton.innerHTML = '<a href="login.html">Login</a>';
}
