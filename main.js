// Show welcome message
function showMessage() {
  alert("Welcome to my portfolio! Feel free to explore.");
}

// Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", () => {
  /* -------------------------------------------------
   *  1. Highlight current page link
   * ------------------------------------------------- */
  const current = window.location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });

  /* -------------------------------------------------
   *  2. Contact‑form validation + fake submit
   * ------------------------------------------------- */
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const contactNumber = document.getElementById("contact").value.trim();
      const contactRegex = /^[0-9]{10}$/;

      if (!contactRegex.test(contactNumber)) {
        alert("Please enter a valid 10‑digit contact number.");
        return;
      }

      alert("Thank you for contacting me! I'll get back to you soon.");
      form.reset();
    });
  }

  /* -------------------------------------------------
   *  3. Smooth scroll for in‑page anchors
   * ------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* -------------------------------------------------
   *  4. Back‑to‑top button
   * ------------------------------------------------- */
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      backToTop.style.display = scrolled > 100 ? "block" : "none";
    });

    backToTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  }

  /* -------------------------------------------------
   *  5. Mobile hamburger menu
   * ------------------------------------------------- */
  const toggleBtn = document.getElementById("menu-toggle");
  const navMenu  = document.getElementById("nav-menu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }
});
