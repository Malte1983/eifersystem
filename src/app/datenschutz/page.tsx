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

        <p>
          Bitte ersetzen und ergänzen Sie die folgenden Inhalte mit einer auf
          Ihre Website und Ihre tatsächlichen Prozesse abgestimmten
          Datenschutzerklärung.
        </p>

        <h2>1. Allgemeine Hinweise</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist wichtig. In dieser
          Datenschutzerklärung informieren wir darüber, welche personenbezogenen
          Daten auf dieser Website verarbeitet werden.
        </p>

        <h2>2. Verantwortliche Stelle</h2>
        <p>
          Max Mustermann
          <br />
          Eifel-Systems
          <br />
          Musterstraße 1
          <br />
          52393 Hürtgenwald
          <br />
          E-Mail: info@eifel-systems.de
        </p>

        <h2>3. Hosting</h2>
        <p>
          Diese Website wird bei einem Hosting-Anbieter betrieben. Dabei können
          serverseitig technische Zugriffsdaten verarbeitet werden.
        </p>

        <h2>4. Kontaktformular</h2>
        <p>
          Wenn Sie uns über das Kontaktformular Anfragen senden, werden Ihre
          Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zur
          Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
          gespeichert.
        </p>

        <h2>5. Externer Formularanbieter</h2>
        <p>
          Für das Kontaktformular wird ein externer Dienst genutzt. Bitte
          ergänzen Sie hier die konkreten Angaben zum tatsächlich eingesetzten
          Anbieter, dessen Datenschutzinformationen und die Rechtsgrundlage der
          Verarbeitung.
        </p>

        <h2>6. Ihre Rechte</h2>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck
          der Datenverarbeitung und gegebenenfalls ein Recht auf Berichtigung,
          Sperrung oder Löschung dieser Daten.
        </p>

        <h2>7. Hinweis</h2>
        <p>
          Diese Datenschutzerklärung ist nur ein Platzhalter und ersetzt keine
          rechtliche Beratung. Bitte lassen Sie die finalen Inhalte rechtlich
          prüfen oder erstellen.
        </p>
      </div>
    </main>
  );
}