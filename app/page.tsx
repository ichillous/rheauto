const phoneDisplay = "(614) 321-7743";
const phoneHref = "tel:+16143217743";
const address = "2778 Cleveland Ave, Columbus, OH 43224";
const directionsHref =
  "https://www.google.com/maps/dir/?api=1&destination=2778+Cleveland+Ave%2C+Columbus%2C+OH+43224";

const services = [
  {
    number: "01",
    title: "Used vehicles",
    description:
      "Looking for your next ride? Call to hear what’s currently available and find a vehicle that fits your needs.",
    action: "Ask about inventory",
    href: phoneHref,
  },
  {
    number: "02",
    title: "Auto diagnostics",
    description:
      "Warning light on? Strange sound? Start with a professional diagnostic check to get a clearer picture.",
    action: "Schedule a check",
    href: phoneHref,
  },
  {
    number: "03",
    title: "Key programming",
    description:
      "Get help programming a compatible replacement or spare key for your vehicle.",
    action: "Call for compatibility",
    href: phoneHref,
  },
  {
    number: "04",
    title: "Vehicle checks",
    description:
      "Have a concern about your car? Bring it in for a focused inspection and straightforward next steps.",
    action: "Talk with RHE Auto",
    href: phoneHref,
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="RHE Auto home">
          <span className="brand-mark">
            <img src="/rhe-auto-logo.jpg" alt="" width="64" height="64" />
          </span>
          <span className="brand-copy">
            <strong>RHE AUTO</strong>
            <small>Columbus, Ohio</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">What we do</a>
          <a href="#about">Why RHE</a>
          <a href="#visit">Visit</a>
        </nav>

        <a className="header-call" href={phoneHref}>
          <span>Call now</span>
          <strong>{phoneDisplay}</strong>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />

        <div className="hero-content">
          <p className="eyebrow">
            <span />
            Cars • Diagnostics • Keys
          </p>
          <h1>
            Your next car.
            <br />
            <em>Your current car.</em>
          </h1>
          <p className="hero-lead">
            RHE Auto helps Columbus drivers find a vehicle, understand what
            their car needs, and get back on the road.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={phoneHref}>
              Call {phoneDisplay}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-ghost"
              href={directionsHref}
              target="_blank"
              rel="noreferrer"
            >
              Get directions
            </a>
          </div>
        </div>

        <div className="hero-card">
          <p>Now helping with</p>
          <strong>Vehicle sales &amp; auto services</strong>
          <span>Call for current availability</span>
        </div>
      </section>

      <section className="quick-strip" aria-label="Quick business information">
        <div>
          <span className="strip-label">Located in</span>
          <strong>Columbus, Ohio</strong>
        </div>
        <div>
          <span className="strip-label">Call or text</span>
          <a href={phoneHref}>{phoneDisplay}</a>
        </div>
        <div>
          <span className="strip-label">Visit us</span>
          <a href={directionsHref} target="_blank" rel="noreferrer">
            2778 Cleveland Ave
          </a>
        </div>
      </section>

      <section className="services section-shell" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">
              <span />
              What we do
            </p>
            <h2>More than a car lot.</h2>
          </div>
          <p>
            From finding a dependable ride to figuring out what’s going on
            under the hood, RHE Auto is ready to help.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.href}>
                {service.action}
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-photo">
          <img
            src="/rhe-auto-logo.jpg"
            alt="RHE Auto logo"
            width="1280"
            height="1271"
          />
          <span className="about-stamp">Local • Direct • Helpful</span>
        </div>

        <div className="about-copy">
          <p className="eyebrow eyebrow-dark">
            <span />
            The RHE approach
          </p>
          <h2>Real help starts with a real conversation.</h2>
          <p className="about-lead">
            No complicated forms. No endless phone menu. Tell RHE Auto what you
            need—whether that’s a vehicle, a diagnostic, a key, or a check—and
            get clear next steps.
          </p>
          <div className="about-points">
            <div>
              <span>01</span>
              <p>
                <strong>Tell us what you need</strong>
                Call with the vehicle or service you’re looking for.
              </p>
            </div>
            <div>
              <span>02</span>
              <p>
                <strong>Get availability</strong>
                We’ll let you know what’s available and when to come in.
              </p>
            </div>
            <div>
              <span>03</span>
              <p>
                <strong>Visit RHE Auto</strong>
                Stop by our Cleveland Avenue location in Columbus.
              </p>
            </div>
          </div>
          <a className="text-link" href={phoneHref}>
            Start with a call <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="inventory-callout">
        <div className="inventory-image" aria-hidden="true" />
        <div className="inventory-shade" aria-hidden="true" />
        <div className="inventory-content">
          <p className="eyebrow">
            <span />
            Shopping for a vehicle?
          </p>
          <h2>Inventory changes.<br />The number doesn’t.</h2>
          <p>
            Call RHE Auto to ask what cars are currently available and arrange
            a time to take a closer look.
          </p>
          <a className="button button-primary" href={phoneHref}>
            Ask what’s available <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="visit section-shell" id="visit">
        <div className="visit-heading">
          <p className="eyebrow eyebrow-dark">
            <span />
            Visit RHE Auto
          </p>
          <h2>Let’s get you moving.</h2>
        </div>

        <div className="visit-card">
          <div className="visit-details">
            <span className="visit-kicker">RHE Auto</span>
            <address>
              2778 Cleveland Ave
              <br />
              Columbus, OH 43224
            </address>
            <a className="visit-phone" href={phoneHref}>
              {phoneDisplay}
            </a>
            <p>Call for current vehicle inventory and service availability.</p>
            <div className="visit-actions">
              <a
                className="button button-dark"
                href={directionsHref}
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button button-light"
                href="https://www.facebook.com/rhe.auto.care/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
          <a
            className="map-panel"
            href={directionsHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Get directions to RHE Auto"
          >
            <div className="map-grid" aria-hidden="true" />
            <div className="map-road road-one" aria-hidden="true" />
            <div className="map-road road-two" aria-hidden="true" />
            <div className="map-pin">
              <span>RHE</span>
            </div>
            <strong>2778 Cleveland Ave</strong>
            <span className="map-link">Get directions →</span>
          </a>
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#top">
          <img src="/rhe-auto-logo.jpg" alt="" width="70" height="70" />
          <span>
            <strong>RHE AUTO</strong>
            <small>Sales &amp; auto services</small>
          </span>
        </a>
        <p>Serving drivers in Columbus, Ohio.</p>
        <div className="footer-links">
          <a href={phoneHref}>Call</a>
          <a href={directionsHref} target="_blank" rel="noreferrer">
            Directions
          </a>
          <a
            href="https://www.facebook.com/rhe.auto.care/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>
      </footer>

      <div className="mobile-bar">
        <a href={phoneHref}>Call now</a>
        <a href={directionsHref} target="_blank" rel="noreferrer">
          Directions
        </a>
      </div>
    </main>
  );
}
