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
    padding: 'clamp(40px, 8vw, 60px) 0', // Padding mengecil di mobile
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(30px, 6vw, 50px)', // Jarak antara header dan timeline dilaraskan
  },
  headerContainer: {
    borderBottom: '1px solid rgba(0, 229, 255, 0.2)',
    paddingBottom: '15px',
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
  timelineContainer: {
    position: 'relative',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px 0',
  },
  timelineLine: {
    position: 'absolute',
    left: 'clamp(15px, 4vw, 20px)', // Garis ditolak sikit ke kiri pada skrin kecil
    top: 0,
    height: '100%',
    width: '2px',
    background: 'linear-gradient(to bottom, transparent, rgba(0, 229, 255, 0.5), rgba(255, 0, 127, 0.5), transparent)',
    zIndex: 1,
  },
  timelineItem: {
    position: 'relative',
    marginBottom: 'clamp(30px, 6vw, 40px)', // Jarak antara kad dikurangkan di mobile
    paddingLeft: 'clamp(50px, 12vw, 60px)', // Ruang untuk garis dan dot dilaraskan
    display: 'flex',
    alignItems: 'flex-start',
    zIndex: 2,
  },
  timelineDot: {
    position: 'absolute',
    left: 'clamp(-3px, -1vw, 0px)', // Selaraskan kedudukan dot supaya tengah-tengah garis
    top: '5px',
    width: 'clamp(35px, 8vw, 40px)', // Saiz dot mengecil sikit di mobile
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
    fontSize: 'clamp(1rem, 3vw, 1.2rem)', // Ikon dalam dot mengecil sikit
  },
  timelineContent: {
    background: 'rgba(15, 23, 42, 0.6)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    padding: 'clamp(15px, 4vw, 20px)', // Padding dalaman kad mengecil
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderLeftWidth: '4px', // Sempadan tebal di kiri (neon highlight)
    width: '100%',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease',
  },
  itemYear: {
    fontFamily: "'Fira Code', monospace",
    fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', // Tahun mengecil
    color: 'var(--accent-pink)',
    fontWeight: 'bold',
    display: 'block',
    marginBottom: '5px',
  },
  itemTitle: {
    color: 'var(--text-light)',
    fontSize: 'clamp(1.1rem, 4vw, 1.3rem)', // Tajuk pekerjaan/pendidikan mengecil
    margin: '0 0 5px 0',
  },
  itemInstitution: {
    color: 'var(--accent-cyan)',
    fontSize: 'clamp(0.85rem, 3vw, 1rem)', // Institusi mengecil
    fontWeight: 'normal',
    margin: '0 0 15px 0',
    fontFamily: "'Fira Code', monospace",
  },
  itemDesc: {
    color: 'var(--text-main)',
    fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', // Penerangan tugas mengecil
    lineHeight: '1.7',
    margin: 0,
  },
};

export default Journey;