// Navigation functionality
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Update nav active state
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.style.color = 'var(--text-dark)');

    // Scroll to top
    window.scrollTo(0, 0);
}

function showCaseStudy(caseStudyId) {
    // For separate pages, navigate to the case study page
    window.location.href = `case-studies/${caseStudyId}.html`;
}

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
        });
    }

    // Mobile menu toggle (basic implementation)
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Handle case study navigation for inline case studies
    const caseStudyCards = document.querySelectorAll('.case-study-card');
    caseStudyCards.forEach(card => {
        card.addEventListener('click', function() {
            const caseStudyId = this.getAttribute('onclick');
            if (caseStudyId && caseStudyId.includes('sample-project')) {
                // Extract the ID from onclick attribute
                const id = caseStudyId.match(/showCaseStudy\('([^']+)'\)/)[1];
                showCaseStudy(id);
            }
        });
    });
});