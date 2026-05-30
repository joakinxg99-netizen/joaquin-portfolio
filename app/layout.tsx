import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joaquín G. Bravo",
  alternateName: [
    "Joa Brav",
    "Joaquín Bravo",
    "Joaquín Gómez Bravo",
    "Joaquín Emiliano Gómez Bravo",
  ],
  url: "https://www.joabrav.com",
  image: "https://www.joabrav.com/joaquin.jpg",
  jobTitle: "Creative Developer",
  description:
    "Creative developer creating premium digital experiences for professionals and personal brands.",
  sameAs: [
    "https://instagram.com/joa.brv",
    "https://open.spotify.com/intl-es/artist/25JUXI8MfGUhSKUdAatSzt",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://joabrav.com"),
  title: "Joaquín G. Bravo — Creative Developer",
  description:
    "Premium digital experiences for professionals and personal brands.",
  alternates: {
    canonical: "https://joabrav.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Joaquín G. Bravo — Creative Developer",
    description:
      "Premium digital experiences for professionals and personal brands.",
    url: "https://joabrav.com",
    siteName: "Joaquín G. Bravo",
    images: [
      {
        url: "https://joabrav.com/logo.png",
        width: 1536,
        height: 1024,
        alt: "Joaquín G. Bravo — Creative Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joaquín G. Bravo — Creative Developer",
    description:
      "Premium digital experiences for professionals and personal brands.",
    images: [
      {
        url: "https://joabrav.com/logo.png",
        alt: "Joaquín G. Bravo — Creative Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
