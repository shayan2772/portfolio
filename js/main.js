// Initialize Lenis for Smooth Scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Animations
const heroTimeline = gsap.timeline();

heroTimeline.from('.reveal-text', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'power3.out',
    delay: 0.2
})
    .from('.reveal-img', {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.8');

// Section Headers
gsap.utils.toArray('.reveal-header').forEach(header => {
    gsap.from(header, {
        scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
});

// Bento Cards Stagger
gsap.from('.bento-card', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 70%'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power2.out'
});

// Project Cards
gsap.utils.toArray('.project-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });
});

// Magnetic Buttons (Optional Polish)
const buttons = document.querySelectorAll('a[href^="#"], button');
buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
            duration: 0.3,
            x: x * 0.1,
            y: y * 0.1,
            ease: 'power2.out'
        });
    });

    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            duration: 0.3,
            x: 0,
            y: 0,
            ease: 'power2.out'
        });
    });
});
