// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const form = document.getElementById('appointmentForm');
    const successMessage = document.getElementById('successMessage');
    
    if(form) {
        form.addEventListener('submit', function(e) {
            // Prevent default form submission
            e.preventDefault();
            
            // Show success message
            successMessage.style.display = 'block';
            
            // Reset form
            form.reset();
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // For production: Uncomment and add your form processing URL
            /*
            fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    successMessage.style.display = 'block';
                    form.reset();
                } else {
                    alert('There was a problem with your submission. Please try again.');
                }
            })
            .catch(error => {
                alert('There was an error submitting the form. Please try again.');
            });
            */
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Card hover effect
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Feature hover effect
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            feature.style.transform = 'translateY(-10px)';
        });
        
        feature.addEventListener('mouseleave', () => {
            feature.style.transform = 'translateY(0)';
        });
    });
});