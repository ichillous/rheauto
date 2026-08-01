import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../components/SiteChrome";
import { site } from "../site-data";

export const metadata: Metadata = {
  title: "Make a Payment",
  description:
    "Make a payment to RHE Auto through the official Hughes R. PayPal payment link.",
  alternates: { canonical: "/payment" },
};

export default function PaymentPage() {
  return (
    <>
      <PageHero
        eyebrow="RHE Auto payments"
        title="A direct way to pay."
        description="Continue to the official Hughes R. PayPal page to complete your RHE Auto payment."
      />

      <section className="section-shell payment-section">
        <div className="payment-card">
          <div className="payment-logo">
            <Image
              src="/rhe-auto-logo.jpg"
              alt="RHE Auto logo"
              width={1280}
              height={1271}
            />
          </div>
          <div className="payment-copy">
            <span>Make a payment</span>
            <h2>Pay Hughes R. / RHE Auto</h2>
            <p>
              You will leave rheauto.com and continue to PayPal. Confirm the
              recipient and payment amount before sending funds.
            </p>
            <a
              className="button button-primary"
              href={site.links.payment}
              target="_blank"
              rel="noreferrer"
            >
              Continue to PayPal <span aria-hidden="true">↗</span>
            </a>
            <small>
              PayPal processes the transaction. RHE Auto does not collect your
              PayPal sign-in or payment credentials on this website.
            </small>
          </div>
        </div>

        <div className="payment-help">
          <div>
            <span>Have a payment question?</span>
            <strong>Call {site.phones[0].display}</strong>
          </div>
          <div className="button-row">
            <a className="button button-dark" href={site.phones[0].href}>
              Call RHE Auto
            </a>
            <Link className="button button-outline" href="/contact">
              All contact options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
