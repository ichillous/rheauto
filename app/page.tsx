import Link from "next/link";
import {
  certifications,
  pricedServices,
  site,
} from "./site-data";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-image" aria-hidden="true" />
        <div className="home-hero-shade" aria-hidden="true" />
        <div className="home-hero-content">
          <p className="eyebrow">
            <span /> Cars • Diagnostics • Service • Electric
          </p>
          <h1>
            Built to keep
            <br />
            <em>Columbus moving.</em>
          </h1>
          <p className="hero-lead">
            RHE Auto brings vehicle sales and certified technicians service
            together at one Cleveland Avenue location.
          </p>
          <div className="button-row">
            <a
              className="button button-primary"
              href={site.links.appointment}
              target="_blank"
              rel="noreferrer"
            >
              Make an appointment <span aria-hidden="true">↗</span>
            </a>
            <Link className="button button-ghost" href="/services">
              View services &amp; prices
            </Link>
          </div>
        </div>
        <div className="owner-card">
          <span>Meet the CEO</span>
          <strong>{site.owner.name}</strong>
          <p>{site.owner.focus} • RHE Auto</p>
        </div>
      </section>

      <section className="home-price-strip" aria-label="Service prices">
        {pricedServices.map((service) => (
          <Link href="/services" key={service.name}>
            <span>{service.name}</span>
            <strong>{service.price}</strong>
          </Link>
        ))}
        <a
          className="price-strip-action"
          href={site.links.appointment}
          target="_blank"
          rel="noreferrer"
        >
          Schedule service <span aria-hidden="true">→</span>
        </a>
      </section>

      <section className="section-shell intro-section">
        <div>
          <p className="eyebrow eyebrow-dark">
            <span /> One local automotive team
          </p>
          <h2>More than a car lot.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Shop for your next vehicle, arrange a diagnostic, schedule a
            service call, or get a focused service check. RHE Auto makes the
            next step direct and easy to understand.
          </p>
          <Link className="text-link" href="/services">
            Explore every service <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="section-shell featured-grid">
        <article className="feature-card feature-dark">
          <span className="feature-number">01</span>
          <h3>Certified technicians service</h3>
          <p>
            Automotive service backed by the credentials and professional
            affiliations RHE Auto brings to the job.
          </p>
          <Link href="/about">Meet RHE Auto →</Link>
        </article>
        <article className="feature-card feature-photo">
          <div className="feature-photo-image" aria-hidden="true" />
          <div className="feature-photo-shade" aria-hidden="true" />
          <div>
            <span className="feature-number">02</span>
            <h3>Looking for a vehicle?</h3>
            <p>Inventory changes. Call to ask what is currently available.</p>
            <a href={site.phones[0].href}>Call {site.phones[0].display} →</a>
          </div>
        </article>
        <article className="feature-card feature-green">
          <span className="feature-number">03</span>
          <h3>Need a faster answer?</h3>
          <p>
            Message RHE Auto directly on WhatsApp with your vehicle and service
            question.
          </p>
          <a href={site.links.whatsapp} target="_blank" rel="noreferrer">
            Open WhatsApp →
          </a>
        </article>
      </section>

      <section className="certification-band">
        <div className="section-shell">
          <p>Credentials &amp; affiliations</p>
          <div className="certification-list">
            {certifications.map((certification) => (
              <span key={certification}>{certification}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="home-contact section-shell">
        <div className="home-contact-copy">
          <p className="eyebrow eyebrow-dark">
            <span /> RHE Auto • Columbus
          </p>
          <h2>Start with a real conversation.</h2>
          <p>
            Tell Hughes and the RHE Auto team what you need. Call, schedule
            online, or visit the Cleveland Avenue office.
          </p>
          <div className="button-row">
            <a className="button button-dark" href={site.phones[0].href}>
              Call {site.phones[0].display}
            </a>
            <Link className="button button-outline" href="/contact">
              Contact options
            </Link>
          </div>
        </div>
        <a
          className="address-card"
          href={site.links.directions}
          target="_blank"
          rel="noreferrer"
        >
          <span>Visit the office</span>
          <strong>
            2778 Cleveland Ave
            <br />
            Columbus, Ohio 43224
          </strong>
          <small>Open in Maps →</small>
        </a>
      </section>
    </>
  );
}
