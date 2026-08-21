import WaitlistForm from "./WaitlistForm";
import { site } from "./site.config";

const telHref = "tel:+1" + site.phone.replace(/\D/g, "");

export default function Home() {
  return (
    <main className="page">
      <div className="glow glow--sun" aria-hidden="true" />
      <div className="glow glow--teal" aria-hidden="true" />

      <svg
        className="waves"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#f4ecd9"
          d="M0 192c120-32 240-48 360-32s240 64 360 64 240-48 360-64 240 0 360 32v128H0Z"
        />
        <path
          fill="#eee2c6"
          d="M0 240c144-40 288-24 432 8s288 56 432 24 288-56 432-40v88H0Z"
          opacity=".85"
        />
      </svg>

      <div className="content">
        <img
          className="logo"
          src="/lumera-logo.webp"
          width="900"
          height="886"
          alt={site.name}
          fetchPriority="high"
        />

        <p className="eyebrow">
          <span className="dot" aria-hidden="true" />
          {site.tagline}
        </p>

        <h1>
          {site.headlineTop}
          <span className="accent">{site.headlineAccent}</span>
        </h1>

        <div className="rule" aria-hidden="true" />

        <p className="lede">{site.lede}</p>

        <ul className="specs">
          {site.specs.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        </ul>

        <WaitlistForm />

        <div className="contact">
          <a className="link" href={`mailto:${site.email}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2.5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="m4 7.5 7.1 5.1a1.5 1.5 0 0 0 1.8 0L20 7.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            {site.email}
          </a>

          {site.phone ? (
            <a className="link" href={telHref}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7.3 4h-2A2.3 2.3 0 0 0 3 6.4C3 14 10 21 17.6 21a2.3 2.3 0 0 0 2.4-2.3v-2l-4.3-1.7-2 2a13.9 13.9 0 0 1-5.7-5.7l2-2L8.3 5Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
              {site.phone}
            </a>
          ) : null}
        </div>
      </div>

      <footer className="footer">
        <span>&copy; {new Date().getFullYear()} {site.name}</span>
        <span className="sep">&bull;</span>
        <span>{site.domain}</span>
      </footer>
    </main>
  );
}
