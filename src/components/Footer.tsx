import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div className="site-footer-brand">
          <h2>Eifel-Systems</h2>
          <p>
            Moderne Webseiten mit Next.js und WordPress für lokale Unternehmen,
            Praxen und Handwerksbetriebe.
          </p>
        </div>

        <nav className="site-footer-nav" aria-label="Footer Navigation">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </nav>
      </div>

      <div className="container site-footer-bottom">
        <p>© {currentYear} Eifel-Systems. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}