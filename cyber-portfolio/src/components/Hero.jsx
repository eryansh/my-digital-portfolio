import React, { useState, useEffect } from 'react';

const Hero = () => {
  // ==========================================
  // LOGIK ENJIN TYPEWRITER (KESAN TAIPAN)
  // ==========================================
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // SENARAI FRASA TELAH DIKEMASKINI 
  const phrases = [
    "Data Scientist.", 
    "Full-Stack Developer.", 
    "Machine Learning Enthusiast.",
    "Internet of Things (IoT).",
    "Electronics."
  ];

  useEffect(() => {
    let timer;
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Kelajuan menaip berbeza bila taip vs padam
      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        // Jeda sekejap bila ayat dah habis ditaip
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        // Tukar ke ayat seterusnya bila dah habis padam
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else {
        timer = setTimeout(handleType, typingSpeed);
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  // ==========================================
  // FUNGSI NAVIGASI BUTANG
  // ==========================================
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" style={styles.heroSection}>
      <div style={styles.contentWrapper}>
        
        {/* Subtajuk Terminal */}
        <p style={styles.systemGreeting}>
          <span style={{ color: 'var(--accent-pink)' }}>{'>'}</span> SYSTEM_READY // INITIATING_USER_PROFILE:
        </p>

        {/* Tajuk Utama (Nama) */}
        <h1 style={styles.mainTitle}>
          HERYANSHAH <span style={{ color: 'var(--accent-cyan)' }}>SUHAIMI</span>
        </h1>

        {/* Efek Typewriter */}
        <div style={styles.typewriterContainer}>
          <span style={styles.terminalPrompt}>root@ryan:~#</span>
          <span style={styles.typewriterText}> {text}</span>
          <span style={styles.cursorBlink}>_</span>
        </div>

        {/* Bio Ringkas */}
        <p style={styles.bioText}>
          I engineer digital solutions bridging the gap between complex 
          data architectures and interactive frontend experiences. 
          Currently optimizing neural networks and building cyber-interfaces.
        </p>

        {/* Butang Tindakan */}
        <div style={styles.buttonGroup}>
          <a 
            href="#featured" 
            style={styles.primaryBtn} 
            onClick={(e) => scrollToSection(e, 'featured')}
          >
            EXECUTE: VIEW_WORK
          </a>
          <a 
            href="#contact" 
            style={styles.secondaryBtn} 
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            PING_ME
          </a>
        </div>
        
      </div>
    </section>
  );
};

// ==========================================
// REKA BENTUK CYBERPUNK (INLINE CSS)
// ==========================================
const styles = {
  heroSection: {
    minHeight: '85vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px 0',
  },
  contentWrapper: {
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  systemGreeting: {
    fontFamily: "'Fira Code', monospace",
    color: 'var(--text-main)',
    fontSize: '0.9rem',
    letterSpacing: '2px',
    marginBottom: '10px',
  },
  mainTitle: {
    fontSize: 'clamp(3rem, 8vw, 5.5rem)', // Responsif automatik ikut skrin
    fontWeight: '900',
    margin: '0',
    lineHeight: '1.1',
    letterSpacing: '-2px',
    color: 'var(--text-light)',
    textShadow: '0 0 20px rgba(0, 229, 255, 0.3)',
  },
  typewriterContainer: {
    fontSize: 'clamp(1.2rem, 3vw, 2rem)',
    fontFamily: "'Fira Code', monospace",
    marginTop: '10px',
    marginBottom: '20px',
    background: 'rgba(15, 23, 42, 0.5)',
    padding: '10px 20px',
    borderRadius: '4px',
    borderLeft: '3px solid var(--accent-pink)',
    display: 'inline-block',
    alignSelf: 'flex-start',
  },
  terminalPrompt: {
    color: 'var(--chart-bar-positive)',
    marginRight: '10px',
  },
  typewriterText: {
    color: 'var(--text-light)',
  },
  cursorBlink: {
    color: 'var(--accent-cyan)',
    animation: 'blink 1s step-end infinite',
  },
  bioText: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: 'var(--text-main)',
    maxWidth: '650px',
    marginTop: '10px',
    marginBottom: '30px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    padding: '12px 24px',
    background: 'rgba(0, 229, 255, 0.1)',
    color: 'var(--accent-cyan)',
    border: '1px solid var(--accent-cyan)',
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 15px rgba(0, 229, 255, 0.2)',
  },
  secondaryBtn: {
    padding: '12px 24px',
    background: 'transparent',
    color: 'var(--accent-pink)',
    border: '1px solid var(--accent-pink)',
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }
};

// Tambah animasi kursor berkedip ke dalam tag style dokumen
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  a:hover {
    filter: brightness(1.3);
  }
`;
document.head.appendChild(styleSheet);

export default Hero;