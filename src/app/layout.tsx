import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EAR Engineering | Fast HVAC, Electrical & Solar in Cape Town",
  description: "EAR Engineering provides expert project-managed electrical, aircon & solar solutions in Helderberg and Cape Town. On time, on budget, with a 1-hour callback promise.",
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
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "09:00",
      "closes": "16:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday"],
      "opens": "09:00",
      "closes": "14:00"
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}
