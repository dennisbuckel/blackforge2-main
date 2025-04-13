'use client'; // Wichtig: Markiert diese Komponente als Client Component

// src/components/VideoHero.js
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './VideoHero.module.css';

export default function VideoHero() {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Erkennung von mobilen Geräten
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial prüfen
    checkMobile();
    
    // Event-Listener für Größenänderungen
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Video-Lade-Handler
  useEffect(() => {
    if (!videoRef.current) return;
    
    const video = videoRef.current;
    
    const handleCanPlay = () => {
      setIsVideoLoaded(true);
    };
    
    video.addEventListener('canplay', handleCanPlay);
    
    // Falls das Video bereits im Cache ist und sofort geladen wird
    if (video.readyState >= 3) {
      setIsVideoLoaded(true);
    }
    
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <section className={styles.videoHeroSection}>
      {/* Video-Hintergrund */}
      <div className={styles.videoContainer}>
        {/* Statisches Hintergrundbild als Fallback und während des Ladens */}
        <div className={`${styles.fallbackImage} ${isVideoLoaded ? styles.fadeOut : ''}`}></div>
        
        <video 
          ref={videoRef}
          className={`${styles.backgroundVideo} ${isVideoLoaded ? styles.fadeIn : ''}`}
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
        >
          {/* Wähle je nach Gerät unterschiedliche Video-Qualität */}
          <source 
            src={isMobile ? "/videos/hero-background-mobile.mp4" : "/videos/hero-background.mp4"} 
            type="video/mp4" 
          />
          Ihr Browser unterstützt keine Video-Wiedergabe.
        </video>
        
        {/* Overlay zum Abdunkeln des Videos für bessere Textlesbarkeit */}
        <div className={styles.videoOverlay}></div>
      </div>
      
      {/* Hero-Inhalt */}
      <div className="container py-5 position-relative">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4 text-white">Maßgeschneiderte Lösungen für Ihren Unternehmenserfolg</h1>
            <p className="lead mb-5 text-white">Personalvermittlung & Unternehmensberatung aus einer Hand</p>
            <Link href="/kontakt" className="btn btn-gold btn-lg px-4 py-2">
              KONTAKT AUFNEHMEN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}