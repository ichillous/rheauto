import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "../components/SiteChrome";
import { certifications, site } from "../site-data";

export const metadata: Metadata = {
  title: "About Hughes R.",
  description:
    "Meet Hughes R., CEO of RHE Auto, and learn about the Columbus automotive business's electric focus and professional service credentials.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About RHE Auto"
        title="Local leadership. Direct service."
        description="Hughes R. leads RHE Auto with a hands-on approach to vehicle sales, service, diagnostics, and electric-focused automotive work."
      />

      <section className="section-shell owner-section">
        <div className="owner-logo-panel">
          <Image
            src="/rhe-auto-logo.jpg"
            alt="RHE Auto logo"
            width={1280}
            height={1271}
          />
          <span>{site.owner.focus}</span>
        </div>
        <div className="owner-copy">
          <p className="eyebrow eyebrow-dark">
            <span /> CEO • RHE Auto
          </p>
          <h2>{site.owner.name}</h2>
          <p className="owner-intro">
            RHE Auto is built around direct access to the person leading the
            business. Hughes helps customers take the next step—whether that is
            asking about a vehicle, arranging a diagnostic, scheduling service,
            or discussing an electric-focused automotive need.
          </p>
          <div className="owner-actions">
            <a href={`mailto:${site.email}`}>Email Hughes →</a>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer">
              Connect on LinkedIn →
            </a>
            <a href={site.links.facebook} target="_blank" rel="noreferrer">
              Connect on Facebook →
            </a>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="section-shell values-grid">
          <article>
            <span>01</span>
            <h3>Direct</h3>
            <p>
              Call, email, schedule online, or send a WhatsApp message without
              working through a complicated contact system.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Transparent</h3>
            <p>
              Core diagnostic, service call, and service check prices are
              published so customers can start with clear information.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Local</h3>
            <p>
              RHE Auto serves Columbus from its Cleveland Avenue office and
              service location.
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell about-credentials">
        <div>
          <p className="eyebrow eyebrow-dark">
            <span /> Certified technicians service
          </p>
          <h2>Credentials that support the work.</h2>
        </div>
        <div className="credential-list-large">
          {certifications.map((certification, index) => (
            <div key={certification}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{certification}</strong>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
