// src/app/leistungen/page.js
import Hero from '@/components/Hero';
import Button from '@/components/Button';
import ScrollToAnchor from '@/components/ScrollToAnchor';

export const metadata = {
  title: 'Unsere Leistungen | Black Forge Consulting',
  description: 'Strategische Unternehmensberatung und professionelle Personalvermittlung für Ihren nachhaltigen Unternehmenserfolg. Entdecken Sie unsere maßgeschneiderten Lösungen.',
}

export default function Leistungen() {
  return (
    <>
      {/* Scroll-Funktionalität einfügen */}
      <ScrollToAnchor />
      
      {/* Leistungen Details */}
      <section className="py-5 bg-dark">
        <div className="container py-4">
          <div className="mb-5" id="unternehmensberatung">
            <h2 className="h2 text-gold mb-4">Unternehmensberatung</h2>
            <div className="card bg-black-custom p-4">
              <div className="card-body">
                <p className="mb-4">
                  Wir bieten maßgeschneiderte Beratungsleistungen, die Ihr Unternehmen strategisch voranbringen.
                  Mit unserem Expertenwissen unterstützen wir Sie bei der Optimierung Ihrer Geschäftsprozesse und der Erreichung Ihrer Unternehmensziele.
                </p>
                {/* Verbesserte Liste mit feature-list-icon-Klasse */}
                <ul className="feature-list-icon mb-0">
                  <li>Strategische Geschäftsentwicklung</li>
                  <li>Prozessoptimierung und Effizienzsteigerung</li>
                  <li>Marktanalysen und Wettbewerbsstrategien</li>
                  <li>Change Management und Organisationsentwicklung</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-5" id="personalvermittlung">
            <h2 className="h2 text-gold mb-4">Personalvermittlung</h2>
            <div className="card bg-black-custom p-4">
              <div className="card-body">
                <p className="mb-4">
                  Wir vermitteln qualifizierte Fachkräfte für verschiedene Branchen und Positionen. 
                  Unser sorgfältiger Auswahlprozess stellt sicher, dass die vermittelten Mitarbeiter 
                  perfekt zu Ihren individuellen Anforderungen passen.
                </p>
                {/* Verbesserte Liste mit feature-list-icon-Klasse */}
                <ul className="feature-list-icon mb-0">
                  <li>Bedarfsgerechte Personalbeschaffung</li>
                  <li>Fachkräfte für verschiedene Branchen und Positionen</li>
                  <li>Temporäre und dauerhafte Besetzungen</li>
                  <li>Umfassende Eignungsprüfung und Qualifikationsanalyse</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-5" id="rundumbetreuung">
            <h2 className="h2 text-gold mb-4">Rundumbetreuung</h2>
            <div className="card bg-black-custom p-4">
              <div className="card-body">
                <p className="mb-4">
                  Wir bieten umfassende administrative und rechtliche Unterstützung, damit Sie sich 
                  auf Ihr Kerngeschäft konzentrieren können.
                </p>
                {/* Verbesserte Liste mit feature-list-icon-Klasse */}
                <ul className="feature-list-icon mb-0">
                  <li>Administrative Unterstützung und Dokumentenmanagement</li>
                  <li>Rechtliche Beratung und Vertragsgestaltung</li>
                  <li>Projektmanagement und -koordination</li>
                  <li>Kontinuierliche Betreuung und Qualitätssicherung</li>
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
            <span className="pb-2 border-bottom border-gold">Unser Arbeitsprozess</span>
          </h2>
          
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card bg-dark h-100">
                <div className="card-body text-center">
                  <div className="rounded-circle bg-black-custom mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                    <span className="text-gold fw-bold">1</span>
                  </div>
                  <h3 className="h5 text-gold mb-3">Analyse</h3>
                  <p className="card-text small">
                    In einem ausführlichen Gespräch ermitteln wir Ihre spezifischen Anforderungen und Ziele.
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
                  <h3 className="h5 text-gold mb-3">Konzeption</h3>
                  <p className="card-text small">
                    Wir entwickeln maßgeschneiderte Lösungen, die optimal zu Ihren Anforderungen passen.
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
                  <h3 className="h5 text-gold mb-3">Umsetzung</h3>
                  <p className="card-text small">
                    Gemeinsam mit Ihnen implementieren wir die erarbeiteten Strategien und Lösungen.
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
                  <h3 className="h5 text-gold mb-3">Evaluation</h3>
                  <p className="card-text small">
                    Wir überwachen den Erfolg der Maßnahmen und optimieren kontinuierlich für bestmögliche Ergebnisse.
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
          
          <style dangerouslySetInnerHTML={{ __html: `
            /* Anpassungen für das Akkordeon */
            .custom-accordion .accordion-item {
              border-radius: 4px;
              overflow: hidden;
              border: 1px solid #2a2a2a;
              background-color: #111111;
              margin-bottom: 1rem;
            }
            
            .custom-accordion-button {
              background-color: #111111;
              color: white;
              padding: 1rem 1.25rem;
              width: 100%;
              text-align: left;
              border: none;
              border-radius: 0;
              position: relative;
              display: flex;
              align-items: center;
              transition: all 0.3s ease;
              font-weight: 500;
              font-size: 0.95rem;
            }
            
            .custom-accordion-button:focus {
              box-shadow: none;
              outline: none;
              color: #D4AF37;
            }
            
            .custom-accordion-button:hover {
              background-color: #222222;
              color: #D4AF37;
            }
            
            /* Goldener Pfeil-Indikator */
            .custom-accordion-button::after {
              content: '';
              width: 10px;
              height: 10px;
              border-right: 2px solid #D4AF37;
              border-bottom: 2px solid #D4AF37;
              position: absolute;
              right: 20px;
              transform: rotate(45deg);
              transition: transform 0.3s ease;
            }
            
            .custom-accordion-button.collapsed::after {
              transform: rotate(-45deg);
            }
            
            /* Akkordeon-Inhalt */
            .custom-accordion .accordion-body {
              background-color: #111111;
              padding: 1.25rem;
              line-height: 1.6;
              color: white;
            }
            
            /* Aktiver Zustand */
            .custom-accordion-button:not(.collapsed) {
              background-color: #181818;
              color: #D4AF37;
            }
            
            /* Animation für sanftes Öffnen/Schließen */
            .accordion-collapse {
              transition: all 0.3s ease-out;
            }
          ` }} />
          
          <div className="accordion custom-accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="custom-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                  Für welche Branchen bieten Sie Ihre Dienstleistungen an?
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Wir bieten unsere Dienstleistungen für eine Vielzahl von Branchen an, darunter Gesundheitswesen, IT, Finanzen, Produktion und Dienstleistungssektor. Unsere Expertise im Gesundheitsbereich ist besonders ausgeprägt, aber wir haben unser Angebot erfolgreich auf weitere Sektoren ausgeweitet. Unsere Beratungs- und Vermittlungsansätze werden individuell an die spezifischen Anforderungen und Herausforderungen Ihrer Branche angepasst.
                </div>
              </div>
            </div>
            
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="custom-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                  Wie funktioniert der Beratungs- und Vermittlungsprozess?
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Unser Prozess beginnt mit einer gründlichen Analyse Ihrer aktuellen Situation und Ziele. Bei der Personalvermittlung identifizieren wir Ihre spezifischen Anforderungen an potenzielle Mitarbeiter, während wir in der Unternehmensberatung Ihre Geschäftsprozesse und Herausforderungen evaluieren. Basierend auf dieser Analyse entwickeln wir maßgeschneiderte Strategien und Lösungen. Bei der Umsetzung arbeiten wir eng mit Ihnen zusammen und sorgen durch kontinuierliche Evaluation für optimale Ergebnisse. Wir begleiten Sie während des gesamten Prozesses und bieten auch nach Abschluss unserer Dienstleistungen fortlaufende Unterstützung.
                </div>
              </div>
            </div>
            
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="custom-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                  Welche Qualifikationen haben Ihre Berater und vermittelten Fachkräfte?
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Unsere Berater verfügen über umfangreiche Erfahrung und Expertise in ihren jeweiligen Fachgebieten. Sie haben erfolgreiche Projekte in verschiedenen Branchen umgesetzt und halten sich durch regelmäßige Weiterbildungen stets auf dem neuesten Stand. Die von uns vermittelten Fachkräfte werden sorgfältig ausgewählt und müssen einen strengen Qualifikationsprozess durchlaufen. Wir überprüfen Ausbildungsnachweise, Berufserfahrung und persönliche Referenzen. Viele unserer Fachkräfte verfügen über zusätzliche Qualifikationen und Spezialisierungen, die sie besonders wertvoll für Ihr Unternehmen machen.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}