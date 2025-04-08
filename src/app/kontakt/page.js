// src/app/kontakt/page.js
import ContactForm from '@/components/ContactForm';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Kontakt | Black Forge Consulting',
  description: 'Kontaktieren Sie uns für Ihre Anfragen zur Vermittlung von medizinischem Fachpersonal. Wir stehen Ihnen gerne zur Verfügung.',
}

export default function Kontakt() {
  return (
    <>
      {/* Header */}
      <Hero 
        title="Kontakt"
        subtitle="Wir freuen uns auf Ihre Anfrage. Unser Team steht Ihnen gerne zur Verfügung."
        showImage={false}
      />
      
      {/* Kontakt Inhalt */}
      <section className="py-5 bg-dark">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <h2 className="h2 text-gold mb-4">Schreiben Sie uns</h2>
              <p className="mb-4 text-white">
                Haben Sie Fragen zu unseren Dienstleistungen oder benötigen Sie medizinisches Fachpersonal? 
                Füllen Sie das Formular aus und wir melden uns umgehend bei Ihnen.
              </p>
              
              <ContactForm />
            </div>
            
            <div className="col-lg-4 offset-lg-1">
              <h2 className="h2 text-gold mb-4">Kontaktinformationen</h2>
              
              <div className="card bg-black-custom p-4 mb-4">
                <div className="card-body">
                  <h3 className="h5 text-gold mb-3">Adresse</h3>
                  <address className="mb-0 text-white">
                    Black Forge Consulting GmbH<br/>
                    Musterstraße 123<br/>
                    12345 Berlin<br/>
                    Deutschland
                  </address>
                </div>
              </div>
              
              <div className="card bg-black-custom p-4 mb-4">
                <div className="card-body">
                  <h3 className="h5 text-gold mb-3">Kontakt</h3>
                  <p className="mb-2 text-white">
                    <strong>Telefon:</strong> <a href="tel:+4912345678901" className="text-white">+49 123 4567890</a>
                  </p>
                  <p className="mb-2 text-white">
                    <strong>E-Mail:</strong> <a href="mailto:info@blackforge-consulting.de" className="text-white">info@blackforge-consulting.de</a>
                  </p>
                  <p className="mb-0 text-white">
                    <strong>Geschäftszeiten:</strong> Mo-Fr 9:00-17:00 Uhr
                  </p>
                </div>
              </div>
              
              <div className="card bg-black-custom p-4">
                <div className="card-body">
                  <h3 className="h5 text-gold mb-3">Notfall-Kontakt</h3>
                  <p className="mb-0 text-white">
                    Für dringende Anfragen außerhalb der Geschäftszeiten:<br/>
                    <strong>Notfall-Hotline:</strong> <a href="tel:+4912345678992" className="text-white">+49 123 4567899</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Spezialisierte Anfragen */}
      <section className="py-5 bg-black-custom">
        <div className="container py-4">
          <h2 className="mb-5 text-center">
            <span className="pb-2 border-bottom border-gold">Direkte Ansprechpartner</span>
          </h2>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card bg-dark h-100">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-black-custom mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-hospital text-gold"></i>
                  </div>
                  <h3 className="h5 text-gold mb-3">Ärztevermittlung</h3>
                  <p className="text-white mb-3">
                    Für Anfragen zur Vermittlung von Ärzten und Fachärzten
                  </p>
                  <p className="text-white mb-1">
                    <strong>Dr. Julia Berger</strong>
                  </p>
                  <p className="text-white mb-0">
                    <a href="mailto:aerzte@blackforge-consulting.de" className="text-white">aerzte@blackforge-consulting.de</a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card bg-dark h-100">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-black-custom mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-heart-pulse text-gold"></i>
                  </div>
                  <h3 className="h5 text-gold mb-3">Pflegekraftvermittlung</h3>
                  <p className="text-white mb-3">
                    Für Anfragen zur Vermittlung von Pflegekräften
                  </p>
                  <p className="text-white mb-1">
                    <strong>Maria Schulz</strong>
                  </p>
                  <p className="text-white mb-0">
                    <a href="mailto:pflege@blackforge-consulting.de" className="text-white">pflege@blackforge-consulting.de</a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card bg-dark h-100">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-black-custom mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-briefcase-medical text-gold"></i>
                  </div>
                  <h3 className="h5 text-gold mb-3">Medizinisches Fachpersonal</h3>
                  <p className="text-white mb-3">
                    Für Anfragen zu weiteren medizinischen Fachkräften
                  </p>
                  <p className="text-white mb-1">
                    <strong>Thomas Müller</strong>
                  </p>
                  <p className="text-white mb-0">
                    <a href="mailto:fachpersonal@blackforge-consulting.de" className="text-white">fachpersonal@blackforge-consulting.de</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}