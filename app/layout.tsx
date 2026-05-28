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
  title: "JØA BRAV — Web Developer & Techno Producer",
  description:
    "Premium web experiences, creative development and electronic music identity.",
  alternates: {
    canonical: "https://joabrav.com",
  },
  icons: {
    icon: "/joabrav-logo.png",
    shortcut: "/joabrav-logo.png",
    apple: "/joabrav-logo.png",
  },
  openGraph: {
    title: "JØA BRAV — Web Developer & Techno Producer",
    description:
      "Premium web experiences, creative development and electronic music identity.",
    url: "https://joabrav.com",
    siteName: "JØA BRAV",
    images: [
      {
        url: "https://joabrav.com/joabrav-logo.png",
        width: 1536,
        height: 1024,
        alt: "JØA BRAV — Web Developer and Techno Producer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JØA BRAV — Web Developer & Techno Producer",
    description:
      "Premium web experiences, creative development and electronic music identity.",
    images: [
      {
        url: "https://joabrav.com/joabrav-logo.png",
        alt: "JØA BRAV — Web Developer and Techno Producer",
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
