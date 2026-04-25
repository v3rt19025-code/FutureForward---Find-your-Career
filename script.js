/* ============================================
   SMOOTH SCROLL NAVIGATION
   ============================================ */

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/* ============================================
   DROPDOWN MENU TOGGLE
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const navDropdown = document.querySelector('.nav-dropdown');
    
    if (dropdownToggle && navDropdown) {
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            navDropdown.classList.toggle('active');
        });
        
        // Close dropdown when a link is clicked
        const dropdownLinks = navDropdown.querySelectorAll('.dropdown-menu a');
        dropdownLinks.forEach(link => {
            link.addEventListener('click', () => {
                navDropdown.classList.remove('active');
            });
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (navDropdown && !navDropdown.contains(e.target)) {
            navDropdown.classList.remove('active');
        }
    });
});

/* ============================================
   CTA BUTTON HANDLER
   ============================================ */

function handleStartNow() {
    // This would normally redirect to your app
    console.log('Starting the journey...');
    alert('Welcome to FutureForward! This is where the magic begins. 🚀\n\nRedirecting to the assessment...');
    // Uncomment the line below when you have your app ready
    // window.location.href = '/app';
}

/* ============================================
   INTERSECTION OBSERVER - FADE IN ANIMATIONS
   ============================================ */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .demo-card, .stat');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(element);
    });
});

/* ============================================
   SMOOTH SCROLL BEHAVIOR
   ============================================ */

// Add active state to navigation links based on scroll position
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

/* ============================================
   BUTTON HOVER EFFECTS
   ============================================ */

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

/* ============================================
   NUMBER COUNT-UP ANIMATION
   ============================================ */

function animateCountUp(element, duration = 1500) {
    const target = parseInt(element.getAttribute('data-target'), 10);
    let current = 0;
    const increment = target / (duration / 16); // ~60fps
    const easeOutQuad = (t) => t * (2 - t); // Easing function for smooth deceleration
    
    const startTime = Date.now();
    
    const update = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutQuad(progress);
        
        current = Math.floor(target * eased);
        element.textContent = current + '%';
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target + '%';
        }
    };
    
    requestAnimationFrame(update);
}

function animateCounter(element, duration = 1500) {
    const target = parseInt(element.getAttribute('data-target'), 10);
    const type = element.getAttribute('data-type') || 'number';
    let current = 0;
    const easeOutQuad = (t) => t * (2 - t);
    
    const startTime = Date.now();
    
    const formatValue = (value) => {
        switch(type) {
            case 'percent':
                return value + '%';
            case 'currency':
                return value.toLocaleString();
            case 'currency-k':
                return value.toLocaleString();
            default:
                return value.toLocaleString();
        }
    };
    
    const update = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutQuad(progress);
        
        current = Math.floor(target * eased);
        element.textContent = formatValue(current);
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = formatValue(target);
        }
    };
    
    requestAnimationFrame(update);
}

// Observe stat numbers for count-up animation
document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    const animatedNumbers = new Set();
    
    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animatedNumbers.has(entry.target)) {
                animatedNumbers.add(entry.target);
                animateCountUp(entry.target);
                numberObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    });
    
    statNumbers.forEach(number => numberObserver.observe(number));
});

// Observe demo counters for count-up animation
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter[data-target]');
    const animatedCounters = new Set();
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animatedCounters.has(entry.target)) {
                animatedCounters.add(entry.target);
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    });
    
    counters.forEach(counter => counterObserver.observe(counter));
});

/* ============================================
   PREVENT SCROLL JANK
   ============================================ */

let scrollTimeout;
window.addEventListener('scroll', () => {
    window.clearTimeout(scrollTimeout);
    document.body.style.scrollBehavior = 'auto';
    
    scrollTimeout = setTimeout(() => {
        document.body.style.scrollBehavior = 'smooth';
    }, 150);
});

/* ============================================
   ACCESSIBILITY - KEYBOARD NAVIGATION
   ============================================ */

document.addEventListener('keydown', (e) => {
    // Skip to main content with Skip key
    if (e.key === 's' && e.ctrlKey) {
        e.preventDefault();
        const mainContent = document.querySelector('.hero') || document.querySelector('.container');
        if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    // Quick navigation with arrow keys
    if (e.key === 'ArrowDown') {
        window.scrollBy({ top: 100, behavior: 'smooth' });
    }
    if (e.key === 'ArrowUp') {
        window.scrollBy({ top: -100, behavior: 'smooth' });
    }
});

console.log('FutureForward homepage initialized ✨');
