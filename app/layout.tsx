import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Poppins } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://weboin.com'),
  title: {
    default: "Weboin | Immersive Digital Web Experiences & Marketing",
    template: "%s | Weboin"
  },
  description: "Weboin is a premium creative agency specializing in immersive, interactive, and high-performance WebGL experiences, digital marketing, UI/UX, and branding.",
  keywords: ["digital marketing agency", "creative agency Chennai", "immersive web design", "WebGL websites", "UI/UX design studio", "weboin logo", "web development services"],
  authors: [{ name: "Saif Ali Khan" }],
  creator: "Saif Ali Khan",
  publisher: "Weboin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://weboin.com',
  },
  openGraph: {
    title: "Weboin | Immersive Digital Web Experiences & Marketing",
    description: "Weboin is a premium creative agency specializing in immersive, interactive, and high-performance WebGL experiences, digital marketing, UI/UX, and branding.",
    url: 'https://weboin.com',
    siteName: 'Weboin',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/weboin_logo.webp',
        width: 800,
        height: 600,
        alt: 'Weboin Creative Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Weboin | Immersive Digital Web Experiences & Marketing",
    description: "Weboin is a premium creative agency specializing in immersive, interactive, and high-performance WebGL experiences, digital marketing, UI/UX, and branding.",
    creator: '@weboin',
    images: ['/weboin_logo.webp'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Weboin",
  "url": "https://weboin.com",
  "logo": "https://weboin.com/weboin_logo.webp",
  "sameAs": [
    "https://www.facebook.com/weboin",
    "https://www.instagram.com/weboin",
    "https://twitter.com/weboin"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9403891477",
    "contactType": "sales",
    "areaServed": "IN",
    "availableLanguage": "en"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "766, 1st floor, Shakti Towers, Anna Salai",
    "addressLocality": "Chennai",
    "postalCode": "600002",
    "addressCountry": "IN"
  },
  "description": "Weboin is a premium creative digital marketing agency specializing in immersive UI/UX, web development, branding, and high-performance WebGL experiences."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
