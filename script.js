// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ accordion functionality
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', function() {
        const isActive = this.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(faq => {
            faq.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            this.classList.add('active');
        }
    });
});

// CTA Form submission handler
document.getElementById('cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value.trim();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
        alert('Please enter your email address');
        return;
    }
    
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Success message
    alert('Thank you for your interest! I will contact you soon at ' + email);
    
    // Clear the input
    emailInput.value = '';
    
    // In production, you would send this to your backend/email service
    // Example:
    // fetch('/api/submit-contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email: email })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     alert('Thank you! Check your email for confirmation.');
    //     emailInput.value = '';
    // })
    // .catch(error => {
    //     alert('Something went wrong. Please try again or contact directly.');
    // });
});

// Add enter key support for email input
document.getElementById('email-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('cta-button').click();
    }
});

// Intersection Observer for animation on scroll (optional enhancement)
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

// Observe sections for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Set first section (hero) to be visible immediately
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle (for future mobile menu implementation)
// Uncomment and use if you add a mobile menu button
/*
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}
*/

// Prevent default form submission (if you add actual forms later)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
    });
});

// Add loading state for CTA button
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.textContent = 'Submitting...';
        button.style.opacity = '0.7';
    } else {
        button.disabled = false;
        button.textContent = 'Get Started Free →';
        button.style.opacity = '1';
    }
}

// Log page views (for analytics - replace with your analytics code)
window.addEventListener('load', function() {
    console.log('Landing page loaded successfully');
    
    // Example: Google Analytics
    // gtag('event', 'page_view', {
    //     page_title: 'Landing Page',
    //     page_location: window.location.href
    // });
});

// Track CTA clicks (for analytics)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        console.log('CTA clicked:', buttonText);
        
        // Example: Google Analytics event tracking
        // gtag('event', 'cta_click', {
        //     'event_category': 'engagement',
        //     'event_label': buttonText
        // });
    });
});

// Track FAQ interactions
document.querySelectorAll('.faq-item').forEach((item, index) => {
    item.addEventListener('click', function() {
        const question = this.querySelector('.faq-question').textContent.trim();
        console.log('FAQ opened:', question);
        
        // Example: Analytics tracking
        // gtag('event', 'faq_interaction', {
        //     'event_category': 'engagement',
        //     'event_label': question
        // });
    });
});

// Add smooth reveal animation for result cards
window.addEventListener('scroll', function() {
    const resultCards = document.querySelectorAll('.result-card');
    
    resultCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight - 50) {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
});

// Initialize result cards with hidden state
document.addEventListener('DOMContentLoaded', function() {
    const resultCards = document.querySelectorAll('.result-card');
    resultCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});

// Add hover effect sound (optional - uncomment if you want sound effects)
/*
const hoverSound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZSBAQV6zn77BdGAg+ltzzxnMpBSl+zPLaizsIGGS57OihUBELTKXh8bllHAU2jdXzyn0vBSF1xe/glEILElyx6O2nVhYKQ5zd8sFuJAUuhM/z1YU2Bhxqvu7mnEoPEVOo5O+zYBoGPJPY88p2KwUme8rx3I4+CRZiturqpVITC0mi4PK8aB8GM4nU8tGAMgYfcsLu45ZFDBFYr+ftrVoXCkCY3PLEcSYELIHO8diJOQgZaLvt559NEAxPqOPwtmMcBjiP1/PMeS0GI3fH8N2RQAoUXrTp66hVFApGnt/yvmwhBTCG0fPTgjQGHW/A7eSaRxAQVqzn77BdGQc9ltvzxnUoBCl+zPDaizsIGGS56+mjTxELTKXh8bllHAU1jdXzykAuBSJ0xe/glEILElyx6O2nVhYKQ5zd8sFuJAUug8/z1oU2Bhxqvu3mnEoPEVOo5O+zYRsGPJPY88p3KgUme8rx3I4+CRVht+rqpVITC0mh4fK8aiAFM4nU8tGAMgYfccPu45ZFDBFYrebtrVwWCkCY3PLEcSYGK4DN8tiIOQgZZ7zs55xODwxPqOPxtmIcBjiP1/PMeywGI3fH8N+RQAoUXrTp66hVFApGnt/yv2wiBDCG0fPTgjQGHW/A7eSaSBAQVqzn77BeGAc9ltzzxnUoBSh+zPDaizsIGGS56+mjUBELTKXh8blmHAU1jdXzykAuBSF0xe/glEILElyx6O2nVhYKQ5zd8sFuJAUug8/z1oU2Bhxqvu3mnEwPD1On5O+zYRsGPJPY88p3KgUme8rx3I4+CRVht+rqpVMSC0mh4fK8aiAFM4nU8tGAMgYfccPu45ZFDBFYrebtrVwWCj+Y3PLEcSYGK4DN8tiIOQgZZ7zs55xODwxPp+PxtmIcBjiP1/PMeywGI3fH8N+RQAoUXrPq66hWEwlGnt/yv2wiBDCG0fPTgjQGHW/A7eSaSBAQVqvn77BeGAc9ltzzxnUpBSh+zPDaizsIGGS56+mjUBELTKXh8blmHAU1jdXzykAuBSF0xe/glEILElyx6O2nVhYKQ5zd8sFuJAUug8/z1oU2Bhxqvu3mnEwPD1On5O+zYRsGO5PY88p3KgUme8rx3I4+CRVht+rqpVMSC0mh4fK8aiAFM4nU8tGAMgYfccPu45ZFDBFYrebtrVwWCj+Y3PLEcSYGK4DN8tiIOQgZZ7zs55xODwxPp+PxtmIcBjiP1/PMeywGI3fH8N+RQAoUXrPq66hWEwlGnt/yv2wiBDCG0fPTgjQGHW/A7eSaSBAQVqvn77BeGAc9ltzzxnUpBSh+zPDaizsIGGS56+mjUBELTKXh8blmHAU1jdXzykAuBSF0xe/glEILElyx6O2nVhYKQ5zd8sFuJAUug8/z1oU2Bhxqvu3mnEwPD1On5O+zYRsGO5PY88p3KgUme8rx3I4+CRVht+rqpVMSC0mh4fK8aiAFM4nU8tGAMgYfccPu45ZFDBFYrebtrVwWCj+Y3PLEcSYGK4DN8tiIOQgZZ7zs55xODwxPp+PxtmIcBjiP1/PMeywGI3fH8N+RQAoUXrPq66hWEwlGnt/yv2wiBDCG0fPTgjQGHW/A7eSaSBAQVqvn77BeGAc9ltzzxnUpBSh+zPDaizsIGGS56+mjUBELTKXh8blmHAU1jdXzykAuBSF0xe/glEILElyx6O2nVhYKQ5zd8sFuJAUug8/z1oU2Bhxqvu3mnEwPD1On5O+zYRsGO5PY88p3KgUme8rx3I4+CRVht+rqpVMSC0mh4fK8aiAFM4nU8tGAMgYfccPu45ZFDBFYrebtrVwWCj+Y3PLEcSYGK4DN8tiIOQgZZ7zs55xODwxPp+PxtmIcBjiP1/PMeywGI3fH8N+RQAoUXrPq66hWEwlGnt/yv2wiBDCG0fPTgjQGHW/A7eSaSBAQVqvn77BeGAc9ltzzxnUpBSh+zPDaizsIGGS56+mjUBELTKXh8blmHAU1jdXzykAuBSF0xe/glEILElyx6O2nVhYKQ5zd8sFuJAUug8/z1oU2Bhxqvu3mnEwPD1On5O+zYRsGO5PY88p3KgUme8rx3I4+CRVht+rqpVMSC0mh4fK8aiAFM4nU8tGAMgYfccPu45ZFDBFYrebtrVwWCj+Y3PLEcSYGK4DN8tiIOQgZZ7zs55xODwxPp+PxtmIcBjiP1/PMeywGI3fH8N+RQAoUXrPq66hWEwlGnt/yv2wiBDCG0fPTgjQGHW/A7eSaSBAQVqvn77BeGAc9ltzzxnUpBSh+zPDaizsIGGS56+mjUBELTKXh8blmHAU1jdXzykAuBSF0xe/glEILElyx6O2nVhYKQ5zd8sFuJAUug8/z1oU2Bhxqvu3mnEwPD1On5O+zYRsGO5PY88p3KgUme8rx3I4+CRVht+rqpVMSC0mh4fK8aiAFM4nU8tGAMgYfccPu45ZFDBFYrebtrVwWCj+Y3PLEcSYGK4DN8tiIOQgZZ7zs55xODwxPp+PxtmIcBjiP1/PMeywGI3fH8N+RQAoUXrPq66hWEwlGnt/yv2wiBDCG0fPTgjQGHW/A7eSaSBAQVqvn77BeGAc9ltzzxnUpBSh+zPDaizsIGGS56+mjUBELTKXh8blmHAU1jdXzykAuBSF0xe/glEILElyx6O2nVhYKQ5zd8sFuJAUug8/z1oU2Bhxqvu3mnEwPD1On5O+zYRsGO5PY88p3KgUme8rx3I4+CRVht+rqpVMSC0mh4fK8aiAFM4nU8tGA');

document.querySelectorAll('.service-card, .result-card, .testimonial-card').forEach(element => {
    element.addEventListener('mouseenter', function() {
        hoverSound.currentTime = 0;
        hoverSound.play().catch(e => console.log('Audio play failed:', e));
    });
});
*/

console.log('Landing page scripts loaded successfully!');
