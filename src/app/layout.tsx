import type { Metadata } from "next";
import { Outfit, Mukta } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const mukta = Mukta({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-mukta",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "EAR Engineering",
  "image": "https://earengineering.co.za/logo.png",
  "url": "https://earengineering.co.za",
  "telephone": "+27769737329",
  "email": "info@earengineering.co.za",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Abelia St",
    "addressLocality": "Heldervue, Cape Town",
    "postalCode": "7130",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -34.0531,
    "longitude": 18.8285
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday"],
      "opens": "08:00",
      "closes": "13:00"
    }
  ],
  "areaServed": ["Helderberg", "Cape Town", "Somerset West"],
  "foundingDate": "1994",
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${mukta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased font-outfit">
        {children}
      </body>
    </html>
  );
}

