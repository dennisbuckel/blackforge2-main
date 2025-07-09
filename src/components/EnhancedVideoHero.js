'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './videoHero.module.css';

export default function EnhancedVideoHero() {
  // References for two video elements for seamless switching
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  
  // State management
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0); // Which video element is currently active (0 or 1)
  
  // Multiple videos for rotation - using higher quality originals
  const videoSources = {
    desktop: [
      "/videos/hero-background.mp4",
      "/videos/hero-background-2.mp4", 
      "/videos/hero-background-3.mp4"
    ],
    mobile: "/videos/optimized/hero-background-combined-mobile.mp4" // Keep mobile optimized for performance
  };
  
  // State for current video index in the playlist
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

  // Video load and switching handler
  useEffect(() => {
    if (!video1Ref.current || !video2Ref.current) return;
    
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    
    // Get current active video and next video
    const currentVideo = activeVideoIndex === 0 ? video1 : video2;
    const nextVideo = activeVideoIndex === 0 ? video2 : video1;
    
    const handleCanPlay = () => {
      setIsVideoLoaded(true);
    };
    
    // Switch videos before the current one ends to avoid freeze frame
    const handleTimeUpdate = () => {
      if (!isMobile && currentVideo.duration && currentVideo.currentTime) {
        // Switch 1 second before the video ends to avoid any hanging
        const timeLeft = currentVideo.duration - currentVideo.currentTime;
        if (timeLeft <= 1.0 && timeLeft > 0.8) {
          // Prepare next video
          const nextVideoIndex = (currentVideoIndex + 1) % videoSources.desktop.length;
          
          // Only switch if next video is not already prepared
          if (nextVideo.src !== videoSources.desktop[nextVideoIndex]) {
            nextVideo.src = videoSources.desktop[nextVideoIndex];
            nextVideo.load();
            
            // When next video is ready, switch to it immediately
            const handleNextVideoReady = () => {
              // Pause current video to prevent hanging
              currentVideo.pause();
              
              setActiveVideoIndex(prev => prev === 0 ? 1 : 0);
              setCurrentVideoIndex(nextVideoIndex);
              nextVideo.currentTime = 0; // Ensure we start from beginning
              
              // Start next video immediately
              const playPromise = nextVideo.play();
              if (playPromise !== undefined) {
                playPromise.catch(error => {
                  console.log('Video play failed:', error);
                });
              }
              
              nextVideo.removeEventListener('canplay', handleNextVideoReady);
            };
            
            nextVideo.addEventListener('canplay', handleNextVideoReady);
          }
        }
      }
    };
    
    currentVideo.addEventListener('canplay', handleCanPlay);
    currentVideo.addEventListener('timeupdate', handleTimeUpdate);
    
    // If the video is already in cache and loads immediately
    if (currentVideo.readyState >= 3) {
      setIsVideoLoaded(true);
    }
    
    // Don't loop individual videos - let them play once
    currentVideo.loop = false;
    
    return () => {
      currentVideo.removeEventListener('canplay', handleCanPlay);
      currentVideo.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [isMobile, currentVideoIndex, activeVideoIndex]);

  // Initialize videos
  useEffect(() => {
    if (!video1Ref.current || !video2Ref.current || isMobile) return;
    
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    
    // Set initial sources
    video1.src = videoSources.desktop[0];
    if (videoSources.desktop.length > 1) {
      video2.src = videoSources.desktop[1];
      video2.load(); // Preload second video
    }
  }, [isMobile]);

  // Get current video source for mobile
  const getCurrentVideoSource = () => {
    return videoSources.mobile;
  };

  return (
    <section className={styles.videoHeroSection}>
      {/* Video background */}
      <div className={styles.videoContainer}>
        {/* Static background image as fallback and during loading */}
        <div className={`${styles.fallbackImage} ${isVideoLoaded ? styles.fadeOut : ''}`}></div>
        
        {/* Desktop: Two videos for seamless switching */}
        {!isMobile && (
          <>
            <video 
              ref={video1Ref}
              className={`${styles.backgroundVideo} ${isVideoLoaded && activeVideoIndex === 0 ? styles.fadeIn : styles.fadeOut}`}
              autoPlay 
              muted 
              playsInline
              preload="auto"
            >
              Ihr Browser unterstützt keine Video-Wiedergabe.
            </video>
            
            <video 
              ref={video2Ref}
              className={`${styles.backgroundVideo} ${isVideoLoaded && activeVideoIndex === 1 ? styles.fadeIn : styles.fadeOut}`}
              muted 
              playsInline
              preload="auto"
            >
              Ihr Browser unterstützt keine Video-Wiedergabe.
            </video>
          </>
        )}
        
        {/* Mobile: Single looped video */}
        {isMobile && (
          <video 
            className={`${styles.backgroundVideo} ${isVideoLoaded ? styles.fadeIn : ''}`}
            autoPlay 
            muted 
            playsInline
            loop
            preload="auto"
          >
            <source 
              src={getCurrentVideoSource()} 
              type="video/mp4" 
            />
            Ihr Browser unterstützt keine Video-Wiedergabe.
          </video>
        )}
        
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
