// navbar.js

export function createNavbar() {
    const nav = document.createElement('nav');
    nav.id = 'navbar';

    // ==========================================
    // 1. BAHAGIAN KIRI (Logo / Nama Peribadi)
    // ==========================================
    const navLeft = document.createElement('div');
    navLeft.className = 'nav-left';
    
    const logo = document.createElement('a');
    logo.href = '#';
    logo.className = 'nav-logo';
    logo.textContent = 'HERYANSHAH SUHAIMI';
    navLeft.appendChild(logo);

    // ==========================================
    // 2. BAHAGIAN KANAN (Pautan Menu)
    // ==========================================
    const navRight = document.createElement('div');
    navRight.className = 'nav-right';

    const navLinks = [
        { id: 'work', text: 'Work' },
        { id: 'journey', text: 'Journey' },
        { id: 'skills', text: 'Skills' },
        { id: 'award', text: 'Award' },
        { id: 'about', text: 'About' },
        { id: 'leadership', text: 'Leadership' },
        { id: 'contact', text: 'Contact' },
        { id: 'cv', text: 'CV' }
    ];

    navLinks.forEach(linkData => {
        const anchor = document.createElement('a');
        anchor.href = `#${linkData.id}`;
        anchor.className = 'nav-link';
        // Menyimpan rujukan ID supaya mudah dibaca oleh ScrollSpy nanti
        anchor.setAttribute('data-target', linkData.id); 
        anchor.textContent = linkData.text;
        navRight.appendChild(anchor);
    });

    // ==========================================
    // 3. BUTANG RANDOM THEME (Kini Ikon Dadu Rawak)
    // ==========================================
    const themeBtn = document.createElement('button');
    themeBtn.id = 'theme-randomizer';
    themeBtn.className = 'theme-icon-btn'; 
    // Ikon Dadu (SVG) yang nampak Cyberpunk
    themeBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <circle cx="15.5" cy="15.5" r="1.5"></circle>
            <circle cx="15.5" cy="8.5" r="1.5"></circle>
            <circle cx="8.5" cy="15.5" r="1.5"></circle>
            <circle cx="12" cy="12" r="1.5"></circle>
        </svg>
    `;
    themeBtn.title = "Randomize Cyber Theme"; // Muncul bila mouse hover
    themeBtn.addEventListener('click', randomizeTheme);

    navRight.appendChild(themeBtn);

    // Gabungkan ke dalam Navbar
    nav.appendChild(navLeft);
    nav.appendChild(navRight);

    document.body.insertAdjacentElement('afterbegin', nav);

    // Hidupkan fungsi pengesan skrin (ScrollSpy)
    setTimeout(setupScrollSpy, 500); // Delay sikit tunggu semua HTML siap render
}

// ==========================================
// FUNGSI PENGGODAM TEMA (Theme Randomizer)
// ==========================================
function randomizeTheme() {
    const getRandomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    
    const root = document.documentElement;
    const newCyan = getRandomColor();
    const newPink = getRandomColor();
    
    root.style.setProperty('--accent-cyan', newCyan);
    root.style.setProperty('--accent-pink', newPink);
    root.style.setProperty('--glitch-cyan', newCyan);
    root.style.setProperty('--glitch-magenta', newPink);
    
    // Animasikan ikon bila ditekan
    const btn = document.getElementById('theme-randomizer');
    btn.style.transform = 'rotate(180deg) scale(1.2)';
    setTimeout(() => { btn.style.transform = 'rotate(0deg) scale(1)'; }, 300);
}

// ==========================================
// FUNGSI SCROLLSPY (Beri kilauan pada menu aktif)
// ==========================================
function setupScrollSpy() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Padam kilauan dari semua menu
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Cari menu yang sepadan dengan ID seksyen dan nyalakan kilauan
                const activeLink = document.querySelector(`.nav-link[data-target="${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, { 
        threshold: 0.3, // Seksyen dianggap "dibaca" jika 30% daripadanya masuk skrin
        rootMargin: "-100px 0px -100px 0px" // Kurangkan kawasan pengesanan supaya lebih tepat
    });

    // Cari semua elemen yang mempunyai ID yang sepadan dengan menu kita
    navLinks.forEach(link => {
        const targetId = link.getAttribute('data-target');
        const section = document.getElementById(targetId);
        if (section) observer.observe(section);
    });
}