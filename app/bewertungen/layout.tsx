import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bewertungen',
  description:
    'Echte Erfahrungen unserer Fahrschüler bei Fahrschule Kursmann in Landsberg am Lech. Überzeuge dich von unserer Qualität – 4,9/5 Sterne!',
  alternates: { canonical: 'https://fahrschule-kursmann.de/bewertungen' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
