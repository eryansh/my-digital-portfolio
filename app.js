document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamically Inject Written Portfolio Cards
    const writtenGrid = document.getElementById('written-grid');
    const writtenItems = [
        "Academic Thesis Executive Summary",
        "Huawei ICT Competition Retrospective",
        "Learnings from PeopleCert Data Science Foundation & ITIL"
    ];

    writtenItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'interactive-card';
        card.textContent = item;
        writtenGrid.appendChild(card);
    });

    // 2. Interactive Toggle for Technical Details
    const toggleBtn = document.getElementById('toggle-tech-btn');
    const techDetails = document.getElementById('tech-details');

    toggleBtn.addEventListener('click', () => {
        if (techDetails.style.display === 'block') {
            techDetails.style.display = 'none';
            toggleBtn.textContent = 'View Technical Details';
        } else {
            techDetails.style.display = 'block';
            toggleBtn.textContent = 'Hide Technical Details';
        }
    });

    // 3. Smooth Scrolling for Navigation
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Offset for the sticky navbar
                behavior: 'smooth'
            });
        });
    });
});