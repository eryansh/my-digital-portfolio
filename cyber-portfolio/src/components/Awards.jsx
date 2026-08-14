import React from 'react';

const Awards = () => {
  const awardsData = [
    {
      id: 1,
      title: "Dean's List (Anugerah Dekan)",
      issuer: "Universiti Malaysia Sabah (UMS)",
      year: "2019 - 2022",
      description: "Awarded for 6 consecutive semesters for maintaining a GPA above 3.50 throughout the Bachelor of Computer Science program.",
      icon: "🏆"
    },
    {
      id: 2,
      title: "Champion - National IoT Hackathon",
      issuer: "Ministry of Science & Technology",
      year: "2021",
      description: "Led a team of 4 to develop a smart agriculture prototype using ESP32 and MQTT, winning 1st place out of 50 participating teams.",
      icon: "🥇"
    },
    {
      id: 3,
      title: "Best Final Year Project",
      issuer: "Faculty of Computing, UMS",
      year: "2022",
      description: "Recognized for the most innovative approach in integrating Neural Networks with real-time IoT sensor data.",
      icon: "⭐"
    }
  ];

  return (
    <section id="award" style={styles.section}>
      <div style={styles.headerContainer}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.slash}>//</span> ACHIEVEMENTS_LOG
        </h2>
        <p style={styles.sectionDesc}>
          Official records of recognition, academic excellence, and competitive milestones.
        </p>
      </div>

      <div style={styles.gridContainer}>
        {awardsData.map((award) => (
          <div key={award.id} style={styles.awardCard}>
            <div style={styles.iconContainer}>
              <span style={styles.awardIcon}>{award.icon}</span>
            </div>
            
            <div style={styles.contentContainer}>
              <div style={styles.cardHeader}>
                <h3 style={styles.awardTitle}>{award.title}</h3>
                <span style={styles.awardYear}>[{award.year}]</span>
              </div>
              
              <h4 style={styles.awardIssuer}>{award.issuer}</h4>
              <p style={styles.awardDesc}>{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

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
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
  },
  awardCard: {
    background: 'rgba(5, 8, 16, 0.6)',
    border: '1px solid rgba(255, 170, 0, 0.3)', 
    borderRadius: '8px',
    padding: '25px',
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  },
  iconContainer: {
    background: 'rgba(255, 170, 0, 0.1)',
    border: '1px solid rgba(255, 170, 0, 0.4)',
    borderRadius: '8px',
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  awardIcon: {
    fontSize: '1.8rem',
  },
  contentContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '10px',
  },
  awardTitle: {
    color: '#ffaa00', 
    fontSize: '1.3rem',
    margin: 0,
    fontFamily: "'Fira Code', monospace",
  },
  awardYear: {
    color: 'var(--accent-cyan)',
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
  awardIssuer: {
    color: 'var(--text-light)',
    fontSize: '1rem',
    margin: 0,
    fontWeight: '500',
  },
  awardDesc: {
    color: 'var(--text-main)',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    margin: 0,
  }
};

export default Awards;