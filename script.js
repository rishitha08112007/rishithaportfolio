// Simple form submission handler (for future backend integration)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for your message, Rishitha will get back to you soon!");
    this.reset();
});
