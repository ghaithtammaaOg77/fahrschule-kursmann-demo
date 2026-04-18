import type { Metadata } from 'next'
import { Fraunces, DM_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollRevealInit from '@/components/ScrollRevealInit'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Fahrschule Kursmann – Führerschein | Landsberg am Lech',
    template: '%s | Fahrschule Kursmann',
  },
  description:
    'Fahrschule Kursmann in Landsberg am Lech – alle Führerscheinklassen, persönliche Betreuung und moderne Fahrzeuge. Jetzt Führerschein anfragen!',
  keywords: [
    'Fahrschule Landsberg am Lech',
    'Führerschein Landsberg',
    'Fahrschule Kursmann',
    'Führerscheinklassen Bayern',
    'Autoführerschein Landsberg',
  ],
  authors: [{ name: 'Fahrschule Kursmann' }],
  creator: 'Fahrschule Kursmann',
  metadataBase: new URL('https://fahrschule-kursmann.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://fahrschule-kursmann.de',
    siteName: 'Fahrschule Kursmann',
    title: 'Fahrschule Kursmann – Führerschein | Landsberg am Lech',
    description:
      'Alle Führerscheinklassen, persönliche Betreuung und faire Preise. Deine Fahrschule in Landsberg am Lech.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

const schemaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DrivingSchool',
  name: 'Fahrschule Kursmann',
  description:
    'Fahrschule in Landsberg am Lech mit allen Führerscheinklassen – B, BE, B196, AM, A1, A2, A.',
  url: 'https://fahrschule-kursmann.de',
  telephone: '+4981914478​23',
  email: 'info@fahrschule-kursmann.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hauptstraße 14',
    addressLocality: 'Landsberg am Lech',
    postalCode: '86899',
    addressRegion: 'Bayern',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.0503,
    longitude: 10.8696,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Thursday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Wednesday',
      opens: '10:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '08:00',
      closes: '16:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '12:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Landsberg am Lech' },
    { '@type': 'City', name: 'Kaufering' },
    { '@type': 'City', name: 'Penzing' },
    { '@type': 'City', name: 'Buchloe' },
    { '@type': 'City', name: 'Dießen am Ammersee' },
  ],
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${fraunces.variable} ${dmSans.variable}`}>
      <head>
        <link rel="canonical" href="https://fahrschule-kursmann.de/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-bg text-text-primary overflow-x-hidden">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollRevealInit />
      </body>
    </html>
  )
}
