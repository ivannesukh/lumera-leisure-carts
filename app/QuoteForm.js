"use client";

import { useState } from "react";
import { site } from "./site.config";

const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

const EMPTY = {
  model: "",
  name: "",
  email: "",
  phone: "",
  town: "",
  colors: "",
  message: "",
};

export default function QuoteForm() {
  const [values, setValues] = useState(EMPTY);
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const set = (key) => (e) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "quote", ...values, "bot-field": company }),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus("done");
      setValues(EMPTY);
    } catch (error) {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="success" role="status">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="m5 12.5 4.5 4.5L19 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>
          <strong>Got it.</strong> We&rsquo;ll come back to you with a quote,
          usually the same day.
        </p>
      </div>
    );
  }

  return (
    <form
      className="quote"
      name="quote"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="quote" />
      <p className="hp" aria-hidden="true">
        <label>
          Leave this empty:{" "}
          <input
            name="bot-field"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
      </p>

      <label className="fieldset">
        <span>Which model</span>
        <select name="model" value={values.model} onChange={set("model")}>
          <option value="">Not sure yet — help me choose</option>
          {site.models.map((m) => (
            <option key={m.slug} value={m.name}>
              {m.name} — {m.tagline}
            </option>
          ))}
        </select>
      </label>

      <div className="grid2">
        <label className="fieldset">
          <span>Name</span>
          <input name="name" required value={values.name} onChange={set("name")} />
        </label>
        <label className="fieldset">
          <span>Email</span>
          <input
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={set("email")}
          />
        </label>
        <label className="fieldset">
          <span>
            Phone <em>optional</em>
          </span>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set("phone")}
          />
        </label>
        <label className="fieldset">
          <span>
            Your town <em>for delivery</em>
          </span>
          <input name="town" value={values.town} onChange={set("town")} />
        </label>
      </div>

      <label className="fieldset">
        <span>
          Color combination <em>optional</em>
        </span>
        <input
          name="colors"
          placeholder="Body / seats / trim — e.g. matte black body, tan seats"
          value={values.colors}
          onChange={set("colors")}
        />
      </label>

      <label className="fieldset">
        <span>
          Anything else <em>optional</em>
        </span>
        <textarea
          name="message"
          rows={4}
          value={values.message}
          onChange={set("message")}
        />
      </label>

      <div className="submit">
        <button className="btn btn--lg" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Request a quote"}
        </button>
        <p className={status === "error" ? "note note--error" : "note"}>
          {status === "error"
            ? "Something went wrong — please call or email us instead."
            : "No obligation. We'll reply with pricing and availability."}
        </p>
      </div>
    </form>
  );
}
