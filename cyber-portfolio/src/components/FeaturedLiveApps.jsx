import React from 'react';

const FeaturedLiveApps = () => {
  const liveApps = [
    {
      id: 1,
      title: "UMS U-Science Platform",
      description: "Interactive web application deployed for UMS U-Science. Features responsive UI and optimized performance for real-time user engagement.",
      techStack: ["React", "JavaScript", "Vercel"],
      status: "ONLINE",
      ping: "14ms",
      link: "https://ums-uscience.vercel.app" 
    }
  ];

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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: 'clamp(40px, 8vw, 60px) 0', // Padding section mengecil di mobile
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(20px, 5vw, 40px)',
  },
  headerContainer: {
    borderBottom: '1px solid rgba(0, 229, 255, 0.2)',
    paddingBottom: '15px',
    marginBottom: '10px',
  },
  sectionTitle: {
    fontSize: 'clamp(1.5rem, 5vw, 2rem)', // Tajuk seksyen mengecil
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
    fontSize: 'clamp(0.85rem, 2.5vw, 1rem)', // Penerangan seksyen mengecil
  },
  gridContainer: {
    display: 'grid',
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
    fontSize: 'clamp(0.65rem, 2vw, 0.75rem)', // Teks status bar mengecil sikit
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
  },
  pingText: {
    color: 'var(--text-main)',
  },
  cardBody: {
    padding: 'clamp(15px, 4vw, 20px)', // Ruang dalaman (padding) kad dilaraskan
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  appTitle: {
    color: 'var(--accent-cyan)',
    fontSize: 'clamp(1.2rem, 4vw, 1.6rem)', // Tajuk aplikasi mengecil di mobile
    margin: '0 0 10px 0',
  },
  appDesc: {
    color: 'var(--text-light)',
    fontSize: 'clamp(0.85rem, 2.5vw, 1rem)', // Penerangan aplikasi dilaraskan
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
    padding: 'clamp(3px, 1vw, 4px) clamp(8px, 2vw, 10px)', // Padding tag mengecil
    borderRadius: '4px',
    fontSize: 'clamp(0.7rem, 2vw, 0.8rem)', // Teks tag mengecil
    fontFamily: "'Fira Code', monospace",
  },
  cardFooter: {
    padding: 'clamp(12px, 3vw, 15px) clamp(15px, 4vw, 20px)', // Padding footer disesuaikan
    borderTop: '1px solid rgba(0, 229, 255, 0.1)',
    background: 'rgba(5, 8, 16, 0.9)',
  },
  launchBtn: {
    color: 'var(--accent-pink)',
    textDecoration: 'none',
    fontFamily: "'Fira Code', monospace",
    fontWeight: 'bold',
    fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)', // Tulisan butang launch mengecil sikit
    display: 'inline-block',
    transition: 'color 0.3s ease, text-shadow 0.3s ease',
  }
};

export default FeaturedLiveApps;