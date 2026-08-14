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
    padding: 'clamp(40px, 8vw, 60px) 0', // Padding section dilaraskan untuk mobile
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(25px, 5vw, 40px)', // Jarak antara header dan kad dilaraskan
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
    fontSize: 'clamp(0.85rem, 2.5vw, 1rem)', // Penerangan mengecil
  },
  gridContainer: {
    display: 'grid',
    // Tukar minmax dari 280px ke 250px supaya lebih selamat untuk skrin sempit
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 'clamp(20px, 4vw, 30px)', // Jarak antara kad dikurangkan sikit di mobile
  },
  skillCard: {
    background: 'rgba(5, 8, 16, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '8px',
    padding: 'clamp(15px, 4vw, 25px)', // Padding dalaman kad dilaraskan
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
  },
  categoryTitle: {
    fontFamily: "'Fira Code', monospace",
    fontSize: 'clamp(1rem, 3vw, 1.2rem)', // Tajuk kategori mengecil di mobile
    margin: '0 0 20px 0', // Margin bawah dilaraskan
    letterSpacing: '1px',
    borderBottom: '1px dashed rgba(255, 255, 255, 0.1)',
    paddingBottom: '10px',
  },
  skillsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(15px, 3vw, 20px)', // Jarak antara baris kemahiran dilaraskan
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
    fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', // Teks nama skill mengecil
    fontWeight: '500',
  },
  skillLevel: {
    fontFamily: "'Fira Code', monospace",
    fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', // Teks peratusan mengecil
    fontWeight: 'bold',
  },
  progressBarBg: {
    width: '100%',
    height: 'clamp(4px, 1.5vw, 6px)', // Ketinggian bar status dilaraskan sedikit
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