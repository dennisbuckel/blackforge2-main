'use client'; // Wichtig: Markiert diese Komponente als Client Component

// src/components/VideoHero.js
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './videoHero.module.css';

export default function VideoHero() {
  // Referenz für das aktuelle Video-Element
  const videoRef = useRef(null);
  
  // State-Management
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Liste der verfügbaren Videos (jeweils für Desktop und Mobile)
  const videos = [
    {
      desktop: "/videos/hero-background.mp4",
      mobile: "/videos/hero-background.mp4"
    },
    {
      desktop: "/videos/hero-background-2.mp4",
      mobile: "/videos/hero-background-2.mp4"
    },
    {
      desktop: "/videos/hero-background-3.mp4",
      mobile: "/videos/hero-background-3.mp4"
    }
  ];

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

  // Video-Rotations-Handler
  useEffect(() => {
    if (!videoRef.current) return;
    
    const video = videoRef.current;
    
    // Handler für das Ende eines Videos
    const handleVideoEnd = () => {
      // Übergangsanimation starten
      setIsTransitioning(true);
      
      // Kurze Verzögerung für die Übergangsanimation
      setTimeout(() => {
        // Zum nächsten Video wechseln
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        // Übergangsanimation beenden
        setIsTransitioning(false);
      }, 1000); // 1 Sekunde für den Übergang
    };
    
    // Wir wollen auch eine automatische Rotation, falls ein Video sehr lang ist
    const rotationTimer = setTimeout(() => {
      handleVideoEnd();
    }, 15000); // 15 Sekunden pro Video
    
    // Event-Listener für das Video-Ende
    video.addEventListener('ended', handleVideoEnd);
    
    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      clearTimeout(rotationTimer);
    };
  }, [currentVideoIndex, videos.length]);

  // Aktuelle Video-URL basierend auf Gerät und Index
  const currentVideoSrc = isMobile 
    ? videos[currentVideoIndex].mobile 
    : videos[currentVideoIndex].desktop;

  return (
    <section className={styles.videoHeroSection}>
      {/* Video-Hintergrund */}
      <div className={styles.videoContainer}>
        {/* Statisches Hintergrundbild als Fallback und während des Ladens */}
        <div className={`${styles.fallbackImage} ${isVideoLoaded ? styles.fadeOut : ''}`}></div>
        
        <video 
          ref={videoRef}
          key={currentVideoSrc} // Wichtig: Key ändert sich, damit React ein neues Video-Element erstellt
          className={`${styles.backgroundVideo} ${isVideoLoaded ? styles.fadeIn : ''} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
          autoPlay 
          muted 
          playsInline
          preload="auto"
        >
          <source 
            src={currentVideoSrc} 
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
            <p className="lead mb-5 text-white">Expertise für Personalvermittlung, Strategieberatung und M&A-Lösungen</p>
            <Link href="/kontakt" className="btn btn-gold btn-lg px-4 py-2">
              KONTAKT AUFNEHMEN
            </Link>
          </div>
        </div>
      </div>
      
      {/* Video-Indikator (kleine Punkte für die Anzeige, welches Video gerade läuft) */}
      <div className={styles.videoIndicators}>
        {videos.map((_, index) => (
          <span 
            key={index} 
            className={`${styles.indicator} ${index === currentVideoIndex ? styles.activeIndicator : ''}`}
          ></span>
        ))}
      </div>
    </section>
  );
}