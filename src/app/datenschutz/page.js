// src/app/datenschutz/page.js

export const metadata = {
    title: 'Datenschutzerklärung | Black Forge Consulting',
    description: 'Datenschutzerklärung der Black Forge Consulting - Informationen zum Umgang mit Ihren Daten',
  }
  
  export default function Datenschutz() {
    return (
      <section className="py-5 bg-dark">
        <div className="container py-4">
          <h1 className="text-gold mb-5">Datenschutzerklärung</h1>
          
          <div className="card bg-black-custom p-4 mb-4">
            <div className="card-body text-white">
              <h2 className="h4 text-gold mb-4">1. Verantwortliche Stelle</h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <address className="mb-3">
                Black Forge Consulting GmbH<br />
                    Bosewitzerstr. 11<br/>
                    01259 Dresden<br/>
                Deutschland<br /><br />
                Telefon: +49 1520 8694451<br />
                E-Mail: info@blackforge-consulting.de
              </address>
              <p>
                Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. ä.).
              </p>
            </div>
          </div>
          
          <div className="card bg-black-custom p-4 mb-4">
            <div className="card-body text-white">
              <h2 className="h4 text-gold mb-4">2. Kontaktformular und E-Mail-Versand</h2>
              <p>
                Wenn Sie unser Kontaktformular nutzen, erheben wir folgende personenbezogene Daten von Ihnen:
              </p>
              <ul className="mb-3">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer (optional)</li>
                <li>Anfragetyp</li>
                <li>Inhalt Ihrer Nachricht</li>
                <li>Zeitpunkt der Anfrage</li>
              </ul>
              <p>
                <strong>Verwendung von EmailJS:</strong> Für den Versand der Kontaktformular-Daten nutzen wir den Dienst EmailJS (EmailJS Ltd., Vereinigtes Königreich). Dabei werden Ihre Formulardaten über die EmailJS-Server an unsere E-Mail-Adresse weitergeleitet. EmailJS fungiert als Auftragsverarbeiter im Sinne der DSGVO. Weitere Informationen finden Sie in der Datenschutzerklärung von EmailJS: <a href="https://www.emailjs.com/legal/privacy-policy/" className="text-gold" target="_blank" rel="noopener noreferrer">https://www.emailjs.com/legal/privacy-policy/</a>
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie durch das Aktivieren der Checkbox im Kontaktformular erteilen. In Fällen, in denen Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
              </p>
              <p>
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </div>
          </div>
          
          <div className="card bg-black-custom p-4 mb-4">
            <div className="card-body text-white">
              <h2 className="h4 text-gold mb-4">3. Externe Inhalte und Dienste</h2>
              <h3 className="h5 text-gold mb-3">JavaScript-Bibliotheken</h3>
              <p>
                Wir verwenden Bootstrap-JavaScript-Bibliotheken, die lokal auf unserem Server gehostet werden. Es werden keine Daten an externe CDN-Anbieter übertragen.
              </p>
              
              <h3 className="h5 text-gold mb-3 mt-4">Lokale Schriftarten</h3>
              <p>
                Wir verwenden ausschließlich lokal gehostete Schriftarten. Es werden keine Daten an externe Anbieter wie Google Fonts übertragen.
              </p>
              
              <h3 className="h5 text-gold mb-3 mt-4">Hosting</h3>
              <p>
                Diese Website wird über Vercel Inc. (USA) gehostet. Vercel kann dabei technische Daten wie Ihre IP-Adresse verarbeiten. Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel: <a href="https://vercel.com/legal/privacy-policy" className="text-gold" target="_blank" rel="noopener noreferrer">https://vercel.com/legal/privacy-policy</a>
              </p>
            </div>
          </div>
          
          <div className="card bg-black-custom p-4 mb-4">
            <div className="card-body text-white">
              <h2 className="h4 text-gold mb-4">4. Zweck der Datenverarbeitung</h2>
              <p>
                Die von Ihnen übermittelten Daten verwenden wir ausschließlich, um:
              </p>
              <ul className="mb-3">
                <li>Ihre Anfragen zu bearbeiten</li>
                <li>Mit Ihnen in Kontakt zu treten</li>
                <li>Ihnen die gewünschten Informationen zukommen zu lassen</li>
                <li>Gegebenenfalls einen Vertrag vorzubereiten und abzuschließen</li>
              </ul>
              <p>
                Ihre Daten werden nicht für andere Zwecke verwendet und insbesondere nicht an Dritte weitergegeben, es sei denn, wir sind gesetzlich dazu verpflichtet.
              </p>
            </div>
          </div>
          
          <div className="card bg-black-custom p-4 mb-4">
            <div className="card-body text-white">
              <h2 className="h4 text-gold mb-4">5. Ihre Rechte</h2>
              <p>
                Sie haben jederzeit das Recht:
              </p>
              <ul className="mb-3">
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
                <li>Die Berichtigung unrichtiger oder die Vervollständigung unvollständiger Daten zu verlangen (Art. 16 DSGVO)</li>
                <li>Die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen (Art. 17 DSGVO)</li>
                <li>Die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen (Art. 18 DSGVO)</li>
                <li>Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten (Art. 20 DSGVO)</li>
                <li>Sich bei einer Aufsichtsbehörde zu beschweren (Art. 77 DSGVO)</li>
              </ul>
              <p>
                Sofern die Verarbeitung Ihrer Daten auf einer Einwilligung basiert, haben Sie das Recht, diese Einwilligung jederzeit zu widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>
            </div>
          </div>
          
          <div className="card bg-black-custom p-4 mb-4">
            <div className="card-body text-white">
              <h2 className="h4 text-gold mb-4">6. Datenschutzbeauftragter</h2>
              <p>
                Bei Fragen zum Datenschutz können Sie sich an unseren Datenschutzbeauftragten wenden:
              </p>
              <address className="mb-3">
                Black Forge Consulting GmbH<br />
                - Datenschutzbeauftragter -<br />
                Bosewitzerstr. 11<br />
                01259 Dresden<br /><br />
                E-Mail: info@blackforge-consulting.de
              </address>
            </div>
          </div>
          
          <div className="card bg-black-custom p-4">
            <div className="card-body text-white">
              <h2 className="h4 text-gold mb-4">7. Aktualität und Änderung dieser Datenschutzerklärung</h2>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2025.
              </p>
              <p>
                Aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser Website abgerufen werden.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
