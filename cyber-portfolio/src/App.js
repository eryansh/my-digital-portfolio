import React from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import Hero from './components/Hero';
import FeaturedLiveApps from './components/FeaturedLiveApps';
import WorkGrid from './components/WorkGrid';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {
  return (
    <div style={styles.appContainer}>
      {/* Kursor Sentiasa Berada di Lapisan Paling Atas */}
      <Cursor />

      {/* Menu Navigasi Utama */}
      <Navbar />

      {/* Kandungan Utama Portfolio */}
      <main style={styles.mainContent}>
        <Hero />
        <FeaturedLiveApps />
        <WorkGrid />
        <Journey />
        <Gallery />
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
    // Dinaikkan ke 90px supaya tak bertindih dengan Navbar (70px)
    padding: '90px 20px 80px 20px', 
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
    maxWidth: '1200px',
    margin: '0 auto',
  }
};

export default App;