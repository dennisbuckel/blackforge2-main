/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          'bf-gold': '#D4AF37',      // Gold-Farbe für Akzente
          'bf-black': '#111111',     // Schwarz für Hintergründe
          'bf-dark-gray': '#333333', // Dunkelgrau für Text
        },
        fontFamily: {
          sans: ['var(--font-inter)', 'sans-serif'],
        },
        backgroundColor: {
          'primary': '#111111',
          'secondary': '#1a1a1a',
        },
        borderColor: {
          'default': '#333333',
          'accent': '#D4AF37',
        },
        textColor: {
          'primary': '#ffffff',
          'secondary': '#cccccc',
          'accent': '#D4AF37',
        },
      },
    },
    plugins: [],
  }