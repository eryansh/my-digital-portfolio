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
      link: "https://ums-uscience.vercel.app",
      imageUrl: "https://via.placeholder.com/800x400/0f172a/00e5ff?text=UMS+U-Science+Preview", // Placeholder image
      screenshotLink: "#", // Replace with actual screenshot link
      manualLink: "#"      // Replace with actual manual link
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

            {/* Added Image Section */}
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
              {/* Added Screenshot and Manual Buttons */}
              <a href={app.screenshotLink} target="_blank" rel="noopener noreferrer" style={styles.actionBtn}>
                [ SCREENSHOT ]
              </a>
              <a href={app.manualLink} target="_blank" rel="noopener noreferrer" style={styles.actionBtn}>
                [ MANUAL_BOOK ]
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
    padding: 'clamp(40px, 8vw, 60px) 0',
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
    fontSize: 'clamp(1.5rem, 5vw, 2rem)',
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
    fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
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
    fontSize: 'clamp(0.65rem, 2vw, 0.75rem)',
  },
  statusIndicator: {
    display: 'flex',
    alignItems: 'center',
    color: 'var(--chart-bar-positive, #00ff00)', // Fallback color added for safety
    fontWeight: 'bold',
  },
  statusDot: {
    width: '8px',
    height: '8px',
    backgroundColor: 'var(--chart-bar-positive, #00ff00)', // Fallback color added for safety
    borderRadius: '50%',
    marginRight: '8px',
    boxShadow: '0 0 8px var(--chart-bar-positive, #00ff00)',
  },
  pingText: {
    color: 'var(--text-main, #8892b0)',
  },
  imageContainer: {
    width: '100%',
    height: '250px', // Fixed height for consistency, adjust as needed
    overflow: 'hidden',
    borderBottom: '1px solid rgba(0, 229, 255, 0.1)',
  },
  appImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  cardBody: {
    padding: 'clamp(15px, 4vw, 20px)',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  appTitle: {
    color: 'var(--accent-cyan, #00e5ff)',
    fontSize: 'clamp(1.2rem, 4vw, 1.6rem)',
    margin: '0 0 10px 0',
  },
  appDesc: {
    color: 'var(--text-light, #ccd6f6)',
    fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
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
    color: 'var(--accent-cyan, #00e5ff)',
    border: '1px solid rgba(0, 229, 255, 0.3)',
    padding: 'clamp(3px, 1vw, 4px) clamp(8px, 2vw, 10px)',
    borderRadius: '4px',
    fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
    fontFamily: "'Fira Code', monospace",
  },
  cardFooter: {
    padding: 'clamp(12px, 3vw, 15px) clamp(15px, 4vw, 20px)',
    borderTop: '1px solid rgba(0, 229, 255, 0.1)',
    background: 'rgba(5, 8, 16, 0.9)',
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap', // Allows buttons to wrap on smaller screens
    alignItems: 'center',
  },
  launchBtn: {
    color: 'var(--accent-pink, #ff007f)',
    textDecoration: 'none',
    fontFamily: "'Fira Code', monospace",
    fontWeight: 'bold',
    fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
    display: 'inline-block',
    transition: 'color 0.3s ease, text-shadow 0.3s ease',
  },
  actionBtn: {
    color: 'var(--accent-cyan, #00e5ff)', // Different color to distinguish from Launch
    textDecoration: 'none',
    fontFamily: "'Fira Code', monospace",
    fontWeight: 'bold',
    fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
    display: 'inline-block',
    transition: 'color 0.3s ease, text-shadow 0.3s ease',
  }
};

export default FeaturedLiveApps;