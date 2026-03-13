import { Instagram, MapPin, Star, Heart, Clock, ArrowRight, Coffee } from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Lato:wght@300;400;700&display=swap');

  :root {
    --cream:    #faf6f0;
    --parchment:#f2ece0;
    --warm:     #e8ddd0;
    --espresso: #2c1a0e;
    --bark:     #4a2e1a;
    --terracotta: #c4623a;
    --terra-light: #e08060;
    --sage:     #7a9475;
    --sage-light:#a8c4a2;
    --gold:     #c8963c;
    --text:     #2c1a0e;
    --mid:      #7a6555;
    --border:   rgba(44,26,14,0.1);
  }

  * { margin:0; padding:0; box-sizing:border-box; }

  .lg-root {
    background: var(--cream);
    min-height: 100vh;
    font-family: 'Lato', sans-serif;
    color: var(--text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* ── FLOATING NAV ── */
  .lg-nav-wrap {
    position: fixed;
    top: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    width: min(92%, 680px);
    animation: dropIn 0.7s cubic-bezier(0.16,1,0.3,1) both;
  }

  .lg-nav {
    background: rgba(250,246,240,0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(200,150,60,0.25);
    border-radius: 100px;
    padding: 0.8rem 1rem 0.8rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 8px 40px rgba(44,26,14,0.12), 0 1px 0 rgba(255,255,255,0.8) inset;
  }

  .lg-logo {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .lg-logo-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--espresso);
    line-height: 1;
    letter-spacing: -0.01em;
  }
  .lg-logo-tag {
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--terracotta);
    margin-top: 1px;
  }

  .lg-nav-actions {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }
  .lg-nav-link {
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.04em;
    color: var(--mid);
    text-decoration: none;
    transition: color 0.2s;
  }
  .lg-nav-link:hover { color: var(--espresso); }

  .lg-nav-insta {
    color: var(--mid);
    cursor: pointer;
    transition: color 0.2s;
    display: flex;
  }
  .lg-nav-insta:hover { color: var(--terracotta); }

  .lg-nav-cta {
    background: var(--espresso);
    color: var(--cream);
    text-decoration: none;
    padding: 0.6rem 1.3rem;
    border-radius: 100px;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    transition: all 0.25s;
    white-space: nowrap;
  }
  .lg-nav-cta:hover { background: var(--terracotta); transform: scale(1.03); }

  /* ── HERO ── */
  .lg-hero {
    padding: 9rem 2rem 5rem;
    position: relative;
    overflow: hidden;
    text-align: center;
  }

  /* Warm radial glow */
  .lg-hero-glow {
    position: absolute;
    top: -6rem;
    left: 50%;
    transform: translateX(-50%);
    width: 900px;
    height: 600px;
    background: radial-gradient(ellipse, rgba(200,150,60,0.13) 0%, rgba(196,98,58,0.07) 40%, transparent 70%);
    pointer-events: none;
  }

  /* Organic blob shapes */
  .lg-blob {
    position: absolute;
    border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
    pointer-events: none;
  }
  .lg-blob-1 {
    width: 320px; height: 280px;
    background: rgba(122,148,117,0.08);
    top: 6rem; left: -8rem;
    animation: float 8s ease-in-out infinite;
  }
  .lg-blob-2 {
    width: 240px; height: 260px;
    background: rgba(196,98,58,0.07);
    top: 12rem; right: -6rem;
    animation: float 10s 2s ease-in-out infinite reverse;
    border-radius: 50% 65% 40% 60% / 60% 40% 65% 45%;
  }

  .lg-hero-content {
    position: relative;
    z-index: 2;
    animation: riseUp 0.9s 0.2s cubic-bezier(0.16,1,0.3,1) both;
  }

  .lg-award {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: white;
    border: 1px solid rgba(200,150,60,0.3);
    padding: 0.45rem 1rem;
    border-radius: 100px;
    margin-bottom: 2.5rem;
    box-shadow: 0 2px 12px rgba(44,26,14,0.07);
  }
  .lg-award span {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--espresso);
  }
  .lg-award-stars {
    display: flex;
    gap: 1px;
  }

  .lg-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(3.2rem, 7vw, 6.5rem);
    font-weight: 400;
    color: var(--espresso);
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin-bottom: 1.75rem;
  }
  .lg-hero-title em {
    font-style: italic;
    color: var(--terracotta);
    display: block;
  }

  .lg-hero-tagline {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.75rem;
  }
  .lg-tagline-line { width: 40px; height: 1px; background: var(--warm); }
  .lg-tagline-text {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--mid);
  }

  .lg-hero-desc {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--mid);
    font-weight: 300;
    max-width: 500px;
    margin: 0 auto 3rem;
  }

  .lg-hero-cta-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin-bottom: 4rem;
  }

  .lg-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--terracotta);
    color: white;
    text-decoration: none;
    padding: 0.95rem 2rem;
    border-radius: 100px;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    transition: all 0.25s;
    box-shadow: 0 6px 24px rgba(196,98,58,0.3);
    cursor: pointer;
    border: none;
  }
  .lg-btn-primary:hover {
    background: var(--bark);
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(196,98,58,0.35);
  }

  .lg-btn-ghost {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.82rem;
    font-weight: 400;
    color: var(--mid);
    text-decoration: none;
    border-bottom: 1px solid var(--warm);
    padding-bottom: 2px;
    transition: all 0.2s;
  }
  .lg-btn-ghost:hover { color: var(--espresso); border-color: var(--espresso); }

  /* ── MOSAIC GRID ── */
  .lg-mosaic {
    max-width: 960px;
    margin: 0 auto 2rem;
    padding: 0 1.5rem;
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr;
    grid-template-rows: 220px 180px;
    gap: 12px;
    animation: riseUp 0.8s 0.4s cubic-bezier(0.16,1,0.3,1) both;
  }

  .lg-tile {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s;
  }
  .lg-tile:hover { transform: scale(1.025); box-shadow: 0 16px 48px rgba(44,26,14,0.18); }
  .lg-tile:nth-child(1) { grid-row: 1 / 3; border-radius: 24px; }
  .lg-tile:nth-child(4) { grid-column: 2 / 4; }

  .lg-tile-inner {
    width: 100%; height: 100%;
    display: flex;
    align-items: flex-end;
    padding: 1.25rem;
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 0.88rem;
    color: rgba(255,255,255,0.85);
    font-weight: 400;
    letter-spacing: 0.01em;
  }

  .lg-tile-1 { background: linear-gradient(160deg, #b5734a 0%, #7a4a2a 60%, #4a2c18 100%); }
  .lg-tile-2 { background: linear-gradient(140deg, #8daa88 0%, #5a7a55 100%); }
  .lg-tile-3 { background: linear-gradient(140deg, #c4845a 0%, #904a28 100%); }
  .lg-tile-4 { background: linear-gradient(100deg, #d4a860 0%, #a87838 60%, #6a4820 100%); }

  /* Grain overlay on tiles */
  .lg-tile-inner::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E");
    opacity: 0.4;
    pointer-events: none;
  }

  .lg-tile-label {
    position: relative;
    z-index: 1;
    background: rgba(0,0,0,0.2);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    padding: 0.35rem 0.8rem;
    border-radius: 100px;
    border: 1px solid rgba(255,255,255,0.15);
  }

  /* Floating icons (replaced the original rotating squares) */
  .lg-floating-icons {
    display: flex;
    justify-content: center;
    gap: 1.25rem;
    margin-top: 1rem;
    margin-bottom: 4.5rem;
  }
  .lg-icon-pip {
    width: 52px; height: 52px;
    background: white;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 16px rgba(44,26,14,0.1);
    border: 1px solid rgba(44,26,14,0.06);
    transition: transform 0.3s;
  }
  .lg-icon-pip:nth-child(1) { transform: rotate(3deg); }
  .lg-icon-pip:nth-child(2) { transform: rotate(-5deg) translateY(-6px); }
  .lg-icon-pip:nth-child(3) { transform: rotate(8deg); }
  .lg-icon-pip:hover { transform: rotate(0deg) scale(1.1) translateY(-4px) !important; }

  /* ── FEATURES STRIP ── */
  .lg-features {
    background: var(--espresso);
    padding: 3rem 2rem;
    display: flex;
    justify-content: center;
    gap: 0;
    flex-wrap: wrap;
  }

  .lg-feature {
    padding: 1.25rem 3rem;
    text-align: center;
    border-right: 1px solid rgba(255,255,255,0.08);
    flex: 1;
    min-width: 180px;
    max-width: 260px;
    transition: background 0.2s;
  }
  .lg-feature:last-child { border-right: none; }
  .lg-feature:hover { background: rgba(255,255,255,0.04); }

  .lg-feature-icon {
    width: 40px; height: 40px;
    background: rgba(200,150,60,0.12);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    border: 1px solid rgba(200,150,60,0.2);
  }
  .lg-feature-title {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.4rem;
    letter-spacing: 0.01em;
  }
  .lg-feature-desc {
    font-size: 0.78rem;
    font-weight: 300;
    color: rgba(255,255,255,0.4);
    line-height: 1.6;
    letter-spacing: 0.02em;
  }

  /* ── INFO ── */
  .lg-info {
    padding: 5rem 2rem;
    max-width: 860px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .lg-info-label {
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--terracotta);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  .lg-info-label::before { content: ''; width: 20px; height: 1px; background: var(--terracotta); }

  .lg-info-title {
    font-family: 'Playfair Display', serif;
    font-size: 2.4rem;
    font-weight: 400;
    color: var(--espresso);
    line-height: 1.15;
    letter-spacing: -0.01em;
    margin-bottom: 1.25rem;
  }
  .lg-info-title em { font-style: italic; color: var(--terracotta); }

  .lg-info-text {
    font-size: 0.92rem;
    line-height: 1.85;
    color: var(--mid);
    font-weight: 300;
    margin-bottom: 2rem;
  }

  .lg-hours-card {
    background: white;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 4px 32px rgba(44,26,14,0.07);
    border: 1px solid var(--parchment);
  }
  .lg-hours-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--espresso);
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .lg-hours-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.55rem 0;
    border-bottom: 1px solid var(--parchment);
    font-size: 0.85rem;
  }
  .lg-hours-row:last-child { border-bottom: none; }
  .lg-hours-day { font-weight: 400; color: var(--mid); }
  .lg-hours-time { font-weight: 700; color: var(--espresso); font-size: 0.82rem; }
  .lg-hours-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--sage);
    animation: pulse 2.5s infinite;
    display: inline-block;
    margin-right: 0.5rem;
  }
  .lg-address-row {
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    margin-top: 1.25rem;
    font-size: 0.82rem;
    color: var(--mid);
    font-weight: 300;
    line-height: 1.5;
  }

  /* ── FOOTER ── */
  .lg-footer {
    background: var(--parchment);
    border-top: 1px solid var(--warm);
    padding: 2.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .lg-footer-brand {
    font-family: 'Playfair Display', serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--espresso);
  }
  .lg-footer-brand em { font-style: italic; color: var(--terracotta); }
  .lg-footer-note {
    font-size: 0.75rem;
    color: var(--mid);
    font-weight: 300;
    letter-spacing: 0.04em;
  }

  /* ── ANIMATIONS ── */
  @keyframes dropIn {
    from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
  }
  @keyframes riseUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50%       { transform: translateY(-18px) rotate(3deg); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.3; }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 720px) {
    .lg-mosaic {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 180px 180px 160px;
    }
    .lg-tile:nth-child(1) { grid-column: 1/3; grid-row: 1; border-radius: 20px; }
    .lg-tile:nth-child(4) { grid-column: 1/3; }
    .lg-info { grid-template-columns: 1fr; gap: 2rem; }
    .lg-hero { padding-top: 8rem; }
    .lg-nav-link { display: none; }
    .lg-footer { flex-direction: column; text-align: center; }
  }
`;

export default function LokalDemo() {
  return (
    <div className="lg-root">
      <style>{styles}</style>

      {/* ── FLOATING NAV ── */}
      <div className="lg-nav-wrap">
        <nav className="lg-nav">
          <div className="lg-logo">
            <span className="lg-logo-name">LokalGenuss</span>
            <span className="lg-logo-tag">Café · Bistro · Aachen</span>
          </div>
          <div className="lg-nav-actions">
            <a href="#" className="lg-nav-link">Speisekarte</a>
            <a href="#" className="lg-nav-link">Über uns</a>
            <a href="#" className="lg-nav-insta"><Instagram size={16} /></a>
            <a href="#" className="lg-nav-cta">Reservieren</a>
          </div>
        </nav>
      </div>

      {/* ── HERO ── */}
      <header className="lg-hero">
        <div className="lg-hero-glow" />
        <div className="lg-blob lg-blob-1" />
        <div className="lg-blob lg-blob-2" />

        <div className="lg-hero-content">
          <div className="lg-award">
            <div className="lg-award-stars">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={11} fill="#c8963c" color="#c8963c" />
              ))}
            </div>
            <span>Bester Service Aachen 2025</span>
          </div>

          <div className="lg-hero-tagline">
            <div className="lg-tagline-line" />
            <span className="lg-tagline-text">Frisch · Hausgemacht · Herzlich</span>
            <div className="lg-tagline-line" />
          </div>

          <h1 className="lg-hero-title">
            Dein neuer
            <em>Lieblingsort.</em>
          </h1>

          <p className="lg-hero-desc">
            Frischer Kaffee, hausgemachte Bowls und die beste Stimmung in der Stadt. 
            Komm vorbei — und fühl dich wie zuhause.
          </p>

          <div className="lg-hero-cta-wrap">
            <button className="lg-btn-primary">
              Tisch reservieren <ArrowRight size={15} />
            </button>
            <a href="#info" className="lg-btn-ghost">
              Öffnungszeiten ansehen
            </a>
          </div>
        </div>

        {/* Icon pips */}
        <div className="lg-floating-icons">
          <div className="lg-icon-pip"><Heart size={20} color="#c4623a" /></div>
          <div className="lg-icon-pip"><Coffee size={20} color="#7a9475" /></div>
          <div className="lg-icon-pip"><MapPin size={20} color="#c8963c" /></div>
        </div>

        {/* MOSAIC */}
        <div className="lg-mosaic">
          <div className="lg-tile lg-tile-1">
            <div className="lg-tile-inner"><span className="lg-tile-label">Handgefertigter Espresso</span></div>
          </div>
          <div className="lg-tile lg-tile-2">
            <div className="lg-tile-inner"><span className="lg-tile-label">Saisonale Bowls</span></div>
          </div>
          <div className="lg-tile lg-tile-3">
            <div className="lg-tile-inner"><span className="lg-tile-label">Vegane Auswahl</span></div>
          </div>
          <div className="lg-tile lg-tile-4">
            <div className="lg-tile-inner"><span className="lg-tile-label">Hausgebäck täglich frisch</span></div>
          </div>
        </div>
      </header>

      {/* ── FEATURES STRIP ── */}
      <div className="lg-features">
        {[
          { icon: <Coffee size={18} color="#c8963c" />, title: 'Specialty Coffee', desc: 'Direkt vom Röster, täglich frisch gemahlen.' },
          { icon: <Heart size={18} color="#c8963c" />, title: 'Hausgemacht', desc: 'Alles aus eigener Küche – ohne Kompromisse.' },
          { icon: <Star size={18} color="#c8963c" />, title: '5-Sterne-Bewertung', desc: 'Über 400 begeisterte Gäste auf Google.' },
          { icon: <MapPin size={18} color="#c8963c" />, title: 'Aachen Altstadt', desc: 'Zentral gelegen, gut zu Fuß erreichbar.' },
        ].map((f) => (
          <div className="lg-feature" key={f.title}>
            <div className="lg-feature-icon">{f.icon}</div>
            <div className="lg-feature-title">{f.title}</div>
            <div className="lg-feature-desc">{f.desc}</div>
          </div>
        ))}
      </div>

      {/* ── INFO ── */}
      <div id="info">
        <div className="lg-info">
          <div>
            <div className="lg-info-label">Besuch uns</div>
            <h2 className="lg-info-title">Ein Ort zum<br/><em>Verweilen.</em></h2>
            <p className="lg-info-text">
              Ob kurzer Morgenkaffee, ausgedehntes Mittagessen oder gemütlicher 
              Nachmittag mit Freunden — bei uns bist du immer willkommen. 
              Frisch, saisonal, mit Liebe zubereitet.
            </p>
            <a href="#" className="lg-btn-primary" style={{fontSize: '0.82rem', display:'inline-flex'}}>
              Zur Speisekarte <ArrowRight size={14} />
            </a>
          </div>
          <div className="lg-hours-card">
            <div className="lg-hours-title">
              <Clock size={16} color="var(--terracotta)" />
              Öffnungszeiten
            </div>
            {[
              { day: 'Montag', time: 'Geschlossen' },
              { day: 'Di – Fr', time: '09:00 – 20:00', open: true },
              { day: 'Samstag', time: '09:00 – 22:00', open: true },
              { day: 'Sonntag', time: '10:00 – 18:00', open: true },
            ].map((h) => (
              <div className="lg-hours-row" key={h.day}>
                <span className="lg-hours-day">{h.day}</span>
                <span className="lg-hours-time">
                  {h.open && <span className="lg-hours-dot" />}
                  {h.time}
                </span>
              </div>
            ))}
            <div className="lg-address-row">
              <MapPin size={14} color="var(--terracotta)" style={{flexShrink: 0, marginTop: 1}} />
              <span>Altstadtring 4, 52062 Aachen<br/>Parkhaus 200m, Bus direkt vor der Tür</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="lg-footer">
        <div className="lg-footer-brand">LokalGenuss — <em>Café & Bistro</em></div>
        <div className="lg-footer-note">© 2025 · Impressum · Datenschutz · Instagram</div>
      </footer>
    </div>
  );
}