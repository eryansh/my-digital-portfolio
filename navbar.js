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
    // 2. BAHAGIAN KANAN (Pautan & Butang Tema)
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
        anchor.textContent = linkData.text;
        navRight.appendChild(anchor);
    });

    // Butang Randomize Theme
    const themeBtn = document.createElement('button');
    themeBtn.id = 'theme-randomizer';
    themeBtn.className = 'theme-btn'; 
    themeBtn.textContent = 'Random Theme';
    
    // Panggil fungsi tukar tema bila diklik
    themeBtn.addEventListener('click', randomizeTheme);

    navRight.appendChild(themeBtn);

    // ==========================================
    // 3. GABUNGKAN KE DALAM NAVBAR
    // ==========================================
    nav.appendChild(navLeft);
    nav.appendChild(navRight);

    document.body.insertAdjacentElement('afterbegin', nav);
}

// ==========================================
// FUNGSI PENGGODAM TEMA (Theme Randomizer)
// ==========================================
function randomizeTheme() {
    // Fungsi kecil untuk menghasilkan kod Hex warna rawak (cth: #ff007f)
    const getRandomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    
    const root = document.documentElement;
    const newCyan = getRandomColor();
    const newPink = getRandomColor();
    
    // Gantikan pembolehubah CSS di :root secara dinamik
    root.style.setProperty('--accent-cyan', newCyan);
    root.style.setProperty('--accent-pink', newPink);
    root.style.setProperty('--glitch-cyan', newCyan);
    root.style.setProperty('--glitch-magenta', newPink);
    
    console.log(`[SYSTEM OVERRIDE] Tema dikemas kini: ${newCyan} & ${newPink}`);
}