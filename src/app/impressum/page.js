// src/app/impressum/page.js

export const metadata = {
  title: 'Impressum | Black Forge Consulting',
  description: 'Impressum der Black Forge Consulting - Rechtliche Informationen und Kontaktdaten',
}

export default function Impressum() {
  return (
    <section className="py-5 bg-dark">
      <div className="container py-4">
        <h1 className="text-gold mb-5">Impressum</h1>
        
        <div className="card bg-black-custom p-4 mb-4">
          <div className="card-body text-white">
            <h2 className="h4 text-gold mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              Black Forge Consulting GmbH<br />
              Bosewitzerstr. 11<br />
              01259 Dresden<br />
              Deutschland
            </p>
            
            <h3 className="h5 text-gold mt-4 mb-3">Vertreten durch:</h3>
            <p>
              Aric Schwarz<br />
              Geschäftsführer
            </p>
            
            <h3 className="h5 text-gold mt-4 mb-3">Kontakt:</h3>
            <p>
              Telefon: +49 1520 8694451<br />
              E-Mail: info@blackforge-consulting.de
            </p>
            
            <h3 className="h5 text-gold mt-4 mb-3">Registereintrag:</h3>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Dresden<br />
              Registernummer: HRB 12345
            </p>
            
            <h3 className="h5 text-gold mt-4 mb-3">Umsatzsteuer-ID:</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE123456789
            </p>
          </div>
        </div>
        
        <div className="card bg-black-custom p-4 mb-4">
          <div className="card-body text-white">
            <h2 className="h4 text-gold mb-4">Haftungsausschluss</h2>
            
            <h3 className="h5 text-gold mt-4 mb-3">Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
            
            <h3 className="h5 text-gold mt-4 mb-3">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
            
            <h3 className="h5 text-gold mt-4 mb-3">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </div>
        
        <div className="card bg-black-custom p-4">
          <div className="card-body text-white">
            <h2 className="h4 text-gold mb-4">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-gold">https://ec.europa.eu/consumers/odr/</a>.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
