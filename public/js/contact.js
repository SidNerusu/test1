document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Here, you can add code to handle form submission, like sending an email or saving the contact form to a database
        alert('Your message has been sent!');
        contactForm.reset();
    });
});
