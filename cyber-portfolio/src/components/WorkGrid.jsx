import React from 'react';

const WorkGrid = () => {
  const projects = [
    {
      id: 1,
      title: "Neural Network Predictor",
      category: "Machine Learning",
      description: "Custom deep learning model built with Python to predict time-series data trends with high accuracy.",
      techStack: ["Python", "TensorFlow", "Pandas"],
      github: "https://github.com",
      demo: "#"
    },
    {
      id: 2,
      title: "Smart IoT Greenhouse",
      category: "Internet of Things",
      description: "Automated microcontroller-based environment monitoring system using sensor arrays and MQTT protocol.",
      techStack: ["C++", "ESP32", "MQTT", "Arduino"],
      github: "https://github.com",
      demo: "#"
    },
    {
      id: 3,
      title: "Cyberpunk Portfolio Core",
      category: "Web Development",
      description: "The very source code of this interactive terminal-themed portfolio built using React and modern CSS architecture.",
      techStack: ["React", "JavaScript", "Vite"],
      github: "https://github.com",
      demo: "#"
    }
  ];

  return (
    <section id="work" style={styles.section}>
      <div style={styles.headerContainer}>
        <h2 style={styles.sectionTitle}>
          {/* This is the line that was fixed */}
          <span style={styles.slash}>{"//"}</span> WORK_&_PROJECTS
        </h2>
        <p style={styles.sectionDesc}>
          Archive of data science experiments, hardware integrations, and full-stack software builds.
        </p>
      </div>

      <div style={styles.gridContainer}>
        {projects.map((proj) => (
          <div key={proj.id} style={styles.projectCard}>
            
            <div style={styles.cardHeader}>
              <span style={styles.categoryBadge}>{proj.category}</span>
            </div>

            <div style={styles.cardBody}>
              <h3 style={styles.projectTitle}>{proj.title}</h3>
              <p style={styles.projectDesc}>{proj.description}</p>
              
              <div style={styles.techContainer}>
                {proj.techStack.map((tech, index) => (
                  <span key={index} style={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={styles.cardFooter}>
              <a href={proj.github} target="_blank" rel="noopener noreferrer" style={styles.cardLink}>
                [ GITHUB_REPO ]
              </a>
              <a href={proj.demo} target="_blank" rel="noopener noreferrer" style={styles.cardLinkAlt}>
                [ VIEW_DEMO ]
              </a>
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
  },
  projectCard: {
    background: 'rgba(5, 8, 16, 0.7)',
    border: '1px solid rgba(0, 229, 255, 0.2)',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
  },
  cardHeader: {
    background: 'rgba(15, 23, 42, 0.9)',
    padding: '10px 15px',
    borderBottom: '1px solid rgba(0, 229, 255, 0.1)',
  },
  categoryBadge: {
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.75rem',
    color: 'var(--accent-cyan)',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  cardBody: {
    padding: '20px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  projectTitle: {
    color: 'var(--text-light)',
    fontSize: '1.3rem',
    margin: '0 0 10px 0',
    fontFamily: "'Fira Code', monospace",
  },
  projectDesc: {
    color: 'var(--text-main)',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    margin: '0 0 20px 0',
    flexGrow: 1,
  },
  techContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  techTag: {
    background: 'rgba(255, 0, 127, 0.05)',
    color: 'var(--accent-pink)',
    border: '1px solid rgba(255, 0, 127, 0.2)',
    padding: '4px 10px',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontFamily: "'Fira Code', monospace",
  },
  cardFooter: {
    padding: '15px 20px',
    borderTop: '1px solid rgba(0, 229, 255, 0.1)',
    background: 'rgba(5, 8, 16, 0.9)',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardLink: {
    color: 'var(--accent-cyan)',
    textDecoration: 'none',
    fontFamily: "'Fira Code', monospace",
    fontWeight: 'bold',
    fontSize: '0.85rem',
    transition: 'filter 0.3s ease',
  },
  cardLinkAlt: {
    color: 'var(--accent-pink)',
    textDecoration: 'none',
    fontFamily: "'Fira Code', monospace",
    fontWeight: 'bold',
    fontSize: '0.85rem',
    transition: 'filter 0.3s ease',
  }
};

export default WorkGrid;