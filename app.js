
        // DOM Elements
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        const mainHeader = document.getElementById('mainHeader');
        const androidDownloadBtn = document.getElementById('androidDownloadBtn');
        const androidModal = document.getElementById('androidModal');
        const closeModal = document.getElementById('closeModal');
        const cancelDownload = document.getElementById('cancelDownload');
        const downloadApkBtn = document.getElementById('downloadApkBtn');
        const currentYear = document.getElementById('currentYear');
        const newsletterForm = document.getElementById('newsletterForm');
        
        // Mobile menu toggle
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
        });
        
        // Android download modal
        androidDownloadBtn.addEventListener('click', (e) => {
            if (androidDownloadBtn.hasAttribute('download')) {
                return;
            }
            e.preventDefault();
            androidModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        // Close modal
        const closeModalFunc = () => {
            androidModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        };
        
        closeModal.addEventListener('click', closeModalFunc);
        cancelDownload.addEventListener('click', closeModalFunc);
        
        // Close modal when clicking outside
        androidModal.addEventListener('click', (e) => {
            if (e.target === androidModal) {
                closeModalFunc();
            }
        });
        
        // Animated counter for stats
        const animateCounter = () => {
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-count');
                const increment = target / 50;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current);
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
            });
        };
        
        // Scroll animation
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('animated');
                    
                    // If this is the stats section, animate counters
                    if (element.querySelector('.stat-number')) {
                        setTimeout(animateCounter, 300);
                    }
                }
            });
        };
        
        // Initialize scroll animation
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
        
        // Set current year in footer
        currentYear.textContent = new Date().getFullYear();
        
        // Newsletter form submission
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('.newsletter-input');
            if (emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
        
        // Initialize with some elements already animated
        document.addEventListener('DOMContentLoaded', () => {
            // Animate hero elements immediately
            document.querySelectorAll('.hero .animate-on-scroll').forEach(el => {
                el.classList.add('animated');
            });
            
            // Start counter animation after a short delay
            setTimeout(animateCounter, 800);
        });
