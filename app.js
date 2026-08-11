// app.js
import { createNavbar } from './navbar.js';
import { loadWrittenCards } from './cards.js';
import { setupToggle, setupSmoothScroll } from './interactions.js';
import { initCursor } from './cursor.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Build UI Components
    createNavbar();
    loadWrittenCards(); // This module now also handles clickable cards & special cursor logic
    
    // ADDED: Initialize data visualizations inside cards
    buildCyberCharts(); 
    
    // 2. Initialize Core Interactivity
    setupSmoothScroll();
    setupToggle();
    initCursor();
    
    console.log("Awesome Cyber Portfolio initialized.");
});

/**
 * Populates the Sentiment Analysis Dashboard card with a dynamic, stylized bar chart.
 * This looks significantly more impressive for a Data Science student.
 */
function buildCyberCharts() {
    const chartContainer = document.getElementById('sentiment-chart-container');
    if (!chartContainer) return;

    // Define mock data structure that looks realistic (e.g., distribution counts)
    const sentimentDistribution = [
        { label: "Positive", value: 65 }, // High positive ratio
        { label: "Neutral", value: 20 },
        { label: "Negative", value: 15 }
    ];

    // Build chart structure from data
    sentimentDistribution.forEach(data => {
        // Create the row container
        const row = document.createElement('div');
        row.className = 'chart-bar-row';

        // 1. Text Label ("Positive:")
        const label = document.createElement('span');
        label.className = 'chart-label';
        label.textContent = `${data.label}:`;

        // 2. The empty track (the dashed background line)
        const track = document.createElement('div');
        track.className = 'chart-track';

        // 3. The actual colored bar (JS will set width to fill track)
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.setAttribute('data-class', data.label); // Applies color in CSS

        // 4. Value label ("65%")
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

        // Crucial: Slight delay so the CSS transition animation (sliding bar) works
        setTimeout(() => {
            bar.style.width = `${data.value}%`;
        }, 150); 
    });
}