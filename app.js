// app.js
import { createNavbar } from './navbar.js';
import { loadWrittenCards } from './cards.js';
import { setupToggle, setupSmoothScroll } from './interactions.js';
import { initCursor } from './cursor.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Build the UI Components first
    createNavbar();
    loadWrittenCards();
    
    // 2. Attach Interactivity strictly after UI is built
    setupSmoothScroll();
    setupToggle();
    
    // 3. Initialize custom cursor
    initCursor();
    
    console.log("Cyber theme UI and modules loaded successfully!");
});