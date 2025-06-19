// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    initInteractions();
});

function initAnimations() {
    // Header animation on scroll
    gsap.to('.header', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top -50px',
            end: 'bottom top',
            toggleActions: 'play none none reverse'
        }
    });

    // Hero section animations
    const heroTl = gsap.timeline();
    heroTl.from('.hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    })
    .from('.hero-description', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.cta-button', {
        duration: 0.6,
        y: 20,
        // opacity: 0,
        scale: 0.9,
        ease: 'back.out(1.7)'
    }, '-=0.3')
    .from('.hero-phone', {
        duration: 1.2,
        x: 100,
        opacity: 0,
        rotation: 10,
        ease: 'power3.out'
    }, '-=0.8');

    // Phone mockup floating animation
    gsap.to('.hero-phone .phone-mockup', {
        y: -20,
        duration: 3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
    });

}
