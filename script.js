
// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Close menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu close on link click
    const navLinksElements = document.querySelectorAll('.nav-links a');
    if (navLinksElements.length > 0) {
        navLinksElements.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    toggleMenu();
                }
            });
        });
    }

    // Create floating particles for homepage
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // Duplicate ticker content for seamless loop
    const tickerContent = document.querySelector('.ticker-content');
    if (tickerContent) {
        tickerContent.innerHTML += tickerContent.innerHTML;
    }
});

// Place Bet Function (for Place a Bet page)
function placeBet(team, odds) {
    const modal = document.getElementById('betModal');
    const betDetails = document.getElementById('betDetails');
    
    if (modal && betDetails) {
        betDetails.innerHTML = `
            <p><strong>Team:</strong> ${team}</p>
            <p><strong>Odds:</strong> ${odds}</p>
            <p><strong>Bet Amount:</strong> <input type="number" id="betAmount" placeholder="Enter amount" style="width: 100%; padding: 10px; margin-top: 10px; background: #2d2d2d; border: 1px solid #DAA520; color: #fff; border-radius: 5px;"></p>
        `;
        
        modal.classList.add('active');
    }
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('betModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Confirm Bet
function confirmBet() {
    const amountInput = document.getElementById('betAmount');
    
    if (!amountInput) return;
    
    const amount = amountInput.value;
    
    if (!amount || amount <= 0) {
        alert('Please enter a valid bet amount');
        return;
    }
    
    alert('Bet placed successfully! Amount: $' + amount);
    closeModal();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('betModal');
    if (event.target == modal) {
        closeModal();
    }
}

const CORRECT_EMAIL = "PayOutPete@purdude.edu";
const CORRECT_PASSWORD = "pilesofmoney$$$";
const REDIRECT_URL = "results.html";

document.addEventListener("DOMContentLoaded", function () {
  // ----- LOGIN FORM -----
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = emailInput.value.trim();
      const password = passwordInput.value;

      if (email === CORRECT_EMAIL && password === CORRECT_PASSWORD) {
        errorMessage.textContent = "";
        window.location.href = REDIRECT_URL;
      } else {
        errorMessage.textContent =
          "Incorrect email or password. Please try again.";
      }
    });
  }

  // ----- ACCOUNT-SETUP PAGE BUTTONS -----
  const btnMyPurdue = document.getElementById("btnMyPurdue");
  const btnCreditCard = document.getElementById("btnCreditCard");
  const btnNoSpeedrun = document.getElementById("btnNoSpeedrun");

  const LOGIN_PAGE_URL = "login.html";
  const NO_GAMBLE_URL = "no-gamble.html";

  if (btnMyPurdue) {
    btnMyPurdue.addEventListener("click", function () {
      window.location.href = LOGIN_PAGE_URL;
    });
  }

  if (btnCreditCard) {
    btnCreditCard.addEventListener("click", function () {
      window.location.href = LOGIN_PAGE_URL;
    });
  }

  if (btnNoSpeedrun) {
    btnNoSpeedrun.addEventListener("click", function () {
      window.location.href = NO_GAMBLE_URL;
    });
  }

  // ----- BET CONFIRM PAGE BUTTONS -----
  const btnBetYes = document.getElementById("btnBetYes");
  const btnBetNo = document.getElementById("btnBetNo");

  
  const BET_YES_URL = "results.html";       
  const BET_NO_URL = "account-setup.html";  

  if (btnBetYes) {
    btnBetYes.addEventListener("click", function () {
      window.location.href = BET_YES_URL;
    });
  }

  if (btnBetNo) {
    btnBetNo.addEventListener("click", function () {
      window.location.href = BET_NO_URL;
    });
  }
});

function signOut() {
  localStorage.removeItem("email");
  localStorage.removeItem("points");
  localStorage.removeItem("soulSold");
  window.location.href = "accountScreen.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const authAction = document.getElementById("authAction");
  if (!authAction) return; // only runs on pages that have the link

  const email = localStorage.getItem("email");
  const points = localStorage.getItem("points");
  const soulSold = localStorage.getItem("soulSold");

  // If you're already filling these, keep your existing code — this only handles the link.
  // (Optional) If you have these IDs on the page, this will keep working:
  const nameEl = document.getElementById("name");
  const pointsEl = document.getElementById("points");
  const soulEl = document.getElementById("soul");

  if (email) {
    // Logged in → show sign out
    authAction.textContent = "Sign out";
    authAction.href = "#";
    authAction.onclick = function (e) {
      e.preventDefault();
      signOut();
    };

    if (nameEl) nameEl.textContent = email;
    if (pointsEl) pointsEl.textContent = points || "0";
    if (soulEl) soulEl.textContent = soulSold || "Yes";
  } else {
    // Logged out → show sign in
    authAction.textContent = "Sign in";
    authAction.href = "accountsetup.html";
    authAction.onclick = null;
  }
});
