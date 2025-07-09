'use client';

// src/components/ScrollToAnchor.js
import { useEffect } from 'react';

export default function ScrollToAnchor() {
  useEffect(() => {
    // Diese Funktion wird ausgeführt, wenn die Komponente mounted ist
    const handleAnchorScroll = () => {
      // Auf das hash in der URL zugreifen (z.B. #unternehmensberatung)
      const hash = window.location.hash;
      
      if (hash) {
        // Ein wenig Zeit geben, damit die Seite vollständig geladen ist
        setTimeout(() => {
          // Das Element mit der ID finden
          const element = document.querySelector(hash);
          
          if (element) {
            // Zu dem Element scrollen mit einem Offset für die Navbar
            const navbarHeight = 80; // Ungefähre Höhe deiner Navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    // Beim Laden der Seite prüfen
    handleAnchorScroll();
    
    // Auch auf Änderungen des Hashes reagieren (für SPA-Navigation)
    window.addEventListener('hashchange', handleAnchorScroll);
    
    // Cleanup beim Unmount
    return () => {
      window.removeEventListener('hashchange', handleAnchorScroll);
    };
  }, []);

  // Diese Komponente rendert nichts sichtbares
  return null;
}