// js/contact.js
document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const contactForm = document.getElementById('contactForm');
    const subjectSelect = document.getElementById('subject');
    const messageTextarea = document.getElementById('message');
    
    // Check for selected car from fleet page
    const selectedCar = localStorage.getItem('selectedCar');
    
    if (selectedCar) {
        // Auto-set reservation and pre-fill message
        subjectSelect.value = 'reservation';
        messageTextarea.value = `I would like to book the ${selectedCar}.\n\nAdditional details: `;
        
        // Highlight the reservation option
        subjectSelect.classList.add('reservation-selected');
        
        // Clear the stored value
        localStorage.removeItem('selectedCar');
        
        // Smooth scroll to form after short delay
        setTimeout(() => {
            const contactContainer = document.querySelector('.contact-container');
            if (contactContainer) {
                contactContainer.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 300);
    }

    // Form submission handler
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Add any form validation here if needed
            console.log('Form submitted - add validation or AJAX if required');
            
            // Form will proceed with normal submission to confirmation.html
        });
    }
});

// Add to contact.js
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    if (!name || !email) {
        alert('Please fill in all required fields');
        return false;
    }
    return true;
}
