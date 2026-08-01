import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/SiteChrome";
import {
  certifications,
  otherServices,
  pricedServices,
  site,
} from "../site-data";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "See RHE Auto pricing for diagnostics, service calls, and service checks, plus vehicle sales, key programming, and electric-focused help.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Certified technicians service"
        title="Service with the price up front."
        description="Start with the option that fits your concern, then contact RHE Auto to confirm availability and vehicle details."
      />

      <section className="section-shell pricing-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">
              <span /> Service pricing
            </p>
            <h2>Choose your starting point.</h2>
          </div>
          <p>
            Published prices are shown below. Call before visiting to confirm
            timing, compatibility, and the appropriate service for your
            vehicle.
          </p>
        </div>

        <div className="pricing-grid">
          {pricedServices.map((service) => (
            <article className="pricing-card" key={service.name}>
              <div className="pricing-card-top">
                <span>{service.number}</span>
                <strong>{service.price}</strong>
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <a
                href={site.links.appointment}
                target="_blank"
                rel="noreferrer"
              >
                Make an appointment <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-section">
        <div className="section-shell">
          <div className="section-heading section-heading-light">
            <div>
              <p className="eyebrow">
                <span /> More from RHE Auto
              </p>
              <h2>Cars, keys, and electric.</h2>
            </div>
            <p>
              Call with your year, make, model, and the help you need so the
              team can confirm the right next step.
            </p>
          </div>
          <div className="other-service-grid">
            {otherServices.map((service) => (
              <article key={service.name}>
                <span className="service-dot" />
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell credentials-section">
        <div>
          <p className="eyebrow eyebrow-dark">
            <span /> Professional credentials
          </p>
          <h2>Certified technicians service.</h2>
          <p>
            RHE Auto lists the following certifications and professional
            affiliations as part of its service credentials.
          </p>
        </div>
        <div className="credential-grid">
          {certifications.map((certification) => (
            <span key={certification}>{certification}</span>
          ))}
        </div>
      </section>

      <section className="section-shell action-panel">
        <div>
          <span>Ready to schedule?</span>
          <h2>Put your service on the calendar.</h2>
        </div>
        <div className="button-row">
          <a
            className="button button-primary"
            href={site.links.appointment}
            target="_blank"
            rel="noreferrer"
          >
            Make an appointment <span aria-hidden="true">↗</span>
          </a>
          <Link className="button button-light" href="/payment">
            Make a payment
          </Link>
        </div>
      </section>
    </>
  );
}

