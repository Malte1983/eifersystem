import React from 'react';
import {
  Hammer,
  HardHat,
  Ruler,
  ArrowRight,
  Phone,
  MapPin,
  Shield,
  Award,
  CheckCircle,
  House,
  Wrench,
  Drill,
  Clock3,
  BadgeCheck,
  Mail,
} from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,500;0,700;0,800;0,900;1,700;1,900&family=Inter:wght@300;400;500;600;700;800&display=swap');

  :root {
    --bg: #f4f1eb;
    --surface: #ffffff;
    --surface-soft: #ebe6de;
    --surface-dark: #121212;
    --surface-dark-2: #1b1b1b;
    --text: #141414;
    --muted: #66615a;
    --line: #ddd5ca;
    --amber: #f0a500;
    --amber-dark: #c88500;
    --amber-soft: rgba(240, 165, 0, 0.12);
    --white: #ffffff;
    --shadow: 0 22px 60px rgba(20, 20, 20, 0.12);
    --radius-xl: 30px;
    --radius-lg: 22px;
    --radius-md: 16px;
    --container: 1280px;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }

  .hw-root {
    min-height: 100vh;
    background: var(--bg);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }

  .hw-container {
    width: min(var(--container), calc(100% - 40px));
    margin: 0 auto;
  }

  .hw-topbar {
    background: var(--amber);
    color: var(--text);
    border-bottom: 1px solid rgba(20, 20, 20, 0.08);
  }

  .hw-topbar-inner {
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px;
    flex-wrap: wrap;
    padding: 8px 0;
  }

  .hw-topbar-item {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.84rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .hw-topbar-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(20, 20, 20, 0.45);
  }

  .hw-header {
    position: sticky;
    top: 0;
    z-index: 40;
    background: rgba(18, 18, 18, 0.94);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .hw-header-inner {
    min-height: 82px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  .hw-logo-main {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 2rem;
    font-style: italic;
    font-weight: 900;
    line-height: 0.95;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--white);
  }

  .hw-logo-main span { color: var(--amber); }

  .hw-logo-sub {
    margin-top: 5px;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.45);
  }

  .hw-nav {
    display: flex;
    align-items: center;
    gap: 28px;
  }

  .hw-nav-link {
    text-decoration: none;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.62);
    transition: color 0.2s ease;
  }

  .hw-nav-link:hover { color: var(--amber); }

  .hw-nav-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    background: var(--amber);
    color: var(--text);
    padding: 14px 22px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.92rem;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%);
    transition: transform 0.2s ease, background 0.2s ease;
  }

  .hw-nav-cta:hover {
    background: #ffc446;
    transform: translateY(-1px);
  }

  .hw-hero {
    position: relative;
    background:
      linear-gradient(115deg, rgba(18, 18, 18, 0.94) 0%, rgba(18, 18, 18, 0.88) 48%, rgba(18, 18, 18, 0.52) 100%),
      url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
    color: var(--white);
    overflow: hidden;
  }

  .hw-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 24px,
      rgba(240, 165, 0, 0.04) 24px,
      rgba(240, 165, 0, 0.04) 25px
    );
    pointer-events: none;
  }

  .hw-hero::after {
    content: '';
    position: absolute;
    top: 0;
    right: -120px;
    width: 42%;
    height: 100%;
    background: linear-gradient(180deg, rgba(240, 165, 0, 0.24) 0%, rgba(240, 165, 0, 0.03) 100%);
    transform: skewX(-18deg);
    pointer-events: none;
  }

  .hw-hero-inner {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 1.02fr 0.98fr;
    gap: 42px;
    align-items: center;
    padding: 72px 0 84px;
    min-height: 760px;
  }

  .hw-hero-copy {
    max-width: 760px;
  }

  .hw-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border: 1px solid rgba(240, 165, 0, 0.34);
    background: rgba(240, 165, 0, 0.08);
    color: #ffcc67;
    padding: 10px 16px;
    margin-bottom: 24px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .hw-hero-title {
    margin: 0;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(4rem, 7vw, 7.2rem);
    font-style: italic;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 0.9;
    letter-spacing: -0.03em;
  }

  .hw-hero-title .accent {
    display: block;
    color: var(--amber);
  }

  .hw-hero-line {
    width: 72px;
    height: 4px;
    background: var(--amber);
    margin: 26px 0 24px;
  }

  .hw-hero-desc {
    margin: 0;
    max-width: 610px;
    font-size: 1.16rem;
    line-height: 1.85;
    color: rgba(255, 255, 255, 0.78);
  }

  .hw-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 32px;
  }

  .hw-btn-primary,
  .hw-btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-decoration: none;
    padding: 16px 26px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.96rem;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
  }

  .hw-btn-primary {
    background: var(--amber);
    color: var(--text);
    clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%);
  }

  .hw-btn-primary:hover {
    transform: translateY(-2px);
    background: #ffc446;
  }

  .hw-btn-secondary {
    color: var(--white);
    border: 1px solid rgba(255, 255, 255, 0.22);
    background: rgba(255, 255, 255, 0.04);
  }

  .hw-btn-secondary:hover {
    transform: translateY(-2px);
    color: var(--amber);
    border-color: rgba(240, 165, 0, 0.5);
  }

  .hw-hero-points {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    margin-top: 28px;
  }

  .hw-hero-point {
    padding: 18px 18px 16px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 18px;
  }

  .hw-hero-point-label {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #ffcc67;
  }

  .hw-hero-point p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.9);
  }

  .hw-hero-side {
    display: grid;
    grid-template-columns: 1fr 0.82fr;
    gap: 18px;
    align-items: end;
  }

  .hw-hero-main-card,
  .hw-hero-small-card,
  .hw-hero-info-card {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow);
    backdrop-filter: blur(8px);
  }

  .hw-hero-main-card {
    min-height: 560px;
  }

  .hw-hero-main-card img,
  .hw-hero-small-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .hw-hero-stack {
    display: grid;
    gap: 18px;
  }

  .hw-hero-small-card {
    min-height: 240px;
  }

  .hw-hero-info-card {
    padding: 24px;
    min-height: 190px;
  }

  .hw-hero-info-label {
    margin-bottom: 10px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #ffcc67;
  }

  .hw-hero-info-card p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.88);
  }

  .hw-stats-wrap {
    position: relative;
    z-index: 2;
    margin-top: -40px;
  }

  .hw-stats {
    background: var(--surface-dark);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 28px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    overflow: hidden;
    box-shadow: var(--shadow);
  }

  .hw-stat {
    padding: 28px 24px;
    text-align: center;
    border-right: 1px solid rgba(255, 255, 255, 0.08);
  }

  .hw-stat:last-child { border-right: none; }

  .hw-stat-num {
    display: block;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 2.8rem;
    font-style: italic;
    font-weight: 900;
    color: var(--amber);
    line-height: 1;
  }

  .hw-stat-label {
    display: block;
    margin-top: 8px;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.52);
  }

  .hw-section {
    padding: 100px 0;
  }

  .hw-section-dark {
    background: var(--surface-dark);
    color: var(--white);
  }

  .hw-section-head {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 32px;
    align-items: end;
    margin-bottom: 38px;
  }

  .hw-label {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--amber);
  }

  .hw-label::after {
    content: '';
    width: 34px;
    height: 1px;
    background: rgba(240, 165, 0, 0.75);
  }

  .hw-section-title {
    margin: 0;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(2.6rem, 4vw, 4rem);
    font-style: italic;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 0.95;
    letter-spacing: -0.03em;
  }

  .hw-section-desc {
    margin: 0;
    max-width: 760px;
    font-size: 1.05rem;
    line-height: 1.9;
    color: var(--muted);
  }

  .hw-section-dark .hw-section-desc {
    color: rgba(255, 255, 255, 0.68);
  }

  .hw-services-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
  }

  .hw-card,
  .hw-project-card,
  .hw-process-card,
  .hw-contact-card,
  .hw-proof-card {
    border-radius: 24px;
    overflow: hidden;
    background: var(--surface);
    border: 1px solid var(--line);
    box-shadow: 0 14px 38px rgba(20, 20, 20, 0.06);
  }

  .hw-card {
    padding: 30px;
    position: relative;
  }

  .hw-card-number {
    position: absolute;
    top: 18px;
    right: 20px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 4.4rem;
    font-style: italic;
    font-weight: 900;
    line-height: 1;
    color: rgba(20, 20, 20, 0.06);
    pointer-events: none;
  }

  .hw-card-icon {
    width: 54px;
    height: 54px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--amber-soft);
    color: var(--text);
    margin-bottom: 18px;
  }

  .hw-card h3,
  .hw-project-content h3,
  .hw-process-card h3,
  .hw-contact-card h3,
  .hw-proof-card h3 {
    margin: 0 0 10px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: 0.02em;
  }

  .hw-card p,
  .hw-project-content p,
  .hw-process-card p,
  .hw-contact-card p,
  .hw-proof-card p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.8;
    color: var(--muted);
  }

  .hw-projects-layout {
    display: grid;
    grid-template-columns: 1.02fr 0.98fr;
    gap: 24px;
    align-items: start;
  }

  .hw-project-main {
    display: grid;
    gap: 18px;
  }

  .hw-project-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .hw-project-large {
    height: 360px;
  }

  .hw-project-grid-small {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }

  .hw-project-small {
    height: 220px;
  }

  .hw-project-content {
    padding: 28px;
    background: var(--surface-dark);
    color: var(--white);
    border: 1px solid rgba(255,255,255,0.08);
  }

  .hw-project-content p {
    color: rgba(255,255,255,0.7);
  }

  .hw-check-list {
    display: grid;
    gap: 12px;
    margin-top: 22px;
  }

  .hw-check-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 0.98rem;
    line-height: 1.65;
    color: rgba(255,255,255,0.88);
  }

  .hw-process-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
  }

  .hw-process-card {
    padding: 28px;
    background: #faf8f4;
  }

  .hw-process-step {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 46px;
    height: 46px;
    border-radius: 14px;
    background: var(--amber);
    color: var(--text);
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.2rem;
    font-weight: 900;
    margin-bottom: 16px;
  }

  .hw-proof-band {
    background: var(--surface-dark);
    padding: 0 0 100px;
  }

  .hw-proof-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
  }

  .hw-proof-card {
    padding: 28px;
    background: var(--surface-dark-2);
    border: 1px solid rgba(255,255,255,0.08);
  }

  .hw-proof-card p,
  .hw-proof-card h3 {
    color: var(--white);
  }

  .hw-proof-card p { color: rgba(255,255,255,0.7); }

  .hw-proof-meta {
    margin-top: 18px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--amber);
  }

  .hw-contact-wrap {
    margin-top: -40px;
    position: relative;
    z-index: 3;
  }

  .hw-contact-box {
    background: linear-gradient(135deg, var(--amber) 0%, #f4ba39 100%);
    border-radius: 32px;
    box-shadow: var(--shadow);
    overflow: hidden;
  }

  .hw-contact-inner {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 26px;
    padding: 42px;
    align-items: center;
  }

  .hw-contact-copy .hw-section-title {
    font-size: clamp(2.3rem, 3.6vw, 3.5rem);
    color: var(--text);
  }

  .hw-contact-copy .hw-section-desc {
    color: rgba(20,20,20,0.68);
    margin-top: 14px;
  }

  .hw-contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .hw-contact-card {
    padding: 24px;
    background: rgba(255,255,255,0.78);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(20,20,20,0.08);
  }

  .hw-contact-link {
    text-decoration: none;
    color: inherit;
  }

  .hw-footer {
    background: var(--surface-dark);
    border-top: 1px solid rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.65);
  }

  .hw-footer-inner {
    min-height: 88px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    flex-wrap: wrap;
  }

  .hw-footer-brand {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.35rem;
    font-style: italic;
    font-weight: 900;
    text-transform: uppercase;
    color: var(--white);
  }

  .hw-footer-brand span { color: var(--amber); }

  @media (max-width: 1180px) {
    .hw-hero-inner,
    .hw-projects-layout,
    .hw-section-head,
    .hw-contact-inner {
      grid-template-columns: 1fr;
    }

    .hw-services-grid,
    .hw-process-grid,
    .hw-proof-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .hw-hero-points,
    .hw-stats {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 860px) {
    .hw-container { width: min(var(--container), calc(100% - 24px)); }
    .hw-nav { display: none; }
    .hw-header-inner { min-height: 74px; }
    .hw-hero-inner { padding: 48px 0 68px; min-height: auto; }
    .hw-hero-title { font-size: clamp(3rem, 14vw, 5rem); }
    .hw-hero-desc { font-size: 1.02rem; }
    .hw-hero-points,
    .hw-hero-side,
    .hw-stats,
    .hw-services-grid,
    .hw-project-grid-small,
    .hw-process-grid,
    .hw-proof-grid,
    .hw-contact-grid {
      grid-template-columns: 1fr;
    }
    .hw-stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
    .hw-stat:last-child { border-bottom: none; }
    .hw-project-large,
    .hw-hero-main-card { height: 320px; min-height: 320px; }
    .hw-project-small,
    .hw-hero-small-card { height: 220px; min-height: 220px; }
    .hw-section { padding: 74px 0; }
    .hw-contact-inner { padding: 28px; }
    .hw-topbar-inner,
    .hw-footer-inner { justify-content: flex-start; }
  }
`;

const heroPoints = [
  'Meisterbetrieb mit regionaler Erfahrung',
  'Saubere Planung und feste Ansprechpartner',
  'Termintreu, transparent und zuverlässig',
];

const services = [
  {
    number: '01',
    icon: <House size={22} />,
    title: 'Sanierung & Modernisierung',
    text: 'Wir bringen Bestandsimmobilien technisch, optisch und funktional auf einen zeitgemäßen Stand — sauber geplant und professionell ausgeführt.',
  },
  {
    number: '02',
    icon: <Hammer size={22} />,
    title: 'Innenausbau',
    text: 'Vom Trockenbau bis zur finalen Oberfläche setzen wir Innenräume präzise um und koordinieren alle Schritte mit Blick auf Qualität und Zeitplan.',
  },
  {
    number: '03',
    icon: <Ruler size={22} />,
    title: 'Planung & Beratung',
    text: 'Wir denken Projekte vorab durch, erkennen Schwachstellen früh und entwickeln Lösungen, die technisch sinnvoll und wirtschaftlich tragfähig sind.',
  },
  {
    number: '04',
    icon: <Shield size={22} />,
    title: 'Qualität & Sicherheit',
    text: 'Normgerechte Ausführung, klare Prozesse und verlässliche Standards sorgen dafür, dass Ergebnisse nicht nur gut aussehen, sondern lange bestehen.',
  },
  {
    number: '05',
    icon: <Drill size={22} />,
    title: 'Umbau im Bestand',
    text: 'Gerade bei laufend genutzten Gebäuden ist Erfahrung entscheidend. Wir arbeiten strukturiert, lösungsorientiert und mit möglichst wenig Reibung im Alltag.',
  },
  {
    number: '06',
    icon: <HardHat size={22} />,
    title: 'Komplette Projektbegleitung',
    text: 'Von der ersten Besichtigung bis zur sauberen Übergabe erhalten Sie eine Betreuung, die Verantwortung übernimmt und Entscheidungen transparent macht.',
  },
];

const processItems = [
  {
    step: '01',
    title: 'Besichtigung',
    text: 'Wir schauen uns das Projekt vor Ort an, klären Anforderungen und verschaffen uns ein realistisches Bild der Ausgangssituation.',
  },
  {
    step: '02',
    title: 'Angebot',
    text: 'Sie erhalten ein klares, verständliches Angebot mit sauberer Struktur, transparenten Leistungen und nachvollziehbaren Positionen.',
  },
  {
    step: '03',
    title: 'Umsetzung',
    text: 'Wir koordinieren die Arbeiten termintreu, halten Sie auf dem Laufenden und setzen Ihr Projekt handwerklich präzise um.',
  },
  {
    step: '04',
    title: 'Abnahme',
    text: 'Zum Abschluss gehen wir alles gemeinsam durch und übergeben das Ergebnis in einem Zustand, der professionell und stimmig ist.',
  },
];

const proofItems = [
  {
    title: 'Komplettsanierung Einfamilienhaus',
    text: '„Die Baustelle war jederzeit organisiert, die Kommunikation klar und das Ergebnis genau so hochwertig, wie wir es uns erhofft hatten.“',
    meta: 'Familie K. · Raum Eifel',
  },
  {
    title: 'Innenausbau Altbau',
    text: '„Was uns überzeugt hat: Verbindlichkeit. Termine wurden eingehalten, Rückfragen schnell geklärt und die Ausführung war wirklich sauber.“',
    meta: 'Privatkunde · Bitburg',
  },
  {
    title: 'Umbau im laufenden Betrieb',
    text: '„Gerade weil parallel weitergearbeitet wurde, war die strukturierte Planung Gold wert. Sehr professioneller Ablauf von Anfang bis Ende.“',
    meta: 'Gewerbekunde · Prüm',
  },
];

const stats = [
  { num: '25+', label: 'Jahre Erfahrung' },
  { num: '600+', label: 'Projekte realisiert' },
  { num: '100%', label: 'Klare Angebote' },
  { num: '4,9★', label: 'Kundenbewertung' },
];

export default function HandwerkPremium() {
  return (
    <div className="hw-root">
      <style>{styles}</style>

      <div className="hw-topbar">
        <div className="hw-container hw-topbar-inner">
          <span className="hw-topbar-item"><Award size={13} /> Meisterbetrieb seit 1998</span>
          <div className="hw-topbar-dot" />
          <span className="hw-topbar-item"><CheckCircle size={13} /> Verlässlich in Planung und Ausführung</span>
          <div className="hw-topbar-dot" />
          <span className="hw-topbar-item"><MapPin size={13} /> Eifel &amp; Umgebung</span>
        </div>
      </div>

      <header className="hw-header">
        <div className="hw-container hw-header-inner">
          <div>
            <div className="hw-logo-main">Schmidt <span>Bau</span></div>
            <div className="hw-logo-sub">Meisterbetrieb · Sanierung · Innenausbau</div>
          </div>

          <nav className="hw-nav">
            <a href="#leistungen" className="hw-nav-link">Leistungen</a>
            <a href="#referenzen" className="hw-nav-link">Referenzen</a>
            <a href="#ablauf" className="hw-nav-link">Ablauf</a>
            <a href="#kontakt" className="hw-nav-cta">Anfrage stellen <ArrowRight size={15} /></a>
          </nav>
        </div>
      </header>

      <section className="hw-hero">
        <div className="hw-container hw-hero-inner">
          <div className="hw-hero-copy">
            <div className="hw-hero-badge">
              <BadgeCheck size={16} /> Zertifizierter Handwerksbetrieb mit regionalem Fokus
            </div>

            <h1 className="hw-hero-title">
              Ehrliches <span className="accent">Handwerk.</span>
              Klare Ergebnisse.
            </h1>

            <div className="hw-hero-line" />

            <p className="hw-hero-desc">
              Wir realisieren Sanierungen, Umbauten und Ausbauprojekte mit klarer Planung, verlässlicher Kommunikation und einer Ausführung,
              die nicht nur auf der Website gut aussieht, sondern auf der Baustelle wirklich überzeugt.
            </p>

            <div className="hw-hero-actions">
              <a href="#kontakt" className="hw-btn-primary">
                Projekt besprechen <ArrowRight size={16} />
              </a>
              <a href="tel:+49000000000" className="hw-btn-secondary">
                <Phone size={16} /> Jetzt anrufen
              </a>
            </div>

            <div className="hw-hero-points">
              {heroPoints.map((item) => (
                <div className="hw-hero-point" key={item}>
                  <div className="hw-hero-point-label"><CheckCircle size={14} /> Stärke</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hw-hero-side">
            <div className="hw-hero-main-card">
              <img
                src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80"
                alt="Handwerker bei hochwertiger Bau- und Ausbauarbeit"
              />
            </div>

            <div className="hw-hero-stack">
              <div className="hw-hero-small-card">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
                  alt="Modernes Bauprojekt mit professioneller Ausführung"
                />
              </div>

              <div className="hw-hero-info-card">
                <div className="hw-hero-info-label">Worauf es ankommt</div>
                <p>
                  Gute Handwerkerseiten verkaufen nicht nur Optik, sondern Vertrauen: Referenzen, Ablauf, Leistungen, Erreichbarkeit und ein starker regionaler Bezug.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hw-stats-wrap">
        <div className="hw-container">
          <div className="hw-stats">
            {stats.map((item) => (
              <div className="hw-stat" key={item.label}>
                <span className="hw-stat-num">{item.num}</span>
                <span className="hw-stat-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="hw-section" id="leistungen">
        <div className="hw-container">
          <div className="hw-section-head">
            <div>
              <div className="hw-label">Leistungen</div>
              <h2 className="hw-section-title">Was wir für private und gewerbliche Projekte konkret umsetzen.</h2>
            </div>
            <p className="hw-section-desc">
              Statt allgemeiner Werbesätze zeigt diese Seite echte Themen, nach denen Kundinnen und Kunden suchen: Sanierung, Umbau, Innenausbau, Planung,
              Qualität und saubere Projektbegleitung.
            </p>
          </div>

          <div className="hw-services-grid">
            {services.map((item) => (
              <div className="hw-card" key={item.number}>
                <div className="hw-card-number">{item.number}</div>
                <div className="hw-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hw-section hw-section-dark" id="referenzen">
        <div className="hw-container">
          <div className="hw-section-head">
            <div>
              <div className="hw-label">Referenzen</div>
              <h2 className="hw-section-title">Projektbilder, die nach echter Arbeit aussehen — nicht nach generischer Demo.</h2>
            </div>
            <p className="hw-section-desc">
              Große Bildflächen, nachvollziehbare Projektarten und konkrete Aussagen zur Arbeitsweise machen die Seite sofort glaubwürdiger und hochwertiger.
            </p>
          </div>

          <div className="hw-projects-layout">
            <div className="hw-project-main">
              <div className="hw-project-card hw-project-large">
                <img
                  src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1400&q=80"
                  alt="Hochwertig modernisiertes Wohnprojekt"
                />
              </div>

              <div className="hw-project-grid-small">
                <div className="hw-project-card hw-project-small">
                  <img
                    src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80"
                    alt="Modernisierter Innenraum mit hochwertigem Ausbau"
                  />
                </div>
                <div className="hw-project-card hw-project-small">
                  <img
                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80"
                    alt="Sauber ausgeführter Innenausbau in Wohnhaus"
                  />
                </div>
              </div>
            </div>

            <div className="hw-project-content hw-project-card">
              <h3>Sauber geplant. Sauber umgesetzt.</h3>
              <p>
                Wer einen Handwerksbetrieb beauftragt, will keine austauschbare Werbefläche sehen, sondern Sicherheit. Deshalb setzt diese Version auf starke Referenzbilder,
                konkrete Projektarten und nachvollziehbare Aussagen zu Termin, Qualität und Kommunikation.
              </p>

              <div className="hw-check-list">
                <div className="hw-check-item"><CheckCircle size={16} /> Klare Ansprechpartner während des gesamten Projekts</div>
                <div className="hw-check-item"><CheckCircle size={16} /> Strukturierte Baustellenorganisation und verlässliche Abstimmung</div>
                <div className="hw-check-item"><CheckCircle size={16} /> Hochwertige Ergebnisse mit Blick auf Alltagstauglichkeit und Langlebigkeit</div>
                <div className="hw-check-item"><CheckCircle size={16} /> Bildflächen können später einfach durch echte Projektfotos ersetzt werden</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hw-section" id="ablauf">
        <div className="hw-container">
          <div className="hw-section-head">
            <div>
              <div className="hw-label">Ablauf</div>
              <h2 className="hw-section-title">So läuft die Zusammenarbeit professionell und verständlich ab.</h2>
            </div>
            <p className="hw-section-desc">
              Ein klarer Ablauf schafft Vertrauen. Gerade im Handwerk wollen Interessenten schnell verstehen, wie Anfrage, Angebot, Umsetzung und Übergabe organisiert sind.
            </p>
          </div>

          <div className="hw-process-grid">
            {processItems.map((item) => (
              <div className="hw-process-card" key={item.step}>
                <div className="hw-process-step">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hw-proof-band">
        <div className="hw-container">
          <div className="hw-section-head" style={{ paddingTop: '100px' }}>
            <div>
              <div className="hw-label">Kundenstimmen</div>
              <h2 className="hw-section-title" style={{ color: 'white' }}>Vertrauen entsteht durch echte Erfahrungen.</h2>
            </div>
            <p className="hw-section-desc">
              Bewertungen und Projektstimmen machen den Auftritt glaubwürdiger und geben Interessenten das Gefühl, mit einem verlässlichen Betrieb zu sprechen.
            </p>
          </div>

          <div className="hw-proof-grid">
            {proofItems.map((item) => (
              <div className="hw-proof-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="hw-proof-meta">{item.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hw-contact-wrap" id="kontakt">
        <div className="hw-container">
          <div className="hw-contact-box">
            <div className="hw-contact-inner">
              <div className="hw-contact-copy">
                <div className="hw-label" style={{ color: '#141414' }}>Kontakt</div>
                <h2 className="hw-section-title">Bereit, Ihr Projekt unverbindlich zu besprechen?</h2>
                <p className="hw-section-desc">
                  Diese Seite ist jetzt deutlich hochwertiger, glaubwürdiger und handwerksnäher aufgebaut. Inhalte, Orte, Fotos und Leistungen lassen sich als nächstes auf den echten Betrieb zuschneiden.
                </p>
              </div>

              <div className="hw-contact-grid">
                <a href="tel:+49000000000" className="hw-contact-card hw-contact-link">
                  <div className="hw-card-icon"><Phone size={22} /></div>
                  <h3>Telefon</h3>
                  <p>0 800 / 123 456</p>
                </a>

                <a href="mailto:info@schmidtbau.de" className="hw-contact-card hw-contact-link">
                  <div className="hw-card-icon"><Mail size={22} /></div>
                  <h3>E-Mail</h3>
                  <p>info@schmidtbau.de</p>
                </a>

                <div className="hw-contact-card">
                  <div className="hw-card-icon"><MapPin size={22} /></div>
                  <h3>Region</h3>
                  <p>Eifel · Bitburg · Prüm · Umgebung</p>
                </div>

                <div className="hw-contact-card">
                  <div className="hw-card-icon"><Clock3 size={22} /></div>
                  <h3>Rückmeldung</h3>
                  <p>In der Regel innerhalb von 24 bis 48 Stunden</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="hw-footer">
        <div className="hw-container hw-footer-inner">
          <div className="hw-footer-brand">Schmidt <span>Bau</span></div>
          <div>© 2025 · Impressum · Datenschutz · Meisterbetrieb</div>
        </div>
      </footer>
    </div>
  );
}
