// FORM SUBMISSION SCRIPT FOR PORTFOLIO WEBSITE

document.addEventListener("DOMContentLoaded", function () {
  
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop form from refreshing

    // Collect form field values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // Simple validation
    if (!name || !email || !subject || !message) {
      showPopup("Please fill out all fields!", "error");
      return;
    }

    // Email format check
    if (!validateEmail(email)) {
      showPopup("Please enter a valid email address!", "error");
      return;
    }

    // Simulating form “sent”
    setTimeout(() => {
      showPopup("Your message has been sent successfully!", "success");
      form.reset();
    }, 800);
  });
});

// Email regex validation
function validateEmail(email) {
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return reg.test(email);
}

// Popup message function
function showPopup(message, type) {
  let popup = document.createElement("div");
  popup.className = `popup ${type}`;
  popup.innerText = message;

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.classList.add("visible");
  }, 100);

  setTimeout(() => {
    popup.classList.remove("visible");
    setTimeout(() => popup.remove(), 300);
  }, 3000);
}
