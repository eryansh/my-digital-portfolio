// interactions.js
export function setupToggle() {
    const toggleBtn = document.getElementById('toggle-tech-btn');
    const techDetails = document.getElementById('tech-details');

    if (!toggleBtn || !techDetails) return;

    toggleBtn.addEventListener('click', () => {
        if (techDetails.style.display === 'block') {
            techDetails.style.display = 'none';
            toggleBtn.textContent = 'View Technical Details';
        } else {
            techDetails.style.display = 'block';
            toggleBtn.textContent = 'Hide Technical Details';
        }
    });
}

export function setupSmoothScroll() {
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Offset for the sticky navbar
                    behavior: 'smooth'
                });
            }
        });
    });
}