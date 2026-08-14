import React from 'react';

const Leadership = () => {
  const leadershipData = [
    {
      id: 1,
      role: "President",
      organization: "Computer Science Society (UMS)",
      year: "2021 - 2022",
      description: "Led a committee of 30+ students. Organized tech-talks, coding workshops, and the annual university hackathon which saw over 200 participants."
    },
    {
      id: 2,
      role: "Project Manager",
      organization: "Final Year Project (IoT & AI)",
      year: "2021",
      description: "Directed a team of 4 developers. Managed sprints, delegated tasks using Agile methodologies, and ensured the project was delivered ahead of the deadline."
    },
    {
      id: 3,
      role: "Lead Developer",
      organization: "National Tech Hackathon",
      year: "2020",
      description: "Spearheaded the software architecture design and coordinated frontend-backend integration, leading the team to a top 5 finish nationwide."
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
    padding: 'clamp(40px, 8vw, 60px) 0', // Padding mengecil di mobile
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(25px, 5vw, 40px)', // Jarak dilaraskan
  },
  headerContainer: {
    borderBottom: '1px solid rgba(0, 229, 255, 0.2)',
    paddingBottom: '15px',
    marginBottom: '10px',
  },
  sectionTitle: {
    fontSize: 'clamp(1.5rem, 5vw, 2rem)', // Tajuk utama mengecil
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
    fontSize: 'clamp(0.85rem, 2.5vw, 1rem)', // Penerangan mengecil
  },
  gridContainer: {
    display: 'grid',
    // Tukar dari 300px ke 250px supaya lebih mesra skrin kecil
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 'clamp(20px, 4vw, 30px)', // Jarak antara kad dikurangkan sikit di mobile
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
    padding: 'clamp(6px, 2vw, 8px) clamp(10px, 3vw, 15px)', // Padding bar atas mengecil
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(255, 0, 127, 0.2)',
  },
  sysText: {
    fontFamily: "'Fira Code', monospace",
    fontSize: 'clamp(0.6rem, 2vw, 0.7rem)', // Teks sistem mengecil
    color: 'var(--accent-pink)',
    letterSpacing: '1px',
  },
  yearText: {
    fontFamily: "'Fira Code', monospace",
    fontSize: 'clamp(0.7rem, 2.5vw, 0.8rem)', // Tahun mengecil
    color: 'var(--accent-cyan)',
    fontWeight: 'bold',
  },
  cardBody: {
    padding: 'clamp(15px, 4vw, 20px)', // Ruang dalaman kad dilaraskan
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(8px, 2vw, 10px)',
  },
  roleTitle: {
    color: 'var(--text-light)',
    fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', // Tajuk peranan mengecil
    margin: 0,
    textTransform: 'uppercase',
  },
  orgName: {
    color: 'var(--accent-cyan)',
    fontSize: 'clamp(0.9rem, 3vw, 1rem)', // Nama organisasi mengecil
    margin: 0,
    fontWeight: '500',
  },
  roleDesc: {
    color: 'var(--text-main)',
    fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', // Penerangan tugas mengecil
    lineHeight: '1.6',
    margin: 0,
    marginTop: 'clamp(5px, 2vw, 10px)',
  }
};

export default Leadership;