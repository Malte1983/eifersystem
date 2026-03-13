import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Eifel-Systems.",
};

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <div className="container legal-content">
        <Link href="/" className="legal-back-link">
          ← Zurück zur Startseite
        </Link>

        <h1>Datenschutzerklärung</h1>

        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
        </p>

        <h3>Datenerfassung auf dieser Website</h3>
        <p>
          <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
        </p>
        <p>
          <strong>Wie erfasse ich Ihre Daten?</strong><br />
          Ihre Daten werden zum einen dadurch erhoben, dass Sie mir diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.<br />
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch die IT-Systeme des Hosters erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
        </p>

        <h2>2. Hosting</h2>
        <p>
          Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
        </p>
        <p>
          Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung meines Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
        </p>

        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3>Hinweis zur verantwortlichen Stelle</h3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p>
          Malte Scherdin<br />
          Eifel-Systems<br />
          Im Oberdorf 92<br />
          52393 Hürtgenwald
        </p>
        <p>
          Telefon: 0151 58437727<br />
          E-Mail: info@eifel-systems.de
        </p>

        <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>

        <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
        <p>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
        </p>

        <h3>Recht auf Datenübertragbarkeit</h3>
        <p>
          Sie haben das Recht, Daten, die ich auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeite, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
        </p>

        <h3>Auskunft, Löschung und Berichtigung</h3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an mich wenden.
        </p>

        <h2>4. Datenerfassung auf dieser Website</h2>
        <h3>Server-Log-Dateien</h3>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
        </p>
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p>
          Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
        </p>

        <h3>Kontaktformular (Web3Forms)</h3>
        <p>
          Wenn Sie mir per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir gespeichert.
        </p>
        <p>
          Für die Bereitstellung und Verarbeitung des Kontaktformulars nutze ich den Dienst <strong>Web3Forms</strong> (Surjith S M, 28/321, KG Nagar, Puzhakkal, Thrissur, Kerala, India - 680002). Wenn Sie das Formular absenden, werden die eingegebenen Daten an die Server von Web3Forms übermittelt und dort verarbeitet, um sie an meine E-Mail-Adresse weiterzuleiten. 
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf meinem berechtigten Interesse an der effektiven Bearbeitung der an mich gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde (z. B. durch das Setzen eines Häkchens im Formular).
        </p>
        <p>
          Weitere Informationen zum Umgang mit Nutzerdaten bei Web3Forms finden Sie in der Datenschutzerklärung des Anbieters unter: <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer">https://web3forms.com/privacy</a>.
        </p>
        <p>
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei mir, bis Sie mich zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
        </p>
      </div>
    </main>
  );
}