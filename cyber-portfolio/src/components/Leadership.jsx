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
          <span style={styles.slash}>//</span> COMMAND_&_LEADERSHIP
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
    color: 'var(--accent-pink)',
  },
  sectionDesc: {
    color: 'var(--text-main)',
    margin: 0,
    fontSize: '1rem',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
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
    padding: '8px 15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(255, 0, 127, 0.2)',
  },
  sysText: {
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.7rem',
    color: 'var(--accent-pink)',
    letterSpacing: '1px',
  },
  yearText: {
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.8rem',
    color: 'var(--accent-cyan)',
    fontWeight: 'bold',
  },
  cardBody: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  roleTitle: {
    color: 'var(--text-light)',
    fontSize: '1.4rem',
    margin: 0,
    textTransform: 'uppercase',
  },
  orgName: {
    color: 'var(--accent-cyan)',
    fontSize: '1rem',
    margin: 0,
    fontWeight: '500',
  },
  roleDesc: {
    color: 'var(--text-main)',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    margin: 0,
    marginTop: '10px',
  }
};

export default Leadership;