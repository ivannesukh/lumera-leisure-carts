"use client";

import { useState } from "react";

const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "waitlist",
          email,
          "bot-field": company,
        }),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus("done");
      setEmail("");
    } catch (error) {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="success" role="status">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="m5 12.5 4.5 4.5L19 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        You&rsquo;re on the list. We&rsquo;ll be in touch before we open.
      </p>
    );
  }

  return (
    <form
      className="form"
      name="waitlist"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="waitlist" />
      <p className="hp" aria-hidden="true">
        <label>
          Don&rsquo;t fill this out if you&rsquo;re human:{" "}
          <input
            name="bot-field"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
      </p>

      <div className="field">
        <label className="hp" htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Adding…" : "Notify me"}
        </button>
      </div>

      <p className={status === "error" ? "note note--error" : "note"}>
        {status === "error"
          ? "Something went wrong. Please email us instead."
          : "Launch news only. No spam, unsubscribe anytime."}
      </p>
    </form>
  );
}
