// src/app/page.js
import Link from 'next/link';
import styles from './home.module.css';

export const metadata = {
  title: 'Black Forge Consulting | Premium Personalvermittlung & Unternehmensberatung',
  description: 'Professionelle Vermittlung von qualifizierten Fachkräften und strategische Unternehmensberatung für Ihren nachhaltigen Erfolg.',
}

export default function Home() {
  return (
    <>
      {/* Full-Screen Video Hero Section */}
      <section className={styles.fullScreenHero}>
        {/* Video Container */}
        <div className={styles.videoContainer}>
          <video 
            className={styles.backgroundVideo} 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay für bessere Lesbarkeit */}
          <div className={styles.videoOverlay}></div>
        </div>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h1 className="display-4 fw-bold mb-4 text-white">Maßgeschneiderte Lösungen für Ihren Unternehmenserfolg</h1>
                <p className="lead mb-5 text-white">Personalvermittlung & Unternehmensberatung aus einer Hand</p>
                <Link href="/kontakt" className="btn btn-gold btn-lg px-4 py-2">
                  KONTAKT AUFNEHMEN
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll-Down-Indikator (wird clientseitig durch ein separates Script aktiviert) */}
        <div className={styles.scrollDownIndicator} id="scroll-indicator">
          <i className="bi bi-chevron-down"></i>
        </div>
      </section>
  
   {/* Services Section */}
<section className="py-5 bg-dark">
  <div className="container py-4">
    <h2 className="text-center mb-5">
      <span className="pb-2 border-bottom border-gold">UNSERE LEISTUNGEN</span>
    </h2>
    
    <div className="row g-4">
      {/* Service 1 - Unternehmensberatung */}
      <div className="col-md-4">
        <Link href="/leistungen#unternehmensberatung" className="text-decoration-none">
          <div className="card bg-black-custom h-100 service-card">
            <div className="card-body text-center p-4">
              <h3 className="text-gold mb-4">Unternehmensberatung</h3>
              <p className="text-white">
                Strategische Beratung und individuelle Lösungskonzepte für Ihren nachhaltigen Erfolg
              </p>
            </div>
          </div>
        </Link>
      </div>
      
      {/* Service 2 - Personalvermittlung */}
      <div className="col-md-4">
        <Link href="/leistungen#personalvermittlung" className="text-decoration-none">
          <div className="card bg-black-custom h-100 service-card">
            <div className="card-body text-center p-4">
              <h3 className="text-gold mb-4">Personalvermittlung</h3>
              <p className="text-white">
                Passgenaue Vermittlung qualifizierter Fachkräfte mit kontinuierlicher Qualitätssicherung
              </p>
            </div>
          </div>
        </Link>
      </div>
      
      {/* Service 3 - Rundumbetreuung */}
      <div className="col-md-4">
        <Link href="/leistungen#rundumbetreuung" className="text-decoration-none">
          <div className="card bg-black-custom h-100 service-card">
            <div className="card-body text-center p-4">
              <h3 className="text-gold mb-4">Rundumbetreuung</h3>
              <p className="text-white">
                Umfassende administrative, rechtliche und strategische Unterstützung
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
    
    <div className="text-center mt-5">
      <Link href="/leistungen" className="btn btn-gold px-4 py-2">
        MEHR ERFAHREN
      </Link>
    </div>
  </div>
</section>
  
      {/* About Us Section */}
      <section className="py-5 bg-black-custom">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="mb-4">
                <span className="pb-2 border-bottom border-gold">ÜBER UNS</span>
              </h2>
              <p className="mb-4">
                Black Forge Consulting ist Ihr zuverlässiger Partner für Personalvermittlung und strategische Unternehmensberatung. 
                Wir verstehen die individuellen Bedürfnisse unserer Kunden aus verschiedenen Branchen und bieten maßgeschneiderte Lösungen, 
                die Ihre Unternehmensziele optimal unterstützen. Mit unserem Netzwerk qualifizierter Fachkräfte und umfassender Branchenexpertise 
                stehen wir Ihnen als kompetenter Partner zur Seite.
              </p>
              <Link href="/uber-uns" className="btn btn-gold px-4 py-2">
                MEHR ÜBER UNS
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="bg-dark-gray p-5 text-center rounded">
                <p className="text-muted">Bild: Unser Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      {/* CTA Section */}
      <section className="py-5 bg-dark">
        <div className="container py-3 text-center">
          <h2 className="mb-4">Bereit für den nächsten Schritt zum Unternehmenserfolg?</h2>
          <Link href="/kontakt" className="btn btn-gold px-4 py-2">
            KONTAKT AUFNEHMEN
          </Link>
        </div>
      </section>
    </>
  );
}