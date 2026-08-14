import React from 'react';

const WorkGrid = () => {
  const projects = [
    {
      id: 1,
      title: "U-Science X: Centralized Management",
      category: "Full-Stack & IoT",
      description: "Architected a comprehensive centralized management system using the MERN stack, featuring an automated IoT visitor counting module via Raspberry Pi and real-time Power BI dashboards.",
      techStack: ["MongoDB", "Express", "React", "Node.js", "Raspberry Pi", "Power BI"],
      imageUrl: "/projects/proj1-main.png", // Letak gambar utama projek 1 di sini
      exploreLink: "https://ums-uscience.vercel.app",
      screenshotLink: "#",
      reportLink: "#"
    },
    {
      id: 2,
      title: "Sentiment Analysis Pipeline",
      category: "Machine Learning",
      description: "Deep Learning (H5) model trained with Keras/TensorFlow to enhance product reviews, deployed as an interactive Streamlit web app integrated with Grok LLM API.",
      techStack: ["Python", "TensorFlow", "Keras", "Streamlit", "Grok LLM API"],
      imageUrl: "/projects/proj2-main.png", // Letak gambar utama projek 2 di sini
      exploreLink: "#",
      screenshotLink: "#",
      reportLink: "#"
    },
    {
      id: 3,
      title: "MatchKami AI Bot",
      category: "AI Development",
      description: "AI-driven Telegram bot leveraging sophisticated matching algorithms and APIs to connect underprivileged schools with NGOs (JomHack 1st Runner-Up).",
      techStack: ["AI Algorithms", "Telegram APIs"],
      imageUrl: "/projects/proj3-main.png", // Letak gambar utama projek 3 di sini
      exploreLink: "#",
      screenshotLink: "#",
      reportLink: "#"
    },
    {
      id: 4,
      title: "IoT Smart Garden",
      category: "Internet of Things",
      description: "Automated smart gardening system utilizing an ESP32 microcontroller, environmental sensors, and the Blynk IoT platform for a real-time mobile dashboard.",
      techStack: ["ESP32", "Sensors", "Blynk IoT"],
      imageUrl: "/projects/proj4-main.png", // Letak gambar utama projek 4 di sini
      exploreLink: "#",
      screenshotLink: "#",
      reportLink: "#"
    }
  ];

  return (
    <section id="work" style={styles.section}>
      <div style={styles.headerContainer}>
        <h2 style={styles.sectionTitle}>
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

            {/* --- BAHAGIAN GAMBAR UTAMA --- */}
            <div style={styles.imageContainer}>
              <img 
                src={proj.imageUrl} 
                alt={`${proj.title} Preview`} 
                style={styles.projectImage} 
                // Fallback jika gambar tiada
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/600x300/0f172a/00e5ff?text=SYS.IMG_MISSING";
                }}
              />
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

            {/* --- BAHAGIAN 3 BUTANG --- */}
            <div style={styles.cardFooter}>
              <a href={proj.exploreLink} target="_blank" rel="noopener noreferrer" style={styles.btnExplore}>
                [ EXPLORE ]
              </a>
              <a href={proj.screenshotLink} target="_blank" rel="noopener noreferrer" style={styles.btnScreenshot}>
                [ SCREENSHOT ]
              </a>
              <a href={proj.reportLink} target="_blank" rel="noopener noreferrer" style={styles.btnReport}>
                [ REPORT ]
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
    padding: 'clamp(40px, 8vw, 60px) 0', 
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(20px, 5vw, 40px)',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
    fontSize: 'clamp(0.65rem, 2vw, 0.75rem)', 
    color: 'var(--accent-cyan)',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  
  /* --- GAYA UNTUK GAMBAR UTAMA --- */
  imageContainer: {
    width: '100%',
    height: '200px', // Boleh adjust tinggi gambar mengikut kesesuaian
    overflow: 'hidden',
    borderBottom: '1px solid rgba(0, 229, 255, 0.1)',
    backgroundColor: '#050810',
  },
  projectImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.5s ease', // efek zoom jika mahu
  },

  cardBody: {
    padding: 'clamp(15px, 4vw, 20px)', 
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  projectTitle: {
    color: 'var(--text-light)',
    fontSize: 'clamp(1.1rem, 4vw, 1.3rem)', 
    margin: '0 0 10px 0',
    fontFamily: "'Fira Code', monospace",
  },
  projectDesc: {
    color: 'var(--text-main)',
    fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', 
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
    padding: 'clamp(3px, 1vw, 4px) clamp(8px, 2vw, 10px)', 
    borderRadius: '4px',
    fontSize: 'clamp(0.65rem, 2vw, 0.75rem)', 
    fontFamily: "'Fira Code', monospace",
  },
  
  /* --- GAYA UNTUK 3 BUTANG --- */
  cardFooter: {
    padding: '15px 20px', 
    borderTop: '1px solid rgba(0, 229, 255, 0.1)',
    background: 'rgba(5, 8, 16, 0.9)',
    display: 'flex',
    flexWrap: 'wrap', // Penting untuk mobile supaya butang boleh turun ke bawah kalau tak muat
    gap: '12px',
    alignItems: 'center',
  },
  btnExplore: {
    color: 'var(--accent-pink, #ff007f)',
    textDecoration: 'none',
    fontFamily: "'Fira Code', monospace",
    fontWeight: 'bold',
    fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', 
  },
  btnScreenshot: {
    color: 'var(--accent-cyan, #00e5ff)',
    textDecoration: 'none',
    fontFamily: "'Fira Code', monospace",
    fontWeight: 'bold',
    fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', 
  },
  btnReport: {
    color: 'var(--chart-bar-positive, #00ff00)', // Warna hijau untuk membezakan Report
    textDecoration: 'none',
    fontFamily: "'Fira Code', monospace",
    fontWeight: 'bold',
    fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', 
  }
};

export default WorkGrid;