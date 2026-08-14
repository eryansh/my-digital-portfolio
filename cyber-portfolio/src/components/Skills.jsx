import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      category: "Data Science & AI",
      color: "var(--accent-cyan)",
      skills: [
        { name: "Python", level: "90%" },
        { name: "Machine Learning", level: "85%" },
        { name: "TensorFlow", level: "75%" },
        { name: "Data Visualization", level: "85%" }
      ]
    },
    {
      id: 2,
      category: "Web Development",
      color: "var(--accent-pink)",
      skills: [
        { name: "React & Vite", level: "85%" },
        { name: "JavaScript (ES6+)", level: "90%" },
        { name: "Node.js", level: "75%" },
        { name: "Modern CSS / UI", level: "85%" }
      ]
    },
    {
      id: 3,
      category: "Hardware & IoT",
      color: "var(--chart-bar-positive)", // Hijau
      skills: [
        { name: "C++ & Arduino", level: "80%" },
        { name: "ESP32 / Microcontrollers", level: "75%" },
        { name: "MQTT Protocol", level: "80%" },
        { name: "Sensor Integration", level: "85%" }
      ]
    },
    {
      id: 4,
      category: "Database & Tools",
      color: "#9d00ff", // Ungu
      skills: [
        { name: "SQL & MySQL", level: "85%" },
        { name: "Git & GitHub", level: "90%" },
        { name: "MongoDB", level: "70%" },
        { name: "PowerBI", level: "80%" }
      ]
    }
  ];

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.headerContainer}>
        <h2 style={styles.sectionTitle}>
          {/* Ini adalah baris yang telah dibetulkan */}
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
              {group.skills.map((skill, index) => (
                <div key={index} style={styles.skillItem}>
                  <div style={styles.skillHeader}>
                    <span style={styles.skillName}>{skill.name}</span>
                    <span style={{ ...styles.skillLevel, color: group.color }}>
                      {skill.level}
                    </span>
                  </div>
                  
                  <div style={styles.progressBarBg}>
                    <div 
                      style={{ 
                        ...styles.progressBarFill, 
                        width: skill.level,
                        backgroundColor: group.color,
                        boxShadow: `0 0 10px ${group.color}` 
                      }}
                    ></div>
                  </div>
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },
  skillCard: {
    background: 'rgba(5, 8, 16, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '8px',
    padding: '25px',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
  },
  categoryTitle: {
    fontFamily: "'Fira Code', monospace",
    fontSize: '1.2rem',
    margin: '0 0 25px 0',
    letterSpacing: '1px',
    borderBottom: '1px dashed rgba(255, 255, 255, 0.1)',
    paddingBottom: '10px',
  },
  skillsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  skillItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  skillHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skillName: {
    color: 'var(--text-light)',
    fontSize: '0.95rem',
    fontWeight: '500',
  },
  skillLevel: {
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.85rem',
    fontWeight: 'bold',
  },
  progressBarBg: {
    width: '100%',
    height: '6px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: '3px',
    transition: 'width 1.5s cubic-bezier(0.1, 0.5, 0.1, 1)',
  }
};

export default Skills;