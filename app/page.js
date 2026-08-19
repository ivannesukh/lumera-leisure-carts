import WaitlistForm from "./WaitlistForm";
import { site } from "./site.config";

const telHref = "tel:+1" + site.phone.replace(/\D/g, "");

export default function Home() {
  return (
    <main className="page">
      <div className="glow glow--teal" aria-hidden="true" />
      <div className="glow glow--sun" aria-hidden="true" />

      <svg
        className="waves"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#eef3f2"
          d="M0 192c120-32 240-48 360-32s240 64 360 64 240-48 360-64 240 0 360 32v128H0Z"
        />
        <path
          fill="#e3ecec"
          d="M0 240c144-40 288-24 432 8s288 56 432 24 288-56 432-40v88H0Z"
          opacity=".9"
        />
      </svg>

      <div className="content">
        <svg className="mark" viewBox="0 0 96 96" role="img" aria-label={site.name}>
          <circle cx="48" cy="48" r="46" fill="#ffffff" stroke="#e4dbcd" strokeWidth="1.5" />
          <circle cx="48" cy="40" r="12" fill="none" stroke="#e2b26e" strokeWidth="2.5" />
          <g stroke="#e2b26e" strokeWidth="2.5" strokeLinecap="round">
            <path d="M48 20v-5M48 65v5M68 40h5M23 40h5M62.1 26h0M33.9 26h0" />
            <path d="M62.1 25.9 65.6 22.4M30.4 22.4l3.5 3.5" />
          </g>
          <g
            stroke="#0e7c86"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          >
            <path d="M20 62c5.6 0 5.6 5 11.2 5s5.6-5 11.2-5 5.6 5 11.2 5 5.6-5 11.2-5 5.6 5 11.2 5" />
            <path d="M20 74c5.6 0 5.6 5 11.2 5s5.6-5 11.2-5 5.6 5 11.2 5 5.6-5 11.2-5 5.6 5 11.2 5" opacity=".45" />
          </g>
        </svg>

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
