// src/app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientScripts from '@/components/ClientScripts'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Black Forge Consulting | Premium medizinisches Fachpersonal',
  description: 'Professionelle Vermittlung von qualifizierten Ärzten, Pflegekräften und medizinischem Fachpersonal für Ihre individuellen Bedürfnisse',
  keywords: 'Ärztevermittlung, Pflegekräfte, Pflegevermittlung, medizinisches Fachpersonal, Gesundheitspersonal, Berlin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
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