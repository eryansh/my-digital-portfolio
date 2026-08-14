import React, { useState } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "AI & Emotion Talk at SK Keningau",
      category: "TALK",
      date: "April 2026",
      imageUrl: "/projects/gallery-talk.png",
      description: "Delivering an educational talk titled 'AI dan Emosi' to approximately 186 students."
    },
    {
      id: 2,
      title: "Arduino Primary School Workshop",
      category: "WORKSHOP",
      date: "April 2026",
      imageUrl: "/projects/gallery-arduino.png",
      description: "Serving as a technical instructor for an interactive primary school Arduino workshop using Tinkercad."
    },
    {
      id: 3,
      title: "U-Science STEM Lab Session",
      category: "STEM",
      date: "May 2026",
      imageUrl: "/projects/gallery-stem1.png",
      description: "Managing technical equipment and guiding students through robotics and IoT hardware prototyping."
    },
    {
      id: 4,
      title: "JomHack Varsity Challenge",
      category: "HACKATHON",
      date: "February 2026",
      imageUrl: "/projects/gallery-hackathon.png",
      description: "Securing 1st Runner Up with Team Titans for the AI-powered Telegram bot project, MatchKami."
    },
    {
      id: 5,
      title: "USCX Deployment & Testing",
      category: "DEV",
      date: "May 2026",
      imageUrl: "/projects/gallery-dev.png",
      description: "Refining and deploying the centralized MERN stack web management system on Vercel and Render."
    },
    {
      id: 6,
      title: "Kembara Sains Borneo Outreach",
      category: "STEM",
      date: "2024",
      imageUrl: "/projects/gallery-outreach.png",
      description: "Acting as a Science Communicator, introducing foundational coding and basic electronics to students."
    }
  ];

  const categories = ["ALL", "TALK", "WORKSHOP", "STEM", "HACKATHON", "DEV"];

  const filteredItems = activeCategory === "ALL" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" style={styles.section}>
      <div style={styles.headerContainer}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.slash}>{"//"}</span> VISUAL_LOG_GALLERY
        </h2>
        <p style={styles.sectionDesc}>
          Captured frames from technical workshops, public speaking engagements, and development milestones.
        </p>
      </div>

      <div style={styles.filterContainer}>
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(cat)}
            style={{
              ...styles.filterBtn,
              borderColor: activeCategory === cat ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.15)',
              color: activeCategory === cat ? 'var(--accent-cyan)' : 'var(--text-main)',
              background: activeCategory === cat ? 'rgba(0, 229, 255, 0.1)' : 'transparent',
              boxShadow: activeCategory === cat ? '0 0 10px rgba(0, 229, 255, 0.2)' : 'none',
            }}
          >
            [{cat}]
          </button>
        ))}
      </div>

      <div style={styles.gridContainer}>
        {filteredItems.map((item) => (
          <div key={item.id} style={styles.card} onClick={() => setSelectedImage(item)}>
            <div style={styles.imageWrapper}>
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                style={styles.image} 
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/600x400/0f172a/00e5ff?text=SYS.IMG_MISSING";
                }}
              />
              <span style={styles.badge}>{item.category}</span>
            </div>
            <div style={styles.cardBody}>
              <span style={styles.itemDate}>// {item.date}</span>
              <h3 style={styles.itemTitle}>{item.title}</h3>
              <p style={styles.itemDesc}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div style={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <span style={styles.modalTitle}>SYS.PREVIEW // {selectedImage.title}</span>
              <button onClick={() => setSelectedImage(null)} style={styles.closeBtn}>[ X ]</button>
            </div>
            <div style={styles.modalBody}>
              <img src={selectedImage.imageUrl} alt={selectedImage.title} style={styles.modalImage} />
              <p style={styles.modalDesc}>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const styles = {
  section: {
    padding: 'clamp(40px, 8vw, 60px) 0',
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(25px, 5vw, 35px)',
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
  filterContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  filterBtn: {
    padding: '6px 14px',
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.75rem',
    fontWeight: 'bold',
    border: '1px solid',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '25px',
  },
  card: {
    background: 'rgba(5, 8, 16, 0.7)',
    border: '1px solid rgba(0, 229, 255, 0.2)',
    borderRadius: '8px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
  },
  imageWrapper: {
    width: '100%',
    height: '200px',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  badge: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'rgba(5, 8, 16, 0.85)',
    color: 'var(--accent-cyan)',
    border: '1px solid var(--accent-cyan)',
    padding: '3px 8px',
    fontSize: '0.65rem',
    fontFamily: "'Fira Code', monospace",
    borderRadius: '4px',
    fontWeight: 'bold',
  },
  cardBody: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  itemDate: {
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.7rem',
    color: 'var(--accent-pink)',
  },
  itemTitle: {
    color: 'var(--text-light)',
    fontSize: '1.1rem',
    margin: 0,
    fontFamily: "'Fira Code', monospace",
  },
  itemDesc: {
    color: 'var(--text-main)',
    fontSize: '0.85rem',
    lineHeight: '1.5',
    margin: 0,
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.85)',
    backdropFilter: 'blur(5px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    padding: '20px',
  },
  modalContent: {
    background: '#0f172a',
    border: '1px solid var(--accent-cyan)',
    borderRadius: '8px',
    maxWidth: '800px',
    width: '100%',
    overflow: 'hidden',
    boxShadow: '0 0 30px rgba(0, 229, 255, 0.2)',
  },
  modalHeader: {
    padding: '12px 20px',
    background: 'rgba(5, 8, 16, 0.9)',
    borderBottom: '1px solid rgba(0, 229, 255, 0.2)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    color: 'var(--accent-cyan)',
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.85rem',
    fontWeight: 'bold',
  },
  closeBtn: {
    background: 'compiler',
    border: 'none',
    color: 'var(--accent-pink)',
    fontFamily: "'Fira Code', monospace",
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  modalBody: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  modalImage: {
    width: '100%',
    maxHeight: '60vh',
    objectFit: 'contain',
    background: '#000',
    borderRadius: '4px',
  },
  modalDesc: {
    color: 'var(--text-light)',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    margin: 0,
    fontFamily: "'Fira Code', monospace",
  }
};

export default Gallery;