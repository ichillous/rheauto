import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/SiteChrome";
import { site } from "../site-data";

export const metadata: Metadata = {
  title: "Contact & Appointments",
  description:
    "Call, email, message, schedule, or visit RHE Auto at 2778 Cleveland Ave in Columbus, Ohio.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact RHE Auto"
        title="Choose the way you want to connect."
        description="Call the team, reach Hughes online, schedule an appointment, or get directions to the Cleveland Avenue office."
      />

      <section className="section-shell contact-section">
        <div className="contact-primary">
          <p className="eyebrow eyebrow-dark">
            <span /> Call RHE Auto
          </p>
          <h2>Talk with a real person.</h2>
          <div className="phone-list">
            {site.phones.map((phone) => (
              <a href={phone.href} key={phone.href}>
                <span>{phone.label}</span>
                <strong>{phone.display}</strong>
                <small>Call now →</small>
              </a>
            ))}
          </div>
          <a className="email-link" href={`mailto:${site.email}`}>
            <span>Email</span>
            <strong>{site.email}</strong>
          </a>
        </div>

        <a
          className="office-card"
          href={site.links.directions}
          target="_blank"
          rel="noreferrer"
        >
          <div className="office-map" aria-hidden="true">
            <span>RHE</span>
          </div>
          <div>
            <span>Office</span>
            <address>
              2778 Cleveland Ave
              <br />
              Columbus, Ohio 43224
            </address>
            <small>Open directions →</small>
          </div>
        </a>
      </section>

      <section className="section-shell contact-links-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">
              <span /> Online options
            </p>
            <h2>Schedule, message, or connect.</h2>
          </div>
          <p>
            Use the channel that works best for you. Appointments open in
            Calendly and payments open securely through PayPal.
          </p>
        </div>

        <div className="contact-link-grid">
          <a href={site.links.appointment} target="_blank" rel="noreferrer">
            <span>Appointment</span>
            <strong>Schedule with RHE Auto</strong>
            <small>Open Calendly ↗</small>
          </a>
          <a href={site.links.whatsapp} target="_blank" rel="noreferrer">
            <span>Message</span>
            <strong>Connect on WhatsApp</strong>
            <small>Start a conversation ↗</small>
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noreferrer">
            <span>Professional</span>
            <strong>Connect on LinkedIn</strong>
            <small>View profile ↗</small>
          </a>
          <a href={site.links.facebook} target="_blank" rel="noreferrer">
            <span>Social</span>
            <strong>Friend RHE Auto on Facebook</strong>
            <small>Open Facebook ↗</small>
          </a>
        </div>

        <div className="contact-payment-banner">
          <div>
            <span>Already received service?</span>
            <strong>Make a payment online.</strong>
          </div>
          <Link className="button button-primary" href="/payment">
            Payment options <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

