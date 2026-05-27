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
    "Premium digital experiences, cinematic design and techno identity.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "JØA BRAV — Web Developer & Techno Producer",
    description:
      "Premium digital experiences, cinematic design and techno identity.",
    url: "https://joabrav.com",
    siteName: "JØA BRAV",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
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
      "Premium digital experiences, cinematic design and techno identity.",
    images: [
      {
        url: "/twitter-image",
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
