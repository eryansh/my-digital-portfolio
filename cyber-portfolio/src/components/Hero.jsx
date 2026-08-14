import React, { useState, useEffect } from 'react';

// ==========================================
// KITA PINDAHKAN SENARAI INI KE LUAR KOMPONEN
// ==========================================
const phrases = [
  "Data Scientist.", 
  "Full-Stack Developer.", 
  "Machine Learning Enthusiast.",
  "Internet of Things (IoT).",
  "Electronics."
];

const Hero = () => {
  // ==========================================
  // LOGIK ENJIN TYPEWRITER (KESAN TAIPAN)
  // ==========================================
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 80);

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 3500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      } else {
        timer = setTimeout(handleType, typingSpeed);
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]); 

  return (
    <section id="about" style={styles.heroSection}>
      <div style={styles.heroLayout}>
        
        <div style={styles.textColumn}>
          <p style={styles.systemGreeting}>
            <span style={{ color: 'var(--accent-pink)' }}>{'>'}</span> SYSTEM_READY // INITIATING_USER_PROFILE:
          </p>

          <h1 style={styles.mainTitle}>
            HERYANSHAH <span style={{ color: 'var(--accent-cyan)' }}>SUHAIMI</span>
          </h1>

          <div style={styles.typewriterContainer}>
            <span style={styles.terminalPrompt}>root@ryan:~#</span>
            <span style={styles.typewriterText}> {text}</span>
            <span style={styles.cursorBlink}>_</span>
          </div>

          <p style={styles.bioText}>
            I am a final-year Data Science undergraduate at Universiti Malaysia Sabah who loves bridging the gap between hard data and user-centric design. I am deeply passionate about building intelligent web applications using the MERN stack and turning complex technology into tangible experiences. Whether I am developing award-winning, AI-powered solutions like my hackathon project, MatchKami, or deploying centralized management systems, my goal is to create dynamic applications that solve real-world problems.
          </p>

          <div style={styles.buttonGroup}>
            <a 
              href="https://www.linkedin.com/in/heryanshah-suhaimi-ba302b360/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.primaryBtn}
            >
              [ LINKEDIN ]
            </a>
            <a 
              href="https://github.com/eryansh/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.secondaryBtn}
            >
              [ GITHUB ]
            </a>
            <a 
              href="/resume.pdf" 
              download="Resume_Heryanshah_Suhaimi.pdf" 
              style={styles.secondaryBtn}
            >
              [ RESUME/CV ]
            </a>
            <a 
              href="/transcript.pdf" 
              download="Transcript_Academic_Heryanshah_Suhaimi.pdf" 
              style={styles.secondaryBtn}
            >
              [ TRANSCRIPT ]
            </a>
          </div>
        </div>

        <div style={styles.imageColumn}>
          <div style={styles.imagePlaceholder}>
            {/* Gantikan src di bawah dengan fail gambar sebenar kau dalam folder public */}
            <img 
              src="/profile-square.png" 
              alt="Heryanshah Suhaimi" 
              style={styles.profileImage}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span style={styles.fallbackText}>[ SYS.IMG_MISSING ]</span>
          </div>
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
  heroLayout: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 'clamp(30px, 5vw, 60px)',
    flexWrap: 'wrap-reverse', 
  },
  textColumn: {
    flex: '1 1 500px', 
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  imageColumn: {
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'clamp(200px, 30vw, 280px)', 
    margin: '0 auto', 
  },
  imagePlaceholder: {
    width: '100%',
    aspectRatio: '1 / 1', 
    background: 'rgba(0, 229, 255, 0.05)',
    border: '2px solid #333333', /* <-- Diubah dari 'dashed var(--accent-cyan)' kepada 'solid #333333' (kelabu hitam) */
    borderRadius: '12px', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 0 20px rgba(0, 229, 255, 0.15)', /* Pilihan: Anda boleh buang baris ini jika tidak mahu efek 'glow' cyan di sekeliling gambar */
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block', 
  },
  fallbackText: {
    display: 'none', 
    fontFamily: "'Fira Code', monospace",
    color: 'var(--accent-cyan)',
    fontSize: '0.8rem',
    textAlign: 'center',
  },
  systemGreeting: {
    fontFamily: "'Fira Code', monospace",
    color: 'var(--text-main)',
    fontSize: '0.9rem',
    letterSpacing: '2px',
    marginBottom: '5px',
  },
  mainTitle: {
    fontSize: 'clamp(2rem, 7vw, 4.5rem)', 
    fontWeight: '900',
    margin: '0',
    lineHeight: '1.1',
    letterSpacing: '-2px',
    color: 'var(--text-light)',
    textShadow: '0 0 20px rgba(0, 229, 255, 0.3)',
  },
  typewriterContainer: {
    fontSize: 'clamp(0.85rem, 2.5vw, 1.5rem)',
    fontFamily: "'Fira Code', monospace",
    marginTop: '10px',
    marginBottom: '15px',
    background: 'rgba(15, 23, 42, 0.5)',
    padding: '10px 15px', 
    borderRadius: '4px',
    borderLeft: '3px solid var(--accent-pink)',
    display: 'inline-block',
    alignSelf: 'flex-start',
  },
  terminalPrompt: {
    color: 'var(--chart-bar-positive)',
    marginRight: '8px',
  },
  typewriterText: {
    color: 'var(--text-light)',
  },
  cursorBlink: {
    color: 'var(--accent-cyan)',
    animation: 'blink 1s step-end infinite',
  },
  bioText: {
    fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', 
    lineHeight: '1.6',
    color: 'var(--text-main)',
    maxWidth: '650px',
    marginTop: '5px',
    marginBottom: '25px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    padding: 'clamp(10px, 2vw, 12px) clamp(16px, 4vw, 24px)',
    fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
    background: 'rgba(0, 229, 255, 0.1)',
    color: 'var(--accent-cyan)',
    border: '1px solid var(--accent-cyan)',
    fontFamily: "'Fira Code', monospace",
    fontWeight: 'bold',
    textDecoration: 'none',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 15px rgba(0, 229, 255, 0.2)',
  },
  secondaryBtn: {
    padding: 'clamp(10px, 2vw, 12px) clamp(16px, 4vw, 24px)',
    fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
    background: 'transparent',
    color: 'var(--accent-pink)',
    border: '1px solid var(--accent-pink)',
    fontFamily: "'Fira Code', monospace",
    fontWeight: 'bold',
    textDecoration: 'none',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }
};

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