// src/app/layout.js
import './globals.css'
import '../styles/fonts.css'
import Script from 'next/script'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientScripts from '@/components/ClientScripts'


export const metadata = {
  title: 'Black Forge Consulting | Unternehmensberatung & Personalvermittlung',
  description: 'Strategische Unternehmensberatung, professionelle Personalvermittlung und M&A-Beratung. Ihr Partner für nachhaltigen Unternehmenserfolg und maßgeschneiderte Lösungen.',
  keywords: 'Unternehmensberatung, Personalvermittlung, M&A, Unternehmensnachfolge, Mitarbeitergewinnung, Mitarbeiterbindung, Umsatzsteigerung, Strategieberatung, Berlin',
  authors: [{ name: 'Black Forge Consulting' }],
  creator: 'Black Forge Consulting',
  publisher: 'Black Forge Consulting',
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/logo.jpeg',
  },
  openGraph: {
    title: 'Black Forge Consulting | Unternehmensberatung & Personalvermittlung',
    description: 'Strategische Unternehmensberatung, professionelle Personalvermittlung und M&A-Beratung. Ihr Partner für nachhaltigen Unternehmenserfolg und maßgeschneiderte Lösungen.',
    url: 'https://blackforge-consulting.de',
    siteName: 'Black Forge Consulting',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/logo.jpeg',
        width: 1024,
        height: 1024,
        alt: 'Black Forge Consulting Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Forge Consulting | Unternehmensberatung & Personalvermittlung',
    description: 'Strategische Unternehmensberatung, professionelle Personalvermittlung und M&A-Beratung für nachhaltigen Unternehmenserfolg.',
  },
  alternates: {
    canonical: 'https://blackforge-consulting.de',
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/logo.jpeg" />
      </head>
      <body className="font-inter">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        
        {/* Client-seitige Skripte */}
        <ClientScripts />
        
        {/* Bootstrap JavaScript Bundle mit Popper - Lokal gehostet */}
        <Script 
          src="/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
