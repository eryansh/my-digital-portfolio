import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      category: "Data Science & AI",
      color: "var(--accent-cyan)",
      skills: [
        "Python (NLP & ML)", 
        "Keras & TensorFlow", 
        "Computer Vision (OpenCV)", 
        "Power BI & Visualization"
      ]
    },
    {
      id: 2,
      category: "Web Development",
      color: "var(--accent-pink)",
      skills: [
        "JavaScript (MERN Stack)", 
        "React, Node.js & Express", 
        "HTML5/CSS3", 
        "Vercel & Render Deployment"
      ]
    },
    {
      id: 3,
      category: "Hardware & IoT",
      color: "var(--chart-bar-positive)", 
      skills: [
        "C++ & Arduino", 
        "Raspberry Pi Integration", 
        "ESP32 Microcontrollers", 
        "Hardware Troubleshooting"
      ]
    },
    {
      id: 4,
      category: "Database & Tools",
      color: "#9d00ff", 
      skills: [
        "SQL & MongoDB", 
        "Git & GitHub", 
        "Streamlit Web Apps", 
        "R & Data Automation"
      ]
    }
  ];

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.headerContainer}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.slash}>{"//"}</span> SYSTEM_CAPABILITIES
        </h2>
        <p style={styles.sectionDesc}>
          Core competencies and technical proficiency levels across multiple domains.
        </p>
      </div>

      <div style={styles.gridContainer}>
        {skillCategories.map((group) => (
          <div key={group.id} style={styles.skillCard}>
            <h3 style={{ ...styles.categoryTitle, color: group.color }}>
              [{group.category}]
            </h3>
            
            <div style={styles.skillsList}>
              {group.skills.map((skillName, index) => (
                <div key={index} style={styles.skillItem}>
                  <span style={styles.bulletSymbol} data-color={group.color}>&gt;</span>
                  <span style={styles.skillName}>{skillName}</span>
                </div>
              ))}
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
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 'clamp(20px, 4vw, 30px)', 
  },
  skillCard: {
    background: 'rgba(5, 8, 16, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '8px',
    padding: 'clamp(15px, 4vw, 25px)', 
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
  },
  categoryTitle: {
    fontFamily: "'Fira Code', monospace",
    fontSize: 'clamp(1rem, 3vw, 1.2rem)', 
    margin: '0 0 20px 0', 
    letterSpacing: '1px',
    borderBottom: '1px dashed rgba(255, 255, 255, 0.1)',
    paddingBottom: '10px',
  },
  skillsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(12px, 2.5vw, 15px)', 
  },
  skillItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  bulletSymbol: {
    fontFamily: "'Fira Code', monospace",
    color: 'var(--accent-cyan)',
    fontSize: '0.85rem',
    fontWeight: 'bold',
  },
  skillName: {
    color: 'var(--text-light)',
    fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', 
    fontWeight: '500',
    fontFamily: "'Fira Code', monospace",
  }
};

export default Skills;