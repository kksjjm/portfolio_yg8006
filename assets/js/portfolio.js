document.addEventListener('DOMContentLoaded', function() {
    // Get the project ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    // If no project ID is provided, redirect to the main page
    if (!projectId) {
        window.location.href = 'index.html';
        return;
    }
    
    // Sample project data (in a real application, this would come from a server/database)
    const projects = {
        'threespin-robot-mop': {
            title: 'THREESPIN | ROBOT MOP',
            category: 'Smart Device',
            year: '2023',
            client: 'ThreeSpin Technologies',
            service: 'Product Design, UX/UI Design',
            industry: 'Home Appliances',
            description: 'The THREESPIN ROBOT MOP represents a breakthrough in autonomous cleaning technology. This innovative device combines advanced navigation systems with efficient cleaning mechanisms to provide a hands-free cleaning experience for modern homes and offices.',
            mainImage: 'assets/img/portfolio/detail/threespin-main.jpg',
            galleryImages: [
                'assets/img/portfolio/detail/threespin-1.jpg',
                'assets/img/portfolio/detail/threespin-2.jpg',
                'assets/img/portfolio/detail/threespin-3.jpg',
                'assets/img/portfolio/detail/threespin-4.jpg'
            ],
            designProcess: 'The design process for the THREESPIN ROBOT MOP involved extensive research on user cleaning habits and pain points. We focused on creating a device that not only cleans efficiently but also integrates seamlessly into modern interiors. The distinctive triangular shape emerged from both functional requirements (optimizing corner cleaning) and aesthetic considerations (creating a unique silhouette in a market dominated by circular robots).',
            techSpecs: [
                'Dimensions: 340mm x 340mm x 85mm',
                'Weight: 2.8kg',
                'Battery: 5200mAh Lithium-ion',
                'Run Time: Up to 150 minutes',
                'Charging Time: 4 hours',
                'Noise Level: <65dB',
                'Water Tank Capacity: 300ml',
                'Smart App Control: iOS and Android compatible'
            ],
            prevProject: 'smart-camera',
            nextProject: 'everybot'
        },
        'everybot': {
            title: 'EVERYBOT',
            category: 'Smart Cleaning Device',
            year: '2023',
            client: 'Everybot Inc.',
            service: 'Product Design, Mechanical Engineering',
            industry: 'Home Appliances',
            description: 'EVERYBOT is a revolutionary cleaning robot designed for multi-surface cleaning. The product aims to simplify household chores by providing an all-in-one solution that can adapt to different floor types and cleaning requirements.',
            mainImage: 'assets/img/portfolio/detail/everybot-main.jpg',
            galleryImages: [
                'assets/img/portfolio/detail/everybot-1.jpg',
                'assets/img/portfolio/detail/everybot-2.jpg',
                'assets/img/portfolio/detail/everybot-3.jpg',
                'assets/img/portfolio/detail/everybot-4.jpg'
            ],
            designProcess: 'The EVERYBOT design process focused on versatility and ease of use. We conducted extensive testing with different surface materials to ensure optimal cleaning performance across various environments. The sleek, minimal design language was chosen to complement contemporary interior spaces while maintaining full functionality.',
            techSpecs: [
                'Dimensions: 320mm diameter x 90mm height',
                'Weight: 3.2kg',
                'Battery: 6000mAh Lithium-ion',
                'Run Time: Up to 180 minutes',
                'Charging Time: 3.5 hours',
                'Cleaning Modes: 5 programmable patterns',
                'Smart App Control: iOS and Android compatible',
                'Voice Control: Compatible with Google Assistant and Amazon Alexa'
            ],
            prevProject: 'threespin-robot-mop',
            nextProject: 'coffee-machine'
        },
        // Add more projects as needed
    };
    
    // Default project data in case the requested project is not found
    const defaultProject = {
        title: 'Project Not Found',
        category: 'Unknown',
        year: '',
        client: 'Unknown',
        service: 'Unknown',
        industry: 'Unknown',
        description: 'The requested project information could not be found.',
        mainImage: 'assets/img/portfolio/item1.jpg',
        galleryImages: [],
        designProcess: 'No design process information available.',
        techSpecs: ['No specifications available.'],
        prevProject: '',
        nextProject: ''
    };
    
    // Get the project data
    const project = projects[projectId] || defaultProject;
    
    // Update the page with project data
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectCategory').textContent = project.category;
    document.getElementById('projectYear').textContent = project.year;
    document.getElementById('projectDescription').textContent = project.description;
    document.getElementById('projectClient').textContent = project.client;
    document.getElementById('projectService').textContent = project.service;
    document.getElementById('projectIndustry').textContent = project.industry;
    document.getElementById('designProcess').textContent = project.designProcess;
    
    // Set the main image
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = project.mainImage;
        mainImage.alt = project.title;
    }
    
    // Add the tech specs
    const techSpecsList = document.getElementById('techSpecs');
    if (techSpecsList) {
        techSpecsList.innerHTML = '';
        project.techSpecs.forEach(spec => {
            const li = document.createElement('li');
            li.textContent = spec;
            techSpecsList.appendChild(li);
        });
    }
    
    // Add gallery images
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid && project.galleryImages && project.galleryImages.length > 0) {
        galleryGrid.innerHTML = '';
        project.galleryImages.forEach(imageSrc => {
            const div = document.createElement('div');
            div.className = 'gallery-image';
            
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = project.title;
            
            div.appendChild(img);
            galleryGrid.appendChild(div);
        });
    }
    
    // Set up navigation links
    const prevProjectLink = document.querySelector('.prev-project');
    const nextProjectLink = document.querySelector('.next-project');
    
    if (prevProjectLink && project.prevProject) {
        prevProjectLink.href = `portfolio-detail.html?id=${project.prevProject}`;
    } else if (prevProjectLink) {
        prevProjectLink.style.visibility = 'hidden';
    }
    
    if (nextProjectLink && project.nextProject) {
        nextProjectLink.href = `portfolio-detail.html?id=${project.nextProject}`;
    } else if (nextProjectLink) {
        nextProjectLink.style.visibility = 'hidden';
    }
    
    // Add smooth scroll behavior for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Image lazy loading
    const lazyImages = document.querySelectorAll('.gallery-image img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove('lazy');
                    imageObserver.unobserve(image);
                }
            });
        });
        
        lazyImages.forEach(image => {
            imageObserver.observe(image);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(image => {
            image.src = image.dataset.src;
            image.classList.remove('lazy');
        });
    }
});