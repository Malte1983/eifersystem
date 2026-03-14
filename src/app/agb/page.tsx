import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen von Eifel-Systems.",
};

export default function AgbPage() {
  return (
    <main className="legal-page">
      <div className="container legal-content">
        <Link href="/" className="legal-back-link">
          ← Zurück zur Startseite
        </Link>

        <h1 style={{ fontSize: "clamp(2.0rem, 5vw, 2.5rem)" }}>Allgemeine Geschäftsbedingungen (AGB)</h1>

        <h2>§ 1 Geltungsbereich</h2>
        <p>
          (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") von Malte Scherdin, Eifel-Systems (nachfolgend "Anbieter"), gelten für alle Verträge über Webdesign, Webentwicklung, Hosting und Wartungsdienstleistungen, die ein Unternehmer (nachfolgend "Kunde") mit dem Anbieter abschließt.
        </p>
        <p>
          (2) Unternehmer ist jede natürliche oder juristische Person oder rechtsfähige Personengesellschaft, die beim Abschluss des Vertrags in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt (§ 14 BGB). Der Anbieter schließt keine Verträge mit Verbrauchern (§ 13 BGB).
        </p>
        <p>
          (3) Abweichende, entgegenstehende oder ergänzende AGB des Kunden werden nur dann Vertragsbestandteil, wenn der Anbieter ihrer Geltung ausdrücklich zugestimmt hat.
        </p>

        <h2>§ 2 Vertragsschluss</h2>
        <p>
          (1) Die Angebote des Anbieters auf der Website sind freibleibend und unverbindlich.
        </p>
        <p>
          (2) Ein Vertrag kommt erst durch die Annahme eines individuellen Angebots (z. B. per E-Mail) durch den Kunden oder durch die Unterzeichnung eines Projektvertrags zustande.
        </p>

        <h2>§ 3 Leistungen und Mitwirkungspflichten des Kunden</h2>
        <p>
          (1) Der Anbieter erstellt individuelle Websites (z. B. mit Next.js oder WordPress) und bietet auf Wunsch zusätzliche Leistungen wie Hosting, Domainregistrierung und fortlaufende Wartung an. Der genaue Leistungsumfang ergibt sich aus dem jeweiligen Angebot.
        </p>
        <p>
          (2) Der Kunde ist verpflichtet, alle für die Umsetzung des Projekts erforderlichen Inhalte (Texte, Bilder, Logos, Zugangsdaten) rechtzeitig, vollständig und in einem geeigneten digitalen Format zur Verfügung zu stellen.
        </p>
        <p>
          (3) Der Kunde stellt sicher, dass er über alle erforderlichen Rechte an den bereitgestellten Inhalten (insbesondere Urheber- und Markenrechte) verfügt und diese keine Rechte Dritter verletzen. Der Kunde stellt den Anbieter von allen Ansprüchen Dritter frei, die wegen der vertragsgemäßen Nutzung dieser Inhalte geltend gemacht werden.
        </p>
        <p>
          (4) Kommt der Kunde seinen Mitwirkungspflichten nachweislich nicht nach und verzögert sich das Projekt dadurch erheblich, behält sich der Anbieter vor, den bis dahin entstandenen Aufwand in Rechnung zu stellen.
        </p>

        <h2>§ 4 Abnahme (bei Werkleistungen)</h2>
        <p>
          (1) Nach Fertigstellung der Website fordert der Anbieter den Kunden zur Abnahme auf. 
        </p>
        <p>
          (2) Die Abnahme gilt als stillschweigend erfolgt, wenn der Kunde die Website nach Fertigstellung und Aufforderung zur Abnahme nicht innerhalb von 14 Tagen auf wesentliche Mängel hin rügt oder die Website vorzeitig produktiv nutzt (Live-Schaltung).
        </p>

        <h2>§ 5 Vergütung und Zahlungsbedingungen</h2>
        <p>
          (1) Es gelten die im Angebot vereinbarten Preise. Alle Preise sind Endpreise. Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer berechnet und ausgewiesen.
        </p>
        <p>
          (2) Der Anbieter ist berechtigt, bei Projektstart eine angemessene Abschlagszahlung (z. B. 30 % bis 50 % der Auftragssumme) zu fordern. Die Restzahlung wird nach Abnahme fällig.
        </p>
        <p>
          (3) Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig, sofern nichts anderes vereinbart wurde.
        </p>

        <h2>§ 6 Nutzungsrechte / Urheberrecht</h2>
        <p>
          (1) Der Anbieter räumt dem Kunden nach vollständiger Bezahlung der vereinbarten Vergütung das räumlich und zeitlich unbeschränkte Recht ein, die erstellte Website für den vertraglich vorgesehenen Zweck zu nutzen.
        </p>
        <p>
          (2) Ein Quellcode-Übergabeanspruch besteht nur, wenn dies ausdrücklich vereinbart wurde. Bei der Nutzung von Open-Source-Software (z. B. WordPress) gelten die jeweiligen Lizenzbestimmungen der Software.
        </p>

        <h2>§ 7 Hosting und Domains</h2>
        <p>
          (1) Sofern das Hosting über den Anbieter gebucht wird, stellt der Anbieter Speicherplatz auf Servern von Drittanbietern zur Verfügung. Eine Verfügbarkeit von 100 % kann technisch nicht garantiert werden. Der Anbieter bemüht sich um eine Erreichbarkeit von 99 % im Jahresmittel.
        </p>
        <p>
          (2) Bei der Vermittlung von Domains wird der Anbieter lediglich als Vermittler zwischen dem Kunden und der Vergabestelle tätig. Der Kunde wird als Domaininhaber eingetragen.
        </p>

        <h2>§ 8 Haftung</h2>
        <p>
          (1) Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach Maßgabe des Produkthaftungsgesetzes. Für leichte Fahrlässigkeit haftet der Anbieter nur bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht), deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf.
        </p>
        <p>
          (2) Die Haftung für Datenverlust wird auf den typischen Wiederherstellungsaufwand beschränkt, der bei regelmäßiger und gefahrentsprechender Anfertigung von Sicherungskopien durch den Kunden eingetreten wäre.
        </p>
        <p>
          (3) Der Anbieter haftet nicht für die rechtliche Zulässigkeit der Website (z. B. Wettbewerbs-, Marken- oder Datenschutzrecht). Die rechtliche Prüfung (Impressum, Datenschutzerklärung, Cookie-Banner) obliegt dem Kunden.
        </p>

        <h2>§ 9 Schlussbestimmungen</h2>
        <p>
          (1) Es gilt das Recht der Bundesrepublik Deutschland.
        </p>
        <p>
          (2) Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist der Gerichtsstand für alle Streitigkeiten aus Vertragsverhältnissen zwischen dem Kunden und dem Anbieter der Sitz des Anbieters (Hürtgenwald).
        </p>
        <p>
          (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
        </p>
      </div>
    </main>
  );
}