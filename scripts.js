document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("status");

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields.";
    status.style.color = "red";
    return;
  }

  // Simulated sending behavior
  status.textContent = "Sending...";
  setTimeout(() => {
    status.textContent = "Thank you! Your message has been received.";
    status.style.color = "green";
    document.getElementById("contact-form").reset();
  }, 1500);
});
