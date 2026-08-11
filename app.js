// app.js
import { createNavbar } from './navbar.js';
import { loadWrittenCards } from './cards.js';
import { setupToggle, setupSmoothScroll } from './interactions.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Build the UI Components first
    createNavbar();
    loadWrittenCards();
    
    // 2. Attach Interactivity strictly after UI is built
    // Important: setupSmoothScroll must run after createNavbar
    setupSmoothScroll();
    setupToggle();
    
    console.log("Component-based architecture successfully loaded!");
});