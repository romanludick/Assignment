// scripts/contact.js
document.addEventListener('DOMContentLoaded', function() {
    // Check if coming from fleet page with a selected car
    const selectedCar = localStorage.getItem('selectedCar');
    
    if (selectedCar) {
        // Pre-fill the form
        const subjectField = document.getElementById('subject');
        const messageField = document.getElementById('message');
        
        if (subjectField) subjectField.value = 'reservation';
        if (messageField) messageField.value = `I would like to book the ${selectedCar}.\n\nAdditional details: `;
        
        // Clear the stored value
        localStorage.removeItem('selectedCar');
        
        // Scroll to the form
        const contactContainer = document.querySelector('.contact-container');
        if (contactContainer) {
            contactContainer.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
});
