// src/app/layout.js
import './globals.css'
import Script from 'next/script'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientScripts from '@/components/ClientScripts'
import { Inter, Cinzel, Playfair_Display,  Libre_Baskerville } from 'next/font/google'


export const metadata = {
  title: 'Black Forge Consulting | Premium medizinisches Fachpersonal',
  description: 'Professionelle Vermittlung von qualifizierten Ärzten, Pflegekräften und medizinischem Fachpersonal für Ihre individuellen Bedürfnisse',
  keywords: 'Ärztevermittlung, Pflegekräfte, Pflegevermittlung, medizinisches Fachpersonal, Gesundheitspersonal, Berlin',
  authors: [{ name: 'Black Forge Consulting' }],
  creator: 'Black Forge Consulting',
  publisher: 'Black Forge Consulting',
  robots: 'index, follow',
  openGraph: {
    title: 'Black Forge Consulting | Premium medizinisches Fachpersonal',
    description: 'Professionelle Vermittlung von qualifizierten Ärzten, Pflegekräften und medizinischem Fachpersonal für Ihre individuellen Bedürfnisse',
    url: 'https://blackforge-consulting.de',
    siteName: 'Black Forge Consulting',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Forge Consulting | Premium medizinisches Fachpersonal',
    description: 'Professionelle Vermittlung von qualifizierten Ärzten, Pflegekräften und medizinischem Fachpersonal',
  },
  alternates: {
    canonical: 'https://blackforge-consulting.de',
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
}

const inter = Inter({ subsets: ['latin'] })
const cinzel = Cinzel({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
})
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const baskerville = Libre_Baskerville({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-baskerville' })

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`
      ${inter.variable} 
      ${cinzel.variable} 
      ${playfair.variable} 
      ${baskerville.variable}
    `}>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        
        {/* Client-seitige Skripte */}
        <ClientScripts />
        
        {/* Bootstrap JavaScript Bundle mit Popper */}
        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
