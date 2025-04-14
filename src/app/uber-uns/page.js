// src/app/uber-uns/page.js
import Image from 'next/image';

export const metadata = {
  title: 'Über Uns | Black Forge Consulting',
  description: 'Black Forge Consulting – Ihr verlässlicher Partner für professionelle Personalvermittlung und strategische Unternehmensberatung.',
}

export default function UberUns() {
  return (
    <>
      {/* Unsere Mission */}
      <section className="py-5 bg-black-custom">
        <div className="container py-4">
          <h2 className="mb-5">
            <span className="pb-2 border-bottom border-gold">Unsere Mission</span>
          </h2>
          
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <p className="mb-4">
                Unsere Mission ist es, eine Brücke zwischen qualifizierten Fachkräften und 
                Unternehmen zu schlagen, die ihre Ziele effektiv erreichen möchten. 
                Wir glauben, dass jedes Unternehmen Zugang zu erstklassigem Personal und fundierter 
                strategischer Beratung haben sollte, die auf die individuellen Anforderungen zugeschnitten ist.
              </p>
              <p>
                Durch unsere sorgfältige Auswahl und strategischen Beratungsansatz stellen wir sicher, 
                dass unsere Klienten optimale Unterstützung erhalten und vermittelte Fachkräfte in einer 
                Umgebung arbeiten können, in der ihre Fähigkeiten, Kenntnisse und ihr Engagement den 
                Unternehmenserfolg nachhaltig fördern.
              </p>
            </div>
            <div className="col-lg-6 order-lg-1">
                            <Image 
                   src="/images/mission.png" 
                  alt="Unser Team" 
                  width={600} 
                  height={400} 
                  className="img-fluid rounded"
                />
            </div>
          </div>
        </div>
      </section>
      
      {/* Unsere Geschichte */}
      <section className="py-5 bg-dark">
        <div className="container py-4">
          <h2 className="mb-5">
            <span className="pb-2 border-bottom border-gold">Unsere Geschichte</span>
          </h2>
          
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <p className="mb-4">
                Black Forge Consulting wurde 2015 mit dem Ziel gegründet, eine Lücke im Gesundheitsmarkt zu schließen. 
                Wir begannen als spezialisierter Vermittlungsdienst für medizinisches Fachpersonal, der sowohl 
                die Bedürfnisse der Gesundheitseinrichtungen als auch die der medizinischen Fachkräfte 
                in den Mittelpunkt stellte.
              </p>
              <p className="mb-4">
                Mit wachsender Expertise und auf Basis des Vertrauens unserer Kunden haben wir unser Angebot 
                kontinuierlich erweitert. Heute bieten wir umfassende Personalvermittlung für verschiedene Branchen 
                sowie strategische Unternehmensberatung an. Unser Erfolg basiert auf unserem Engagement für Qualität, 
                Professionalität und persönlichem Service.
              </p>
            </div>
            <div className="col-lg-6">
            <Image 
                   src="/images/story.png" 
                  alt="Unser Team" 
                  width={600} 
                  height={400} 
                  className="img-fluid rounded"
                />
            </div>
          </div>
          
          <div className="text-center mt-5">
            <a href="/kontakt" className="btn btn-gold px-4 py-2">Mit uns Kontakt aufnehmen</a>
          </div>
        </div>
      </section>
    </>
  );
}