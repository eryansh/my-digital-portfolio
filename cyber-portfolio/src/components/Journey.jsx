import React from 'react';

const Journey = () => {
  const timelineData = [
    {
      id: 1,
      year: "Mar 2026 - Present",
      type: "Work",
      title: "Full-Stack Developer Intern",
      institution: "U-Science, Universiti Malaysia Sabah",
      description: "Architected the USC-X centralized management platform using the MERN stack and developed Power BI dashboards to analyze STEM datasets.",
      icon: "💻"
    },
    {
      id: 2,
      year: "Apr 2026 - Present",
      type: "Work",
      title: "STEM Educator (Freelance)",
      institution: "Smart Native Maker",
      description: "Instructed weekend STEM programs, mentoring young learners in Arduino, TinkerCAD, Scratch, and Machine Learning.",
      icon: "🤖"
    },
    {
      id: 3,
      year: "Oct 2022 - Dec 2026",
      type: "Education", 
      title: "Bachelor of Computer Science (Data Science)",
      institution: "Universiti Malaysia Sabah (UMS)",
      description: "Specializing in Data Science and Machine Learning. Engineered an H5 Deep Learning model for NLP and an AI-driven Telegram bot.",
      icon: "🎓"
    },
    {
      id: 4,
      year: "Mar 2021 - Jul 2021",
      type: "Work",
      title: "IT Tech Intern",
      institution: "Prima IT",
      description: "Diagnosed and resolved over 15+ hardware/software issues weekly, performed OS deployments, and provided technical consultations.",
      icon: "🔧"
    },
    {
      id: 5,
      year: "Jun 2018 - Sep 2021",
      type: "Education",
      title: "Diploma in Electronic Engineering (Computer)",
      institution: "Politeknik Kota Kinabalu",
      description: "Engineered an automated IoT smart gardening system utilizing an ESP32 microcontroller and Blynk Platform for the final year project.",
      icon: "🎓"
    }
  ];

  return (
    <section id="journey" style={styles.section}>
      <div style={styles.headerContainer}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.slash}>{"//"}</span> MY_JOURNEY
        </h2>
        <p style={styles.sectionDesc}>
          Chronological log of academic qualifications and professional deployements.
        </p>
      </div>

      <div style={styles.timelineContainer}>
        {/* Garis Menegak Tengah */}
        <div style={styles.timelineLine}></div>

        {timelineData.map((item, index) => (
          <div key={item.id} style={styles.timelineItem}>
            
            {/* Titik Node pada Garis */}
            <div style={{
              ...styles.timelineDot,
              borderColor: item.type === "Education" ? "var(--accent-cyan)" : "var(--accent-pink)",
              boxShadow: item.type === "Education" ? "0 0 10px var(--accent-cyan)" : "0 0 10px var(--accent-pink)"
            }}>
              <span style={styles.dotIcon}>{item.icon}</span>
            </div>

            {/* Kad Kandungan (Glassmorphism) */}
            <div style={{
              ...styles.timelineContent,
              borderLeftColor: item.type === "Education" ? "var(--accent-cyan)" : "var(--accent-pink)"
            }}>
              <span style={styles.itemYear}>{item.year}</span>
              <h3 style={styles.itemTitle}>{item.title}</h3>
              <h4 style={styles.itemInstitution}>{item.institution}</h4>
              <p style={styles.itemDesc}>{item.description}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

// ==========================================
// REKA BENTUK CYBER-TIMELINE (INLINE CSS)
// ==========================================
const styles = {
  section: {
    padding: 'clamp(40px, 8vw, 60px) 0', 
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(30px, 6vw, 50px)', 
  },
  headerContainer: {
    borderBottom: '1px solid rgba(0, 229, 255, 0.2)',
    paddingBottom: '15px',
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
  timelineContainer: {
    position: 'relative',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px 0',
  },
  timelineLine: {
    position: 'absolute',
    left: 'clamp(15px, 4vw, 20px)', 
    top: 0,
    height: '100%',
    width: '2px',
    background: 'linear-gradient(to bottom, transparent, rgba(0, 229, 255, 0.5), rgba(255, 0, 127, 0.5), transparent)',
    zIndex: 1,
  },
  timelineItem: {
    position: 'relative',
    marginBottom: 'clamp(30px, 6vw, 40px)', 
    paddingLeft: 'clamp(50px, 12vw, 60px)', 
    display: 'flex',
    alignItems: 'flex-start',
    zIndex: 2,
  },
  timelineDot: {
    position: 'absolute',
    left: 'clamp(-3px, -1vw, 0px)', 
    top: '5px',
    width: 'clamp(35px, 8vw, 40px)', 
    height: 'clamp(35px, 8vw, 40px)',
    borderRadius: '50%',
    background: '#050810',
    border: '2px solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },
  dotIcon: {
    fontSize: 'clamp(1rem, 3vw, 1.2rem)', 
  },
  timelineContent: {
    background: 'rgba(15, 23, 42, 0.6)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    padding: 'clamp(15px, 4vw, 20px)', 
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderLeftWidth: '4px', 
    width: '100%',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease',
  },
  itemYear: {
    fontFamily: "'Fira Code', monospace",
    fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', 
    color: 'var(--accent-pink)',
    fontWeight: 'bold',
    display: 'block',
    marginBottom: '5px',
  },
  itemTitle: {
    color: 'var(--text-light)',
    fontSize: 'clamp(1.1rem, 4vw, 1.3rem)', 
    margin: '0 0 5px 0',
  },
  itemInstitution: {
    color: 'var(--accent-cyan)',
    fontSize: 'clamp(0.85rem, 3vw, 1rem)', 
    fontWeight: 'normal',
    margin: '0 0 15px 0',
    fontFamily: "'Fira Code', monospace",
  },
  itemDesc: {
    color: 'var(--text-main)',
    fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', 
    lineHeight: '1.7',
    margin: 0,
  },
};

export default Journey;