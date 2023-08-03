// JavaScript per gestire l'apertura e la chiusura del form
document.getElementById("openFormButton").addEventListener("click", function() {
    document.getElementById("contactForm").style.display = "block";
  });
  
  document.getElementById("closeFormButton").addEventListener("click", function() {
    document.getElementById("contactForm").style.display = "none";
  });
  