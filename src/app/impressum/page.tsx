import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Hinweise von Eifel-Systems.",
};

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <div className="container legal-content">
        <Link href="/" className="legal-back-link">
          ← Zurück zur Startseite
        </Link>

        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          Malte Scherdin<br />
          Eifel-Systems<br />
          Im Oberdorf 92<br />
          52393 Hürtgenwald
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: 0151 58437727<br />
          E-Mail: info@eifel-systems.de
        </p>

        <h2>Umsatzsteuer</h2>
        <p>
          Umsatzsteuerfrei aufgrund der Kleinunternehmerregelung gemäß § 19 UStG.
        </p>

        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
          Malte Scherdin<br />
          Im Oberdorf 92<br />
          52393 Hürtgenwald
        </p>

        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a>.<br />
          Meine E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
        <p>
          Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </main>
  );
}