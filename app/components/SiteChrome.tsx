import Image from "next/image";
import Link from "next/link";
import { site } from "../site-data";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="RHE Auto home">
        <span className="brand-mark">
          <Image src="/rhe-auto-logo.jpg" alt="" width={60} height={60} />
        </span>
        <span className="brand-copy">
          <strong>RHE AUTO</strong>
          <small>Columbus, Ohio</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <a className="header-call" href={site.phones[0].href}>
          <span>Call now</span>
          <strong>{site.phones[0].display}</strong>
        </a>
        <Link className="header-payment" href="/payment">
          Make a payment
        </Link>
      </div>

      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/payment">Make a payment</Link>
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="footer-brand" href="/">
          <Image src="/rhe-auto-logo.jpg" alt="" width={70} height={70} />
          <span>
            <strong>RHE AUTO</strong>
            <small>Certified Technicians Service</small>
          </span>
        </Link>
        <p>
          Cars, diagnostics, service, and electric focus from a local Columbus
          automotive business.
        </p>
        <a className="footer-phone" href={site.phones[0].href}>
          <small>Call RHE Auto</small>
          <strong>{site.phones[0].display}</strong>
        </a>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} RHE Auto</span>
        <nav aria-label="Footer navigation">
          {navItems.slice(1).map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </nav>
      </div>
    </footer>
  );
}

export function MobileActionBar() {
  return (
    <div className="mobile-bar">
      <a href={site.phones[0].href}>Call now</a>
      <a href={site.links.appointment} target="_blank" rel="noreferrer">
        Appointment
      </a>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="page-hero-content">
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
