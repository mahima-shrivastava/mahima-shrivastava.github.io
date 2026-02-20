/**
 * Portfolio Website JavaScript
 * Handles smooth scrolling, animations, and interactive elements
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Smooth Scrolling for Navigation Links
    // ============================================
    
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ============================================
    // Header Scroll Effect
    // ============================================
    
    // Header maintains fixed position and background while scrolling
    // No position or background changes on scroll
    
    // ============================================
    // Grid Icon – open/close navigation overlay
    // ============================================
    
    const gridIcon = document.querySelector('.grid-icon');
    const navOverlay = document.getElementById('nav-overlay');
    
    function openNav() {
        if (!navOverlay) return;
        navOverlay.classList.add('is-open');
        navOverlay.setAttribute('aria-hidden', 'false');
        gridIcon && gridIcon.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeNav() {
        if (!navOverlay) return;
        navOverlay.classList.remove('is-open');
        navOverlay.setAttribute('aria-hidden', 'true');
        gridIcon && gridIcon.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (gridIcon && navOverlay) {
        gridIcon.addEventListener('click', function() {
            if (navOverlay.classList.contains('is-open')) {
                closeNav();
            } else {
                openNav();
            }
        });
        
        navOverlay.addEventListener('click', function(e) {
            if (e.target === navOverlay) closeNav();
        });
        
        var closeBtn = document.getElementById('nav-overlay-close');
        if (closeBtn) closeBtn.addEventListener('click', closeNav);
        
        navOverlay.querySelectorAll('.nav-overlay-link').forEach(function(link) {
            link.addEventListener('click', function() {
                closeNav();
            });
        });
    }
    
    // ============================================
    // Chat Button Interaction
    // ============================================
    
    // Cup of UX? Let's Chat now links to LinkedIn (see index.html)
    
    // ============================================
    // Intersection Observer for Animations
    // ============================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for fade-in animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // ============================================
    // Case Study Card Interactions
    // ============================================
    
    const caseStudyCards = document.querySelectorAll('.case-study-card');
    
    caseStudyCards.forEach(card => {
        card.addEventListener('click', function() {
            // You can add navigation to case study pages here
            const title = this.querySelector('.case-study-title').textContent;
            console.log(`Opening case study: ${title}`);
            
            // Example: window.location.href = `/case-study/${title.toLowerCase().replace(/\s+/g, '-')}`;
        });
        
        // Add keyboard accessibility
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                this.click();
            }
        });
    });
    
    // ============================================
    // All Projects Link Interaction
    // ============================================
    
    const allProjectsCards = document.querySelectorAll('.all-projects-card');
    
    allProjectsCards.forEach(function(card) {
        card.addEventListener('click', function() {
            // You can add navigation to projects page here
            console.log('Navigate to all projects');
            // Example: window.location.href = '/projects';
        });
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // ============================================
    // PULLED Project Card Interaction
    // ============================================
    
    const pulledCard = document.querySelector('.pulled-project-card');
    const pulledArrow = document.querySelector('.pulled-project-card .arrow-circle');
    
    if (pulledCard && pulledArrow) {
        const handlePulledClick = function() {
            console.log('Opening PULLED project');
            // Example: window.location.href = '/projects/pulled';
        };
        
        pulledCard.addEventListener('click', handlePulledClick);
        pulledCard.setAttribute('tabindex', '0');
        pulledCard.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                handlePulledClick();
            }
        });
    }
    
    // ============================================
    // Skills Bar Scroll Animation
    // ============================================
    
    const skillsBar = document.querySelector('.skills-bar');
    
    if (skillsBar) {
        let isScrolling = false;
        
        window.addEventListener('scroll', function() {
            if (!isScrolling) {
                window.requestAnimationFrame(function() {
                    const rect = skillsBar.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                    
                    if (isVisible) {
                        skillsBar.style.opacity = '1';
                    }
                    
                    isScrolling = false;
                });
                
                isScrolling = true;
            }
        });
    }
    
    // ============================================
    // Contact Button Smooth Scroll
    // ============================================
    
    const contactBtn = document.querySelector('.contact-btn');
    
    if (contactBtn) {
        // If it's a link to LinkedIn, let it work normally
        // Otherwise, you can add custom behavior
        contactBtn.addEventListener('click', function(e) {
            // If href is set, let it navigate normally
            if (this.getAttribute('href') && this.getAttribute('href') !== '#') {
                return;
            }
            
            e.preventDefault();
            const contactSection = document.querySelector('.contact-section');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // ============================================
    // Console Welcome Message
    // ============================================
    
    console.log('%c👋 Welcome to Mahima Shrivastava\'s Portfolio!', 'font-size: 16px; color: #8b5cf6; font-weight: bold;');
    console.log('%cBuilt with vanilla HTML, CSS, and JavaScript', 'font-size: 12px; color: #b0b0b0;');
    
});
