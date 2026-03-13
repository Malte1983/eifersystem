"use client";

import { FormEvent, useState } from "react";
import Link from "next/link"; // Hinzugefügt: Next.js Link-Komponente

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setMessage("Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.");
        form.reset();
        return;
      }

      setStatus("error");
      setMessage("Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.");
    } catch (error) {
      // ANPASSUNG 1: Catch-Block gibt den Fehler in der Entwickler-Konsole aus
      console.error("Fehler beim Senden des Kontaktformulars:", error);
      setStatus("error");
      setMessage("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="access_key"
        value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY}
      />

      <input
        type="hidden"
        name="subject"
        value="Neue Anfrage über eifel-systems.de"
      />

      <input
        type="hidden"
        name="from_name"
        value="Eifel-Systems Website"
      />

      <input
        type="checkbox"
        name="botcheck"
        className="hidden-botcheck"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Ihr Name"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="ihre@email.de"
            required
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="company">Unternehmen</label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Optional"
        />
      </div>

      <div className="form-field">
        <label htmlFor="message">Nachricht</label>
        <textarea
          id="message"
          name="message"
          placeholder="Erzählen Sie kurz etwas über Ihr Projekt"
          rows={6}
          required
        />
      </div>

      <div className="form-consent">
        {/* ANPASSUNG 2: Input und Label getrennt und semantisch über ID & htmlFor verknüpft */}
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          required
        />
        <label htmlFor="privacy" className="consent-label">
          <span>
            Ich habe die{" "}
            <Link href="/datenschutz" target="_blank" rel="noopener noreferrer">
              Datenschutzerklärung
            </Link>{" "}
            gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner
            Anfrage zu.
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Wird gesendet..." : "Nachricht senden"}
      </button>

      {message && (
        <p
          className={`form-status ${
            status === "success" ? "form-status-success" : "form-status-error"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}