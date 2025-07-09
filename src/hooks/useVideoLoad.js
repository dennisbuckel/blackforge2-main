// src/hooks/useVideoLoad.js
'use client';

import { useState, useEffect } from 'react';

/**
 * Ein Hook für optimierte Video-Ladeerfahrung
 * - Zeigt Platzhalter während das Video lädt
 * - Behandelt Fehler beim Laden
 * - Unterstützt Fallback-Lösungen
 */
export default function useVideoLoad(videoRef) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    // Ereignishandler für das erfolgreiche Laden
    const handleLoadedData = () => {
      setIsLoading(false);
    };

    // Ereignishandler für Ladefehler
    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
      console.error("Fehler beim Laden des Videos");
    };

    // Ereignishandler registrieren
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    // Cleanup-Funktion
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, [videoRef]);

  return { isLoading, hasError };
}

// src/app/page.js - Optimiertes Video-Handling
// Um diesen Code zu verwenden, muss die page.js-Datei in 'use client' geändert werden:

/*
'use client';

import { useRef } from 'react';
import useVideoLoad from '@/hooks/useVideoLoad';

// Im Komponenten-Body:
const videoRef = useRef(null);
const { isLoading, hasError } = useVideoLoad(videoRef);

// Im JSX:
<video 
  ref={videoRef}
  className={styles.backgroundVideo} 
  autoPlay 
  loop 
  muted 
  playsInline
>
  <source src="/videos/hero-background.mp4" type="video/mp4" />
  Ihr Browser unterstützt keine Video-Wiedergabe.
</video>
{isLoading && <div className={styles.videoPlaceholder}>Video wird geladen...</div>}
{hasError && <div className={styles.videoError}>Video konnte nicht geladen werden</div>}
*/