import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joabrav.com"),
  title: "Joaquín G. Bravo — Creative Developer",
  description:
    "Premium digital experiences for professionals and personal brands.",
  alternates: {
    canonical: "https://joabrav.com",
  },
  icons: {
    icon: "/joabrav-logo.png",
    shortcut: "/joabrav-logo.png",
    apple: "/joabrav-logo.png",
  },
  openGraph: {
    title: "Joaquín G. Bravo — Creative Developer",
    description:
      "Premium digital experiences for professionals and personal brands.",
    url: "https://joabrav.com",
    siteName: "Joaquín G. Bravo",
    images: [
      {
        url: "https://joabrav.com/joabrav-logo.png",
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
        url: "https://joabrav.com/joabrav-logo.png",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
