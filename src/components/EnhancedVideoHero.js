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
  
  // Multiple videos for rotation - using higher quality originals
  const videoSources = {
    desktop: [
      "/videos/hero-background.mp4",
      "/videos/hero-background-2.mp4", 
      "/videos/hero-background-3.mp4"
    ],
    mobile: "/videos/optimized/hero-background-combined-mobile.mp4" // Keep mobile optimized for performance
  };
  
  // State for current video index
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

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
    
    const handleVideoEnded = () => {
      if (!isMobile) {
        // Switch to next video when current video ends
        setCurrentVideoIndex((prevIndex) => 
          (prevIndex + 1) % videoSources.desktop.length
        );
      }
    };
    
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('ended', handleVideoEnded);
    
    // If the video is already in cache and loads immediately
    if (video.readyState >= 3) {
      setIsVideoLoaded(true);
    }
    
    // Don't loop individual videos - let them play once
    video.loop = false;
    
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('ended', handleVideoEnded);
    };
  }, [isMobile, currentVideoIndex]);

  // Get current video source
  const getCurrentVideoSource = () => {
    if (isMobile) {
      return videoSources.mobile;
    } else {
      return videoSources.desktop[currentVideoIndex];
    }
  };

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
          preload="auto"
          key={getCurrentVideoSource()} // Force re-render when video changes
        >
          <source 
            src={getCurrentVideoSource()} 
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
            <h1 className={`${styles.heroTitle} fw-bold mb-4 text-white`}>
              Die Unternehmensschmiede<br />
              für Visionäre und Entscheider
            </h1>
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
