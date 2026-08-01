import type { Metadata } from "next";
import {
  MobileActionBar,
  SiteFooter,
  SiteHeader,
} from "./components/SiteChrome";
import { pricedServices, site } from "./site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "RHE Auto | Cars & Auto Service in Columbus, Ohio",
    template: "%s | RHE Auto",
  },
  description:
    "RHE Auto offers vehicle sales, diagnostics, service calls, service checks, key programming, and electric-focused automotive help in Columbus, Ohio.",
  icons: {
    icon: "/rhe-auto-logo.jpg",
    shortcut: "/rhe-auto-logo.jpg",
    apple: "/rhe-auto-logo.jpg",
  },
  openGraph: {
    title: "RHE Auto | Columbus, Ohio",
    description:
      "Cars, diagnostics, service, and electric focus from certified technicians in Columbus, Ohio.",
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "RHE Auto — Cars, diagnostics, and service in Columbus, Ohio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RHE Auto | Columbus, Ohio",
    description: "Cars, diagnostics, service, and electric focus.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: site.name,
  url: site.url,
  image: `${site.url}/rhe-auto-logo.jpg`,
  email: site.email,
  telephone: "+1-614-321-7743",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: "OH",
    postalCode: site.address.postalCode,
    addressCountry: "US",
  },
  employee: {
    "@type": "Person",
    name: site.owner.name,
    jobTitle: site.owner.title,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "RHE Auto Service Pricing",
    itemListElement: pricedServices.map((service) => ({
      "@type": "Offer",
      priceCurrency: "USD",
      price: service.price.replace("$", ""),
      itemOffered: {
        "@type": "Service",
        name: service.name,
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <MobileActionBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
