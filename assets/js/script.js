//script.js

function toggleForm() {
    const contactForm = document.getElementById("contactForm");
    const contactButton = document.getElementById("contactButton");

    if (contactForm.style.display === "none") {
        contactForm.style.display = "block";
        contactButton.textContent = "Contattami";
    } else {
        contactForm.style.display = "none";
        contactButton.textContent = "Contattami";
    }
}