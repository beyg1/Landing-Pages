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
  title: "Zameen Vista - Portfolio Project by AbdurRab | React Developer",
  description:
    "Portfolio project made for Real estate giants in Islamabad, Lahore, Karachi, Pindi and other big cities. by AbdurRab a react developer who can be hired at mirza-dev.vercel.app",
  keywords: [
    "real estate in Pakistan",
    "property for sale in Lahore",
    "rent property",
    "buy house in Pakistan",
    "Islamabad property",
    "Karachi property",
    "Lahore property",
  ],
  authors: [{ name: "Zameen Vista" }],
  openGraph: {
    title: "Zameen Vista - Portfolio Project by AbdurRab | React Developer",
    description:
      "Portfolio project made for Real estate giants in Islamabad, Lahore, Karachi, Pindi and other big cities. by AbdurRab a react developer who can be hired at mirza-dev.vercel.app",
    type: "website",
    locale: "en_US",
    siteName: "Zameen Vista",
    url: "https://zameen-vista.vercel.app",
    images: [
      {
        url: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Zameen Vista - Pakistan's Premier Real Estate Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zameen Vista - Portfolio Project by AbdurRab | React Developer",
    description:
      "Portfolio project made for Real estate giants in Islamabad, Lahore, Karachi, Pindi and other big cities. by AbdurRab a react developer who can be hired at mirza-dev.vercel.app",
    images: ["https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Zameen Vista",
  description:
    "Pakistan's trusted real estate platform for buying, selling, and renting properties in Islamabad, Lahore, Karachi, and major cities.",
  url: "https://zameen-vista.vercel.app",
  image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1200&q=80",
  telephone: "+92-300-1234567",
  email: "info@zameenvista.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressRegion: "Islamabad Capital Territory",
    addressCountry: "PK",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Islamabad"
    },
    {
      "@type": "City",
      name: "Lahore"
    },
    {
      "@type": "City",
      name: "Karachi"
    },
    {
      "@type": "City",
      name: "Rawalpindi"
    }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Real Estate Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Property Buying",
          description: "Find verified properties across Pakistan with transparent pricing and complete documentation support."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Property Selling",
          description: "List your property with professional photography, expert marketing, and reach thousands of buyers."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rental Services",
          description: "Find or list rental properties with flexible terms, verified landlords, and secure agreements."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Property Valuation",
          description: "Get accurate property valuations and expert consultation from our experienced real estate professionals."
        }
      }
    ]
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "8500",
    bestRating: "5",
    worstRating: "1"
  }
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
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
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
