// src/app/leistungen/page.js
import Hero from '@/components/Hero';
import Button from '@/components/Button';

export const metadata = {
  title: 'Unsere Leistungen | Black Forge Consulting',
  description: 'Wir bieten professionelle Vermittlung von Ärzten, Pflegekräften und medizinischem Fachpersonal. Entdecken Sie unsere maßgeschneiderten Lösungen.',
}

export default function Leistungen() {
  return (
    <>
      {/* Header */}
      <Hero 
        title="Unsere Leistungen"
        subtitle="Entdecken Sie unser umfassendes Angebot an professionellen Vermittlungsdienstleistungen im Gesundheitsbereich. Wir bieten maßgeschneiderte Lösungen für medizinisches Fachpersonal nach Ihren individuellen Anforderungen."
        showImage={false}
      />
      
      {/* Leistungen Details */}
      <section className="py-5 bg-dark">
        <div className="container py-4">
          <div className="mb-5" id="aerztevermittlung">
            <h2 className="h2 text-gold mb-4">Ärztevermittlung</h2>
            <div className="card bg-black-custom p-4">
              <div className="card-body">
                <p className="mb-4">
                  Wir vermitteln hochqualifizierte Ärzte verschiedener Fachrichtungen für Kliniken, Praxen und medizinische Einrichtungen.
                  Ob als Vertretung, für Festanstellungen oder als Fachberater – wir finden die passende Lösung.
                </p>
                {/* Verbesserte Liste mit feature-list-icon-Klasse */}
                <ul className="feature-list-icon mb-0">
                  <li>Fachärzte aller Spezialisierungen</li>
                  <li>Vertretungsärzte für kurzfristige Einsätze</li>
                  <li>Medizinische Gutachter und Berater</li>
                  <li>Ärzte für den öffentlichen Gesundheitsdienst</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-5" id="pflegekraftvermittlung">
            <h2 className="h2 text-gold mb-4">Pflegekraftvermittlung</h2>
            <div className="card bg-black-custom p-4">
              <div className="card-body">
                <p className="mb-4">
                  Wir vermitteln qualifizierte Pflegekräfte, die perfekt zu Ihren individuellen Bedürfnissen passen.
                  Unser sorgfältiger Auswahlprozess stellt sicher, dass Sie die bestmögliche Betreuung erhalten.
                </p>
                {/* Verbesserte Liste mit feature-list-icon-Klasse */}
                <ul className="feature-list-icon mb-0">
                  <li>Persönliches Erstgespräch zur Bedarfsanalyse</li>
                  <li>Sorgfältige Auswahl passender Pflegekräfte</li>
                  <li>Transparente Vermittlungsprozesse</li>
                  <li>Flexible Betreuungsmodelle</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-5" id="medizinische-fachkraefte">
            <h2 className="h2 text-gold mb-4">Medizinische Fachkräfte</h2>
            <div className="card bg-black-custom p-4">
              <div className="card-body">
                <p className="mb-4">
                  Neben Ärzten und Pflegekräften vermitteln wir auch spezialisiertes medizinisches Fachpersonal
                  für verschiedene Anforderungen im Gesundheitswesen.
                </p>
                {/* Verbesserte Liste mit feature-list-icon-Klasse */}
                <ul className="feature-list-icon mb-0">
                  <li>Medizinische Fachangestellte (MFA)</li>
                  <li>Physiotherapeuten und Ergotherapeuten</li>
                  <li>Medizinisch-technische Assistenten (MTA)</li>
                  <li>Hebammen und Entbindungspfleger</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div id="rundumbetreuung">
            <h2 className="h2 text-gold mb-4">Rundumbetreuung</h2>
            <div className="card bg-black-custom p-4">
              <div className="card-body">
                <p className="mb-4">
                  Wir bieten umfassende administrative und rechtliche Unterstützung, damit Sie sich 
                  keine Sorgen um Formalitäten machen müssen.
                </p>
                {/* Verbesserte Liste mit feature-list-icon-Klasse */}
                <ul className="feature-list-icon mb-0">
                  <li>Unterstützung bei Vertragsgestaltung</li>
                  <li>Hilfe bei Behördengängen</li>
                  <li>Beratung zu Finanzierungsmöglichkeiten</li>
                  <li>Koordination mit anderen Gesundheitsdienstleistern</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Button href="/kontakt" className="px-4 py-2">KONTAKT AUFNEHMEN</Button>
          </div>
        </div>
      </section>
      
      {/* Prozess-Beschreibung */}
      <section className="py-5 bg-black-custom">
        <div className="container py-4">
          <h2 className="mb-5">
            <span className="pb-2 border-bottom border-gold">Ihr Weg zum passenden medizinischen Personal</span>
          </h2>
          
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card bg-dark h-100">
                <div className="card-body text-center">
                  <div className="rounded-circle bg-black-custom mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                    <span className="text-gold fw-bold">1</span>
                  </div>
                  <h3 className="h5 text-gold mb-3">Bedarfsanalyse</h3>
                  <p className="card-text small">
                    In einem ausführlichen Gespräch ermitteln wir Ihre spezifischen Anforderungen an das medizinische Personal.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="card bg-dark h-100">
                <div className="card-body text-center">
                  <div className="rounded-circle bg-black-custom mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                    <span className="text-gold fw-bold">2</span>
                  </div>
                  <h3 className="h5 text-gold mb-3">Personalauswahl</h3>
                  <p className="card-text small">
                    Wir wählen geeignete Fachkräfte aus, die optimal zu Ihren Anforderungen passen.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="card bg-dark h-100">
                <div className="card-body text-center">
                  <div className="rounded-circle bg-black-custom mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                    <span className="text-gold fw-bold">3</span>
                  </div>
                  <h3 className="h5 text-gold mb-3">Kennenlernen</h3>
                  <p className="card-text small">
                    Sie lernen potenzielle Fachkräfte kennen und entscheiden, mit wem Sie zusammenarbeiten möchten.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="card bg-dark h-100">
                <div className="card-body text-center">
                  <div className="rounded-circle bg-black-custom mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                    <span className="text-gold fw-bold">4</span>
                  </div>
                  <h3 className="h5 text-gold mb-3">Zusammenarbeit</h3>
                  <p className="card-text small">
                    Die ausgewählte Fachkraft beginnt mit der Arbeit, begleitet von unserer kontinuierlichen Unterstützung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-5 bg-dark">
        <div className="container py-4">
          <h2 className="mb-5">
            <span className="pb-2 border-bottom border-gold">Häufig gestellte Fragen</span>
          </h2>
          
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item bg-black-custom border-dark mb-3">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-black-custom text-white" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                  Welche Arten von medizinischem Personal vermitteln Sie?
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-white">
                  Wir vermitteln eine breite Palette an medizinischem Fachpersonal, darunter Ärzte verschiedener Fachrichtungen, Pflegekräfte, Physiotherapeuten, Ergotherapeuten, medizinische Fachangestellte, medizinisch-technische Assistenten, Hebammen und weitere Spezialisten im Gesundheitswesen. Unser Netzwerk umfasst sowohl Fachkräfte für Festanstellungen als auch für temporäre Einsätze und Vertretungen.
                </div>
              </div>
            </div>
            
            <div className="accordion-item bg-black-custom border-dark mb-3">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-black-custom text-white" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                  Wie funktioniert der Vermittlungsprozess?
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-white">
                  Unser Vermittlungsprozess beginnt mit einem ausführlichen Erstgespräch, in dem wir Ihre individuellen Bedürfnisse und Anforderungen ermitteln. Basierend auf diesen Informationen wählen wir geeignete Fachkräfte aus, die wir Ihnen vorstellen. Nach dem Kennenlernen entscheiden Sie, mit welcher Fachkraft Sie zusammenarbeiten möchten. Wir begleiten den gesamten Prozess und stehen auch nach der Vermittlung unterstützend zur Seite.
                </div>
              </div>
            </div>
            
            <div className="accordion-item bg-black-custom border-dark">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-black-custom text-white" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                  Welche Qualifikationen haben Ihre vermittelten Fachkräfte?
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-white">
                  Alle von uns vermittelten Fachkräfte verfügen über die erforderlichen Qualifikationen und Berufserlaubnisse für ihre jeweiligen Tätigkeitsfelder. Wir prüfen sorgfältig Ausbildungsnachweise, Berufserfahrung und persönliche Referenzen. Viele unserer Fachkräfte verfügen über Zusatzqualifikationen und Spezialisierungen in ihren Bereichen. Wir legen großen Wert auf kontinuierliche Fortbildung und unterstützen unsere vermittelten Fachkräfte dabei, ihre Kenntnisse stets auf dem neuesten Stand zu halten.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}