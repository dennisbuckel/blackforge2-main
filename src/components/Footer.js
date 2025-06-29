// components/Footer.js

export default function Footer() {
  return (
    <footer className="bg-black-custom text-white py-4" itemScope itemType="http://schema.org/Organization">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h5 className="text-gold mb-3" itemProp="name">BLACK FORGE CONSULTING</h5>
            <p itemProp="description">Professionelle Unternehmensberatung und Personalvermittlung für Ihren nachhaltigen Geschäftserfolg.</p>
          </div>
          <div className="col-md-6">
            <h5 className="text-gold mb-3">Kontakt</h5>
            <p><span className="fw-bold">Email:</span> <a href="mailto:info@blackforge-consulting.de" className="text-white" itemProp="email">info@blackforge-consulting.de</a></p>
            <p><span className="fw-bold">Telefon:</span> <a href="tel:+4912345678901" className="text-white" itemProp="telephone">+49 1520 8694451</a></p>
            <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
              <p>
                <span className="fw-bold">Adresse: </span> 
                <span itemProp="streetAddress"> Bosewitzerstr. 11</span>, 
                <span itemProp="postalCode"> 01259</span> 
                <span itemProp="addressLocality"> Dresden</span>
              </p>
            </div>
          </div>
        </div>
        <div className="border-top border-secondary mt-4 pt-4">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <small>© {new Date().getFullYear()} Black Forge Consulting. Alle Rechte vorbehalten.</small>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <small>
                <a href="/impressum" className="text-white me-3">Impressum</a>
                <a href="/datenschutz" className="text-white">Datenschutz</a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
