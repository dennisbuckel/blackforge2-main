// src/app/uber-uns/page.js
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Über Uns | Black Forge Consulting',
  description: 'Black Forge Consulting – Ihr verlässlicher Partner für professionelle Vermittlung von medizinischen Fachkräften.',
}

export default function UberUns() {
  return (
    <>
      {/* Header */}
      <Hero 
        title="Über Uns"
        subtitle="Black Forge Consulting – Ihr verlässlicher Partner für professionelle Vermittlung von medizinischen Fachkräften."
        showImage={false}
      />
      
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
                Wir erkannten, dass es einen Bedarf an einem spezialisierten Vermittlungsdienst gab, der sowohl 
                die Bedürfnisse der Gesundheitseinrichtungen als auch die der medizinischen Fachkräfte 
                in den Mittelpunkt stellt.
              </p>
              <p>
                Beginnend mit der Vermittlung von Pflegekräften haben wir unser Angebot kontinuierlich erweitert 
                und uns zu einem führenden Anbieter in der Vermittlung von qualifizierten Ärzten, Pflegekräften 
                und medizinischen Spezialisten entwickelt. Unser Erfolg basiert auf unserem Engagement für Qualität, 
                Professionalität und persönlichem Service.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="bg-dark-gray p-5 text-center rounded">
                <p className="text-muted">Bild: Unser Gründungsteam</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Unsere Mission */}
      <section className="py-5 bg-black-custom">
        <div className="container py-4">
          <h2 className="mb-5">
            <span className="pb-2 border-bottom border-gold">Unsere Mission</span>
          </h2>
          
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <p className="mb-4">
                Unsere Mission ist es, eine Brücke zwischen qualifizierten medizinischen Fachkräften und 
                Gesundheitseinrichtungen zu schlagen, die hochwertige medizinische Versorgung anbieten möchten. 
                Wir glauben, dass jede Einrichtung Zugang zu erstklassigem medizinischem Personal haben sollte, 
                das auf die individuellen Anforderungen zugeschnitten ist.
              </p>
              <p>
                Durch unsere sorgfältige Auswahl und regelmäßige Qualitätskontrollen stellen wir sicher, 
                dass unsere Klienten optimale Unterstützung erhalten und unsere vermittelten Fachkräfte in einer 
                Umgebung arbeiten können, in der ihre Fähigkeiten, Kenntnisse und ihr Engagement gewürdigt werden.
              </p>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="bg-dark-gray p-5 text-center rounded">
                <p className="text-muted">Bild: Unsere Werte</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Unser Team */}
      <section className="py-5 bg-dark">
        <div className="container py-4">
          <h2 className="mb-5">
            <span className="pb-2 border-bottom border-gold">Unser Team</span>
          </h2>
          
          <div className="row g-4 mb-5">
            {/* Teammitglied 1 */}
            <div className="col-md-4">
              <div className="card bg-black-custom text-center h-100">
                <div className="card-body">
                  <div className="rounded-circle bg-dark-gray mx-auto mb-4" style={{width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span className="text-muted">Foto</span>
                  </div>
                  <h3 className="card-title text-gold">Dr. Michael Schmidt</h3>
                  <p className="card-subtitle mb-2 text-white">Geschäftsführer</p>
                  <p className="card-text text-secondary">
                    Mit über 20 Jahren Erfahrung im Gesundheitswesen leitet Dr. Schmidt unser Unternehmen mit Vision und Leidenschaft.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Teammitglied 2 */}
            <div className="col-md-4">
              <div className="card bg-black-custom text-center h-100">
                <div className="card-body">
                  <div className="rounded-circle bg-dark-gray mx-auto mb-4" style={{width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span className="text-muted">Foto</span>
                  </div>
                  <h3 className="card-title text-gold">Dr. Julia Berger</h3>
                  <p className="card-subtitle mb-2 text-white">Leitung Ärztevermittlung</p>
                  <p className="card-text text-secondary">
                    Als Fachärztin mit langjähriger Erfahrung bringt Dr. Berger wertvolle Einblicke in die Bedürfnisse von medizinischen Einrichtungen und Ärzten.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Teammitglied 3 */}
            <div className="col-md-4">
              <div className="card bg-black-custom text-center h-100">
                <div className="card-body">
                  <div className="rounded-circle bg-dark-gray mx-auto mb-4" style={{width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span className="text-muted">Foto</span>
                  </div>
                  <h3 className="card-title text-gold">Thomas Weber</h3>
                  <p className="card-subtitle mb-2 text-white">Qualitätsmanagement</p>
                  <p className="card-text text-secondary">
                    Thomas sorgt für die Einhaltung höchster Qualitätsstandards und kontinuierliche Verbesserung unserer Vermittlungsprozesse.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="mb-4">
              Unser engagiertes Team besteht aus Fachleuten mit umfassender Erfahrung im Gesundheits- und 
              medizinischen Bereich. Wir arbeiten jeden Tag daran, unseren Kunden den bestmöglichen Service zu bieten.
            </p>
            
            <a href="/kontakt" className="btn btn-gold px-4 py-2">Mit uns Kontakt aufnehmen</a>
          </div>
        </div>
      </section>
    </>
  );
}