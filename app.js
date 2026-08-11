// app.js
import { createNavbar } from './navbar.js';
import { loadDynamicCards } from './cards.js'; 
import { setupToggle, setupSmoothScroll } from './interactions.js';
import { initCursor } from './cursor.js';
import { initScrollReveal, initTypewriter, initParticles, init3DTilt } from './fx.js'; 
import { initChatbot } from './chatbot.js'; 

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. BUILD UI COMPONENTS
    // ==========================================
    createNavbar();
    loadDynamicCards(); // Builds the academic and leadership grids
    buildCyberCharts(); // Generates the Data Science dashboard chart
    
    // ==========================================
    // 2. INITIALIZE CORE INTERACTIVITY
    // ==========================================
    setupSmoothScroll(); // Must run AFTER createNavbar
    setupToggle();
    initCursor(); // Starts the cyber pink custom cursor
    
    // ==========================================
    // 3. INITIALIZE MAXIMUM CYBER EFFECTS
    // ==========================================
    initParticles();     // Neural network canvas background
    initTypewriter();    // Hacker typing effect on the hero text
    initScrollReveal();  // Elements animate in as you scroll down
    initChatbot();       // Initializes the 3D AI Avatar floating widget
    
    // Slight delay ensures the DOM renders the dynamic cards before attaching the 3D hover physics
    setTimeout(() => {
        init3DTilt();
    }, 500);
    
    console.log("System Overclocked. 3D Hologram UI & AI Avatar active.");
});

/**
 * Populates the Sentiment Analysis Dashboard card with a dynamic, stylized bar chart.
 * Highlights your Data Science specialization visually.
 */
function buildCyberCharts() {
    const chartContainer = document.getElementById('sentiment-chart-container');
    if (!chartContainer) return;

    // Realistic distribution data for your Naive Bayes classification
    const sentimentDistribution = [
        { label: "Positive", value: 65 }, 
        { label: "Neutral", value: 20 },
        { label: "Negative", value: 15 }
    ];

    sentimentDistribution.forEach(data => {
        // Create the row container
        const row = document.createElement('div');
        row.className = 'chart-bar-row';

        // 1. Text Label (e.g., "Positive:")
        const label = document.createElement('span');
        label.className = 'chart-label';
        label.textContent = `${data.label}:`;

        // 2. The empty track (the background line)
        const track = document.createElement('div');
        track.className = 'chart-track';

        // 3. The actual colored bar
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.setAttribute('data-class', data.label); // Links to CSS colors

        // 4. Value label (e.g., "65%")
        const valueLabel = document.createElement('span');
        valueLabel.className = 'chart-value';
        valueLabel.textContent = `${data.value}%`;

        // Assemble the track
        track.appendChild(bar);
        
        // Assemble the row
        row.appendChild(label);
        row.appendChild(track);
        row.appendChild(valueLabel);

        // Add row to chart
        chartContainer.appendChild(row);

        // Trigger the slide-in animation after a tiny delay
        setTimeout(() => {
            bar.style.width = `${data.value}%`;
        }, 300); 
    });
}