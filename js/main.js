
// DOM Elements
const heroBg = document.getElementById('hero-bg');
const orbs = document.querySelectorAll('.glowing-orb');

// 1. Hero Background Parallax
window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    if (heroBg && window.scrollY < window.innerHeight) {
        const x = (window.innerWidth - posX * 2) / 25;
        const y = (window.innerHeight - posY * 2) / 25;

        orbs.forEach((orb, index) => {
            const factor = index === 0 ? 1 : -1;
            orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        });
    }
});

// 2. Magnetic Buttons
const magnets = document.querySelectorAll('.hover-magnetic');
magnets.forEach((magnet) => {
    magnet.addEventListener('mousemove', (e) => {
        const rect = magnet.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        magnet.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    magnet.addEventListener('mouseleave', () => {
        magnet.style.transform = 'translate(0, 0)';
    });
});

// 3. Process Flip Cards
const flipCards = document.querySelectorAll('.process-card');
flipCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});


// 4. Scroll Animation (IntersectionObserver)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.fade-in-up');
hiddenElements.forEach(el => observer.observe(el));


// 5. Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// 6. Contact Form Handling
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Sending...';
        btn.style.opacity = '0.7';

        // Simulate network request
        setTimeout(() => {
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';

            // Optional: Confetti or success sound could go here
        }, 1500);
    });
}
