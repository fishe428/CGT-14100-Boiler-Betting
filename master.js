// master.js
// Handles the Account Setup -> Login -> Account Screen flow.

// Hard-coded credentials (per assignment requirements)
const CORRECT_EMAIL = "PayOutPete@purdude.edu";
const CORRECT_PASSWORD = "pilesofmoney$$$";

// LocalStorage keys
const LS_EMAIL_KEY = "bb_email";
const LS_POINTS_KEY = "bb_points";
const LS_SOUL_KEY = "bb_soul_sold";

document.addEventListener("DOMContentLoaded", function () {
  // ----- ACCOUNT-SETUP PAGE BUTTONS -----
  const btnMyPurdue = document.getElementById("btnMyPurdue");
  const btnCreditCard = document.getElementById("btnCreditCard");
  const btnNoSpeedrun = document.getElementById("btnNoSpeedrun");

  if (btnMyPurdue) {
    btnMyPurdue.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  }

  if (btnCreditCard) {
    btnCreditCard.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  }

  if (btnNoSpeedrun) {
    btnNoSpeedrun.addEventListener("click", () => {
      // If you don't have this page, you can change it later.
      window.location.href = "index.html";
    });
  }

  // ----- LOGIN FORM -----
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = (emailInput?.value || "").trim();
      const password = passwordInput?.value || "";

      if (email === CORRECT_EMAIL && password === CORRECT_PASSWORD) {
        // Save data so accountScreen.html can display it
        localStorage.setItem(LS_EMAIL_KEY, email);
        // Optional fun defaults
        localStorage.setItem(LS_POINTS_KEY, localStorage.getItem(LS_POINTS_KEY) || "0");
        localStorage.setItem(LS_SOUL_KEY, "Yes");

        if (errorMessage) errorMessage.textContent = "";
        window.location.href = "accountScreen.html";
      } else {
        if (errorMessage) {
          errorMessage.textContent = "Incorrect email or password. Please try again.";
        }
      }
    });
  }
});
