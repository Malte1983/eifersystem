import React from 'react';
import {
  Instagram,
  MapPin,
  Star,
  Heart,
  Clock,
  ArrowRight,
  Coffee,
  Phone,
  UtensilsCrossed,
  Leaf,
  Sparkles,
  CalendarDays,
} from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800&display=swap');

  :root {
    --bg: #f6f1e8;
    --surface: #fffaf3;
    --surface-strong: #f1e7d8;
    --surface-dark: #1e2a28;
    --green: #2f5d50;
    --green-deep: #203d35;
    --sage: #7f9a86;
    --sand: #d8b98d;
    --peach: #d9896a;
    --berry: #8f4f4d;
    --text: #1f2422;
    --muted: #66706b;
    --line: rgba(31, 36, 34, 0.1);
    --white: #ffffff;
    --shadow-soft: 0 18px 50px rgba(31, 36, 34, 0.08);
    --shadow-card: 0 24px 70px rgba(31, 36, 34, 0.12);
    --radius-xl: 34px;
    --radius-lg: 24px;
    --radius-md: 18px;
    --container: 1240px;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }

  .lg-root {
    min-height: 100vh;
    background:
      radial-gradient(circle at top left, rgba(216, 185, 141, 0.25), transparent 28%),
      linear-gradient(180deg, #fbf7f1 0%, var(--bg) 100%);
    font-family: 'Inter', sans-serif;
    color: var(--text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  .lg-container {
    width: min(var(--container), calc(100% - 40px));
    margin: 0 auto;
  }

  .lg-header {
    position: sticky;
    top: 0;
    z-index: 60;
    backdrop-filter: blur(16px);
    background: rgba(246, 241, 232, 0.82);
    border-bottom: 1px solid rgba(31, 36, 34, 0.06);
  }

  .lg-header-inner {
    min-height: 82px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  .lg-logo-name {
    font-family: 'Instrument Serif', serif;
    font-size: 2rem;
    line-height: 0.95;
    color: var(--green-deep);
    letter-spacing: -0.03em;
  }

  .lg-logo-tag {
    margin-top: 6px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--berry);
  }

  .lg-nav-actions {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .lg-nav-link,
  .lg-nav-insta {
    text-decoration: none;
    color: var(--muted);
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.2s ease, transform 0.2s ease;
  }

  .lg-nav-link:hover,
  .lg-nav-insta:hover {
    color: var(--green-deep);
    transform: translateY(-1px);
  }

  .lg-nav-cta,
  .lg-btn-primary,
  .lg-btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: transform 0.22s ease, background 0.22s ease, color 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
  }

  .lg-nav-cta {
    background: var(--green-deep);
    color: white;
    padding: 14px 20px;
    border-radius: 999px;
    font-size: 0.86rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .lg-nav-cta:hover {
    background: var(--berry);
    transform: translateY(-1px);
  }

  .lg-hero {
    position: relative;
    padding: 52px 0 40px;
    overflow: hidden;
  }

  .lg-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 15% 20%, rgba(127, 154, 134, 0.16), transparent 20%),
      radial-gradient(circle at 80% 10%, rgba(217, 137, 106, 0.12), transparent 22%);
    pointer-events: none;
  }

  .lg-hero-grid {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 0.96fr 1.04fr;
    gap: 34px;
    align-items: center;
    min-height: 760px;
  }

  .lg-hero-copy {
    padding: 24px 0;
  }

  .lg-award {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: rgba(255, 250, 243, 0.85);
    border: 1px solid rgba(47, 93, 80, 0.14);
    box-shadow: var(--shadow-soft);
    border-radius: 999px;
    padding: 10px 16px;
    margin-bottom: 22px;
  }

  .lg-award span {
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--green-deep);
  }

  .lg-award-stars {
    display: inline-flex;
    gap: 2px;
  }

  .lg-hero-tagline {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 24px;
  }

  .lg-tagline-line {
    width: 42px;
    height: 1px;
    background: rgba(47, 93, 80, 0.24);
  }

  .lg-tagline-text {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--sage);
  }

  .lg-hero-title {
    font-family: 'Instrument Serif', serif;
    font-size: clamp(3.8rem, 7vw, 7rem);
    line-height: 0.9;
    letter-spacing: -0.05em;
    color: var(--green-deep);
    margin-bottom: 20px;
  }

  .lg-hero-title em {
    display: block;
    font-style: italic;
    color: var(--berry);
  }

  .lg-hero-desc {
    max-width: 590px;
    font-size: 1.08rem;
    line-height: 1.9;
    color: var(--muted);
    margin-bottom: 30px;
  }

  .lg-hero-cta-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-bottom: 26px;
  }

  .lg-btn-primary {
    background: var(--green-deep);
    color: white;
    padding: 16px 24px;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    box-shadow: 0 16px 40px rgba(32, 61, 53, 0.18);
  }

  .lg-btn-primary:hover {
    transform: translateY(-2px);
    background: var(--berry);
  }

  .lg-btn-secondary {
    background: transparent;
    color: var(--green-deep);
    border: 1px solid rgba(47, 93, 80, 0.18);
    padding: 16px 22px;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.04em;
  }

  .lg-btn-secondary:hover {
    transform: translateY(-2px);
    border-color: var(--berry);
    color: var(--berry);
    background: rgba(255,255,255,0.5);
  }

  .lg-hero-points {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }

  .lg-hero-point {
    padding: 18px;
    background: rgba(255, 250, 243, 0.8);
    border: 1px solid rgba(31, 36, 34, 0.06);
    border-radius: 20px;
    box-shadow: 0 10px 24px rgba(31, 36, 34, 0.04);
  }

  .lg-hero-point-label {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--berry);
  }

  .lg-hero-point p {
    font-size: 0.96rem;
    line-height: 1.6;
    color: var(--green-deep);
  }

  .lg-hero-visual {
    display: grid;
    grid-template-columns: 1fr 0.86fr;
    gap: 18px;
    align-items: stretch;
  }

  .lg-photo-main,
  .lg-photo-small,
  .lg-visual-card {
    overflow: hidden;
    border-radius: var(--radius-xl);
    background: var(--surface);
    border: 1px solid rgba(31, 36, 34, 0.08);
    box-shadow: var(--shadow-card);
  }

  .lg-photo-main {
    min-height: 620px;
  }

  .lg-photo-stack {
    display: grid;
    gap: 18px;
  }

  .lg-photo-small {
    min-height: 260px;
  }

  .lg-photo-main img,
  .lg-photo-small img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .lg-visual-card {
    padding: 24px;
    background: linear-gradient(180deg, var(--surface) 0%, #f3eadf 100%);
  }

  .lg-visual-card-label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    font-size: 0.74rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--berry);
  }

  .lg-visual-card h3 {
    font-family: 'Instrument Serif', serif;
    font-size: 1.8rem;
    line-height: 1;
    color: var(--green-deep);
    margin-bottom: 12px;
  }

  .lg-visual-card p {
    font-size: 1rem;
    line-height: 1.75;
    color: var(--muted);
  }

  .lg-strip {
    padding: 0 0 88px;
  }

  .lg-strip-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
  }

  .lg-strip-card {
    background: var(--surface-dark);
    color: white;
    border-radius: 24px;
    padding: 26px 22px;
    box-shadow: var(--shadow-soft);
  }

  .lg-strip-icon {
    width: 46px;
    height: 46px;
    border-radius: 14px;
    background: rgba(255,255,255,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }

  .lg-strip-card h3 {
    font-family: 'Instrument Serif', serif;
    font-size: 1.28rem;
    line-height: 1.05;
    margin-bottom: 8px;
  }

  .lg-strip-card p {
    font-size: 0.95rem;
    line-height: 1.7;
    color: rgba(255,255,255,0.72);
  }

  .lg-section {
    padding: 0 0 96px;
  }

  .lg-info {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 28px;
    align-items: start;
  }

  .lg-info-copy,
  .lg-hours-card,
  .lg-menu-card,
  .lg-quote-card {
    background: rgba(255, 250, 243, 0.9);
    border: 1px solid rgba(31, 36, 34, 0.07);
    box-shadow: var(--shadow-soft);
    border-radius: 28px;
  }

  .lg-info-copy {
    padding: 34px;
  }

  .lg-info-label {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--berry);
  }

  .lg-info-label::before {
    content: '';
    width: 28px;
    height: 1px;
    background: rgba(143, 79, 77, 0.65);
  }

  .lg-info-title {
    font-family: 'Instrument Serif', serif;
    font-size: clamp(2.4rem, 4vw, 4rem);
    line-height: 0.95;
    letter-spacing: -0.04em;
    color: var(--green-deep);
    margin-bottom: 16px;
  }

  .lg-info-title em {
    display: block;
    color: var(--berry);
    font-style: italic;
  }

  .lg-info-text {
    font-size: 1rem;
    line-height: 1.9;
    color: var(--muted);
    margin-bottom: 24px;
  }

  .lg-info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .lg-hours-card,
  .lg-menu-card,
  .lg-quote-card {
    padding: 28px;
  }

  .lg-card-title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Instrument Serif', serif;
    font-size: 1.35rem;
    color: var(--green-deep);
    margin-bottom: 16px;
  }

  .lg-hours-row,
  .lg-menu-row {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 12px 0;
    border-bottom: 1px solid rgba(31, 36, 34, 0.08);
  }

  .lg-hours-row:last-child,
  .lg-menu-row:last-child { border-bottom: none; }

  .lg-hours-day,
  .lg-menu-name {
    color: var(--muted);
    font-size: 0.96rem;
  }

  .lg-hours-time,
  .lg-menu-price {
    color: var(--green-deep);
    font-size: 0.95rem;
    font-weight: 700;
    text-align: right;
  }

  .lg-hours-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--green);
    display: inline-block;
    margin-right: 8px;
    box-shadow: 0 0 0 6px rgba(47, 93, 80, 0.08);
  }

  .lg-address-row,
  .lg-contact-row {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-top: 16px;
    color: var(--muted);
    line-height: 1.65;
    font-size: 0.95rem;
  }

  .lg-quote-card {
    background: linear-gradient(180deg, var(--green-deep) 0%, var(--green) 100%);
    color: white;
  }

  .lg-quote-card p {
    font-family: 'Instrument Serif', serif;
    font-size: 1.7rem;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }

  .lg-quote-card span {
    font-size: 0.8rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.72);
  }

  .lg-footer {
    background: var(--green-deep);
    color: rgba(255,255,255,0.72);
    margin-top: 14px;
  }

  .lg-footer-inner {
    min-height: 86px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
  }

  .lg-footer-brand {
    font-family: 'Instrument Serif', serif;
    font-size: 1.2rem;
    color: white;
  }

  .lg-footer-brand em {
    color: #f1c4b3;
    font-style: italic;
  }

  @media (max-width: 1180px) {
    .lg-hero-grid,
    .lg-info {
      grid-template-columns: 1fr;
    }

    .lg-strip-grid,
    .lg-info-grid,
    .lg-hero-points {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 760px) {
    .lg-container { width: min(var(--container), calc(100% - 24px)); }
    .lg-nav-link { display: none; }
    .lg-header-inner { min-height: 74px; }
    .lg-logo-name { font-size: 1.65rem; }
    .lg-nav-actions { gap: 14px; }
    .lg-hero { padding: 28px 0 26px; }
    .lg-hero-grid { min-height: auto; gap: 22px; }
    .lg-hero-title { font-size: clamp(3rem, 16vw, 4.8rem); }
    .lg-hero-desc { font-size: 1rem; }
    .lg-hero-points,
    .lg-hero-visual,
    .lg-strip-grid,
    .lg-info-grid {
      grid-template-columns: 1fr;
    }
    .lg-photo-main { min-height: 340px; }
    .lg-photo-small { min-height: 220px; }
    .lg-info-copy,
    .lg-hours-card,
    .lg-menu-card,
    .lg-quote-card { padding: 22px; }
    .lg-footer-inner { justify-content: flex-start; }
  }
`;

const heroPoints = [
  'Specialty Coffee und hausgemachte Küche',
  'Stimmiges Interior statt generischer Café-Demo',
  'Reservierung, Karte und Öffnungszeiten sofort sichtbar',
];

const stripItems = [
  {
    icon: <Coffee size={20} color="#d8b98d" />,
    title: 'Specialty Coffee',
    desc: 'Direkt vom Röster, präzise zubereitet und geschmacklich klar positioniert.',
  },
  {
    icon: <Heart size={20} color="#d8b98d" />,
    title: 'Hausgemacht',
    desc: 'Bowls, Brunch und Gebäck mit echtem Küchencharakter statt austauschbarer Standardware.',
  },
  {
    icon: <Leaf size={20} color="#d8b98d" />,
    title: 'Saisonal & modern',
    desc: 'Zeitgemäße Karte mit vegetarischen und veganen Optionen für ein urbanes Publikum.',
  },
  {
    icon: <MapPin size={20} color="#d8b98d" />,
    title: 'Mitten in Aachen',
    desc: 'Zentrale Lage, hohe Sichtbarkeit und ein Auftritt, der nach echtem Lieblingsort aussieht.',
  },
];

const menuItems = [
  { name: 'Flat White', price: '4,20 €' },
  { name: 'House Bowl', price: '12,90 €' },
  { name: 'Pistazien-Croissant', price: '4,80 €' },
  { name: 'Avocado Sourdough', price: '11,50 €' },
];

const hours = [
  { day: 'Montag', time: 'Geschlossen' },
  { day: 'Di – Fr', time: '09:00 – 20:00', open: true },
  { day: 'Samstag', time: '09:00 – 22:00', open: true },
  { day: 'Sonntag', time: '10:00 – 18:00', open: true },
];

export default function LokalPremium() {
  return (
    <div className="lg-root">
      <style>{styles}</style>

      <header className="lg-header">
        <div className="lg-container lg-header-inner">
          <div>
            <div className="lg-logo-name">LokalGenuss</div>
            <div className="lg-logo-tag">Café · Brunch · Aachen</div>
          </div>

          <div className="lg-nav-actions">
            <a href="#karte" className="lg-nav-link">Speisekarte</a>
            <a href="#besuch" className="lg-nav-link">Besuch</a>
            <a href="#kontakt" className="lg-nav-link">Kontakt</a>
            <a href="#" className="lg-nav-insta"><Instagram size={18} /></a>
            <a href="#kontakt" className="lg-nav-cta">Reservieren</a>
          </div>
        </div>
      </header>

      <section className="lg-hero">
        <div className="lg-container lg-hero-grid">
          <div className="lg-hero-copy">
            <div className="lg-award">
              <div className="lg-award-stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={12} fill="#d9896a" color="#d9896a" />
                ))}
              </div>
              <span>Beliebt für Brunch, Kaffee & Atmosphäre</span>
            </div>

            <div className="lg-hero-tagline">
              <div className="lg-tagline-line" />
              <span className="lg-tagline-text">Frisch · Stilvoll · Stadtnah</span>
              <div className="lg-tagline-line" />
            </div>

            <h1 className="lg-hero-title">
              Ein Café, das sich
              <em>nach Lieblingsort</em>
              anfühlt.
            </h1>

            <p className="lg-hero-desc">
              Specialty Coffee, moderne Brunch-Gerichte und ein Look, der deutlich hochwertiger, urbaner und stimmiger wirkt als die ursprüngliche warme Braun-Optik.
              Diese Version setzt auf ein frisches, elegantes Farbkonzept mit Grün, Sand und soften Rosé-Tönen statt auf schwere Café-Klischees.
            </p>

            <div className="lg-hero-cta-wrap">
              <a href="#kontakt" className="lg-btn-primary">
                Tisch reservieren <ArrowRight size={16} />
              </a>
              <a href="#besuch" className="lg-btn-secondary">
                Öffnungszeiten ansehen
              </a>
            </div>

            <div className="lg-hero-points">
              {heroPoints.map((item) => (
                <div className="lg-hero-point" key={item}>
                  <div className="lg-hero-point-label"><Sparkles size={14} /> Highlight</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg-hero-visual">
            <div className="lg-photo-main">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80"
                alt="Modernes Café-Interior mit Kaffee und Gästen"
              />
            </div>

            <div className="lg-photo-stack">
              <div className="lg-photo-small">
                <img
                  src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80"
                  alt="Kaffee und frisches Gebäck auf stilvollem Tisch"
                />
              </div>

              <div className="lg-visual-card">
                <div className="lg-visual-card-label"><UtensilsCrossed size={14} /> Neu gedacht</div>
                <h3>Frischer. Eleganter. Urbaner.</h3>
                <p>
                  Statt Braun, Gold und rustikaler Schwere arbeitet dieses Redesign mit einem moderneren Boutique-Café-Gefühl — heller, designstärker und viel besser für ein junges Stadtpublikum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg-strip">
        <div className="lg-container lg-strip-grid">
          {stripItems.map((item) => (
            <div className="lg-strip-card" key={item.title}>
              <div className="lg-strip-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lg-section" id="besuch">
        <div className="lg-container lg-info">
          <div className="lg-info-copy">
            <div className="lg-info-label">Besuch uns</div>
            <h2 className="lg-info-title">
              Brunch, Kaffee und
              <em>echte Aufenthaltsqualität.</em>
            </h2>
            <p className="lg-info-text">
              Diese Version fühlt sich eher nach einem modernen Lieblingscafé an: ruhigere Farben, edlere Typografie, größere Bildwirkung und klarere Informationsblöcke.
              Dadurch wirkt die Seite hochwertiger und weniger wie eine generische Gastro-Demo.
            </p>
            <a href="#karte" className="lg-btn-primary" style={{ width: 'fit-content' }}>
              Zur Speisekarte <ArrowRight size={15} />
            </a>
          </div>

          <div className="lg-info-grid">
            <div className="lg-hours-card">
              <div className="lg-card-title">
                <Clock size={18} color="#8f4f4d" /> Öffnungszeiten
              </div>
              {hours.map((item) => (
                <div className="lg-hours-row" key={item.day}>
                  <span className="lg-hours-day">{item.day}</span>
                  <span className="lg-hours-time">
                    {item.open && <span className="lg-hours-dot" />}
                    {item.time}
                  </span>
                </div>
              ))}
              <div className="lg-address-row">
                <MapPin size={16} color="#8f4f4d" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>Altstadtring 4, 52062 Aachen<br />Parkhaus 200 m entfernt, ÖPNV direkt in der Nähe</span>
              </div>
            </div>

            <div className="lg-menu-card" id="karte">
              <div className="lg-card-title">
                <Coffee size={18} color="#8f4f4d" /> Favoriten der Karte
              </div>
              {menuItems.map((item) => (
                <div className="lg-menu-row" key={item.name}>
                  <span className="lg-menu-name">{item.name}</span>
                  <span className="lg-menu-price">{item.price}</span>
                </div>
              ))}
              <div className="lg-contact-row">
                <CalendarDays size={16} color="#8f4f4d" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>Reservierungen für Brunch und größere Gruppen bitte vorab anfragen.</span>
              </div>
            </div>

            <div className="lg-quote-card">
              <p>„Genau der Ort, an den man erst für Kaffee kommt — und dann viel länger bleibt als geplant.“</p>
              <span>Lieblingsgast · Aachen</span>
            </div>

            <div className="lg-hours-card" id="kontakt">
              <div className="lg-card-title">
                <Phone size={18} color="#8f4f4d" /> Kontakt
              </div>
              <div className="lg-contact-row">
                <Phone size={16} color="#8f4f4d" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>0241 / 12345678</span>
              </div>
              <div className="lg-contact-row">
                <Instagram size={16} color="#8f4f4d" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>@lokalgenuss.aachen</span>
              </div>
              <div className="lg-contact-row">
                <MapPin size={16} color="#8f4f4d" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>Zentral in Aachen, ideal für Frühstück, Lunch und Nachmittagskaffee.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="lg-footer">
        <div className="lg-container lg-footer-inner">
          <div className="lg-footer-brand">LokalGenuss — <em>Café & Brunch</em></div>
          <div>© 2025 · Impressum · Datenschutz · Instagram</div>
        </div>
      </footer>
    </div>
  );
}
