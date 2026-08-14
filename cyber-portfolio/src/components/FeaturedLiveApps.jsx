import React, { useState } from 'react';

const FeaturedLiveApps = () => {
  // State untuk popup dan slideshow
  const [selectedApp, setSelectedApp] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [descriptions, setDescriptions] = useState([]);

  const liveApps = [
    {
      id: 1,
      title: "U-Science X: Unified Centralized Management Web System",
      description: "A comprehensive, full-stack centralized management platform designed specifically for UMS U-Science. This robust system bridges the gap between administrators and the public by offering interactive dynamic landing pages and a seamless user portal for asset reservations. For administrators, it features a highly customizable staff portal with multi-theme support, dynamic media management, and real-time visual analytics dashboards. Built for scalability, it streamlines workflows by automating feedback processing and centralizing core activity tracking for efficient, data-driven decision-making.",
      techStack: [
        "MongoDB", 
        "Express", 
        "React", 
        "Node.js", 
        "Vercel", 
        "Render", 
        "Llama", 
        "Gemini 3.5 Flash Lite"
      ],
      status: "ONLINE",
      ping: "14ms",
      link: "https://ums-uscience.vercel.app",
      imageUrl: "/projects/ums-uscience.png", 
      screenshots: [
        "/projects/1.png",
        "/projects/2.png",
        "/projects/3.png",
        "/projects/4.png",
        "/projects/5.png",
        "/projects/6.png",
        "/projects/7.png", 
        "/projects/8.png"  
      ],
      explanationFile: "/projects/explanations.txt",
      manualLink: "/projects/manual-book.pdf"
    }
  ];

  // Fungsi untuk buka popup dan baca fail TXT
  const openModal = async (app) => {
    setSelectedApp(app);
    setCurrentIndex(0); // Mula dari gambar pertama
    setDescriptions([]); // Kosongkan description lama
    
    // Baca fail .txt
    if (app.explanationFile) {
      try {
        const response = await fetch(app.explanationFile);
        const text = await response.text();
        // Pecahkan teks ikut baris (new line) dan buang baris kosong
        const lines = text.split('\n').filter(line => line.trim() !== '');
        setDescriptions(lines);
      } catch (error) {
        console.error("Gagal membaca fail txt:", error);
      }
    }
  };

  // Fungsi tutup popup
  const closeModal = (e) => {
    if (e.target === e.currentTarget || e.target.id === 'closeBtn') {
      setSelectedApp(null);
    }
  };

  // Fungsi Next & Prev Slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === selectedApp.screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? selectedApp.screenshots.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="featured" style={styles.section}>
      <div style={styles.headerContainer}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.slash}>{"//"}</span> FEATURED_LIVE_APP
        </h2>
        <p style={styles.sectionDesc}>
          Production-ready application currently deployed and active on the mainframe.
        </p>
      </div>

      <div style={styles.gridContainer}>
        {liveApps.map((app) => (
          <div key={app.id} style={styles.appCard}>
            <div style={styles.cardHeader}>
              <div style={styles.statusIndicator}>
                <span style={styles.statusDot}></span>
                {app.status}
              </div>
              <span style={styles.pingText}>Ping: {app.ping}</span>
            </div>

            <div style={styles.imageContainer}>
              <img src={app.imageUrl} alt={`${app.title} preview`} style={styles.appImage} />
            </div>

            <div style={styles.cardBody}>
              <h3 style={styles.appTitle}>{app.title}</h3>
              <p style={styles.appDesc}>{app.description}</p>
              
              <div style={styles.techContainer}>
                {app.techStack.map((tech, index) => (
                  <span key={index} style={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={styles.cardFooter}>
              <a href={app.link} target="_blank" rel="noopener noreferrer" style={styles.launchBtn}>
                [ LAUNCH_APP ]
              </a>
              
              <button 
                onClick={() => openModal(app)} 
                style={styles.actionBtn}
              >
                [ SCREENSHOTS ]
              </button>

              <a href={app.manualLink} target="_blank" rel="noopener noreferrer" style={styles.actionBtn}>
                [ MANUAL_BOOK ]
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================== */}
      {/* POPUP MODAL (SLIDESHOW)                    */}
      {/* ========================================== */}
      {selectedApp && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent}>
            
            <div style={styles.modalHeader}>
              <span style={styles.modalTitle}>
                {"//"} {selectedApp.title.toUpperCase()}_VIEWER
                <span style={styles.counter}>
                  [{currentIndex + 1} / {selectedApp.screenshots.length}]
                </span>
              </span>
              <button id="closeBtn" onClick={closeModal} style={styles.closeBtn}>
                [ X ] CLOSE
              </button>
            </div>

            <div style={styles.modalBody}>
              {/* Gambar Slideshow */}
              <div style={styles.slideshowContainer}>
                <img 
                  src={selectedApp.screenshots[currentIndex]} 
                  alt={`Screenshot ${currentIndex + 1}`} 
                  style={styles.slideImage} 
                />
              </div>

              {/* Kotak Penerangan (Dari TXT) */}
              <div style={styles.descriptionBox}>
                <span style={styles.prompt}>root@sys:~# </span>
                <span style={styles.descText}>
                  {descriptions.length > 0 
                    ? descriptions[currentIndex] 
                    : "Memuatkan data dari pangkalan... (Loading)"}
                </span>
              </div>

              {/* Butang Navigasi */}
              <div style={styles.navControls}>
                <button onClick={prevSlide} style={styles.navBtn}>{"<<<"} PREV</button>
                <button onClick={nextSlide} style={styles.navBtn}>NEXT {">>>"}</button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

const styles = {
  section: { padding: 'clamp(40px, 8vw, 60px) 0', display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 5vw, 40px)', position: 'relative' },
  headerContainer: { borderBottom: '1px solid rgba(0, 229, 255, 0.2)', paddingBottom: '15px', marginBottom: '10px' },
  sectionTitle: { fontSize: 'clamp(1.5rem, 5vw, 2rem)', color: 'var(--text-light, #e2e8f0)', fontFamily: "'Fira Code', monospace", margin: '0 0 10px 0', letterSpacing: '1px' },
  slash: { color: 'var(--accent-cyan, #00e5ff)' },
  sectionDesc: { color: 'var(--text-main, #8892b0)', margin: 0, fontSize: 'clamp(0.85rem, 2.5vw, 1rem)' },
  gridContainer: { display: 'grid', gridTemplateColumns: '1fr', gap: '30px' },
  appCard: { background: 'rgba(5, 8, 16, 0.7)', border: '1px solid rgba(0, 229, 255, 0.2)', borderRadius: '8px', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)' },
  cardHeader: { background: 'rgba(15, 23, 42, 0.9)', padding: '10px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0, 229, 255, 0.1)', fontFamily: "'Fira Code', monospace", fontSize: 'clamp(0.65rem, 2vw, 0.75rem)' },
  statusIndicator: { display: 'flex', alignItems: 'center', color: '#00ff00', fontWeight: 'bold' },
  statusDot: { width: '8px', height: '8px', backgroundColor: '#00ff00', borderRadius: '50%', marginRight: '8px', boxShadow: '0 0 8px #00ff00' },
  pingText: { color: '#8892b0' },
  imageContainer: { width: '100%', height: '250px', overflow: 'hidden', borderBottom: '1px solid rgba(0, 229, 255, 0.1)' },
  appImage: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  cardBody: { padding: 'clamp(15px, 4vw, 20px)', flexGrow: 1, display: 'flex', flexDirection: 'column' },
  appTitle: { color: '#00e5ff', fontSize: 'clamp(1.2rem, 4vw, 1.6rem)', margin: '0 0 10px 0' },
  appDesc: { color: '#ccd6f6', fontSize: 'clamp(0.85rem, 2.5vw, 1rem)', lineHeight: '1.6', margin: '0 0 20px 0', flexGrow: 1 },
  techContainer: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
  techTag: { background: 'rgba(0, 229, 255, 0.1)', color: '#00e5ff', border: '1px solid rgba(0, 229, 255, 0.3)', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', fontFamily: "'Fira Code', monospace" },
  cardFooter: { padding: '15px 20px', borderTop: '1px solid rgba(0, 229, 255, 0.1)', background: 'rgba(5, 8, 16, 0.9)', display: 'flex', gap: '15px', flexWrap: 'wrap', alignItems: 'center' },
  
  /* --- KEMAS KINI: textDecoration: 'none' DITAMBAH UNTUK BUANG GARIS BAWAH --- */
  launchBtn: { 
    color: '#ff007f', 
    textDecoration: 'none', 
    fontFamily: "'Fira Code', monospace", 
    fontWeight: 'bold', 
    fontSize: '0.9rem' 
  },
  actionBtn: { 
    background: 'transparent', 
    border: 'none', 
    padding: 0, 
    cursor: 'pointer', 
    color: '#00e5ff', 
    textDecoration: 'none', 
    fontFamily: "'Fira Code', monospace", 
    fontWeight: 'bold', 
    fontSize: '0.9rem' 
  },

  /* --- GAYA UNTUK POPUP SLIDESHOW --- */
  modalOverlay: {
    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
    background: 'rgba(0, 0, 0, 0.9)', backdropFilter: 'blur(5px)',
    display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999, padding: '20px',
  },
  modalContent: {
    background: '#0f172a', border: '1px solid #00e5ff', borderRadius: '8px',
    width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column',
    boxShadow: '0 0 30px rgba(0, 229, 255, 0.15)',
  },
  modalHeader: {
    padding: '15px 20px', borderBottom: '1px solid rgba(0, 229, 255, 0.2)',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(5, 8, 16, 0.9)',
  },
  modalTitle: { color: '#00e5ff', fontFamily: "'Fira Code', monospace", fontWeight: 'bold', fontSize: '1rem' },
  counter: { color: '#ff007f', marginLeft: '10px', fontSize: '0.9rem' },
  closeBtn: { background: 'transparent', border: 'none', color: '#ff007f', fontFamily: "'Fira Code', monospace", fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' },
  modalBody: { padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  
  slideshowContainer: {
    width: '100%', display: 'flex', justifyContent: 'center',
    background: '#000', borderRadius: '4px', border: '1px solid rgba(0, 229, 255, 0.2)',
    height: 'clamp(250px, 50vh, 500px)', 
    overflow: 'hidden'
  },
  slideImage: {
    width: '100%', height: '100%', objectFit: 'contain', 
  },
  
  /* --- KEMAS KINI: BOLEH SCROLL JIKA TEKS PANJANG --- */
  descriptionBox: {
    width: '100%', 
    marginTop: '15px', 
    padding: '15px',
    background: 'rgba(0, 229, 255, 0.05)', 
    borderLeft: '3px solid #ff007f',
    fontFamily: "'Fira Code', monospace", 
    fontSize: '0.9rem',
    borderRadius: '0 4px 4px 0',
    maxHeight: '120px',  
    overflowY: 'auto',   
  },
  prompt: { color: '#00ff00' },
  descText: { color: '#ccd6f6', lineHeight: '1.5' },

  navControls: {
    width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '20px'
  },
  navBtn: {
    background: 'rgba(0, 229, 255, 0.1)', border: '1px solid #00e5ff',
    color: '#00e5ff', padding: '10px 20px', fontFamily: "'Fira Code', monospace",
    fontWeight: 'bold', cursor: 'pointer', borderRadius: '4px', transition: 'all 0.3s ease'
  }
};

export default FeaturedLiveApps;