import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk skrol lancar dan tutup menu mobile
  const handleLinkClick = (e, targetId) => {
    e.preventDefault(); // Menghalang lompatan mengejut default HTML
    setIsOpen(false);   // Tutup menu jika dibuka di telefon

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Dapatkan kedudukan elemen dan tolak 70px (ketinggian navbar)
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 70;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // Memberikan efek skrol yang lancar
      });
    }
  };

  return (
    <nav className="navbar reveal active" style={styles.fixedNavbar}>
      
      {/* Jenama "HERYANSHAH" / "RYAN.DEV" telah dibuang */}

      {/* Senarai Navigasi */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`} style={styles.navLinksContainer}>
        <li><a href="#about" className="nav-link" onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
        <li><a href="#featured" className="nav-link" onClick={(e) => handleLinkClick(e, 'featured')}>Featured</a></li>
        <li><a href="#work" className="nav-link" onClick={(e) => handleLinkClick(e, 'work')}>Work</a></li>
        <li><a href="#journey" className="nav-link" onClick={(e) => handleLinkClick(e, 'journey')}>Journey</a></li>
        <li><a href="#skills" className="nav-link" onClick={(e) => handleLinkClick(e, 'skills')}>Skills</a></li>
        <li><a href="#award" className="nav-link" onClick={(e) => handleLinkClick(e, 'award')}>Award</a></li>
        <li><a href="#leadership" className="nav-link" onClick={(e) => handleLinkClick(e, 'leadership')}>Leadership</a></li>
        <li><a href="#contact" className="nav-link" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a></li>
        <li><a href="#cv" className="nav-link" onClick={(e) => handleLinkClick(e, 'cv')}>CV</a></li>
      </ul>

      {/* Bekas untuk butang hamburger */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', zIndex: 100001 }}>

        {/* Butang Hamburger */}
        <div 
          className={`menu-toggle ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          style={styles.hamburger}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

// ==========================================
// GAYA INLINE UTK FIXED NAVBAR & STRUKTUR
// ==========================================
const styles = {
  fixedNavbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '70px',
    display: 'flex',
    justifyContent: 'space-between', // Menolak menu ke kiri dan butang ke kanan
    alignItems: 'center',
    padding: '0 40px',
    background: 'rgba(5, 8, 16, 0.85)', 
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(0, 229, 255, 0.15)',
    zIndex: 99990,
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
    boxSizing: 'border-box'
  },
  navLinksContainer: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  hamburger: {
    cursor: 'pointer'
  }
};

export default Navbar;