// src/components/ClientScripts.js
'use client';

import { useEffect } from 'react';

export default function ClientScripts() {
  useEffect(() => {
    // Element finden
    const scrollIndicator = document.getElementById('scroll-indicator');
    
    if (scrollIndicator) {
      // Scroll-Funktion definieren
      const scrollToNextSection = () => {
        // Die Höhe des Viewports bestimmen
        const viewportHeight = window.innerHeight;
        
        // Sanft zur Services-Sektion scrollen
        window.scrollTo({
          top: viewportHeight,
          behavior: 'smooth'
        });
      };
      
      // Event-Listener hinzufügen
      scrollIndicator.addEventListener('click', scrollToNextSection);
      
      // Cleanup-Funktion
      return () => {
        scrollIndicator.removeEventListener('click', scrollToNextSection);
      };
    }
  }, []);
  
  // Diese Komponente rendert keine sichtbaren Elemente
  return null;
}