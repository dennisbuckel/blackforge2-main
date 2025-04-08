// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Aktiviert statischen Export
  images: {
    unoptimized: true, // Für statischen Export notwendig
  },
}

module.exports = nextConfig