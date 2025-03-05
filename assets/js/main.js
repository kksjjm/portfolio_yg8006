document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navigation = document.querySelector('.navigation');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navigation.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close navigation when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navigation') && !event.target.closest('.nav-toggle')) {
            if (navigation && navigation.classList.contains('active')) {
                navigation.classList.remove('active');
                navToggle.classList.remove('active');
            }
        }
    });

    // Portfolio grid item hover effect enhancement
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(function(item) {
        if (!item.classList.contains('logo-item')) {
            const overlay = item.querySelector('.overlay');
            const image = item.querySelector('img');
            
            // Touch device handling
            item.addEventListener('touchstart', function() {
                this.classList.toggle('touch-hover');
            });
            
            // Mouse movement parallax effect
            item.addEventListener('mousemove', function(e) {
                const xPos = (e.clientX / window.innerWidth) - 0.5;
                const yPos = (e.clientY / window.innerHeight) - 0.5;
                
                if (image) {
                    image.style.transform = `scale(1.05) translate(${xPos * 10}px, ${yPos * 10}px)`;
                }
                
                if (overlay) {
                    overlay.style.opacity = '1';
                    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
                }
            });
            
            // Reset on mouse leave
            item.addEventListener('mouseleave', function() {
                if (image) {
                    image.style.transform = '';
                }
                if (overlay) {
                    overlay.style.opacity = '';
                    overlay.style.backgroundColor = '';
                }
            });
        }
    });

    // Fade in animation for portfolio items
    function fadeInItems() {
        portfolioItems.forEach(function(item, index) {
            setTimeout(function() {
                item.style.opacity = 1;
            }, 100 * index);
        });
    }

    // Initialize with opacity 0
    portfolioItems.forEach(function(item) {
        item.style.opacity = 0;
        item.style.transition = 'opacity 0.5s ease';
    });

    // Trigger fade in animation when page is loaded
    window.addEventListener('load', fadeInItems);
});