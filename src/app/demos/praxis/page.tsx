
import { Phone, Clock, MapPin, CheckCircle, ArrowRight, Shield, Heart, Star } from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --navy: #0a1628;
    --navy-mid: #112240;
    --gold: #b8975a;
    --gold-light: #d4b483;
    --cream: #f9f6f0;
    --warm-white: #fdfcfb;
    --slate: #6b7a8d;
    --text: #1c2b3a;
    --border: rgba(184, 151, 90, 0.2);
    --shadow-soft: 0 4px 32px rgba(10, 22, 40, 0.06);
    --shadow-card: 0 8px 48px rgba(10, 22, 40, 0.1);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  .p-root {
    background: var(--warm-white);
    min-height: 100vh;
    font-family: 'DM Sans', sans-serif;
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  /* ── NAV ── */
  .p-nav {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(253, 252, 251, 0.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    padding: 0 3rem;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation: fadeDown 0.6s ease both;
  }

  .p-logo-wrap {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .p-logo-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.35rem;
    font-weight: 600;
    color: var(--navy);
    letter-spacing: 0.02em;
    line-height: 1;
  }

  .p-logo-sub {
    font-size: 0.68rem;
    font-weight: 400;
    color: var(--gold);
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .p-nav-links {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }

  .p-nav-link {
    font-size: 0.85rem;
    font-weight: 400;
    color: var(--slate);
    text-decoration: none;
    letter-spacing: 0.03em;
    transition: color 0.25s;
  }
  .p-nav-link:hover { color: var(--navy); }

  .p-nav-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--navy);
    color: white;
    text-decoration: none;
    padding: 0.65rem 1.5rem;
    border-radius: 3px;
    font-size: 0.82rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: background 0.25s, transform 0.2s;
  }
  .p-nav-cta:hover { background: var(--gold); transform: translateY(-1px); }

  /* ── HERO ── */
  .p-hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: calc(100vh - 72px);
    max-height: 820px;
  }

  .p-hero-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5rem 4rem 5rem 5rem;
    animation: fadeUp 0.8s 0.2s ease both;
  }

  .p-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 2rem;
  }
  .p-eyebrow::before {
    content: '';
    width: 28px;
    height: 1px;
    background: var(--gold);
    display: block;
  }

  .p-hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.8rem, 4.5vw, 4.2rem);
    font-weight: 300;
    color: var(--navy);
    line-height: 1.12;
    letter-spacing: -0.01em;
    margin-bottom: 1.75rem;
  }
  .p-hero-title em {
    font-style: italic;
    color: var(--gold);
  }

  .p-hero-desc {
    font-size: 1.02rem;
    line-height: 1.75;
    color: var(--slate);
    max-width: 480px;
    margin-bottom: 2.5rem;
    font-weight: 300;
  }

  .p-hero-actions {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 3.5rem;
  }

  .p-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    background: var(--navy);
    color: white;
    text-decoration: none;
    padding: 0.9rem 2rem;
    border-radius: 3px;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: all 0.25s;
  }
  .p-btn-primary:hover { background: var(--gold); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(184,151,90,0.3); }

  .p-btn-ghost {
    font-size: 0.85rem;
    color: var(--navy);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    border-bottom: 1px solid var(--border);
    padding-bottom: 2px;
    transition: color 0.25s, border-color 0.25s;
  }
  .p-btn-ghost:hover { color: var(--gold); border-color: var(--gold); }

  .p-trust-row {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .p-trust-item {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    font-size: 0.82rem;
    color: var(--slate);
    font-weight: 400;
  }

  /* ── HERO RIGHT ── */
  .p-hero-right {
    position: relative;
    overflow: hidden;
    background: var(--navy);
    animation: fadeIn 1s 0.1s ease both;
  }

  .p-hero-img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(10,22,40,0.6) 0%, rgba(10,22,40,0.2) 60%, rgba(184,151,90,0.15) 100%);
    z-index: 1;
  }

  .p-hero-visual {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 30% 40%, rgba(184,151,90,0.12) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 80%, rgba(17,34,64,0.8) 0%, transparent 50%),
      linear-gradient(160deg, #0d1e36 0%, #1a3256 50%, #0f2847 100%);
  }

  /* Decorative medical cross */
  .p-hero-deco {
    position: absolute;
    z-index: 2;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .p-cross-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    opacity: 0.06;
  }
  .p-cross-h { width: 160px; height: 48px; background: var(--gold); }
  .p-cross-v { width: 48px; height: 160px; background: var(--gold); margin-top: -48px; }

  .p-hero-quote {
    position: absolute;
    bottom: 3rem;
    left: 2.5rem;
    right: 2.5rem;
    z-index: 3;
  }
  .p-hero-quote p {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.35rem;
    font-style: italic;
    font-weight: 300;
    color: rgba(255,255,255,0.85);
    line-height: 1.5;
  }
  .p-hero-quote span {
    display: block;
    margin-top: 0.75rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold-light);
  }

  /* ── STRIP ── */
  .p-strip {
    background: var(--gold);
    padding: 1.1rem 5rem;
    display: flex;
    justify-content: center;
    gap: 4rem;
    flex-wrap: wrap;
    animation: fadeUp 0.6s 0.5s ease both;
  }
  .p-strip-item {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: white;
  }

  /* ── INFO SECTION ── */
  .p-section {
    padding: 7rem 5rem;
    max-width: 1300px;
    margin: 0 auto;
    animation: fadeUp 0.8s 0.3s ease both;
  }

  .p-section-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: end;
    margin-bottom: 4rem;
  }

  .p-section-label {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  .p-section-label::before {
    content: '';
    width: 24px;
    height: 1px;
    background: var(--gold);
  }

  .p-section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 3vw, 2.8rem);
    font-weight: 300;
    color: var(--navy);
    line-height: 1.2;
  }
  .p-section-title em { font-style: italic; color: var(--gold); }

  .p-section-desc {
    font-size: 0.95rem;
    line-height: 1.8;
    color: var(--slate);
    font-weight: 300;
    max-width: 420px;
    align-self: end;
  }

  /* ── CARDS ── */
  .p-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .p-card {
    background: white;
    border: 1px solid #edf0f5;
    border-radius: 4px;
    padding: 2.5rem;
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }
  .p-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--gold), var(--gold-light));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .p-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-card); border-color: transparent; }
  .p-card:hover::before { transform: scaleX(1); }

  .p-card-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3.5rem;
    font-weight: 300;
    color: rgba(184, 151, 90, 0.12);
    line-height: 1;
    margin-bottom: 0.25rem;
    letter-spacing: -0.02em;
  }

  .p-card-icon-wrap {
    width: 44px;
    height: 44px;
    background: var(--cream);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  .p-card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--navy);
    margin-bottom: 0.75rem;
    line-height: 1.2;
  }

  .p-card p {
    font-size: 0.88rem;
    color: var(--slate);
    line-height: 1.75;
    font-weight: 300;
  }
  .p-card strong { color: var(--navy); font-weight: 500; }

  /* ── FOOTER STRIP ── */
  .p-footer {
    background: var(--navy);
    padding: 3rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .p-footer-brand {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.15rem;
    color: white;
    font-weight: 400;
  }
  .p-footer-brand span { color: var(--gold-light); font-style: italic; }

  .p-footer-note {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.05em;
  }

  /* ── ANIMATIONS ── */
  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .p-hero { grid-template-columns: 1fr; max-height: none; }
    .p-hero-right { min-height: 320px; }
    .p-hero-left { padding: 3.5rem 2rem; }
    .p-section { padding: 5rem 2rem; }
    .p-section-header { grid-template-columns: 1fr; }
    .p-cards { grid-template-columns: 1fr; }
    .p-nav { padding: 0 1.5rem; }
    .p-nav-links { display: none; }
    .p-strip { padding: 1rem 2rem; gap: 2rem; }
    .p-footer { padding: 2rem; }
  }
`;

export default function PraxisDemo() {
  return (
    <div className="p-root">
      <style>{styles}</style>

      {/* ── NAVIGATION ── */}
      <nav className="p-nav">
        <div className="p-logo-wrap">
          <span className="p-logo-name">Praxis am Markt</span>
          <span className="p-logo-sub">Allgemeinmedizin · Eifel</span>
        </div>
        <div className="p-nav-links">
          <a href="#" className="p-nav-link">Leistungen</a>
          <a href="#" className="p-nav-link">Über uns</a>
          <a href="#" className="p-nav-link">Sprechzeiten</a>
          <a href="#" className="p-nav-cta">
            Termin buchen <ArrowRight size={14} />
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="p-hero">
        <div className="p-hero-left">
          <span className="p-eyebrow">Allgemeinmedizin &amp; Prävention</span>

          <h1 className="p-hero-title">
            Ihre Gesundheit in<br/>
            <em>erfahrenen Händen.</em>
          </h1>

          <p className="p-hero-desc">
            Wir nehmen uns die Zeit, die Sie verdienen — für eine gründliche Diagnose, 
            eine ehrliche Beratung und eine Behandlung, der Sie vertrauen können.
          </p>

          <div className="p-hero-actions">
            <a href="#" className="p-btn-primary">
              Termin vereinbaren <ArrowRight size={15} />
            </a>
            <a href="tel:+49000000000" className="p-btn-ghost">
              Jetzt anrufen <Phone size={13} />
            </a>
          </div>

          <div className="p-trust-row">
            {[
              'Alle Kassen & Privat',
              'Kurze Wartezeiten',
              'Barrierefrei zugänglich',
            ].map((t) => (
              <div className="p-trust-item" key={t}>
                <CheckCircle size={14} color="var(--gold)" />
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="p-hero-right">
          <div className="p-hero-visual" />
          <div className="p-hero-img-overlay" />
          <div className="p-hero-deco">
            <div className="p-cross-wrap">
              <div className="p-cross-h" />
              <div className="p-cross-v" />
            </div>
          </div>
          <div className="p-hero-quote">
            <p>„Medizin, die zuhört — Fürsorge, die bleibt."</p>
            <span>Dr. med. Mustermann · Hausarzt seit 2003</span>
          </div>
        </div>
      </section>

      {/* ── STRIP ── */}
      <div className="p-strip">
        {[
          { icon: <Star size={13} />, text: 'Kassenärztlich zugelassen' },
          { icon: <Shield size={13} />, text: 'Datenschutz & Schweigepflicht' },
          { icon: <Heart size={13} />, text: 'Familienfreundliche Praxis' },
        ].map((s) => (
          <div className="p-strip-item" key={s.text}>
            {s.icon} {s.text}
          </div>
        ))}
      </div>

      {/* ── INFOKARTEN ── */}
      <div style={{ background: 'var(--cream)', paddingBottom: '2rem' }}>
        <div className="p-section">
          <div className="p-section-header">
            <div>
              <div className="p-section-label">Kontakt &amp; Erreichbarkeit</div>
              <h2 className="p-section-title">
                Alle wichtigen<br/><em>Informationen</em> auf einen Blick.
              </h2>
            </div>
            <p className="p-section-desc">
              Wir sind für Sie da — ob in der Sprechstunde, telefonisch oder im Notfall. 
              Vereinbaren Sie Ihren Termin jetzt ganz bequem über unser Online-Portal.
            </p>
          </div>

          <div className="p-cards">
            {/* Sprechzeiten */}
            <div className="p-card">
              <div className="p-card-num">01</div>
              <div className="p-card-icon-wrap">
                <Clock size={20} color="var(--gold)" />
              </div>
              <h3>Sprechzeiten</h3>
              <p>
                Montag – Freitag: <strong>08:00 – 12:00 Uhr</strong><br/>
                Mo, Di, Do: <strong>15:00 – 18:00 Uhr</strong><br/><br/>
                Akute Fälle werden nach Vereinbarung auch außerhalb der regulären 
                Sprechzeiten behandelt.
              </p>
            </div>

            {/* Notfall */}
            <div className="p-card">
              <div className="p-card-num">02</div>
              <div className="p-card-icon-wrap">
                <Phone size={20} color="var(--gold)" />
              </div>
              <h3>Notfall &amp; Kontakt</h3>
              <p>
                Außerhalb der Sprechzeiten:<br/>
                <strong>116 117</strong> — Ärztlicher Bereitschaftsdienst<br/>
                <strong>112</strong> — Lebensbedrohliche Notfälle<br/><br/>
                Telefonsprechstunde Mo – Fr: <strong>08:00 – 09:00 Uhr</strong>
              </p>
            </div>

            {/* Anfahrt */}
            <div className="p-card">
              <div className="p-card-num">03</div>
              <div className="p-card-icon-wrap">
                <MapPin size={20} color="var(--gold)" />
              </div>
              <h3>Anfahrt &amp; Lage</h3>
              <p>
                <strong>Hauptstraße 12</strong><br/>
                52159 Roetgen<br/><br/>
                Kostenfreie Parkplätze direkt vor der Praxis. 
                Barrierefreier Eingang vorhanden. Gut erreichbar mit Bus-Linie 83.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="p-footer">
        <div className="p-footer-brand">
          Praxis am Markt · <span>Allgemeinmedizin</span>
        </div>
        <div className="p-footer-note">
          © 2025 · Impressum · Datenschutz
        </div>
      </footer>
    </div>
  );
}