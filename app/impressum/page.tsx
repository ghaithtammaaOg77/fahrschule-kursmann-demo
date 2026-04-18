import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der Fahrschule Kursmann in Landsberg am Lech.',
  robots: { index: false, follow: false },
}

export default function ImpressumPage() {
  return (
    <>
      <section
        className="relative pt-32 pb-12 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #080B14 0%, #0A0C14 100%)' }}
        aria-labelledby="impressum-heading"
      >
        <div className="absolute inset-0 hero-grid-bg opacity-40" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zur Startseite
          </Link>
          <h1 id="impressum-heading" className="section-title mb-3">Impressum</h1>
          <p className="text-muted text-sm">Angaben gemäß § 5 TMG</p>
        </div>
      </section>

      <section className="py-16 bg-bg" aria-label="Impressum Inhalt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 border border-white/8">
            {/* Platzhalter - KEIN Inhalt erfunden */}
            <div className="p-8 rounded-xl border-2 border-dashed border-accent/20 text-center mb-8">
              <div className="text-3xl mb-3" aria-hidden="true">📋</div>
              <h2 className="font-heading text-xl font-bold text-text-primary mb-2">
                [Impressum folgt]
              </h2>
              <p className="text-muted text-sm max-w-md mx-auto">
                Der vollständige Impressum-Text wird vom Kunden bereitgestellt
                und hier eingefügt. Bitte stelle den rechtskonformen Text gemäß
                § 5 TMG zur Verfügung.
              </p>
            </div>

            <div className="space-y-5 text-sm text-muted">
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Pflichtangaben nach § 5 TMG:</h3>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Vollständiger Name und Anschrift</li>
                  <li>E-Mail-Adresse</li>
                  <li>Telefonnummer</li>
                  <li>Ggf. Handelsregisternummer</li>
                  <li>Ggf. Umsatzsteuer-ID</li>
                  <li>Zuständige Aufsichtsbehörde (Fahrschulbehörde)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-text-primary mb-1">Bekannte Daten:</h3>
                <p>
                  Fahrschule Kursmann<br />
                  Hauptstraße 14<br />
                  86899 Landsberg am Lech<br />
                  Tel: 08191 447823<br />
                  E-Mail: info@fahrschule-kursmann.de
                </p>
              </div>

              <p className="text-xs border-t border-white/5 pt-4">
                Empfehlung: Nutze einen Impressum-Generator (z.B. erecht24.de oder Trusted Shops) für den rechtssicheren Text.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
