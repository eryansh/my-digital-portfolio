import React from 'react';

const FeaturedLiveApps = () => {
  // Senarai aplikasi 'Live' kau (Kini hanya 1 aplikasi utama)
  const liveApps = [
    {
      id: 1,
      title: "UMS U-Science Platform", // Boleh tukar nama rasmi kalau nak
      description: "Interactive web application deployed for UMS U-Science. Features responsive UI and optimized performance for real-time user engagement.", // Sila tukar ikut deskripsi sebenar projek kau
      techStack: ["React", "JavaScript", "Vercel"], // Tukar tech stack ikut apa yang kau guna
      status: "ONLINE",
      ping: "14ms",
      link: "https://ums-uscience.vercel.app" 
    }
  ];

  return (
    <section id="featured" style={styles.section}>
      <div style={styles.headerContainer}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.slash}>//</span> FEATURED_LIVE_APP
        </h2>
        <p style={styles.sectionDesc}>
          Production-ready application currently deployed and active on the mainframe.
        </p>
      </div>

      <div style={styles.gridContainer}>
        {liveApps.map((app) => (
          <div key={app.id} style={styles.appCard}>
            {/* Bahagian Header Kad (Status Bar) */}
            <div style={styles.cardHeader}>
              <div style={styles.statusIndicator}>
                <span style={styles.statusDot}></span>
                {app.status}
              </div>
              <span style={styles.pingText}>Ping: {app.ping}</span>
            </div>

            {/* Bahagian Info Utama */}
            <div style={styles.cardBody}>
              <h3 style={styles.appTitle}>{app.title}</h3>
              <p style={styles.appDesc}>{app.description}</p>
              
              {/* Tag Teknologi */}
              <div style={styles.techContainer}>
                {app.techStack.map((tech, index) => (
                  <span key={index} style={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Butang Tindakan */}
            <div style={styles.cardFooter}>
              <a href={app.link} target="_blank" rel="noopener noreferrer" style={styles.launchBtn}>
                [ LAUNCH_APP ]
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ==========================================
// REKA BENTUK CYBERPUNK (INLINE CSS)
// ==========================================
const styles = {
  section: {
    padding: '60px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
  },
  headerContainer: {
    borderBottom: '1px solid rgba(0, 229, 255, 0.2)',
    paddingBottom: '15px',
    marginBottom: '10px',
  },
  sectionTitle: {
    fontSize: '2rem',
    color: 'var(--text-light)',
    fontFamily: "'Fira Code', monospace",
    margin: '0 0 10px 0',
    letterSpacing: '1px',
  },
  slash: {
    color: 'var(--accent-cyan)',
  },
  sectionDesc: {
    color: 'var(--text-main)',
    margin: 0,
    fontSize: '1rem',
  },
  gridContainer: {
    display: 'grid',
    // Disebabkan cuma 1 item, ia akan automatik ambil full width (lebar penuh)
    gridTemplateColumns: '1fr', 
    gap: '30px',
  },
  appCard: {
    background: 'rgba(5, 8, 16, 0.7)',
    border: '1px solid rgba(0, 229, 255, 0.2)',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
  },
  cardHeader: {
    background: 'rgba(15, 23, 42, 0.9)',
    padding: '10px 15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(0, 229, 255, 0.1)',
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.75rem',
  },
  statusIndicator: {
    display: 'flex',
    alignItems: 'center',
    color: 'var(--chart-bar-positive)',
    fontWeight: 'bold',
  },
  statusDot: {
    width: '8px',
    height: '8px',
    backgroundColor: 'var(--chart-bar-positive)',
    borderRadius: '50%',
    marginRight: '8px',
    boxShadow: '0 0 8px var(--chart-bar-positive)',
    animation: 'blink 1.5s infinite alternate', // Tambah animasi kelip sikit biar nampak 'hidup'
  },
  pingText: {
    color: 'var(--text-main)',
  },
  cardBody: {
    padding: '20px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  appTitle: {
    color: 'var(--accent-cyan)',
    fontSize: '1.6rem', // Besarkan sikit saiz tajuk sebab kad dah lebar
    margin: '0 0 10px 0',
  },
  appDesc: {
    color: 'var(--text-light)',
    fontSize: '1rem',
    lineHeight: '1.6',
    margin: '0 0 20px 0',
    flexGrow: 1,
  },
  techContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  techTag: {
    background: 'rgba(0, 229, 255, 0.1)',
    color: 'var(--accent-cyan)',
    border: '1px solid rgba(0, 229, 255, 0.3)',
    padding: '4px 10px',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontFamily: "'Fira Code', monospace",
  },
  cardFooter: {
    padding: '15px 20px',
    borderTop: '1px solid rgba(0, 229, 255, 0.1)',
    background: 'rgba(5, 8, 16, 0.9)',
  },
  launchBtn: {
    color: 'var(--accent-pink)',
    textDecoration: 'none',
    fontFamily: "'Fira Code', monospace",
    fontWeight: 'bold',
    fontSize: '0.9rem',
    display: 'inline-block',
    transition: 'color 0.3s ease, text-shadow 0.3s ease',
  }
};

export default FeaturedLiveApps;