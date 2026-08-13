// interactions.js

// 1. Fungsi Buka/Tutup Butang Maklumat Teknikal
export function setupToggle() {
    const toggleBtn = document.getElementById('toggle-tech-btn');
    const techDetails = document.getElementById('tech-details');

    if (toggleBtn && techDetails) {
        toggleBtn.addEventListener('click', () => {
            // Semak jika maklumat sedang dibuka atau ditutup
            if (techDetails.style.display === 'block') {
                techDetails.style.display = 'none';
                toggleBtn.textContent = 'View Technical Details';
                toggleBtn.style.color = 'var(--accent-cyan)';
                toggleBtn.style.borderColor = 'var(--accent-cyan)';
            } else {
                techDetails.style.display = 'block';
                toggleBtn.textContent = 'Hide Technical Details';
                // Tukar warna butang jadi pink bila aktif (tema penggodam)
                toggleBtn.style.color = 'var(--accent-pink)';
                toggleBtn.style.borderColor = 'var(--accent-pink)';
            }
        });
    }
}

// 2. Fungsi Scroll Lancar (Smooth Scroll) untuk Menu Navigasi
export function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Halang pergerakan melompat yang mengejut
            
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Kira posisi skrin tolak 80px supaya tak tertutup dengan Navbar
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth' // Pergerakan meluncur yang elegan
                });
            }
        });
    });
}