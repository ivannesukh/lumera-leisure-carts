import QuoteForm from "./QuoteForm";
import { site } from "./site.config";

const telHref = "tel:+1" + site.phone.replace(/\D/g, "");

function Icon({ name }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (name === "seats")
    return (
      <svg {...common}>
        <path d="M4 18v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
        <path d="M7 13V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6" />
        <path d="M6 18v2M18 18v2" />
      </svg>
    );
  if (name === "check")
    return (
      <svg {...common}>
        <path d="M4.5 12.5 9 17l10.5-10.5" />
      </svg>
    );
  if (name === "badge")
    return (
      <svg {...common}>
        <path d="M12 3 4 6.5v5.2c0 4.6 3.3 8.2 8 9.3 4.7-1.1 8-4.7 8-9.3V6.5z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  if (name === "key")
    return (
      <svg {...common}>
        <circle cx="8" cy="12" r="4" />
        <path d="M12 12h9M18 12v3.5M15.5 12v2.5" />
      </svg>
    );
  if (name === "pin")
    return (
      <svg {...common}>
        <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.6" />
      </svg>
    );
  if (name === "truck")
    return (
      <svg {...common}>
        <path d="M3 16V6h11v10M14 9h4l3 3.2V16" />
        <circle cx="7" cy="17.5" r="2" />
        <circle cx="17.5" cy="17.5" r="2" />
      </svg>
    );
  if (name === "phone")
    return (
      <svg {...common} width="16" height="16">
        <path d="M7.3 4h-2A2.3 2.3 0 0 0 3 6.4C3 14 10 21 17.6 21a2.3 2.3 0 0 0 2.4-2.3v-2l-4.3-1.7-2 2a13.9 13.9 0 0 1-5.7-5.7l2-2L8.3 5Z" />
      </svg>
    );
  if (name === "mail")
    return (
      <svg {...common} width="16" height="16">
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m4 7.5 7.1 5.1a1.5 1.5 0 0 0 1.8 0L20 7.5" />
      </svg>
    );
  return null;
}

const PILLAR_ICONS = ["seats", "check", "badge", "key"];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={site.name}>
          <img src="/lumera-logo.webp" width="900" height="886" alt={site.name} />
        </a>

        <p className="wordmark" aria-hidden="true">
          <span className="wordmark-script">Lumera</span>
          <span className="wordmark-sub">
            <i aria-hidden="true" />
            Leisure Carts
            <i aria-hidden="true" />
          </span>
        </p>

        <nav className="header-actions">
          <a className="link link--phone" href={telHref}>
            <Icon name="phone" />
            <span>{site.phone}</span>
          </a>
          <a className="btn btn--sm" href="#quote">
            Request a quote
          </a>
        </nav>
      </header>

      <main id="top">
        {/* ---------------- hero ---------------- */}
        <section className="hero">
          <div className="glow glow--sun" aria-hidden="true" />
          <div className="glow glow--teal" aria-hidden="true" />
          <svg className="waves" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
            <path fill="#f7f0e2" d="M0 192c120-32 240-48 360-32s240 64 360 64 240-48 360-64 240 0 360 32v128H0Z" />
          </svg>

          <div className="wrap hero-inner">
            <p className="eyebrow">
              <span className="dot" aria-hidden="true" />
              {site.status}
            </p>

            <h1>
              {site.headlineTop}
              <span className="accent">{site.headlineAccent}</span>
            </h1>

            <p className="lede">{site.lede}</p>

            <ul className="specs">
              {site.specs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>

            <div className="cta-row">
              <a className="btn btn--lg" href="#quote">
                Request a quote
              </a>
              <a className="btn btn--ghost btn--lg" href={telHref}>
                Call {site.phone}
              </a>
            </div>
          </div>
        </section>


        {/* ---------------- fleet ---------------- */}
        <section className="band" id="fleet">
          <div className="wrap">
            <h2 className="section-title">Two models this round</h2>
            <p className="body body--center">
              Both seat six. The difference is how they seat them, and how much
              room they take up doing it.
            </p>

            <div className="models">
              {site.models.map((m) => (
                <article className="model" key={m.slug}>
                  <div className="model-photo">
                    <img src={m.image} width="900" height="860" alt={`${m.name} golf cart`} loading="lazy" />
                  </div>
                  <div className="model-body">
                    <p className="model-tagline">{m.tagline}</p>
                    <h3>{m.name}</h3>
                    <p className="model-blurb">{m.blurb}</p>
                    <dl className="model-specs">
                      {m.specs.map(([k, v]) => (
                        <div key={k}>
                          <dt>{k}</dt>
                          <dd>{v}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="model-actions">
                      <a className="btn" href="#quote">
                        Request a quote
                      </a>
                      <a className="link" href={telHref}>
                        <Icon name="phone" />
                        Call instead
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <ul className="shared-specs">
              {site.sharedSpecs.map((sp) => (
                <li key={sp}>
                  <Icon name="check" />
                  {sp}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------- pillars ---------------- */}
        <section className="band">
          <div className="wrap">
            <h2 className="section-title">What you&rsquo;re getting</h2>
            <ul className="pillars">
              {site.pillars.map((p, i) => (
                <li key={p.title}>
                  <span className="pillar-icon" aria-hidden="true">
                    <Icon name={PILLAR_ICONS[i]} />
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------- colors ---------------- */}
        <section className="band band--tint">
          <div className="wrap split">
            <div>
              <h2 className="section-title">Your combination, not ours</h2>
              <p className="body">
                Tell us how you want it finished and we&rsquo;ll build the quote around
                it. Say what you have in mind in the form — if a combination
                isn&rsquo;t possible, we&rsquo;ll tell you straight rather than
                quietly substituting something.
              </p>
              <ul className="chips">
                <li>Body color</li>
                <li>Seat color</li>
                <li>Trim &amp; wheels</li>
              </ul>
            </div>
            <a className="cta-card" href="#quote">
              <strong>Have a color in mind?</strong>
              <span>Put it in the form and we&rsquo;ll price it.</span>
              <span className="cta-card-go" aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        {/* ---------------- where ---------------- */}
        <section className="band">
          <div className="wrap">
            <h2 className="section-title">Where to find us</h2>
            <div className="where">
              <div className="where-areas">
                {site.areas.map((a) => (
                  <p key={a} className="where-item">
                    <span className="pillar-icon pillar-icon--sm" aria-hidden="true">
                      <Icon name="pin" />
                    </span>
                    {a}
                  </p>
                ))}
              </div>
              <p className="where-item where-item--wide">
                <span className="pillar-icon pillar-icon--sm" aria-hidden="true">
                  <Icon name="truck" />
                </span>
                {site.deliveryNote}
              </p>
            </div>
          </div>
        </section>


        {/* ---------------- cta band ---------------- */}
        <section className="cta-band">
          <div className="wrap cta-band-inner">
            <div>
              <h2>Know what you want? Let&rsquo;s price it.</h2>
              <p>
                Tell us the model and the colors and we&rsquo;ll come back with a
                number, usually the same day.
              </p>
            </div>
            <div className="cta-band-actions">
              <a className="btn btn--lg btn--amber" href="#quote">
                Request a quote
              </a>
              <a className="btn btn--lg btn--outline" href={telHref}>
                Call {site.phone}
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- quote ---------------- */}
        <section className="band band--tint" id="quote">
          <div className="wrap wrap--narrow">
            <h2 className="section-title">Request a quote</h2>
            <p className="body body--center">
              Stock is on its way. Get your request in now and you&rsquo;ll be at the
              front of the queue when it lands.
            </p>
            <QuoteForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <img className="footer-logo" src="/lumera-logo.webp" width="900" height="886" alt="" />
          <div className="footer-contact">
            <a className="link" href={telHref}>
              <Icon name="phone" />
              {site.phone}
            </a>
            <a className="link" href={`mailto:${site.email}`}>
              <Icon name="mail" />
              {site.email}
            </a>
          </div>
          <p className="footer-meta">
            <span>&copy; {new Date().getFullYear()} {site.name}</span>
            <span className="sep">&bull;</span>
            <span>Serving the Sarasota and Orlando areas &mdash; delivery statewide</span>
          </p>
        </div>
      </footer>
    </>
  );
}
