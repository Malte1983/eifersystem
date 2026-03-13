import React from 'react';
import { Hammer, HardHat, Ruler, ArrowRight, Phone, MapPin, Shield, Award, CheckCircle } from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700;1,900&family=Barlow:wght@300;400;500&display=swap');

  :root {
    --black: #0c0c0c;
    --graphite: #1a1a1a;
    --steel: #2d2d2d;
    --amber: #f5a800;
    --amber-dark: #d48e00;
    --amber-glow: rgba(245, 168, 0, 0.12);
    --light: #f5f3ef;
    --warm-gray: #e8e4de;
    --mid: #7a7672;
    --text: #1a1a1a;
    --border: rgba(245, 168, 0, 0.25);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  .hw-root {
    background: var(--light);
    min-height: 100vh;
    font-family: 'Barlow', sans-serif;
    color: var(--text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* ── TOPBAR ── */
  .hw-topbar {
    background: var(--amber);
    padding: 0.55rem 2rem;
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    align-items: center;
    animation: slideDown 0.5s ease both;
  }
  .hw-topbar span {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--black);
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  .hw-topbar-dot {
    width: 3px;
    height: 3px;
    background: var(--black);
    border-radius: 50%;
    opacity: 0.4;
  }

  /* ── NAV ── */
  .hw-nav {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--black);
    padding: 0 3rem;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation: slideDown 0.5s 0.1s ease both;
    border-bottom: 2px solid var(--steel);
  }

  .hw-logo {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .hw-logo-main {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.85rem;
    font-weight: 900;
    font-style: italic;
    color: white;
    line-height: 1;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
  .hw-logo-main span { color: var(--amber); }
  .hw-logo-sub {
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--mid);
    margin-top: 1px;
  }

  .hw-nav-links {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }
  .hw-nav-link {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.88rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    text-decoration: none;
    transition: color 0.2s;
  }
  .hw-nav-link:hover { color: var(--amber); }

  .hw-nav-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--amber);
    color: var(--black);
    text-decoration: none;
    padding: 0.65rem 1.5rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    transition: all 0.2s;
    clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%);
  }
  .hw-nav-cta:hover { background: white; transform: translateY(-1px); }

  /* ── HERO ── */
  .hw-hero {
    background: var(--black);
    position: relative;
    overflow: hidden;
    min-height: 86vh;
    display: flex;
    align-items: center;
  }

  /* Diagonal texture grid */
  .hw-hero-bg {
    position: absolute;
    inset: 0;
    background-image:
      repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 28px,
        rgba(245,168,0,0.03) 28px,
        rgba(245,168,0,0.03) 29px
      );
  }

  /* Amber slash accent */
  .hw-hero-slash {
    position: absolute;
    top: 0;
    right: 0;
    width: 42%;
    height: 100%;
    background: linear-gradient(160deg, rgba(245,168,0,0.07) 0%, transparent 70%);
    clip-path: polygon(18% 0, 100% 0, 100% 100%, 0% 100%);
  }

  /* Big number watermark */
  .hw-hero-watermark {
    position: absolute;
    right: -2rem;
    bottom: -3rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 22rem;
    font-weight: 900;
    font-style: italic;
    color: rgba(255,255,255,0.025);
    line-height: 1;
    pointer-events: none;
    user-select: none;
  }

  .hw-hero-content {
    position: relative;
    z-index: 2;
    padding: 5rem 5rem 5rem;
    max-width: 900px;
    animation: heroIn 0.9s 0.2s ease both;
  }

  .hw-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    border: 1px solid rgba(245,168,0,0.4);
    padding: 0.4rem 1rem;
    margin-bottom: 2.5rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--amber);
  }
  .hw-hero-badge::before {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    background: var(--amber);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  .hw-hero-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(3.5rem, 7vw, 7rem);
    font-weight: 900;
    font-style: italic;
    text-transform: uppercase;
    color: white;
    line-height: 0.95;
    letter-spacing: -0.01em;
    margin-bottom: 1.5rem;
  }
  .hw-hero-title .accent { color: var(--amber); display: block; }

  .hw-hero-line {
    width: 60px;
    height: 3px;
    background: var(--amber);
    margin-bottom: 1.75rem;
  }

  .hw-hero-desc {
    font-size: 1.1rem;
    line-height: 1.7;
    color: rgba(255,255,255,0.55);
    font-weight: 300;
    max-width: 520px;
    margin-bottom: 3rem;
  }

  .hw-hero-actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .hw-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    background: var(--amber);
    color: var(--black);
    text-decoration: none;
    padding: 1rem 2.25rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: all 0.2s;
    clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%);
    cursor: pointer;
    border: none;
  }
  .hw-btn-primary:hover {
    background: white;
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(245,168,0,0.3);
  }

  .hw-btn-ghost {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    text-decoration: none;
    border-bottom: 1px solid rgba(255,255,255,0.15);
    padding-bottom: 2px;
    transition: all 0.2s;
  }
  .hw-btn-ghost:hover { color: var(--amber); border-color: var(--amber); }

  /* ── STATS BAR ── */
  .hw-stats {
    background: var(--graphite);
    border-top: 1px solid var(--steel);
    border-bottom: 1px solid var(--steel);
    display: flex;
    justify-content: center;
    animation: fadeUp 0.6s 0.5s ease both;
  }
  .hw-stat {
    padding: 1.75rem 3.5rem;
    text-align: center;
    border-right: 1px solid var(--steel);
    flex: 1;
    max-width: 220px;
    transition: background 0.2s;
  }
  .hw-stat:hover { background: rgba(245,168,0,0.05); }
  .hw-stat:last-child { border-right: none; }
  .hw-stat-num {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 2.25rem;
    font-weight: 900;
    font-style: italic;
    color: var(--amber);
    line-height: 1;
    display: block;
  }
  .hw-stat-label {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.35);
    margin-top: 0.3rem;
    display: block;
  }

  /* ── LEISTUNGEN ── */
  .hw-section {
    padding: 6rem 5rem;
    max-width: 1300px;
    margin: 0 auto;
  }

  .hw-section-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 3.5rem;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .hw-label {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--amber);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.85rem;
  }
  .hw-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--amber);
    width: 24px;
    display: block;
  }

  .hw-section-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(2.2rem, 3.5vw, 3.2rem);
    font-weight: 900;
    font-style: italic;
    text-transform: uppercase;
    color: var(--black);
    line-height: 1;
    letter-spacing: -0.01em;
  }

  .hw-section-desc {
    font-size: 0.92rem;
    line-height: 1.75;
    color: var(--mid);
    font-weight: 300;
    max-width: 380px;
    text-align: right;
  }

  /* ── FEATURE CARDS ── */
  .hw-features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5px;
    background: var(--warm-gray);
    border: 1.5px solid var(--warm-gray);
    overflow: hidden;
  }

  .hw-feature {
    background: white;
    padding: 2.75rem;
    position: relative;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
  }
  .hw-feature::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--amber);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .hw-feature:hover { background: var(--black); }
  .hw-feature:hover .hw-feature-title { color: white; }
  .hw-feature:hover .hw-feature-desc { color: rgba(255,255,255,0.45); }
  .hw-feature:hover .hw-feature-num { color: rgba(245,168,0,0.15); }
  .hw-feature:hover .hw-feature-icon { background: rgba(245,168,0,0.15); color: var(--amber); }
  .hw-feature:hover::after { transform: scaleX(1); }

  .hw-feature-num {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 5rem;
    font-weight: 900;
    font-style: italic;
    color: rgba(0,0,0,0.06);
    line-height: 1;
    position: absolute;
    top: 1.5rem;
    right: 1.75rem;
    transition: color 0.3s;
    pointer-events: none;
  }

  .hw-feature-icon {
    width: 48px;
    height: 48px;
    background: var(--light);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.75rem;
    color: var(--black);
    transition: all 0.3s;
  }

  .hw-feature-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.3rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--black);
    margin-bottom: 0.75rem;
    transition: color 0.3s;
  }

  .hw-feature-desc {
    font-size: 0.88rem;
    line-height: 1.7;
    color: #555;
    font-weight: 300;
    transition: color 0.3s;
  }

  /* ── SOCIAL PROOF ── */
  .hw-proof {
    background: var(--black);
    padding: 2.5rem 5rem;
    display: flex;
    align-items: center;
    gap: 4rem;
    overflow: hidden;
    flex-wrap: wrap;
    justify-content: center;
  }
  .hw-proof-label {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.25);
    white-space: nowrap;
    flex-shrink: 0;
  }
  .hw-proof-divider {
    width: 1px;
    height: 28px;
    background: rgba(255,255,255,0.1);
    flex-shrink: 0;
  }
  .hw-proof-logos {
    display: flex;
    gap: 3.5rem;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
  .hw-proof-logo {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.18);
    transition: color 0.2s;
  }
  .hw-proof-logo:hover { color: rgba(255,255,255,0.5); }

  /* ── CTA BAND ── */
  .hw-cta-band {
    background: var(--amber);
    padding: 4rem 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
  }
  .hw-cta-band::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 18px,
      rgba(0,0,0,0.03) 18px,
      rgba(0,0,0,0.03) 19px
    );
  }
  .hw-cta-content { position: relative; z-index: 1; }
  .hw-cta-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 900;
    font-style: italic;
    text-transform: uppercase;
    color: var(--black);
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  .hw-cta-sub {
    font-size: 0.92rem;
    font-weight: 400;
    color: rgba(0,0,0,0.55);
  }
  .hw-cta-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;
  }
  .hw-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--black);
    color: white;
    text-decoration: none;
    padding: 1rem 2rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.9rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%);
    transition: all 0.2s;
  }
  .hw-cta-btn:hover { background: var(--graphite); transform: translateY(-2px); }
  .hw-cta-phone {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: rgba(0,0,0,0.6);
    text-decoration: none;
    letter-spacing: 0.04em;
  }

  /* ── FOOTER ── */
  .hw-footer {
    background: var(--graphite);
    border-top: 2px solid var(--steel);
    padding: 2rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .hw-footer-logo {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.3rem;
    font-weight: 900;
    font-style: italic;
    text-transform: uppercase;
    color: white;
    letter-spacing: 0.02em;
  }
  .hw-footer-logo span { color: var(--amber); }
  .hw-footer-note {
    font-size: 0.75rem;
    font-weight: 400;
    color: rgba(255,255,255,0.2);
    letter-spacing: 0.06em;
  }

  /* ── ANIMATIONS ── */
  @keyframes slideDown {
    from { transform: translateY(-100%); opacity: 0; }
    to   { transform: translateY(0); opacity: 1; }
  }
  @keyframes heroIn {
    from { opacity: 0; transform: translateX(-30px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 960px) {
    .hw-nav { padding: 0 1.5rem; }
    .hw-nav-links { display: none; }
    .hw-hero-content { padding: 3.5rem 2rem; }
    .hw-section { padding: 4rem 2rem; }
    .hw-features { grid-template-columns: 1fr; gap: 1.5px; }
    .hw-stats { flex-wrap: wrap; }
    .hw-stat { max-width: none; flex-basis: 50%; border-right: none; border-bottom: 1px solid var(--steel); }
    .hw-proof { padding: 2rem; }
    .hw-cta-band { padding: 3rem 2rem; }
    .hw-footer { padding: 2rem; }
    .hw-section-desc { text-align: left; }
  }
`;

export default function HandwerkDemo() {
  return (
    <div className="hw-root">
      <style>{styles}</style>

      {/* ── TOPBAR ── */}
      <div className="hw-topbar">
        <span><Award size={11} /> Meisterbetrieb seit 1998</span>
        <div className="hw-topbar-dot" />
        <span><CheckCircle size={11} /> Termine verfügbar für 2026</span>
        <div className="hw-topbar-dot" />
        <span><MapPin size={11} /> Eifel &amp; Umgebung</span>
      </div>

      {/* ── NAVIGATION ── */}
      <nav className="hw-nav">
        <div className="hw-logo">
          <span className="hw-logo-main">SCHMIDT <span>BAU</span></span>
          <span className="hw-logo-sub">Meisterbetrieb · Eifel</span>
        </div>
        <div className="hw-nav-links">
          <a href="#" className="hw-nav-link">Leistungen</a>
          <a href="#" className="hw-nav-link">Referenzen</a>
          <a href="#" className="hw-nav-link">Über uns</a>
          <a href="#" className="hw-nav-cta">Anfrage stellen <ArrowRight size={14} /></a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header className="hw-hero">
        <div className="hw-hero-bg" />
        <div className="hw-hero-slash" />
        <div className="hw-hero-watermark">98</div>
        <div className="hw-hero-content">
          <div className="hw-hero-badge">Zertifizierter Handwerksbetrieb</div>
          <h1 className="hw-hero-title">
            Ehrliches
            <span className="accent">Handwerk.</span>
          </h1>
          <div className="hw-hero-line" />
          <p className="hw-hero-desc">
            Wir realisieren Ihre Wohnträume in der Eifel — von der Planung 
            bis zum letzten Schliff. Zuverlässig, regional, meisterhaft.
          </p>
          <div className="hw-hero-actions">
            <button className="hw-btn-primary">
              Projekt besprechen <ArrowRight size={16} />
            </button>
            <a href="tel:+49000000000" className="hw-btn-ghost">
              <Phone size={13} /> Jetzt anrufen
            </a>
          </div>
        </div>
      </header>

      {/* ── STATS ── */}
      <div className="hw-stats">
        {[
          { num: '25+', label: 'Jahre Erfahrung' },
          { num: '600+', label: 'Projekte realisiert' },
          { num: '100%', label: 'Festpreisgarantie' },
          { num: '4,9★', label: 'Kundenbewertung' },
        ].map((s) => (
          <div className="hw-stat" key={s.label}>
            <span className="hw-stat-num">{s.num}</span>
            <span className="hw-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── LEISTUNGEN ── */}
      <div style={{ background: 'var(--light)' }}>
        <div className="hw-section">
          <div className="hw-section-header">
            <div>
              <div className="hw-label">Unsere Stärken</div>
              <h2 className="hw-section-title">Was uns<br/>auszeichnet.</h2>
            </div>
            <p className="hw-section-desc">
              Drei Grundprinzipien, die jedes unserer Projekte tragen — 
              von der ersten Skizze bis zur Schlüsselübergabe.
            </p>
          </div>

          <div className="hw-features">
            {[
              {
                num: '01',
                icon: <Hammer size={20} />,
                title: 'Modernste Technik',
                desc: 'Wir setzen auf aktuelle Maschinen und Materialien für maximale Präzision, minimale Bauzeit und dauerhaft hochwertige Ergebnisse bei jedem Vorhaben.',
              },
              {
                num: '02',
                icon: <HardHat size={20} />,
                title: 'Sicherheit & Qualität',
                desc: 'Als zertifizierter Meisterbetrieb unterziehen wir uns regelmäßigen Prüfungen. Jede Leistung entspricht den geltenden Normen — ohne Ausnahme.',
              },
              {
                num: '03',
                icon: <Shield size={20} />,
                title: 'Festpreisgarantie',
                desc: 'Unser Angebot ist Ihr Preis. Keine versteckten Kosten, keine Nachträge ohne Abstimmung. Volle Kostentransparenz von Anfang bis Ende.',
              },
            ].map((f) => (
              <div className="hw-feature" key={f.num}>
                <span className="hw-feature-num">{f.num}</span>
                <div className="hw-feature-icon">{f.icon}</div>
                <div className="hw-feature-title">{f.title}</div>
                <div className="hw-feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PARTNER ── */}
      <div className="hw-proof">
        <span className="hw-proof-label">Partner &amp; Zertifikate</span>
        <div className="hw-proof-divider" />
        <div className="hw-proof-logos">
          {['HAUS & HOF', 'BAUGILDE', 'REGIO-PRO', 'MEISTER-ZERT'].map((l) => (
            <span className="hw-proof-logo" key={l}>{l}</span>
          ))}
        </div>
      </div>

      {/* ── CTA BAND ── */}
      <div className="hw-cta-band">
        <div className="hw-cta-content">
          <h3 className="hw-cta-title">Bereit für Ihr Projekt?</h3>
          <p className="hw-cta-sub">Kostenloses Erstgespräch — unverbindlich und direkt vor Ort.</p>
        </div>
        <div className="hw-cta-actions">
          <a href="#" className="hw-cta-btn">
            Jetzt anfragen <ArrowRight size={15} />
          </a>
          <a href="tel:+49000000000" className="hw-cta-phone">
            <Phone size={16} /> 0 800 / 123 456
          </a>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="hw-footer">
        <div className="hw-footer-logo">SCHMIDT <span>BAU</span></div>
        <span className="hw-footer-note">© 2025 · Impressum · Datenschutz · Meisterbetrieb</span>
      </footer>
    </div>
  );
}