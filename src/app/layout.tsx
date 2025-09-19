import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const BASE_URL = "https://futureandhappiness.com";
const DEFAULT_TITLE = "Future of Happiness | Phygital Events & Metaverse Innovation";
const DEFAULT_DESCRIPTION =
  "Future of Happiness delivers phygital events, metaverse experiences, and venture-grade innovation programs that connect founders, investors, and creators across Dubai and the globe.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Future of Happiness",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: "Future of Happiness",
  keywords: [
    "Future of Happiness",
    "phygital events",
    "metaverse event production",
    "Dubai innovation",
    "startup retreats",
    "blockchain conferences",
    "immersive media",
    "venture studio",
  ],
  category: "Business",
  authors: [{ name: "Future and Happiness Events Organizing LLC" }],
  creator: "Future and Happiness",
  publisher: "Future and Happiness Events Organizing LLC",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Future of Happiness",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Future of Happiness logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/apple-touch-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/apple-touch-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/apple-touch-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/apple-touch-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-touch-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#401344' },
  ],
  colorScheme: 'light dark',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Future of Happiness',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: DEFAULT_DESCRIPTION,
    telephone: '+971589812017',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Future of Happiness',
    url: BASE_URL,
    inLanguage: 'en',
    description: DEFAULT_DESCRIPTION,
  };

  return (
    <html lang="en">
      <head>
        <script src="https://player.vimeo.com/api/player.js" async />
        <meta name="msapplication-TileColor" content="#401344" />
        <meta name="msapplication-TileImage" content="/favicon-144x144.png" />
        <meta name="theme-color" content="#401344" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href={BASE_URL} />
        <Script id="ld-json-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <Script id="ld-json-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(websiteJsonLd)}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
