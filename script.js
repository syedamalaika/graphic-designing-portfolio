document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '1rem 0';
            header.style.background = 'rgba(5, 5, 5, 0.95)';
        } else {
            header.style.padding = '1.5rem 0';
            header.style.background = 'rgba(5, 5, 5, 0.8)';
        }
    });

    // 2. Intersection Observer for Reveal Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Initial styles for animation
    const revealElements = document.querySelectorAll('.exp-item, .edu-item, .skill-card, .portfolio-item, .section-title');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
        observer.observe(el);
    });

    // 3. Form Submission (Mock)
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('.submit-btn');
            const originalText = btn.textContent;
            btn.textContent = 'MESSAGE SENT!';
            btn.style.background = '#00ff88';
            btn.style.color = '#000';

            form.reset();

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = 'var(--accent-color)';
            }, 3000);
        });
    }

    // 4. Cursor Glow Effect
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    // Add CSS for glow dynamically
    const style = document.createElement('style');
    style.textContent = `
        .cursor-glow {
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(0, 242, 255, 0.05) 0%, transparent 70%);
            position: fixed;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: 0;
            transform: translate(-50%, -50%);
            transition: width 0.3s, height 0.3s;
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
});
