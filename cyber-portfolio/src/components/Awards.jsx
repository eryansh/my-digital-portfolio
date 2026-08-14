import React from 'react';

const Awards = () => {
  const awardsData = [
    {
      id: 1,
      title: "1st Runner-Up - JomHack Varsity Challenge",
      issuer: "JomHack",
      year: "2025",
      description: "Achieved 1st Runner-Up by architecting 'MatchKami,' an AI-driven Telegram bot that connects underprivileged schools with NGOs under high-pressure hackathon conditions.",
      icon: "🥈"
    },
    {
      id: 2,
      title: "Finalist - Idea Competition",
      issuer: "Idea Competition",
      year: "2025",
      description: "Recognized as a finalist for conceptualizing a Smart Condominium Security Solution, an IoT-based framework designed to mitigate 'piggybacking' using real-time sensors.",
      icon: "💡"
    },
    {
      id: 3,
      title: "Google IT Support Professional Certificate",
      issuer: "Coursera (Google)",
      year: "2022",
      description: "Earned professional certification demonstrating proficiency in IT operations, troubleshooting, and system maintenance.",
      icon: "🛡️"
    },
    {
      id: 4,
      title: "Six Sigma DMAIC (Green Belt)",
      issuer: "Universiti Malaysia Pahang (UMP)",
      year: "2021",
      description: "Certified in process improvement and data-driven methodologies to enhance operational efficiency and quality.",
      icon: "📊"
    }
  ];

  return (
    <section id="award" style={styles.section}>
      <div style={styles.headerContainer}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.slash}>{"//"}</span> ACHIEVEMENTS_LOG
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
    color: 'var(--accent-cyan)',
  },
  sectionDesc: {
    color: 'var(--text-main)',
    margin: 0,
    fontSize: 'clamp(0.85rem, 2.5vw, 1rem)', 
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(20px, 4vw, 25px)', 
  },
  awardCard: {
    background: 'rgba(5, 8, 16, 0.6)',
    border: '1px solid rgba(255, 170, 0, 0.3)', 
    borderRadius: '8px',
    padding: 'clamp(15px, 4vw, 25px)', 
    display: 'flex',
    gap: 'clamp(12px, 3vw, 20px)', 
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
    width: 'clamp(45px, 10vw, 60px)', 
    height: 'clamp(45px, 10vw, 60px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  awardIcon: {
    fontSize: 'clamp(1.3rem, 4vw, 1.8rem)', 
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
    gap: '5px',
  },
  awardTitle: {
    color: '#ffaa00', 
    fontSize: 'clamp(1.1rem, 4vw, 1.3rem)', 
    margin: 0,
    fontFamily: "'Fira Code', monospace",
  },
  awardYear: {
    color: 'var(--accent-cyan)',
    fontFamily: "'Fira Code', monospace",
    fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', 
    fontWeight: 'bold',
  },
  awardIssuer: {
    color: 'var(--text-light)',
    fontSize: 'clamp(0.85rem, 3vw, 1rem)', 
    margin: 0,
    fontWeight: '500',
  },
  awardDesc: {
    color: 'var(--text-main)',
    fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', 
    lineHeight: '1.6',
    margin: 0,
  }
};

export default Awards;