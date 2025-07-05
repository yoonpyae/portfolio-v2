// Spotlight effect for cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
});

// Smooth scroll to contact section
document.querySelector('.contact-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('contact-section').scrollIntoView({
        behavior: 'smooth'
    });
});

// Form handling with EmailJS
document.addEventListener("DOMContentLoaded", function() {
    // Initialize EmailJS
    emailjs.init("9c9UABgvXx_XjFIfd"); 
    
    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
            submitBtn.disabled = true;
            
            // Send email
            emailjs.sendForm("service_5buonrg", "template_5gqsi34", this)
                .then(() => {
                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'alert alert-success mt-3';
                    successMessage.textContent = 'Message sent successfully!';
                    this.parentNode.insertBefore(successMessage, this.nextSibling);
                    
                    // Reset form
                    this.reset();
                    
                    // Reset button
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    
                    // Remove success message after 5 seconds
                    setTimeout(() => {
                        successMessage.remove();
                    }, 5000);
                })
                .catch(() => {
                    // Show error message
                    const errorMessage = document.createElement('div');
                    errorMessage.className = 'alert alert-danger mt-3';
                    errorMessage.textContent = 'Failed to send message. Please try again.';
                    this.parentNode.insertBefore(errorMessage, this.nextSibling);
                    
                    // Reset button
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    
                    // Remove error message after 5 seconds
                    setTimeout(() => {
                        errorMessage.remove();
                    }, 5000);
                });
        });
    }
});

// Initialize AOS animations
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Handle video hover effects if videos are present
const videos = document.querySelectorAll('video');
if (videos.length > 0) {
    videos.forEach(video => {
        video.addEventListener("mouseover", function() {
            this.play();
        });
        video.addEventListener("mouseout", function() {
            this.pause();
        });
    });
}