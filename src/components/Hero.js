// Hero.js - Bootstrap Version
// Die Hero-Sektion für die Startseite mit erweitertem Angebot
export default function Hero() {
    return (
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
    );
  }