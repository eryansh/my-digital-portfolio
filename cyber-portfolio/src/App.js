import React from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';

// Placeholder komponen yang akan kita isi satu-persatu selepas ini
const Hero = () => (
  <section id="about" style={styles.placeholderSection}>
    <h1 style={{ color: 'var(--accent-cyan)' }}>[ ABOUT / HERO_SECTION ]</h1>
    <p>Hi, I am Heryanshah Suhaimi (Ryan). Data Scientist & Full-Stack Developer.</p>
  </section>
);

const FeaturedLiveApps = () => (
  <section id="featured" style={styles.placeholderSection}>
    <h2 style={{ color: 'var(--chart-bar-positive)' }}>[ FEATURED_LIVE_APPLICATIONS ]</h2>
    <p>Interactive station for fully deployed web apps and production models.</p>
  </section>
);

const WorkGrid = () => (
  <section id="work" style={styles.placeholderSection}>
    <h2 style={{ color: 'var(--accent-cyan)' }}>[ WORK_&_PROJECTS_GRID ]</h2>
    <p>3D Tilt Project Cards and technical repositories will be deployed here.</p>
  </section>
);

const Journey = () => (
  <section id="journey" style={styles.placeholderSection}>
    <h2 style={{ color: 'var(--text-main)' }}>[ CAREER_&_EDUCATION_JOURNEY ]</h2>
    <p>Interactive academic and career timeline node architecture.</p>
  </section>
);

const Skills = () => (
  <section id="skills" style={styles.placeholderSection}>
    <h2 style={{ color: 'var(--accent-cyan)' }}>[ TECH_STACK_DATABASE ]</h2>
    <p>Python, React.js, Machine Learning parameters, and SQL skill matrices.</p>
  </section>
);

const Awards = () => (
  <section id="award" style={styles.placeholderSection}>
    <h2 style={{ color: 'var(--accent-pink)' }}>[ HONORS_&_AWARDS_CORE ]</h2>
    <p>Scholarships, hackathon wins, and official recognitions database.</p>
  </section>
);

const Leadership = () => (
  <section id="leadership" style={styles.placeholderSection}>
    <h2 style={{ color: 'var(--accent-cyan)' }}>[ LEADERSHIP_&_ORGANIZATIONS ]</h2>
    <p>Command history, student body leadership, and event organization tracks.</p>
  </section>
);

const Contact = () => (
  <section id="contact" style={styles.placeholderSection}>
    <h2 style={{ color: 'var(--accent-pink)' }}>[ TERMINAL_CONTACT_GATEWAY ]</h2>
    <p>Secure communications link for recruiters & CV download route.</p>
    <a href="#cv" className="btn" style={{ marginTop: '15px' }}>DOWNLOAD CV</a>
  </section>
);

function App() {
  return (
    <div style={styles.appContainer}>
      {/* Kursor Sentiasa Berada di Lapisan Paling Atas */}
      <Cursor />

      {/* Menu Navigasi Utama */}
      <Navbar />

      {/* Kandungan Utama Portfolio (Telah Dikemaskini) */}
      <main style={styles.mainContent}>
        <Hero />
        <FeaturedLiveApps />
        <WorkGrid />
        <Journey />
        <Skills />
        <Awards />
        <Leadership />
        <Contact />
      </main>

      {/* Widget Chatbot AI Terapung */}
      <Chatbot />
    </div>
  );
}

// ==========================================
// Reka Bentuk CSS-in-JS untuk Layout
// ==========================================
const styles = {
  appContainer: {
    background: '#050810',
    color: 'var(--text-light)',
    minHeight: '100vh',
    fontFamily: "'Fira Code', monospace",
    overflowX: 'hidden',
  },
  mainContent: {
    padding: '40px 20px 80px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  placeholderSection: {
    minHeight: '350px',
    background: 'rgba(15, 23, 42, 0.4)',
    border: '1px dashed rgba(0, 229, 255, 0.2)',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '30px',
    boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.5)',
  }
};

export default App;