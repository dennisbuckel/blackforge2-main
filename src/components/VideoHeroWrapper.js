'use client';

// src/components/VideoHeroWrapper.js
import { useEffect, useState } from 'react';
import VideoHero from './VideoHero';

export default function VideoHeroWrapper() {
  const [mounted, setMounted] = useState(false);

  // Stellt sicher, dass wir nur clientseitig rendern
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auf dem Server oder während des Hydrating zeigen wir nichts an
  // Das eigentliche Fallback-UI ist in page.js definiert
  if (!mounted) {
    return null;
  }

  // Sobald die Komponente clientseitig gemounted ist, zeigen wir das Video-Hero
  return <VideoHero />;
}