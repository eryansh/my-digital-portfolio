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
    loadDynamicCards(); // Membina grid projek akademik dan kepimpinan
    buildCyberCharts(); // Menjana carta Data Science secara dinamik
    
    // ==========================================
    // 2. INITIALIZE CORE INTERACTIVITY
    // ==========================================
    setupSmoothScroll(); // Mesti dijalankan SELEPAS createNavbar
    setupToggle();
    initCursor(); // Menghidupkan kursor siber merah jambu
    
    // ==========================================
    // 3. INITIALIZE MAXIMUM CYBER EFFECTS
    // ==========================================
    initParticles();     // Latar belakang kanvas Neural Network
    initTypewriter();    // Efek taipan penggodam pada teks Hero
    initScrollReveal();  // Animasi elemen muncul apabila scroll
    initChatbot();       // Menghidupkan widget terapung Avatar 3D AI
    
    // Sedikit delay memastikan DOM selesai melukis kad sebelum memasukkan fizik 3D
    setTimeout(() => {
        init3DTilt();
    }, 500);
    
    console.log("[SYSTEM READY] 3D Hologram UI, Data Viz & AI Avatar active.");
});

/**
 * Membina Papan Pemuka Analisis Sentimen (Sentiment Analysis Dashboard).
 * Kini dilengkapi dengan efek 'Number Counter' ala terminal penggodam.
 */
function buildCyberCharts() {
    const chartContainer = document.getElementById('sentiment-chart-container');
    if (!chartContainer) return;

    // Data taburan klasifikasi
    const sentimentDistribution = [
        { label: "POSITIVE", value: 65, emotion: "Joy" }, 
        { label: "NEUTRAL", value: 20, emotion: "Calm" },
        { label: "NEGATIVE", value: 15, emotion: "Anger" }
    ];

    // Fungsi kecil untuk menganimasikan nombor peratusan (0 ke nilai sasaran)
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.textContent = Math.floor(progress * (end - start) + start) + "%";
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    sentimentDistribution.forEach(data => {
        // Bina bekas baris (Row container)
        const row = document.createElement('div');
        row.className = 'chart-bar-row';

        // 1. Label Teks
        const label = document.createElement('span');
        label.className = 'chart-label';
        label.textContent = `${data.label}:`;

        // 2. Landasan kosong (Background line)
        const track = document.createElement('div');
        track.className = 'chart-track';

        // 3. Bar berwarna (Bermula dari 0% untuk animasi)
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        const cssClass = data.label.charAt(0) + data.label.slice(1).toLowerCase();
        bar.setAttribute('data-class', cssClass); 
        bar.style.width = '0%'; 

        // 4. Label Nilai (Bermula dengan 0%)
        const valueLabel = document.createElement('span');
        valueLabel.className = 'chart-value';
        valueLabel.textContent = `0%`;

        // 5. Lencana Emosi
        const emotionBadge = document.createElement('span');
        emotionBadge.className = 'badge emotion';
        emotionBadge.textContent = data.emotion;
        emotionBadge.style.marginLeft = '10px';

        // Cantumkan elemen
        track.appendChild(bar);
        row.appendChild(label);
        row.appendChild(track);
        row.appendChild(valueLabel);
        row.appendChild(emotionBadge);

        chartContainer.appendChild(row);

        // Intersection Observer: Animasi pergerakan bar dan kiraan nombor bermula bila discroll
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setTimeout(() => {
                    bar.style.width = `${data.value}%`;
                    animateValue(valueLabel, 0, data.value, 1000); // 1 saat durasi kiraan
                }, 300);
                observer.disconnect(); // Hentikan pemerhatian untuk jimat memori
            }
        }, { threshold: 0.5 });

        observer.observe(row);
    });
}