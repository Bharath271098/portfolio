// Show welcome message
function showMessage() {
  alert("Welcome to my portfolio! Feel free to explore.");
}

// Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Highlight active nav link
window.addEventListener('DOMContentLoaded', () => {
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });
});

// Contact form submission handler
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent actual submission
      alert("Thank you for contacting me! I'll get back to you soon.");
      form.reset(); // Clear the form
    });
  }
});

// Smooth scroll for internal links (if you use #anchors)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Back to top button
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

form.addEventListener("submit", function (e) {
  const contactNumber = document.getElementById("contact").value;
  const contactRegex = /^[0-9]{10}$/;

  if (!contactRegex.test(contactNumber)) {
    e.preventDefault();
    alert("Please enter a valid 10-digit contact number.");
    return;
  }

  alert("Thank you for contacting me! I'll get back to you soon.");
  form.reset();
});

function toggleMenu() {
  document.querySelector(".mobile-nav").classList.toggle("active");
}

<script>
  const toggleBtn = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
</script>
