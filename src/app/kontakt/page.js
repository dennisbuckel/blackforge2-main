// src/app/kontakt/page.js
import ContactFormClient from '@/components/ContactFormClient';

export const metadata = {
  title: 'Kontakt | Black Forge Consulting',
  description: 'Kontaktieren Sie uns für Ihre Anfragen zur Personalvermittlung oder Unternehmensberatung. Wir stehen Ihnen gerne zur Verfügung.',
}

export default function Kontakt() {
  return (
    <>
      {/* Kontakt Inhalt */}
      <section className="py-5 bg-dark">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <h2 className="h2 text-gold mb-4">Kontaktieren Sie uns</h2>
              <p className="mb-4 text-white">
                Haben Sie Interesse an unseren Dienstleistungen oder Fragen zu unseren Angeboten?
                Wählen Sie einfach den passenden Anfragetyp aus und senden Sie uns Ihre Nachricht.
                Wir melden uns umgehend bei Ihnen.
              </p>
              
              <ContactFormClient />
            </div>
            
            <div className="col-lg-4 offset-lg-1">
              <h2 className="h2 text-gold mb-4">Kontaktinformationen</h2>
              
              <div className="card bg-black-custom p-4 mb-4">
                <div className="card-body">
                  <h3 className="h5 text-gold mb-3">Adresse</h3>
                  <address className="mb-0 text-white">
                    Black Forge Consulting GmbH<br/>
                    Dosewitzerstr. 11<br/>
                    01259 Dresden<br/>
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
                    <strong>Geschäftszeiten:</strong> Mo-Fr 8:00-17:00 Uhr
                  </p>
                </div>
              </div>
              
              <div className="card bg-black-custom p-4">
                <div className="card-body">
                  <h3 className="h5 text-gold mb-3">Schnelle Reaktionszeiten</h3>
                  <p className="mb-0 text-white">
                    Wir legen Wert auf Ihre Zufriedenheit und garantieren eine Rückmeldung innerhalb eines Werktages.
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