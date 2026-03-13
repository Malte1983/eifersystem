import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Eifel-Systems.",
};

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <div className="container legal-content">
        <Link href="/" className="legal-back-link">
          ← Zurück zur Startseite
        </Link>

        <h1>Impressum</h1>

        <p>
         
        </p>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Malte Scherdin
          <br />
          Eifel-Systems
          <br />
          Im Oberdorf 92
          <br />
          52393 Hürtgenwald
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: 0151 58437727
          <br />
          E-Mail: info@eifel-systems.de
        </p>

        <h2>Umsatzsteuer</h2>
        <p>
          Kleinunternehmer gemäß § 19 UStG
          <br />
          
        </p>

        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
          Malte Scherdin
          <br />
          Im Oberdorf 92
          <br />
          52393 Hürtgenwald
        </p>

        <h2>Hinweis</h2>
        <p>
         
        </p>
      </div>
    </main>
  );
}