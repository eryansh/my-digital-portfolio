import React, { useState, useEffect } from 'react';

const Hero = () => {
  // Teks yang kita nak taip secara automatik
  const fullText = "INITIALIZING CYBER PORTFOLIO... ACCESS GRANTED. WELCOME TO RYAN'S DIGITAL HUB.";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Efek taipan mekanikal terminal
    if (index < fullText.length) {
      const timeoutId = setTimeout(() => {
        setTypedText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 50); // Kelajuan taipan (50ms setiap huruf)

      return () => clearTimeout(timeoutId);
    }
  }, [index, fullText]);

  return (
    <section className="hero-section reveal active" style={heroStyles.container}>
      <div style={heroStyles.terminalHeader}>
        <span style={heroStyles.dotRed}></span>
        <span style={heroStyles.dotYellow}></span>
        <span style={heroStyles.dotGreen}></span>
        <span style={heroStyles.terminalTitle}>system_core.exe</span>
      </div>
      
      <div style={heroStyles.terminalBody}>
        {/* Tajuk Utama dengan Efek Holografik Gradient */}
        <h1 className="uppercase-title" style={heroStyles.mainTitle}>
          {typedText}
          <span className="typing-cursor"></span>
        </h1>
        
        <p style={heroStyles.subText}>
          Data Scientist // Full-Stack Cyber Developer // AI Automation Enthusiast
        </p>

        {/* Butang Glitch */}
        <div style={{ marginTop: '25px' }}>
          <a 
            href="#work" 
            className="btn glitch-on-hover" 
            data-text="PROCEED TO PROJECTS"
          >
            PROCEED TO PROJECTS
          </a>
        </div>
      </div>
    </section>
  );
};

// Gaya inline untuk struktur kotak terminal siber
const heroStyles = {
  container: {
    marginTop: '60px',
    background: 'rgba(5, 8, 16, 0.7)',
    border: '1px solid rgba(0, 229, 255, 0.2)',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
  },
  terminalHeader: {
    background: 'rgba(15, 23, 42, 0.9)',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    borderBottom: '1px solid rgba(0, 229, 255, 0.1)',
  },
  dotRed: { width: '12px', height: '12px', backgroundColor: '#ef4444', borderRadius: '50%' },
  dotYellow: { width: '12px', height: '12px', backgroundColor: '#ffd700', borderRadius: '50%' },
  dotGreen: { width: '12px', height: '12px', backgroundColor: '#4ade80', borderRadius: '50%' },
  terminalTitle: {
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.8rem',
    color: '#475569',
    marginLeft: 'auto',
    letterSpacing: '1px'
  },
  terminalBody: {
    padding: '40px 30px',
  },
  mainTitle: {
    fontSize: '2rem',
    lineHeight: '1.4',
    fontFamily: "'Fira Code', monospace",
    fontWeight: '700',
    margin: '0 0 20px 0',
    borderBottom: 'none', // Override garisan bawah bawaan index.css
  },
  subText: {
    fontFamily: "'Fira Code', monospace",
    color: '#64748b',
    fontSize: '1rem',
    letterSpacing: '1px',
  }
};

export default Hero;