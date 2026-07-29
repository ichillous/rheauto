import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RHE Auto | Cars & Auto Services in Columbus, Ohio",
  description:
    "RHE Auto offers used vehicles, diagnostics, key programming, and vehicle checks at 2778 Cleveland Ave in Columbus, Ohio.",
  icons: {
    icon: "/rhe-auto-logo.jpg",
    shortcut: "/rhe-auto-logo.jpg",
    apple: "/rhe-auto-logo.jpg",
  },
  openGraph: {
    title: "RHE Auto | Columbus, Ohio",
    description:
      "Used vehicles, diagnostics, key programming, and vehicle checks. Call RHE Auto at (614) 321-7743.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
