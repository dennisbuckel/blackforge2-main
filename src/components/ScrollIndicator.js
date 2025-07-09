'use client';

// src/components/ScrollIndicator.js
import { useEffect } from 'react';
import styles from '../app/home.module.css';

export default function ScrollIndicator() {
  useEffect(() => {
    const handleScrollClick = () => {
      // Höhe des Viewports erhalten
      const viewportHeight = window.innerHeight;
      
      // Smooth scroll zur nächsten Sektion
      window.scrollTo({
        top: viewportHeight,
        behavior: 'smooth'
      });
    };

    // Scroll-Indikator-Element finden
    const scrollIndicator = document.querySelector(`.${styles.scrollDownIndicator}`);
    
    // Event-Listener hinzufügen, wenn das Element existiert
    if (scrollIndicator) {
      scrollIndicator.addEventListener('click', handleScrollClick);
    }

    // Cleanup-Funktion
    return () => {
      if (scrollIndicator) {
        scrollIndicator.removeEventListener('click', handleScrollClick);
      }
    };
  }, []);

  return null; // Diese Komponente rendert nichts, fügt nur Funktionalität hinzu
}