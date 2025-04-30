'use client';

// src/components/VideoHeroWrapper.js
import { useEffect, useState } from 'react';
import EnhancedVideoHero from './EnhancedVideoHero';
import styles from './videoHero.module.css'; // Wir importieren die Styles auch hier

export default function VideoHeroWrapper() {
  const [mounted, setMounted] = useState(false);

  // Stellt sicher, dass wir nur clientseitig rendern
  useEffect(() => {
    setMounted(true);
  }, []);

  // Falls noch nicht gemounted, zeigen wir ein Fallback an
  if (!mounted) {
    return (
      <section className={styles.videoHeroSection}>
        <div className={styles.videoContainer}>
          {/* Statisches Hintergrundbild als Fallback */}
          <div className={styles.fallbackImage}></div>
          
          {/* Overlay zum Abdunkeln des Fallback-Bildes */}
          <div className={styles.videoOverlay}></div>
        </div>
        
        {/* Hero-Inhalt */}
        <div className="container py-5 position-relative">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4 text-white">Maßgeschneiderte Lösungen für Ihren Unternehmenserfolg</h1>
              <p className="lead mb-5 text-white">Expertise für Unternehmensberatung, Personalvermittlung, M&A-Lösungen</p>
              <div className="btn btn-gold btn-lg px-4 py-2">
                KONTAKT AUFNEHMEN
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Sobald die Komponente clientseitig gemounted ist, zeigen wir das verbesserte Video-Hero
  return <EnhancedVideoHero />;
}
