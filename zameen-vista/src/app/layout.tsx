import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import { SmoothScrollProvider } from "./_components/smooth-scroll-provider";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zameen Vista - Find Your Next Home in Pakistan",
  description:
    "Buy, sell or rent properties with verified listings and expert support. Fast, secure, trusted real estate in Pakistan.",
  keywords: [
    "real estate Pakistan",
    "property for sale",
    "rent property",
    "buy house Pakistan",
    "Islamabad property",
    "Karachi property",
    "Lahore property",
  ],
  authors: [{ name: "Zameen Vista" }],
  openGraph: {
    title: "Zameen Vista - Find Your Next Home in Pakistan",
    description:
      "Buy, sell or rent properties with verified listings and expert support.",
    type: "website",
    locale: "en_US",
    siteName: "Zameen Vista",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zameen Vista - Find Your Next Home in Pakistan",
    description:
      "Buy, sell or rent properties with verified listings and expert support.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zameen Vista",
  description:
    "Pakistan's trusted real estate platform for buying, selling, and renting properties.",
  url: "https://zameenvista.com",
  logo: "https://zameenvista.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-300-1234567",
    contactType: "customer service",
    areaServed: "PK",
    availableLanguage: ["en", "ur"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>

        {/* Google Analytics placeholder - replace with your GA4 ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
