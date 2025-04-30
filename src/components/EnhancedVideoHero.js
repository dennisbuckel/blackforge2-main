'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './videoHero.module.css';

export default function EnhancedVideoHero() {
  // Reference for video element
  const videoRef = useRef(null);
  
  // State management
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Single combined video in different formats
  const videoSources = {
    desktop: {
      mp4: "/videos/optimized/hero-background-combined.mp4",
      webm: "/videos/optimized/hero-background-combined.webm"
    },
    mobile: "/videos/optimized/hero-background-combined-mobile.mp4"
  };

  // Mobile device detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Event listener for resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Video load handler
  useEffect(() => {
    if (!videoRef.current) return;
    
    const video = videoRef.current;
    
    const handleCanPlay = () => {
      setIsVideoLoaded(true);
    };
    
    video.addEventListener('canplay', handleCanPlay);
    
    // If the video is already in cache and loads immediately
    if (video.readyState >= 3) {
      setIsVideoLoaded(true);
    }
    
    // Make the video loop
    video.loop = true;
    
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  // Get video sources based on device
  const getVideoSources = () => {
    if (isMobile) {
      return {
        mp4: videoSources.mobile
      };
    } else {
      return videoSources.desktop;
    }
  };

  // Current video sources
  const currentVideoSources = getVideoSources();

  return (
    <section className={styles.videoHeroSection}>
      {/* Video background */}
      <div className={styles.videoContainer}>
        {/* Static background image as fallback and during loading */}
        <div className={`${styles.fallbackImage} ${isVideoLoaded ? styles.fadeOut : ''}`}></div>
        
        {/* Video (visible) */}
        <video 
          ref={videoRef}
          className={`${styles.backgroundVideo} ${isVideoLoaded ? styles.fadeIn : ''}`}
          autoPlay 
          muted 
          playsInline
          loop
          preload="auto"
        >
          {!isMobile && currentVideoSources.webm && (
            <source 
              src={currentVideoSources.webm} 
              type="video/webm" 
            />
          )}
          <source 
            src={currentVideoSources.mp4} 
            type="video/mp4" 
          />
          Ihr Browser unterstützt keine Video-Wiedergabe.
        </video>
        
        {/* Overlay to darken video for better text readability */}
        <div className={styles.videoOverlay}></div>
      </div>
      
      {/* Hero content */}
      <div className="container py-5 position-relative">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4 text-white">Maßgeschneiderte Lösungen für Ihren Unternehmenserfolg</h1>
            <p className="lead mb-5 text-white">Expertise für Unternehmensberatung, Personalvermittlung, M&A-Lösungen</p>
            <Link href="/kontakt" className="btn btn-gold btn-lg px-4 py-2">
              KONTAKT AUFNEHMEN
            </Link>
          </div>
        </div>
      </div>
      
      {/* Video indicators removed as requested */}
    </section>
  );
}
