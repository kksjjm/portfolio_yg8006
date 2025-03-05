document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Form submission handler
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                company: document.getElementById('company').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Form validation
            if (!validateForm(formData)) {
                return;
            }
            
            // Simulate form submission (in a real project, this would send data to a server)
            simulateFormSubmission(formData);
        });
        
        // Input field animations and validation
        const formInputs = contactForm.querySelectorAll('input, textarea, select');
        
        formInputs.forEach(input => {
            // Focus events for styling
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
                
                // Simple validation on blur
                if (this.required && !this.value.trim()) {
                    this.parentElement.classList.add('error');
                } else {
                    this.parentElement.classList.remove('error');
                }
                
                // Email validation
                if (this.type === 'email' && this.value.trim()) {
                    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);
                    
                    if (!isValidEmail) {
                        this.parentElement.classList.add('error');
                    } else {
                        this.parentElement.classList.remove('error');
                    }
                }
            });
        });
    }
    
    // Form validation function
    function validateForm(formData) {
        let isValid = true;
        
        // Required fields
        if (!formData.name.trim() || !formData.email.trim() || !formData.subject || !formData.message.trim()) {
            showNotification('Please fill in all required fields.', 'error');
            isValid = false;
        }
        
        // Email validation
        if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            showNotification('Please enter a valid email address.', 'error');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Simulate form submission (in a real project, this would be an AJAX request)
    function simulateFormSubmission(formData) {
        // Show loading state
        const submitButton = document.querySelector('.submit-btn');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate server delay
        setTimeout(function() {
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Show success notification
            showNotification('Your message has been sent successfully! We will contact you soon.', 'success');
        }, 1500);
    }
    
    // Notification function
    function showNotification(message, type) {
        // Check if notification container exists, if not create it
        let notificationContainer = document.querySelector('.notification-container');
        
        if (!notificationContainer) {
            notificationContainer = document.createElement('div');
            notificationContainer.className = 'notification-container';
            document.body.appendChild(notificationContainer);
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Add close button
        const closeButton = document.createElement('button');
        closeButton.className = 'notification-close';
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', function() {
            notification.remove();
        });
        
        notification.appendChild(closeButton);
        
        // Add to container
        notificationContainer.appendChild(notification);
        
        // Auto-remove after 5 seconds
        setTimeout(function() {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }
    
    // Add notification styles if not already in the document
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification-container {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
            }
            
            .notification {
                background-color: #fff;
                border-left: 4px solid #000;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                padding: 15px 40px 15px 15px;
                margin-bottom: 10px;
                position: relative;
                min-width: 280px;
                max-width: 400px;
                font-size: 14px;
                line-height: 1.5;
                transition: transform 0.3s ease, opacity 0.3s ease;
                transform: translateX(100%);
                opacity: 0;
            }
            
            .notification.success {
                border-left-color: #4CAF50;
            }
            
            .notification.error {
                border-left-color: #F44336;
            }
            
            .notification-close {
                position: absolute;
                top: 10px;
                right: 10px;
                background: none;
                border: none;
                font-size: 18px;
                cursor: pointer;
                color: #999;
            }
            
            /* Animation */
            .notification-container .notification {
                animation: slideIn 0.3s forwards;
            }
            
            @keyframes slideIn {
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        
        document.head.appendChild(style);
    }
});