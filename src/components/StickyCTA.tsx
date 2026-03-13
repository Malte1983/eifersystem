"use client";

import { useState, useEffect } from "react";
import { MessageSquareText } from "lucide-react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Button erscheint erst, wenn man 400px gescrollt hat
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("kontakt");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToContact}
      className="sticky-cta"
      aria-label="Kontakt aufnehmen"
    >
      <MessageSquareText size={24} />
      <span className="cta-pulse"></span>
    </button>
  );
}