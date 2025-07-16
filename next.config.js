// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Aktiviert den React Strict Mode (empfohlen für das Aufspüren von Fehlern)
  reactStrictMode: true,

  // Für statischen Export notwendig, wenn du Next.js-Image-Komponenten verwendest
  images: {
    unoptimized: true,
  },

  // Deaktiviert Fast Refresh Logs in der Konsole für saubere Ausgabe
  logging: {
    fetches: {
      fullUrl: false,
    },
  },

  // Reduziert Konsolen-Ausgaben in Development
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },

  // Explizite Favicon-Konfiguration
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
