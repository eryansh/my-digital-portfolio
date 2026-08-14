import React from 'react';

const Leadership = () => {
  const leadershipData = [
    {
      id: 1,
      role: "Lead Organizer",
      organization: "IT Exploration 2025",
      year: "2025",
      description: "Led a committee to execute technical workshops, including Arduino and mBot robotics training. Managed technical curricula and resource allocation for multiple concurrent sessions."
    },
    {
      id: 2,
      role: "Deputy Director",
      organization: "Borneo Hackathon 2024",
      year: "2024",
      description: "Directed registration, event logistics, and secretariat operations. Authored comprehensive program books and oversaw the welfare and daily operations for all participants."
    },
    {
      id: 3,
      role: "Academic and Career Exco",
      organization: "Persatuan Mahasiswa FKI",
      year: "2023 - 2024",
      description: "Organized and facilitated technical workshops, academic seminars, and career-focused events to bridge the gap between computing students and the tech industry."
    }
  ];

  return (
    <section id="leadership" style={styles.section}>
      <div style={styles.headerContainer}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.slash}>{"//"}</span> COMMAND_&_LEADERSHIP
        </h2>
        <p style={styles.sectionDesc}>
          Authorized roles, team management, and organizational coordination protocols.
        </p>
      </div>

      <div style={styles.gridContainer}>
        {leadershipData.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={styles.cardTopBar}>
              <span style={styles.sysText}>SYS.AUTH.LEVEL: COMMANDER</span>
              <span style={styles.yearText}>[{item.year}]</span>
            </div>
            
            <div style={styles.cardBody}>
              <h3 style={styles.roleTitle}>{item.role}</h3>
              <h4 style={styles.orgName}>{item.organization}</h4>
              <p style={styles.roleDesc}>{item.description}</p>
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
    gap: 'clamp(25px, 5vw, 40px)', 
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
    color: 'var(--accent-pink)',
  },
  sectionDesc: {
    color: 'var(--text-main)',
    margin: 0,
    fontSize: 'clamp(0.85rem, 2.5vw, 1rem)', 
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 'clamp(20px, 4vw, 30px)', 
  },
  card: {
    background: 'rgba(5, 8, 16, 0.6)',
    border: '1px solid rgba(255, 0, 127, 0.3)',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    borderLeft: '4px solid var(--accent-pink)',
  },
  cardTopBar: {
    background: 'rgba(255, 0, 127, 0.1)',
    padding: 'clamp(6px, 2vw, 8px) clamp(10px, 3vw, 15px)', 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(255, 0, 127, 0.2)',
  },
  sysText: {
    fontFamily: "'Fira Code', monospace",
    fontSize: 'clamp(0.6rem, 2vw, 0.7rem)', 
    color: 'var(--accent-pink)',
    letterSpacing: '1px',
  },
  yearText: {
    fontFamily: "'Fira Code', monospace",
    fontSize: 'clamp(0.7rem, 2.5vw, 0.8rem)', 
    color: 'var(--accent-cyan)',
    fontWeight: 'bold',
  },
  cardBody: {
    padding: 'clamp(15px, 4vw, 20px)', 
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(8px, 2vw, 10px)',
  },
  roleTitle: {
    color: 'var(--text-light)',
    fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', 
    margin: 0,
    textTransform: 'uppercase',
  },
  orgName: {
    color: 'var(--accent-cyan)',
    fontSize: 'clamp(0.9rem, 3vw, 1rem)', 
    margin: 0,
    fontWeight: '500',
  },
  roleDesc: {
    color: 'var(--text-main)',
    fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', 
    lineHeight: '1.6',
    margin: 0,
    marginTop: 'clamp(5px, 2vw, 10px)',
  }
};

export default Leadership;