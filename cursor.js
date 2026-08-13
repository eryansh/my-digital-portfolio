import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate(calc(${clientX}px - 50%), calc(${clientY}px - 50%))`;
        outlineRef.current.style.transform = `translate(calc(${clientX}px - 50%), calc(${clientY}px - 50%))`;
      }
    };

    const handleMouseOver = (e) => {
      // Ditambah sokongan input dan butang chatbot supaya kursor tak hilang
      if (e.target.closest('a, button, input, textarea, .nav-brand, .theme-btn')) {
        if (outlineRef.current) outlineRef.current.classList.add('cursor-hover');
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, input, textarea, .nav-brand, .theme-btn')) {
        if (outlineRef.current) outlineRef.current.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

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