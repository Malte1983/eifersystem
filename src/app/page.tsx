import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Globe, Wrench, Settings } from "lucide-react";
import Image from "next/image";
import { Check } from "lucide-react";
import Pricing3D from "@/components/Pricing3D";

export const metadata: Metadata = {
  title: "Startseite",
  description:
    "Eifel-Systems entwickelt moderne Webseiten mit Next.js und WordPress für lokale Unternehmen, Praxen und Handwerksbetriebe in der Eifel.",
};

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
       <section className="hero">
  <div className="hero-background" />
  <div className="container hero-inner">
    <div className="hero-copy">
      <span className="eyebrow">Eifel-Systems</span>

      <h1 className="hero-title">
        Moderne Webseiten für Unternehmen in der Eifel
      </h1>

      <p className="hero-text">
        Ich entwickle moderne Webseiten für Unternehmen, Praxen und Handwerksbetriebe – klar strukturiert,
        technisch sauber und passend zu Ihrem Arbeitsalltag.
      </p>

      <div className="hero-actions">
        <a href="#kontakt" className="btn btn-primary">
          Projekt anfragen
        </a>

        <a href="#leistungen" className="btn btn-secondary">
          Leistungen ansehen
        </a>
      </div>

      <div className="hero-trust">
        <span className="hero-trust-badge">Next.js & WordPress</span>
        <span className="hero-trust-badge">Für Praxen & Handwerk</span>
        <span className="hero-trust-badge">Persönliche Betreuung</span>
      </div>
    </div>

    <aside className="hero-visual">
      <div className="hero-card hero-card-main">
        <span className="hero-card-label">Digitale Präsenz mit Struktur</span>
        <h2>Klare Websites statt unnötiger Komplexität</h2>
        <p>
          Moderne Weblösungen für Unternehmen, die professionell auftreten und
          langfristig gut betreubar sein sollen.
        </p>

        <ul className="highlight-list">
          <li>Technisch sauber umgesetzt</li>
          <li>Passend zur tatsächlichen Anforderung</li>
          <li>Modernes Design mit klarer Nutzerführung</li>
        </ul>
      </div>

      <div className="hero-mini-grid">
        <div className="hero-mini-card">
          <strong>Modern</strong>
          <span>Klare Gestaltung, schnelle Ladezeiten, professioneller Auftritt</span>
        </div>

        <div className="hero-mini-card">
          <strong>Persönlich</strong>
          <span>Direkter Ansprechpartner statt anonymer Agentur-Prozesse</span>
        </div>
      </div>
    </aside>
  </div>
</section>

 <section id="leistungen" className="section">
  <div className="container">
    <span className="eyebrow">Leistungen</span>
    <h2 className="section-title">
      Webseiten, die zu Ihrem Unternehmen passen
    </h2>
    <p className="section-text">
     Je nach Projekt entsteht die passende Lösung: eine schnelle Next.js-Seite, ein flexibel pflegbares WordPress-System oder die laufende technische Betreuung Ihrer Website.
    </p>

    <div className="services-grid">

      <article className="service-card">
        <div className="service-icon">
          <Globe size={28} strokeWidth={1.8} />
        </div>

        <div className="service-card-top">
          <span className="service-badge">Next.js</span>
          <h3>Moderne Webseiten mit Next.js</h3>
        </div>

        <p>
          Ideal für schnelle, moderne und wartungsarme Websites mit klarem
          Design, hoher Performance und professionellem Auftritt.
        </p>

        <ul className="service-list">
          <li>Ideal für Unternehmensseiten mit wenigen Änderungen</li>
          <li>Sehr schnell und modern aufgebaut</li>
          <li>Saubere technische Basis für SEO und Performance</li>
        </ul>
      </article>


      <article className="service-card">
        <div className="service-icon">
          <Wrench size={28} strokeWidth={1.8} />
        </div>

        <div className="service-card-top">
          <span className="service-badge">WordPress</span>
          <h3>Flexible Webseiten mit WordPress</h3>
        </div>

        <p>
          Die richtige Lösung, wenn Inhalte regelmäßig gepflegt oder erweitert
          werden sollen und Sie Ihre Website später selbst mitverwalten möchten.
        </p>

        <ul className="service-list">
          <li>Einfaches Bearbeiten von Inhalten</li>
          <li>Geeignet für häufige Text- und Bildänderungen</li>
          <li>Ideal für Praxen, Handwerk und lokale Unternehmen</li>
        </ul>
      </article>


     <article className="service-card">
        <div className="service-icon">
          <Settings size={28} strokeWidth={1.8} />
        </div>

        <div className="service-card-top">
          <span className="service-badge">Support</span>
          <h3>Wartung, Hosting & Pflege</h3>
        </div>

        <p>
          Auch nach dem Go-live begleite ich Ihre Website mit dem nötigen Setup, Updates, Pflege
          und kleineren technischen Anpassungen.
        </p>

        <ul className="service-list">
          <li>Einrichtung von Domain, Hosting & E-Mails</li>
          <li>WordPress-Updates und Plugin-Pflege</li>
          <li>Langfristige Betreuung auf Wunsch</li>
        </ul>
      </article>

    </div>
  </div>
</section>

<section  id="zielgruppen" className="section section-alt">
  <div className="container">
    <span className="eyebrow">Für wen ich arbeite</span>
    <h2 className="section-title">
     Passende Lösungen für unterschiedliche Branchen
    </h2>
    <p className="section-text">
     Je nach Branche unterscheiden sich Inhalte, Funktionen und Anforderungen deutlich. Deshalb wird jede Website so aufgebaut, dass sie zur Zielgruppe, zum Angebot und zum Arbeitsalltag des Unternehmens passt.
    </p>

    <div className="target-grid">
      <article className="target-card">
        <h3>Praxen</h3>
        <p>
          Seriöse, vertrauensvolle Websites mit klaren Leistungen,
          Kontaktmöglichkeiten und einer ruhigen, professionellen Gestaltung.
        </p>
        <ul className="target-list">
          <li>Leistungsübersicht</li>
          <li>Team- und Praxisvorstellung</li>
          <li>Kontakt, Anfahrt und Terminoptionen</li>
        </ul>
      </article>

      <article className="target-card">
        <h3>Handwerksbetriebe</h3>
        <p>
          Klare Seiten für Leistungen, Referenzen und Anfragen – ohne unnötige
          Komplexität, aber mit modernem und vertrauenswürdigem Auftritt.
        </p>
        <ul className="target-list">
          <li>Leistungen klar darstellen</li>
          <li>Projekt- oder Referenzbereiche</li>
          <li>Anfrageformulare und Kontaktwege</li>
        </ul>
      </article>

      <article className="target-card">
        <h3>Lokale Unternehmen</h3>
        <p>
          Webseiten, die regional sichtbar machen, professionell auftreten und
          technisch sauber umgesetzt sind.
        </p>
        <ul className="target-list">
          <li>Moderner Unternehmensauftritt</li>
          <li>Klare Seitenstruktur</li>
          <li>Gute Basis für lokale Sichtbarkeit</li>
        </ul>
      </article>
    </div>
  </div>
</section>
<section id="ueber-mich" className="section">
  {/* Wir nutzen wieder das originale about-grid */}
  <div className="container about-grid">
    
    <div className="about-copy">
      <span className="eyebrow">Über mich</span>
      <h2 className="section-title">
        Persönliche Betreuung statt unnötiger Agentur-Komplexität
      </h2>

      {/* NEU: Der kompakte Founder-Block */}
      <div className="about-founder">
        <Image
          src="/malte-portrait.jpg" 
          alt="Malte Scherdin von Eifel-Systems"
          width={160}
          height={160}
          className="founder-image"
        />
        <div className="founder-text">
          <p className="section-text" style={{ marginTop: 0, marginBottom: 0 }}>
            Mit Eifel-Systems begleite ich Unternehmen bei Webseiten, die nicht nur gut aussehen, sondern im Alltag funktionieren – verständlich, zuverlässig und ohne unnötige Komplexität.
          </p>
        </div>
      </div>

      <p className="about-text">
        Mir ist wichtig, dass Websites nicht nur gut aussehen, sondern auch im
        Alltag funktionieren: verständliche Inhalte, eine saubere Struktur,
        schnelle Ladezeiten und eine Lösung, die wirklich zu den Anforderungen
        des Unternehmens passt.
      </p>

      <p className="about-text">
        Statt unnötiger Komplexität setze ich auf direkte Kommunikation,
        moderne Technik und eine persönliche Zusammenarbeit auf Augenhöhe.
      </p>
    </div>

    <aside className="about-card">
      <h3>Was Ihnen Eifel-Systems bietet</h3>
      <ul className="about-list">
        <li>Direkter Ansprechpartner ohne Umwege</li>
        <li>Moderne Webseiten mit klarer technischer Basis</li>
        <li>WordPress oder Next.js je nach Anforderung</li>
        <li>Persönliche Betreuung auch nach dem Launch</li>
        <li>Verständliche Kommunikation ohne Fachchinesisch</li>
      </ul>
    </aside>

  </div>
</section>

<section id="referenzen" className="section">
  <div className="container">

    <span className="eyebrow">Referenz</span>

    <h2 className="section-title">
      Beispielprojekt aus meiner Praxis
    </h2>

    <p className="section-text">
      Dieses Projekt zeigt, wie ein klarer, moderner Webauftritt mit starker Startseite, direkter Nutzerführung und sauberem Responsive Design aussehen kann.
    </p>

    <div className="references-grid references-grid-single">

      <article className="reference-card reference-card-real">

        <div className="reference-preview reference-preview-image">

          <Image
            src="/references/youfit-mockup.png"
            alt="You Fit Outdoor Sports Website"
            width={1400}
            height={900}
            className="reference-image"
            priority
          />

        </div>

        <div className="reference-content">

          <span className="reference-tag">
            Fitness / Outdoor Training
          </span>

          <h3>You Fit Outdoor Sports</h3>

          <p>
            Moderne Website für ein Outdoor-Fitness Angebot mit klarer
            Nutzerführung, moderner Gestaltung und Fokus auf direkte
            Kontaktaufnahme und Probetraining.
          </p>

          <ul className="reference-list">
            <li>Klare Landingpage mit starker Hero-Sektion</li>
            <li>Community- und Trainingsbereiche</li>
            <li>Testimonials und Kontaktformular integriert</li>
            <li>Optimiert für Mobile, Tablet und Desktop</li>
          </ul>

          <div className="reference-actions">

            <a
              href="https://youfitnext.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Website ansehen
            </a>

          </div>

        </div>

      </article>

    </div>

  </div>
</section>

<section className="section section-alt">
  <div className="container">
    <span className="eyebrow">Warum Eifel-Systems</span>
    <h2 className="section-title">
      Persönlich, modern und auf lokale Unternehmen ausgerichtet
    </h2>
    <p className="section-text">
      Gute Webseiten entstehen nicht nur durch Technik, sondern durch klare
      Kommunikation, saubere Umsetzung und Lösungen, die wirklich zum
      Unternehmen passen.
    </p>

    <div className="trust-grid">
      <article className="trust-card">
        <h3>Persönliche Betreuung</h3>
        <p>
          Direkter Ansprechpartner statt unnötiger Umwege oder anonymer
          Agentur-Prozesse.
        </p>
      </article>

      <article className="trust-card">
        <h3>Moderne Technik</h3>
        <p>
          Umsetzung mit Next.js oder WordPress – passend zur tatsächlichen
          Anforderung Ihres Projekts.
        </p>
      </article>

      <article className="trust-card">
        <h3>Klare Kommunikation</h3>
        <p>
          Verständliche Abstimmung ohne Fachchinesisch – transparent und auf
          Augenhöhe.
        </p>
      </article>

      <article className="trust-card">
        <h3>Betreuung auch nach dem Launch</h3>
        <p>
          Auf Wunsch begleite ich Ihre Website auch langfristig mit Pflege,
          Updates und technischen Anpassungen.
        </p>
      </article>
    </div>
  </div>
</section>

<section id="ablauf" className="section">
  <div className="container">
    <span className="eyebrow">Ablauf</span>
    <h2 className="section-title">So läuft ein Projekt mit Eifel-Systems ab</h2>
    <p className="section-text">
      Von der ersten Idee bis zur fertigen Website: Der Ablauf bleibt klar,
      übersichtlich und nachvollziehbar.
    </p>

    <div className="process-grid">
      <article className="process-card">
        <span className="process-step">01</span>
        <h3>Erstgespräch</h3>
        <p>
          Wir besprechen Ihr Vorhaben, Ihre Zielgruppe und die Anforderungen an
          die neue Website.
        </p>
      </article>

   <article className="process-card">
        <span className="process-step">02</span>
        <h3>Inhalte & Struktur</h3>
        <p>
          Ich entwickle die passende Seitenstruktur. Beim Schreiben der Texte unterstütze ich Sie gerne. Bildmaterial wird von Ihnen geliefert oder wir greifen auf passendes Stockmaterial zurück.
        </p>
      </article>

      <article className="process-card">
        <span className="process-step">03</span>
        <h3>Umsetzung</h3>
        <p>
          Die Website wird modern, sauber und responsive umgesetzt – mit Fokus
          auf Nutzerführung und Klarheit.
        </p>
      </article>

      <article className="process-card">
        <span className="process-step">04</span>
        <h3>Launch & Betreuung</h3>
        <p>
          Nach dem Go-live begleite ich Ihr Projekt auf Wunsch weiter mit Pflege,
          Updates und kleineren Anpassungen.
        </p>
      </article>
    </div>
  </div>
</section>

<section id="preise" className="section section-alt">
  <div className="container">
    <div className="pricing-header" style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 2rem auto" }}>
      <span className="eyebrow">Transparenz</span>
      <h2 className="section-title">Klare Pakete, keine versteckten Kosten</h2>
      <p className="section-text">
        Jedes Unternehmen ist anders. Wischen Sie durch die Pakete, um eine erste Orientierung zu erhalten. 
        Im Erstgespräch finden wir die Lösung, die perfekt zu Ihnen passt.
      </p>
    </div>


{/* HIER WIRD DIE NEUE 3D KOMPONENTE EINGEBUNDEN */}
    <Pricing3D />
    
    <p style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.9rem", color: "rgba(30, 36, 48, 0.6)" }}>
      Gemäß § 19 UStG wird keine Umsatzsteuer berechnet und ausgewiesen.
    </p>
  </div>
</section>

<section id="faq" className="section section-alt">
  <div className="container faq-container">
    <div className="faq-header">
      <span className="eyebrow">FAQ</span>
      <h2 className="section-title">Häufige Fragen zur Zusammenarbeit</h2>
    </div>

    <div className="faq-list">
      <details className="faq-item" name="faq">
        <summary className="faq-question">Wie lange dauert die Umsetzung einer neuen Website?</summary>
        <div className="faq-answer">
          <p>In der Regel dauert die Umsetzung einer Unternehmenswebsite etwa 4 bis 6 Wochen von unserem Erstgespräch bis zum finalen Go-Live. Das hängt etwas vom Umfang und davon ab, wie schnell die Inhalte (Texte/Bilder) vorliegen.</p>
        </div>
      </details>

      <details className="faq-item" name="faq">
        <summary className="faq-question">Wer kümmert sich um Texte und Bilder?</summary>
        <div className="faq-answer">
          <p>Bildmaterial (z.B. von Ihrem Team oder Ihren Räumlichkeiten) wird idealerweise von Ihnen geliefert. Alternativ suche ich passendes, professionelles Stockmaterial für Sie heraus. Beim Strukturieren und Schreiben der Texte unterstütze ich Sie hingegen sehr gerne!</p>
        </div>
      </details>

      <details className="faq-item" name="faq">
        <summary className="faq-question">Was ist mit Domain, Hosting und E-Mail-Adressen?</summary>
        <div className="faq-answer">
          <p>Darum kümmere ich mich! Auf Wunsch übernehme ich das komplette Setup inklusive Domainregistrierung, sicherem Hosting (Serverstandort Deutschland) und der Einrichtung Ihrer geschäftlichen E-Mail-Postfächer.</p>
        </div>
      </details>

      <details className="faq-item" name="faq">
        <summary className="faq-question">Gehört die Website danach mir?</summary>
        <div className="faq-answer">
          <p>Ja, zu 100 %. Es gibt bei Eifel-Systems keinen "Lock-in-Effekt". Nach Abschluss des Projekts und vollständiger Bezahlung gehen alle Rechte an der Website komplett an Sie über.</p>
        </div>
      </details>
      <details className="faq-item" name="faq">
        <summary className="faq-question">Sieht meine neue Website auch auf dem Smartphone gut aus?</summary>
        <div className="faq-answer">
          <p>Selbstverständlich! Heutzutage kommen über 60 % der Website-Besucher über das Smartphone. Jede Website, die ich entwickle, ist zu 100 % responsive und passt sich automatisch an Handys, Tablets und Desktop-Bildschirme an.</p>
        </div>
      </details>

      <details className="faq-item" name="faq">
        <summary className="faq-question">Was ist mit Suchmaschinenoptimierung (SEO)?</summary>
        <div className="faq-answer">
          <p>Eine saubere technische Basis-Suchmaschinenoptimierung (schnelle Ladezeiten, saubere Überschriften-Struktur, Meta-Beschreibungen) ist bei jedem Projekt von Haus aus inklusive, damit Sie bei Google gut gefunden werden.</p>
        </div>
      </details>

      <details className="faq-item" name="faq">
        <summary className="faq-question">Wie läuft die Bezahlung ab?</summary>
        <div className="faq-answer">
          <p>In der Regel arbeite ich mit einer fairen Teilzahlung: 40 % der Auftragssumme werden bei Projektstart fällig, die restlichen 60 % erst nach vollständiger Abnahme und Go-Live Ihrer neuen Website.</p>
        </div>
      </details>

      <details className="faq-item" name="faq">
        <summary className="faq-question">Kann ich die Inhalte später selbst ändern?</summary>
        <div className="faq-answer">
          <p>Wenn wir uns für WordPress als Basis entscheiden, können Sie Texte und Bilder jederzeit ganz einfach selbst austauschen. Sie erhalten von mir zum Abschluss eine kurze Einweisung, wie das System funktioniert.</p>
        </div>
      </details>
    </div>
  </div>
</section>
   

       <section id="kontakt" className="section">
  <div className="container contact-grid">
    <div className="contact-copy">
      <span className="eyebrow">Kontakt</span>
      <h2 className="section-title">
        Lassen Sie uns über Ihr Projekt sprechen
      </h2>
      <p className="section-text">
        Sie planen eine neue Website oder möchten Ihre bestehende Seite
        modernisieren? Dann starten wir mit einem unverbindlichen Erstgespräch.
      </p>

      <div className="contact-card">
        <h3>So kann ich Sie unterstützen</h3>
        <ul className="contact-list">
          <li>Neue Unternehmenswebsite erstellen</li>
          <li>Bestehende Website modernisieren</li>
          <li>WordPress pflegen und technisch betreuen</li>
          <li>Passende Lösung mit Next.js oder WordPress finden</li>
        </ul>
      </div>
    </div>

    <div className="contact-form-wrap">
      <ContactForm />
    </div>
  </div>
</section>
      </main>
      <Footer />
    </>
  );
}