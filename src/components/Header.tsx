"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Zielgruppen", href: "#zielgruppen" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Preise", href: "#preise" },
  { label: "FAQ", href: "#faq" },
];
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 920) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="site-logo" aria-label="Zur Startseite">
          <Image
            src="/logos/eifel-systems-logo-new.png"
            alt="Eifel-Systems Logo"
            width={280}
            height={84}
            priority
            className="site-logo-image"
          />
        </Link>

        <nav className="site-nav" aria-label="Hauptnavigation">
          <ul className="site-nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="site-nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#kontakt" className="btn btn-primary header-cta">
          Kostenloses Erstgespräch
        </a>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}
      >
        <div className="container mobile-menu-inner">
          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#kontakt"
            className="btn btn-primary mobile-menu-cta"
            onClick={closeMenu}
          >
            Kostenloses Erstgespräch
          </a>
        </div>
      </div>
    </header>
  );
}