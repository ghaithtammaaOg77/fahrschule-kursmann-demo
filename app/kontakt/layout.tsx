import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt & Anfrage',
  description:
    'Kontaktiere Fahrschule Kursmann in Landsberg am Lech. Führerschein anfragen – persönlich, per E-Mail oder WhatsApp. Kostenlose Erstberatung!',
  alternates: { canonical: 'https://fahrschule-kursmann.de/kontakt' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
