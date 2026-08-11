// cursor.js
export function initCursor() {
    const dot = document.getElementById('cursor-dot');
    const outline = document.getElementById('cursor-outline');

    // Only apply custom cursor on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
        
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Move the dot instantly
            dot.style.left = `${posX}px`;
            dot.style.top = `${posY}px`;

            // Add a slight delay to the outline for a fluid "trailing" effect
            setTimeout(() => {
                outline.style.left = `${posX}px`;
                outline.style.top = `${posY}px`;
            }, 80);
        });

        // Add hover effects to links, buttons, and interactive cards
        const addHoverEffect = () => {
            const interactiveElements = document.querySelectorAll('a, button, .interactive-card, .project-card');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => outline.classList.add('cursor-hover'));
                el.addEventListener('mouseleave', () => outline.classList.remove('cursor-hover'));
            });
        };

        // Run initially, and set up a mutation observer in case elements are added dynamically
        addHoverEffect();
        const observer = new MutationObserver(addHoverEffect);
        observer.observe(document.body, { childList: true, subtree: true });
    }
}