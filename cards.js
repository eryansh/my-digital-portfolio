// cards.js

// 1. Structure the data including real hyperlinks for your works
const writtenPortfolioData = [
    { text: "Academic Thesis Executive Summary", url: "https://your-domain.com/thesis_summary.pdf" },
    { text: "Huawei ICT Competition Retrospective", url: "https://github.com/eryansh/huawei-retrospective" },
    { text: "Learnings from PeopleCert Data Science & ITIL", url: "https://www.linkedin.com/in/eryansh/" }
];

export function loadWrittenCards() {
    const writtenGrid = document.getElementById('written-grid');
    if (!writtenGrid) return; 

    writtenPortfolioData.forEach(item => {
        // Build an actually clickable anchor element (<a>)
        const cardLink = document.createElement('a');
        cardLink.href = item.url;
        cardLink.target = "_blank"; // Open in new tab
        cardLink.rel = "noopener noreferrer"; // Security best practice
        cardLink.className = 'interactive-card link-card'; // Added special class
        cardLink.textContent = item.text;
        
        writtenGrid.appendChild(cardLink);
    });

    // We must call the setup function *after* cards are on the DOM
    setupLinkCardCursorInteraction();
}

/**
 * Attaches specific hover logic for actual hyperlinks (like written items).
 * When hovering these, the cursor transforms into a distinct 'Link' shape (square).
 */
function setupLinkCardCursorInteraction() {
    const outline = document.getElementById('cursor-outline');
    if (!outline) return;

    // Select specifically actual hyperlinks or elements that act like them
    const linkCards = document.querySelectorAll('.link-card');
    
    linkCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Transform outer ring to a 'square/link' shape
            outline.classList.add('cursor-hover', 'cursor-clickable');
        });
        
        card.addEventListener('mouseleave', () => {
            // Remove 'link' shape back to normal expanded circle
            outline.classList.remove('cursor-clickable');
            // 'cursor-hover' might remain if the cursor module still tracks standard hover
        });
    });
}