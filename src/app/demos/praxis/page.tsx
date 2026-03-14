import React from 'react';
import {
  Phone,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  Shield,
  HeartPulse,
  CalendarDays,
  Stethoscope,
  Users,
  Car,
  Accessibility,
  Ambulance,
  Mail,
} from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  :root {
    --bg: #f6f8fb;
    --surface: #ffffff;
    --surface-soft: #eef4f1;
    --text: #112031;
    --muted: #5f7083;
    --line: #dbe4ea;
    --primary: #0f766e;
    --primary-dark: #0b4f4a;
    --accent: #10b981;
    --hero-a: #0b3e3a;
    --hero-b: #0d1f3a;
    --shadow: 0 18px 50px rgba(17, 32, 49, 0.10);
    --radius-xl: 28px;
    --radius-lg: 22px;
    --radius-md: 16px;
    --container: 1240px;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }

  .praxis-root {
    min-height: 100vh;
    background: var(--bg);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .praxis-container {
    width: min(var(--container), calc(100% - 40px));
    margin: 0 auto;
  }

  .praxis-header {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(17, 32, 49, 0.08);
  }

  .praxis-header-inner {
    min-height: 78px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  .praxis-brand-title {
    font-size: 1.7rem;
    font-weight: 800;
    line-height: 1;
    color: var(--text);
    letter-spacing: -0.03em;
    margin-bottom: 6px;
  }

  .praxis-brand-sub {
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.28em;
    color: var(--primary);
  }

  .praxis-nav {
    display: flex;
    align-items: center;
    gap: 28px;
  }

  .praxis-nav a {
    text-decoration: none;
    color: var(--text);
    font-size: 0.98rem;
    font-weight: 500;
  }

  .praxis-nav a:hover { color: var(--primary); }

  .praxis-header-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--text);
    color: white !important;
    padding: 14px 20px;
    border-radius: 999px;
    font-size: 0.95rem;
    font-weight: 600;
    transition: transform 0.2s ease, background 0.2s ease;
  }

  .praxis-header-cta:hover {
    transform: translateY(-1px);
    background: var(--primary);
  }

  .praxis-hero {
    background:
      radial-gradient(circle at 8% 18%, rgba(16, 185, 129, 0.18), transparent 34%),
      radial-gradient(circle at 88% 68%, rgba(59, 130, 246, 0.18), transparent 34%),
      linear-gradient(135deg, var(--hero-a) 0%, var(--hero-b) 100%);
    color: white;
    overflow: hidden;
  }

  .praxis-hero-inner {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 46px;
    align-items: center;
    padding: 64px 0 84px;
  }

  .praxis-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.09);
    color: rgba(255, 255, 255, 0.96);
    border-radius: 999px;
    padding: 10px 16px;
    font-size: 0.95rem;
    font-weight: 500;
    margin-bottom: 18px;
  }

  .praxis-hero h1 {
    margin: 0;
    font-size: clamp(3rem, 5vw, 5.4rem);
    line-height: 0.98;
    letter-spacing: -0.06em;
    font-weight: 800;
    max-width: 760px;
  }

  .praxis-hero p {
    margin: 22px 0 0;
    max-width: 780px;
    font-size: 1.26rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.88);
  }

  .praxis-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 32px;
  }

  .praxis-btn-primary,
  .praxis-btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 16px 24px;
    border-radius: 999px;
    text-decoration: none;
    font-size: 0.98rem;
    font-weight: 700;
    transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
  }

  .praxis-btn-primary {
    background: var(--accent);
    color: white;
  }

  .praxis-btn-primary:hover {
    transform: translateY(-1px);
    background: #0fa572;
  }

  .praxis-btn-secondary {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.16);
    color: white;
  }

  .praxis-btn-secondary:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.14);
  }

  .praxis-trust-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    margin-top: 26px;
  }

  .praxis-trust-card {
    padding: 18px 18px 16px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  .praxis-trust-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #9ef0cb;
    margin-bottom: 8px;
  }

  .praxis-trust-card p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.92);
  }

  .praxis-hero-media {
    display: grid;
    grid-template-columns: 1fr 0.68fr;
    gap: 18px;
    align-items: stretch;
  }

  .praxis-hero-main,
  .praxis-hero-side,
  .praxis-hero-info {
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow);
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.08);
  }

  .praxis-hero-main img,
  .praxis-hero-side img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .praxis-hero-main {
    min-height: 530px;
  }

  .praxis-hero-stack {
    display: grid;
    grid-template-rows: 1fr auto;
    gap: 18px;
  }

  .praxis-hero-side {
    min-height: 230px;
  }

  .praxis-hero-info {
    padding: 22px;
    min-height: 180px;
  }

  .praxis-hero-info-title {
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #b6f7dc;
    margin-bottom: 10px;
  }

  .praxis-hero-info p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.88);
  }

  .praxis-feature-band {
    margin-top: -34px;
    position: relative;
    z-index: 3;
  }

  .praxis-feature-grid {
    background: white;
    border-radius: 28px;
    box-shadow: var(--shadow);
    border: 1px solid rgba(17, 32, 49, 0.06);
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    overflow: hidden;
  }

  .praxis-feature-card {
    padding: 28px;
    border-right: 1px solid var(--line);
    background: white;
  }

  .praxis-feature-card:last-child { border-right: none; }
  .praxis-feature-card.is-highlight { background: #e8f5ef; }

  .praxis-icon-box {
    width: 52px;
    height: 52px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f7fafc;
    color: var(--text);
    border: 1px solid var(--line);
    margin-bottom: 16px;
  }

  .praxis-feature-card.is-highlight .praxis-icon-box {
    background: white;
  }

  .praxis-feature-card h3 {
    margin: 0 0 8px;
    font-size: 1.25rem;
    line-height: 1.25;
  }

  .praxis-feature-card p {
    margin: 0;
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.7;
  }

  .praxis-section {
    padding: 96px 0;
  }

  .praxis-section.white { background: white; }
  .praxis-section.soft { background: #edf3f0; }

  .praxis-section-head {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 32px;
    align-items: end;
    margin-bottom: 34px;
  }

  .praxis-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    color: var(--primary);
    font-weight: 700;
    margin-bottom: 14px;
  }

  .praxis-eyebrow::before {
    content: '';
    width: 34px;
    height: 1px;
    background: rgba(15, 118, 110, 0.55);
  }

  .praxis-section h2 {
    margin: 0;
    font-size: clamp(2.2rem, 3.4vw, 3.6rem);
    line-height: 1.08;
    letter-spacing: -0.04em;
  }

  .praxis-section-head p {
    margin: 0;
    font-size: 1.08rem;
    line-height: 1.9;
    color: var(--muted);
    max-width: 720px;
  }

  .praxis-services-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
  }

  .praxis-service-card,
  .praxis-contact-card,
  .praxis-faq-card,
  .praxis-highlight-card {
    background: white;
    border-radius: 22px;
    border: 1px solid var(--line);
    box-shadow: 0 10px 30px rgba(17, 32, 49, 0.04);
  }

  .praxis-service-card {
    padding: 28px;
  }

  .praxis-service-card h3,
  .praxis-contact-card h3,
  .praxis-faq-card h3,
  .praxis-highlight-card h3 {
    margin: 0 0 10px;
    font-size: 1.22rem;
  }

  .praxis-service-card p,
  .praxis-contact-card p,
  .praxis-faq-card p,
  .praxis-highlight-card p,
  .praxis-hours-card p {
    margin: 0;
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.8;
  }

  .praxis-service-icon {
    width: 54px;
    height: 54px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e8f5ef;
    color: var(--primary);
    margin-bottom: 16px;
  }

  .praxis-atmosphere {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 34px;
    align-items: start;
  }

  .praxis-highlight-list {
    display: grid;
    gap: 16px;
    margin-top: 26px;
  }

  .praxis-highlight-card {
    padding: 24px;
    background: #f9fbfc;
  }

  .praxis-image-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }

  .praxis-image-wide,
  .praxis-image-tall,
  .praxis-image-note {
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid var(--line);
    box-shadow: 0 14px 36px rgba(17, 32, 49, 0.06);
    background: white;
  }

  .praxis-image-wide {
    grid-column: 1 / -1;
    height: 310px;
  }

  .praxis-image-tall {
    height: 290px;
  }

  .praxis-image-wide img,
  .praxis-image-tall img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .praxis-image-note {
    padding: 24px;
    background: var(--text);
    color: white;
  }

  .praxis-image-note strong {
    display: block;
    margin-bottom: 10px;
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: #8de2c3;
  }

  .praxis-hours-layout {
    display: grid;
    grid-template-columns: 0.92fr 1.08fr;
    gap: 26px;
    align-items: start;
  }

  .praxis-hours-card {
    background: var(--text);
    color: white;
    border-radius: 28px;
    padding: 34px;
    box-shadow: var(--shadow);
  }

  .praxis-hours-card p { color: rgba(255, 255, 255, 0.76); }

  .praxis-hours-list {
    display: grid;
    gap: 12px;
    margin-top: 24px;
  }

  .praxis-hours-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 18px;
    padding: 16px 18px;
    font-size: 0.98rem;
  }

  .praxis-hours-row span:last-child {
    color: rgba(255, 255, 255, 0.78);
    text-align: right;
  }

  .praxis-contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }

  .praxis-contact-card {
    padding: 24px;
  }

  .praxis-faq-layout {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 34px;
    align-items: start;
  }

  .praxis-faq-stack {
    display: grid;
    gap: 16px;
  }

  .praxis-faq-card {
    padding: 24px;
  }

  .praxis-cta {
    padding-bottom: 96px;
  }

  .praxis-cta-box {
    background: linear-gradient(135deg, var(--primary) 0%, var(--text) 100%);
    color: white;
    border-radius: 34px;
    overflow: hidden;
    box-shadow: var(--shadow);
  }

  .praxis-cta-inner {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 30px;
    padding: 44px;
    align-items: center;
  }

  .praxis-cta-box p {
    margin: 18px 0 0;
    color: rgba(255, 255, 255, 0.86);
    font-size: 1.05rem;
    line-height: 1.85;
    max-width: 760px;
  }

  .praxis-cta-links {
    display: grid;
    gap: 14px;
  }

  .praxis-cta-link {
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;
    background: white;
    color: var(--text);
    border-radius: 22px;
    padding: 18px;
    border: 1px solid rgba(17, 32, 49, 0.08);
  }

  .praxis-cta-link:hover { background: #f6fffb; }

  .praxis-cta-icon {
    width: 50px;
    height: 50px;
    border-radius: 16px;
    background: #e8f5ef;
    color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
  }

  .praxis-footer {
    border-top: 1px solid rgba(17, 32, 49, 0.08);
    background: white;
  }

  .praxis-footer-inner {
    min-height: 82px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    color: var(--muted);
    font-size: 0.96rem;
  }

  @media (max-width: 1180px) {
    .praxis-hero-inner,
    .praxis-section-head,
    .praxis-atmosphere,
    .praxis-hours-layout,
    .praxis-faq-layout,
    .praxis-cta-inner {
      grid-template-columns: 1fr;
    }

    .praxis-services-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .praxis-feature-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .praxis-feature-card:nth-child(2) { border-right: none; }
  }

  @media (max-width: 860px) {
    .praxis-nav { display: none; }
    .praxis-container { width: min(var(--container), calc(100% - 24px)); }
    .praxis-hero-inner { padding: 42px 0 64px; gap: 28px; }
    .praxis-hero h1 { font-size: clamp(2.3rem, 11vw, 4rem); }
    .praxis-hero p { font-size: 1.04rem; }
    .praxis-trust-grid,
    .praxis-services-grid,
    .praxis-contact-grid,
    .praxis-image-grid,
    .praxis-feature-grid,
    .praxis-hero-media {
      grid-template-columns: 1fr;
    }
    .praxis-hero-main { min-height: 360px; }
    .praxis-hero-stack { grid-template-rows: auto auto; }
    .praxis-feature-card { border-right: none; border-bottom: 1px solid var(--line); }
    .praxis-feature-card:last-child { border-bottom: none; }
    .praxis-section { padding: 74px 0; }
    .praxis-cta-inner { padding: 28px; }
    .praxis-footer-inner,
    .praxis-header-inner,
    .praxis-hours-row {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

const trustItems = [
  'Hausärztliche Versorgung für die ganze Familie',
  'Kurzfristige Termine für akute Beschwerden',
  'Barrierefreier Zugang und Parkplätze vor Ort',
];

const features = [
  {
    icon: <Clock size={24} />,
    title: 'Schnelle Orientierung',
    text: 'Öffnungszeiten, Kontakt und Notfallhinweise direkt sichtbar — ohne langes Suchen.',
    highlight: true,
  },
  {
    icon: <Shield size={24} />,
    title: 'Vertrauen & Kompetenz',
    text: 'Klare Aussagen zu Betreuung, Diagnostik und Versorgung statt bloß dekorativer Floskeln.',
  },
  {
    icon: <CalendarDays size={24} />,
    title: 'Mehr Termin-Fokus',
    text: 'Terminbuchung, Telefon und Akutversorgung sind prominent und conversion-stark platziert.',
  },
  {
    icon: <HeartPulse size={24} />,
    title: 'Visuell echter Praxisbezug',
    text: 'Große Bilder mit Empfang, Behandlungsraum und Team wirken sofort glaubwürdiger als abstrakte Grafiken.',
  },
];

const services = [
  {
    icon: <Stethoscope size={24} />,
    title: 'Allgemeinmedizin',
    text: 'Erste Anlaufstelle bei akuten Beschwerden, Infekten, Schmerzen und allgemeinen gesundheitlichen Fragen.',
  },
  {
    icon: <HeartPulse size={24} />,
    title: 'Vorsorge & Check-ups',
    text: 'Gesundheitsuntersuchungen, Präventionsgespräche und strukturierte Kontrollen für verschiedene Lebensphasen.',
  },
  {
    icon: <Users size={24} />,
    title: 'Familienpraxis',
    text: 'Persönliche Betreuung für Erwachsene, Seniorinnen und Senioren sowie Familien mit klaren Ansprechpartnern.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Chronische Erkrankungen',
    text: 'Begleitung bei Diabetes, Bluthochdruck und weiteren langfristigen Erkrankungen mit nachvollziehbaren Abläufen.',
  },
];

const highlights = [
  {
    title: 'Akutsprechstunde',
    text: 'Für plötzlich auftretende Beschwerden reservieren wir täglich Zeitfenster, damit Hilfe nicht an langen Wartezeiten scheitert.',
  },
  {
    title: 'Moderne Diagnostik',
    text: 'EKG, Labor und Verlaufskontrollen werden übersichtlich eingebunden und verständlich erklärt.',
  },
  {
    title: 'Ruhige Atmosphäre',
    text: 'Freundliche Räume, klare Orientierung und ein nahbares Auftreten schaffen Vertrauen schon vor dem ersten Termin.',
  },
];

const hours = [
  ['Montag', '08:00 – 12:00 · 15:00 – 18:00'],
  ['Dienstag', '08:00 – 12:00 · 15:00 – 18:00'],
  ['Mittwoch', '08:00 – 13:00'],
  ['Donnerstag', '08:00 – 12:00 · 15:00 – 18:00'],
  ['Freitag', '08:00 – 13:00'],
];

const faqs = [
  {
    q: 'Nehmen Sie neue Patientinnen und Patienten auf?',
    a: 'Ja, je nach Kapazität. Ein kurzer Anruf reicht aus und wir geben direkt Rückmeldung.',
  },
  {
    q: 'Kann ich Rezepte oder Überweisungen vorbestellen?',
    a: 'Für bekannte Dauermedikamente und Folgeverordnungen ist eine unkomplizierte Vorbestellung möglich.',
  },
  {
    q: 'Was gilt außerhalb der Sprechzeiten?',
    a: 'Bei dringenden, aber nicht lebensbedrohlichen Beschwerden hilft der ärztliche Bereitschaftsdienst unter 116 117. In Notfällen wählen Sie 112.',
  },
];

export default function PraxisLandingpageRedesign() {
  return (
    <div className="praxis-root">
      <style>{styles}</style>

      <header className="praxis-header">
        <div className="praxis-container praxis-header-inner">
          <div>
            <div className="praxis-brand-title">Praxis am Markt</div>
            <div className="praxis-brand-sub">Allgemeinmedizin · Hausarztpraxis</div>
          </div>

          <nav className="praxis-nav">
            <a href="#leistungen">Leistungen</a>
            <a href="#praxis">Praxis</a>
            <a href="#sprechzeiten">Sprechzeiten</a>
            <a href="#kontakt" className="praxis-header-cta">
              Termin anfragen <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      <section className="praxis-hero">
        <div className="praxis-container praxis-hero-inner">
          <div>
            <div className="praxis-badge">
              <HeartPulse size={18} /> Persönliche hausärztliche Betreuung mit Zeit für Ihre Fragen
            </div>

            <h1>Eine Praxis, die Vertrauen schafft und medizinisch im Alltag wirklich weiterhilft.</h1>

            <p>
              Moderne Allgemeinmedizin, verständliche Beratung und eine Atmosphäre, in der man sich vom ersten Moment an aufgehoben fühlt.
              Für akute Beschwerden, Vorsorge, chronische Erkrankungen und die langfristige Begleitung Ihrer Gesundheit.
            </p>

            <div className="praxis-hero-actions">
              <a href="#kontakt" className="praxis-btn-primary">
                Termin vereinbaren <ArrowRight size={16} />
              </a>
              <a href="tel:+49000000000" className="praxis-btn-secondary">
                Jetzt anrufen <Phone size={16} />
              </a>
            </div>

            <div className="praxis-trust-grid">
              {trustItems.map((item) => (
                <div className="praxis-trust-card" key={item}>
                  <div className="praxis-trust-label">
                    <CheckCircle size={14} /> Praxisvorteil
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="praxis-hero-media">
            <div className="praxis-hero-main">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
                alt="Ärztin im Gespräch mit Patientin in heller Praxis"
              />
            </div>

            <div className="praxis-hero-stack">
              <div className="praxis-hero-side">
                <img
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80"
                  alt="Moderner und freundlicher Empfangsbereich einer Hausarztpraxis"
                />
              </div>

              <div className="praxis-hero-info">
                <div className="praxis-hero-info-title">Praxisnahes Design</div>
                <p>
                  Große, glaubwürdige Bildflächen, klare Leistungen, direkte Kontaktwege und eine ruhige Gestaltung sorgen für einen wesentlich professionelleren Auftritt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="praxis-feature-band">
        <div className="praxis-container">
          <div className="praxis-feature-grid">
            {features.map((item) => (
              <div className={`praxis-feature-card${item.highlight ? ' is-highlight' : ''}`} key={item.title}>
                <div className="praxis-icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="praxis-section" id="leistungen">
        <div className="praxis-container">
          <div className="praxis-section-head">
            <div>
              <div className="praxis-eyebrow">Leistungen</div>
              <h2>Medizinische Leistungen, die Patientinnen und Patienten auf einer Praxisseite wirklich erwarten.</h2>
            </div>
            <p>
              Statt einer reinen Design-Demo zeigt diese Version konkrete Inhalte: hausärztliche Versorgung, Vorsorge, langfristige Begleitung und schnelle Hilfe bei akuten Anliegen.
            </p>
          </div>

          <div className="praxis-services-grid">
            {services.map((item) => (
              <div className="praxis-service-card" key={item.title}>
                <div className="praxis-service-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="praxis-section white" id="praxis">
        <div className="praxis-container praxis-atmosphere">
          <div>
            <div className="praxis-eyebrow">Praxis & Atmosphäre</div>
            <h2>Hell, freundlich, übersichtlich — damit sich die Praxis online schon seriös und nahbar anfühlt.</h2>
            <p style={{ marginTop: '18px' }}>
              Gerade bei Hausarztpraxen zählt Vertrauen. Deshalb setzt diese Seite auf freundliche Bildwelten, gute Lesbarkeit, klare Struktur und einen deutlich stärkeren Bezug zur realen Versorgung.
            </p>

            <div className="praxis-highlight-list">
              {highlights.map((item) => (
                <div className="praxis-highlight-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="praxis-image-grid">
            <div className="praxis-image-wide">
              <img
                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1400&q=80"
                alt="Behandlungszimmer in moderner Arztpraxis"
              />
            </div>
            <div className="praxis-image-tall">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=900&q=80"
                alt="Freundliches Praxisteam am Empfang"
              />
            </div>
            <div className="praxis-image-note">
              <strong>Bildhinweis</strong>
              Diese Fotos sind Platzhalter aus Unsplash. Du kannst sie später 1:1 durch Pixabay-Bilder oder eigene Praxisfotos ersetzen, ohne das Layout umzubauen.
            </div>
          </div>
        </div>
      </section>

      <section className="praxis-section soft" id="sprechzeiten">
        <div className="praxis-container praxis-hours-layout">
          <div className="praxis-hours-card">
            <div className="praxis-eyebrow" style={{ color: '#8de2c3' }}>Sprechzeiten</div>
            <h2>Gut erreichbar und auf einen Blick verständlich.</h2>
            <p style={{ marginTop: '16px' }}>
              Öffnungszeiten, Telefon und Notfallkontakte gehören zu den wichtigsten Informationen einer Praxiswebsite und sollten immer sofort sichtbar sein.
            </p>

            <div className="praxis-hours-list">
              {hours.map(([day, time]) => (
                <div className="praxis-hours-row" key={day}>
                  <span>{day}</span>
                  <span>{time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="praxis-contact-grid">
            <div className="praxis-contact-card">
              <div className="praxis-icon-box"><Phone size={24} /></div>
              <h3>Kontakt</h3>
              <p>
                Telefon: <strong>+49 0000 000000</strong><br />
                E-Mail: <strong>info@praxis-am-markt.de</strong>
              </p>
            </div>

            <div className="praxis-contact-card">
              <div className="praxis-icon-box"><Ambulance size={24} /></div>
              <h3>Notfall</h3>
              <p>
                Ärztlicher Bereitschaftsdienst: <strong>116 117</strong><br />
                Lebensbedrohlicher Notfall: <strong>112</strong>
              </p>
            </div>

            <div className="praxis-contact-card">
              <div className="praxis-icon-box"><MapPin size={24} /></div>
              <h3>Anfahrt</h3>
              <p>
                Hauptstraße 12<br />
                52159 Musterstadt
              </p>
            </div>

            <div className="praxis-contact-card">
              <div className="praxis-icon-box"><Car size={24} /></div>
              <h3>Vor Ort</h3>
              <p>
                Kostenfreie Parkplätze direkt vor der Praxis und barrierefreier Zugang für kurze, unkomplizierte Wege.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="praxis-section" aria-label="Häufige Fragen">
        <div className="praxis-container praxis-faq-layout">
          <div>
            <div className="praxis-eyebrow">Häufige Fragen</div>
            <h2>Auch konkrete Patientenfragen machen die Seite nützlicher und glaubwürdiger.</h2>
            <p style={{ marginTop: '18px' }}>
              Solche Inhalte reduzieren Rückfragen, schaffen Vertrauen und wirken deutlich echter als generische Werbetexte.
            </p>
          </div>

          <div className="praxis-faq-stack">
            {faqs.map((item) => (
              <div className="praxis-faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="praxis-cta" id="kontakt">
        <div className="praxis-container">
          <div className="praxis-cta-box">
            <div className="praxis-cta-inner">
              <div>
                <div className="praxis-eyebrow" style={{ color: '#b6f7dc' }}>Kontakt & Termin</div>
                <h2>Bereit für eine Startseite, die wirklich zu einer Hausarztpraxis passt?</h2>
                <p>
                 Ich gestalte professionelle Webseiten für Ihre Praxis – individuell, modern und ganz auf Sie zugeschnitten.
                </p>
              </div>

              <div className="praxis-cta-links">
                <a href="tel:+49000000000" className="praxis-cta-link">
                  <div className="praxis-cta-icon"><Phone size={22} /></div>
                  <div>
                    <strong>Telefon</strong><br />
                    +49 0000 000000
                  </div>
                </a>

                <a href="mailto:info@praxis-am-markt.de" className="praxis-cta-link">
                  <div className="praxis-cta-icon"><Mail size={22} /></div>
                  <div>
                    <strong>E-Mail</strong><br />
                    info@praxis-am-markt.de
                  </div>
                </a>

                <div className="praxis-cta-link">
                  <div className="praxis-cta-icon"><Accessibility size={22} /></div>
                  <div>
                    <strong>Barrierefrei</strong><br />
                    Ebenerdiger Zugang und gute Erreichbarkeit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="praxis-footer">
        <div className="praxis-container praxis-footer-inner">
          <div>Praxis am Markt · Allgemeinmedizin</div>
          <div>© 2025 · Impressum · Datenschutz</div>
        </div>
      </footer>
    </div>
  );
}
