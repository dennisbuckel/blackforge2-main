// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Aktiviert den React Strict Mode (empfohlen für das Aufspüren von Fehlern)
  reactStrictMode: true,

  // Nutzt den SWC-Minifier für kleinere Builds
  swcMinify: true,

  // Für statischen Export notwendig, wenn du Next.js-Image-Komponenten verwendest
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
