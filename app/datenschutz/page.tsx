import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Fahrschule Kursmann in Landsberg am Lech.',
  robots: { index: false, follow: false },
}

export default function DatenschutzPage() {
  return (
    <>
      <section
        className="relative pt-32 pb-12 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #080B14 0%, #0A0C14 100%)' }}
        aria-labelledby="datenschutz-heading"
      >
        <div className="absolute inset-0 hero-grid-bg opacity-40" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zur Startseite
          </Link>
          <h1 id="datenschutz-heading" className="section-title mb-3">Datenschutzerklärung</h1>
          <p className="text-muted text-sm">Gemäß DSGVO und BDSG</p>
        </div>
      </section>

      <section className="py-16 bg-bg" aria-label="Datenschutz Inhalt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 border border-white/8">
            {/* Platzhalter - KEIN Inhalt erfunden */}
            <div className="p-8 rounded-xl border-2 border-dashed border-accent/20 text-center mb-8">
              <div className="text-3xl mb-3" aria-hidden="true">🔒</div>
              <h2 className="font-heading text-xl font-bold text-text-primary mb-2">
                [Datenschutzerklärung folgt]
              </h2>
              <p className="text-muted text-sm max-w-md mx-auto">
                Der vollständige Datenschutztext wird vom Kunden über
                erecht24.de oder einen Rechtsanwalt bereitgestellt
                und hier eingefügt.
              </p>
            </div>

            <div className="space-y-5 text-sm text-muted">
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Pflichtinhalte der Datenschutzerklärung (DSGVO):</h3>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Verantwortliche Person und Kontaktdaten</li>
                  <li>Datenerhebung und -verarbeitung (Kontaktformular, Cookies)</li>
                  <li>Zweck der Datenverarbeitung</li>
                  <li>Rechtsgrundlage (Art. 6 DSGVO)</li>
                  <li>Speicherdauer</li>
                  <li>Rechte der betroffenen Personen (Auskunft, Löschung, etc.)</li>
                  <li>Google Maps / Google Fonts Nutzung</li>
                  <li>Hosting-Anbieter (Vercel)</li>
                </ul>
              </div>

              <p className="text-xs border-t border-white/5 pt-4">
                Empfehlung: Nutze den kostenlosen Datenschutzgenerator von{' '}
                <strong className="text-accent/80">e-recht24.de</strong> für einen
                DSGVO-konformen Text. Gehe auf erecht24.de → Datenschutzgenerator
                und fülle die Angaben aus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
