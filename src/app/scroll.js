// src/app/scroll.js
'use client';

import { useEffect } from 'react';

export default function ScrollScript() {
  useEffect(() => {
    // Funktion zur Implementierung des Scroll-Verhaltens
    const scrollToServices = () => {
      // Höhe des Viewports erhalten
      const viewportHeight = window.innerHeight;
      
      // Smooth scroll zur nächsten Sektion
      window.scrollTo({
        top: viewportHeight,
        behavior: 'smooth'
      });
    };

    // Element finden und Event-Listener hinzufügen
    const scrollIndicator = document.getElementById('scroll-indicator');
    if (scrollIndicator) {
      scrollIndicator.addEventListener('click', scrollToServices);
    }

    // Cleanup beim Unmount
    return () => {
      if (scrollIndicator) {
        scrollIndicator.removeEventListener('click', scrollToServices);
      }
    };
  }, []);

  // Diese Komponente rendert nichts sichtbares
  return null;
}