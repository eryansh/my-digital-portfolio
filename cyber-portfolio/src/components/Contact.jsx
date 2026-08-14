import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.headerContainer}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.slash}>//</span> COMM_LINK_ESTABLISHED
        </h2>
        <p style={styles.sectionDesc}>
          Initiate direct communication or download my professional dossier.
        </p>
      </div>

      <div style={styles.gridContainer}>
        <div style={styles.contactCard}>
          <div style={styles.cardHeader}>
            <span style={styles.headerText}>SYS.PING: DIRECT_CONTACT</span>
          </div>
          <div style={styles.cardBody}>
            <p style={styles.bodyText}>
              My inbox is always open. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div style={styles.linksContainer}>
              <a href="mailto:your.email@example.com" style={styles.primaryLinkBtn}>
                [ SEND_EMAIL ]
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.secondaryLinkBtn}>
                [ LINKEDIN ]
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={styles.secondaryLinkBtn}>
                [ GITHUB ]
              </a>
            </div>
          </div>
        </div>

        <div id="cv" style={styles.cvCard}>
          <div style={styles.cardHeaderAlt}>
            <span style={styles.headerTextAlt}>SYS.FILE: RESUME_DOWNLOAD</span>
          </div>
          <div style={styles.cardBody}>
            <p style={styles.bodyText}>
              Access my complete professional history, educational background, and full skill matrix in a standardized PDF format.
            </p>
            
            <div style={styles.linksContainer}>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={styles.cvBtn}>
                [ EXTRACT_CV.PDF ]
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div style={styles.footer}>
        <p style={styles.footerText}>
          Designed & Built by Ryan Suhaimi © {new Date().getFullYear()}
        </p>
        <p style={styles.footerSubText}>
          Powered by React, Vite & Cyberpunk Aesthetics
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 0 20px 0',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  },
  contactCard: {
    background: 'rgba(5, 8, 16, 0.6)',
    border: '1px solid rgba(0, 229, 255, 0.3)',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  },
  cvCard: {
    background: 'rgba(5, 8, 16, 0.6)',
    border: '1px solid rgba(255, 0, 127, 0.3)',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  },
  cardHeader: {
    background: 'rgba(0, 229, 255, 0.1)',
    padding: '12px 20px',
    borderBottom: '1px solid rgba(0, 229, 255, 0.2)',
  },
  cardHeaderAlt: {
    background: 'rgba(255, 0, 127, 0.1)',
    padding: '12px 20px',
    borderBottom: '1px solid rgba(255, 0, 127, 0.2)',
  },
  headerText: {
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.85rem',
    color: 'var(--accent-cyan)',
    letterSpacing: '1px',
    fontWeight: 'bold',
  },
  headerTextAlt: {
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.85rem',
    color: 'var(--accent-pink)',
    letterSpacing: '1px',
    fontWeight: 'bold',
  },
  cardBody: {
    padding: '25px 20px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    gap: '25px',
  },
  bodyText: {
    color: 'var(--text-light)',
    fontSize: '1rem',
    lineHeight: '1.7',
    margin: 0,
    flexGrow: 1,
  },
  linksContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
  },
  primaryLinkBtn: {
    padding: '10px 18px',
    background: 'rgba(0, 229, 255, 0.1)',
    color: 'var(--accent-cyan)',
    border: '1px solid var(--accent-cyan)',
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 10px rgba(0, 229, 255, 0.2)',
  },
  secondaryLinkBtn: {
    padding: '10px 18px',
    background: 'transparent',
    color: 'var(--text-main)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  cvBtn: {
    padding: '10px 18px',
    background: 'rgba(255, 0, 127, 0.1)',
    color: 'var(--accent-pink)',
    border: '1px solid var(--accent-pink)',
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 10px rgba(255, 0, 127, 0.2)',
  },
  footer: {
    marginTop: '60px',
    paddingTop: '30px',
    borderTop: '1px dashed rgba(255, 255, 255, 0.1)',
    textAlign: 'center',
  },
  footerText: {
    fontFamily: "'Fira Code', monospace",
    color: 'var(--accent-cyan)',
    fontSize: '0.9rem',
    margin: '0 0 5px 0',
  },
  footerSubText: {
    color: 'var(--text-main)',
    fontSize: '0.8rem',
    margin: 0,
  }
};

export default Contact;