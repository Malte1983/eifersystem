"use client";

import {
  Check,
  Users,
  Rocket,
  Building2,
  ShoppingBag,
  Wrench,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const packages = [
  {
    title: "Vereine & Hobby",
    icon: <Users size={28} />,
    desc: "Kompakte Online-Präsenz für Vereine, Ehrenamt und lokale Gruppen.",
    price: "490 €",
    highlight: false,
    features: [
      "Moderner One-Pager",
      "Kontaktformular integriert",
      "Smartphone-optimiert",
      "Impressum & Datenschutz",
    ],
  },
  {
    title: "Starter",
    icon: <Rocket size={28} />,
    desc: "Die digitale Visitenkarte für Gründer und kleine Handwerksbetriebe.",
    price: "890 €",
    highlight: false,
    features: [
      "Erweiterter One-Pager",
      "Leistungsübersicht",
      "Basis-Suchmaschinenoptimierung",
      "Google My Business Verknüpfung",
    ],
  },
  {
    title: "Business",
    icon: <Building2 size={28} />,
    badge: "Meistgebucht",
    desc: "Die vollumfängliche Website für Praxen und den etablierten Mittelstand.",
    price: "1.490 €",
    highlight: true,
    features: [
      "Bis zu 5 individuelle Unterseiten",
      "CMS (WordPress) für eigene Änderungen",
      "Erweiterte Ladezeiten-Optimierung",
      "Kurze Einweisung in das System",
    ],
  },
  {
    title: "Shop & Buchung",
    icon: <ShoppingBag size={28} />,
    desc: "Für Unternehmen, die online verkaufen oder Termine vergeben möchten.",
    price: "2.490 €",
    highlight: false,
    features: [
      "Integration von WooCommerce",
      "Online-Terminbuchungssysteme",
      "Zahlungsanbieter-Anbindung",
      "Rechtssichere Shop-Konfiguration",
    ],
  },
  {
    title: "Wartung",
    icon: <Wrench size={28} />,
    desc: "Sorgenfreier Betrieb nach dem Launch. Ich kümmere mich um die Technik.",
    price: "49 €",
    suffix: "/ Monat",
    highlight: false,
    features: [
      "Sicheres Hosting & Domain",
      "Regelmäßige System-Updates",
      "Wöchentliche Datensicherung",
      "Kleine Textänderungen auf Zuruf",
    ],
  },
];

export default function Pricing3D() {
  const displayPackages = [...packages, ...packages];

  return (
    <div className="pricing-swiper-wrapper">
      <div className="swipe-indicator">
        <ChevronLeft className="swipe-arrow left" size={20} />
        <span className="swipe-text">Wischen zum Entdecken</span>
        <ChevronRight className="swipe-arrow right" size={20} />
      </div>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        initialSlide={2}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: -12,
          depth: 135,
          modifier: 2.3,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {displayPackages.map((pkg, index) => (
          <SwiperSlide key={`${pkg.title}-${index}`} className="pricing-slide">
            <article className={`pricing-card ${pkg.highlight ? "card-highlight" : ""}`}>
              {pkg.badge && <div className="pricing-badge">{pkg.badge}</div>}

              <div className="pricing-card-top">
                <div className="pricing-title-wrap">
                  <div className={`pricing-icon ${pkg.highlight ? "icon-highlight" : ""}`}>
                    {pkg.icon}
                  </div>
                  <h3>{pkg.title}</h3>
                </div>

                <p className="pricing-desc">{pkg.desc}</p>

                <div className="pricing-price-box">
                  <span className="price-from">ab</span>
                  <span className="price-amount">{pkg.price}</span>
                  {pkg.suffix && <span className="price-from">{pkg.suffix}</span>}
                </div>
              </div>

              <ul className="pricing-features">
                {pkg.features.map((feature, i) => (
                  <li key={i}>
                    <Check
                      size={20}
                      className={pkg.highlight ? "text-primary" : "text-secondary"}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}