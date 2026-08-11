// cards.js
export function loadWrittenCards() {
    const writtenGrid = document.getElementById('written-grid');
    
    // Safety check in case the element doesn't exist
    if (!writtenGrid) return; 

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
}