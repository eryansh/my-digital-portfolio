import React from 'react';

const Journey = () => {
  // Data perjalanan kau (Pendidikan & Pengalaman)
  // Sila tukar ikut data sebenar kau nanti
  const timelineData = [
    {
      id: 1,
      year: "2023 - Present",
      type: "Education", // Atau "Work"
      title: "Master of Data Science",
      institution: "Universiti Malaysia Sabah (UMS)",
      description: "Focusing on Advanced Machine Learning, Big Data Analytics, and Neural Network optimization.",
      icon: "🎓"
    },
    {
      id: 2,
      year: "2022 - 2023",
      type: "Work",
      title: "Junior Data Analyst (Internship)",
      institution: "Tech Corp Malaysia",
      description: "Performed ETL processes, visualized complex datasets using PowerBI, and assisted in building predictive models.",
      icon: "💼"
    },
    {
      id: 3,
      year: "2018 - 2022",
      type: "Education",
      title: "Bachelor of Computer Science",
      institution: "Universiti Malaysia Sabah (UMS)",
      description: "Specialized in Software Engineering. Graduated with CGPA 3.80. Final Year Project on IoT.",
      icon: "🎓"
    }
  ];

  return (
    <section id="journey" style={styles.section}>
      <div style={styles.headerContainer}>
        <h2 style={styles.sectionTitle}>
          {/* Ini adalah baris yang telah dibetulkan */}
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
    padding: '60px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
  },
  headerContainer: {
    borderBottom: '1px solid rgba(0, 229, 255, 0.2)',
    paddingBottom: '15px',
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
  timelineContainer: {
    position: 'relative',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px 0',
  },
  timelineLine: {
    position: 'absolute',
    left: '20px', // Jarak dari kiri untuk mobile-first
    top: 0,
    height: '100%',
    width: '2px',
    background: 'linear-gradient(to bottom, transparent, rgba(0, 229, 255, 0.5), rgba(255, 0, 127, 0.5), transparent)',
    zIndex: 1,
  },
  timelineItem: {
    position: 'relative',
    marginBottom: '40px',
    paddingLeft: '60px', // Beri ruang untuk garis dan dot
    display: 'flex',
    alignItems: 'flex-start',
    zIndex: 2,
  },
  timelineDot: {
    position: 'absolute',
    left: '0px',
    top: '5px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#050810',
    border: '2px solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },
  dotIcon: {
    fontSize: '1.2rem',
  },
  timelineContent: {
    background: 'rgba(15, 23, 42, 0.6)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderLeftWidth: '4px', // Sempadan tebal di kiri (neon highlight)
    width: '100%',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease',
  },
  itemYear: {
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.85rem',
    color: 'var(--accent-pink)',
    fontWeight: 'bold',
    display: 'block',
    marginBottom: '5px',
  },
  itemTitle: {
    color: 'var(--text-light)',
    fontSize: '1.3rem',
    margin: '0 0 5px 0',
  },
  itemInstitution: {
    color: 'var(--accent-cyan)',
    fontSize: '1rem',
    fontWeight: 'normal',
    margin: '0 0 15px 0',
    fontFamily: "'Fira Code', monospace",
  },
  itemDesc: {
    color: 'var(--text-main)',
    fontSize: '0.95rem',
    lineHeight: '1.7',
    margin: 0,
  },
};

export default Journey;