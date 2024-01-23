document.addEventListener("DOMContentLoaded", function() {
    // Handle the contact form submission
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Basic validation (you can expand on this with more complex checks)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.trim() === ''  email.trim() === ''  message.trim() === '') {
            displayFormMessage('Please fill in all fields.', false);
            return;
        }

        // Simulate form submission (In real scenario, you would send this to a server)
        console.log('Form Submitted!', { name, email, message });
        displayFormMessage('Your message has been sent!', true);
        
        // Reset the form after submission
        contactForm.reset();
    });

    // Function to display form messages
    function displayFormMessage(msg, isSuccess) {
        formMessage.textContent = msg;
        formMessage.className = 'form-message'; // Reset classes
        formMessage.classList.add(isSuccess ? 'success' : 'error');
    }
});
