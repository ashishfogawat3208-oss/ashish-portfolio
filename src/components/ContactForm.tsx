"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "setup">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(values.entries())),
      });
      const data = await response.json();
      if (response.status === 503) {
        setStatus("setup");
        setMessage("Email delivery needs to be configured. You can still send your message directly by email.");
        return;
      }
      if (!response.ok) throw new Error(data.error || "Message could not be sent. Please try again.");
      setStatus("success");
      setMessage("Thanks! Your message has been sent successfully.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please email Ashish directly.");
    }
  }

  return (
    <div className="contact-form-wrap">
      <form className="contact-form" onSubmit={submit}>
        <div className="contact-form-row">
          <label>Your name<input name="name" required minLength={2} maxLength={80} placeholder="Name" autoComplete="name" /></label>
          <label>Email address<input name="email" type="email" required maxLength={160} placeholder="you@example.com" autoComplete="email" /></label>
        </div>
        <label>Subject<input name="subject" required minLength={3} maxLength={120} placeholder="Job opportunity / collaboration" /></label>
        <label>Message<textarea name="message" required minLength={10} maxLength={3000} rows={5} placeholder="Tell me a little about what you have in mind…" /></label>
        <input className="contact-honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <div className="contact-submit-row"><button className="button button-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message ↗"}</button><span>Or email <a href="mailto:ashishfogawat3208@gmail.com">ashishfogawat3208@gmail.com</a></span></div>
        {message && <p className={`contact-form-status ${status}`} role="status">{message} {status === "setup" && <a href="mailto:ashishfogawat3208@gmail.com">Open email ↗</a>}</p>}
      </form>
      <p className="contact-privacy">Your details are used only to respond to your enquiry.</p>
    </div>
  );
}
