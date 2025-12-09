
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
