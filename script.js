// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initAnimations();
    initInteractions();
});

function initAnimations() {
    // Header animation on scroll
    gsap.to('.header', {
        // backgroundColor: 'rgba(255, 255, 255, 0.98)',
        // boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
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
    gsap.from('.section-header', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.features',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
    // Animate feature cards with stagger
    gsap.from('.feature-card', {
        duration: 0.8,
        y: 50,
        opacity: 100,
        scale: 0.95,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
            onEnter: () => {
                // Floating effect starts after entry
                gsap.to('.feature-card', {
                    y: -10,
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    stagger: 0.2
                });
            }
        }
    });

        // Connection section animations
    gsap.from('.connection-text', {
        duration: 1,
        x: -50,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.connection-section',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.from('.connection-phones .phone-mockup', {
        duration: 1.2,
        scale: 0.8,
        opacity: 0,
        rotation: 20,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.connection-phones',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
    // Connection features animation
    gsap.from('.connection-feature', {
        duration: 0.8,
        x: -30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.connection-features',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

}