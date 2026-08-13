import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    // 1. Fungsi untuk menjejak pergerakan mouse
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      
      // Update posisi titik tengah terus ke DOM (High Performance)
      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate(calc(${clientX}px - 50%), calc(${clientY}px - 50%))`;
        
        // Outline ikut dengan efek yang disetup dalam CSS
        outlineRef.current.style.transform = `translate(calc(${clientX}px - 50%), calc(${clientY}px - 50%))`;
      }
    };

    // 2. Fungsi untuk efek bila hover pada butang atau link
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .nav-brand, .theme-btn')) {
        if (outlineRef.current) outlineRef.current.classList.add('cursor-hover');
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, .nav-brand, .theme-btn')) {
        if (outlineRef.current) outlineRef.current.classList.remove('cursor-hover');
      }
    };

    // Pasang Event Listeners
    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Cleanup memori bila komponen ditutup
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef}></div>
      <div id="cursor-outline" ref={outlineRef}></div>
    </>
  );
};

export default Cursor;