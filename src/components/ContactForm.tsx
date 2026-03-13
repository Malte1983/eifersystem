"use client";

import { FormEvent, useState } from "react";

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
    } catch {
      setStatus("error");
      setMessage("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="access_key"
        value="2471dbc2-a370-4fee-9674-28248c6d59b9"
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
  <label className="consent-label">
    <input
      type="checkbox"
      name="privacy"
      required
    />

    <span>
      Ich habe die{" "}
      <a href="/datenschutz" target="_blank" rel="noopener noreferrer">
        Datenschutzerklärung
      </a>{" "}
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