import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ – Häufige Fragen',
  description:
    'Antworten auf die häufigsten Fragen rund um den Führerschein bei Fahrschule Kursmann in Landsberg am Lech. Kosten, Dauer, Klassen und mehr.',
  alternates: { canonical: 'https://fahrschule-kursmann.de/faq' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
