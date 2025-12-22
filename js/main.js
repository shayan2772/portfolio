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

// --- Skill Tree Interaction ---
const skillNodes = document.querySelectorAll('.skill-node');

skillNodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
        gsap.to(node, { scale: 1.1, duration: 0.3, ease: "back.out(1.7)" });
    });

    node.addEventListener('mouseleave', () => {
        gsap.to(node, { scale: 1, duration: 0.3 });
    });
});


// --- Custom Cursor & Magnetic Interactions ---
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
const magneticButtons = document.querySelectorAll('a, button, .bento-card, .project-card, .skill-node');

// Move Cursor
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX - 8, y: e.clientY - 8, duration: 0.1 });
    gsap.to(follower, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.3 });
});

// Magnetic Effect
magneticButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 0, duration: 0.2 });
        gsap.to(follower, { scale: 1.5, borderColor: 'rgba(255, 255, 255, 0.8)', duration: 0.2 });
    });

    btn.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, duration: 0.2 });
        gsap.to(follower, { scale: 1, borderColor: 'rgba(255, 255, 255, 0.3)', x: 0, y: 0, duration: 0.2 });
        gsap.to(btn, { x: 0, y: 0, duration: 0.2 });
    });

    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Move the button slightly towards the cursor
        gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.2 });
        // Move the follower towards the cursor more strongly
        gsap.to(follower, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.1 });
    });
});

// Hide default cursor
if (window.matchMedia("(pointer: fine)").matches) {
    document.body.style.cursor = 'none';
    magneticButtons.forEach(btn => btn.style.cursor = 'none');
}
