// src/app/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Black Forge Consulting | Premium medizinisches Fachpersonal',
  description: 'Professionelle Vermittlung von qualifizierten Ärzten, Pflegekräften und medizinischem Fachpersonal für Ihre individuellen Bedürfnisse.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black-custom py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">Premium medizinisches Fachpersonal für Ihre individuellen Bedürfnisse</h1>
              <p className="lead mb-5">Professionelle Vermittlung von qualifizierten Ärzten, Pflegekräften und medizinischen Spezialisten</p>
              <a href="/kontakt" className="btn btn-gold btn-lg px-4 py-2">KONTAKT AUFNEHMEN</a>
            </div>
            <div className="col-lg-6">
              <div className="bg-dark-gray p-5 text-center rounded">
                <p className="text-muted">Bild: Professionelles medizinisches Personal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      {/* Services Section */}
      <section className="py-5 bg-dark">
        <div className="container py-4">
          <h2 className="text-center mb-5">
            <span className="pb-2 border-bottom border-gold">UNSERE LEISTUNGEN</span>
          </h2>
          
          <div className="row g-4">
            {/* Service 1 */}
            <div className="col-md-4">
              <div className="card bg-black-custom h-100">
                <div className="card-body text-center p-4">
                  <h3 className="text-gold mb-4">Pflegekraftvermittlung</h3>
                  <p className="text-white">
                    Individuelle Betreuung nach Ihren Bedürfnissen
                  </p>
                </div>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="col-md-4">
              <div className="card bg-black-custom h-100">
                <div className="card-body text-center p-4">
                  <h3 className="text-gold mb-4">Qualitätssicherung</h3>
                  <p className="text-white">
                    Regelmäßige Kontrollen und Feedback-Gespräche
                  </p>
                </div>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="col-md-4">
              <div className="card bg-black-custom h-100">
                <div className="card-body text-center p-4">
                  <h3 className="text-gold mb-4">Rundumbetreuung</h3>
                  <p className="text-white">
                    Administrative und rechtliche Unterstützung
                  </p>
                </div>
              </div>
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
                Black Forge Consulting ist Ihr zuverlässiger Partner für die Vermittlung 
                qualifizierter medizinischer Fachkräfte. Wir verstehen die individuellen Bedürfnisse 
                unserer Kunden und bieten maßgeschneiderte Lösungen für optimale medizinische Versorgung 
                und Betreuung.
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
          <h2 className="mb-4">Bereit für professionelles medizinisches Personal?</h2>
          <Link href="/kontakt" className="btn btn-gold px-4 py-2">
            KONTAKT AUFNEHMEN
          </Link>
        </div>
      </section>
    </>
  );
}