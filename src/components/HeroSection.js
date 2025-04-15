'use client'; // Markiere als Client Component

// src/components/HeroSection.js
import dynamic from 'next/dynamic';

// Importiere den Wrapper für VideoHero mit dynamic import
const VideoHeroWrapper = dynamic(() => import('@/components/VideoHeroWrapper'), {
  ssr: false, // Jetzt erlaubt, da wir in einer Client Component sind
});

export default function HeroSection() {
  return <VideoHeroWrapper />;
}