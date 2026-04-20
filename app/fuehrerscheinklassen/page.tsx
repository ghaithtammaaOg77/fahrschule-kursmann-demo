import type { Metadata } from 'next'
import Link from 'next/link'
import PriceCalculator from '@/components/PriceCalculator'

export const metadata: Metadata = {
  title: 'Führerscheinklassen & Preise',
  description:
    'Alle Führerscheinklassen bei Fahrschule Kursmann in Landsberg am Lech: B, BE, B196, AM, A1, A2, A – mit interaktivem Preisrechner.',
  alternates: { canonical: '/fuehrerscheinklassen' },
}

const klassen = [
  {
    id: 'klasse-b',
    key: 'B',
    icon: '🚗',
    name: 'Klasse B',
    untertitel: 'Autoführerschein (PKW)',
    alter: 'Ab 17 Jahren (mit Begleitung) / Ab 18 Jahren',
    farbe: '#00D4FF',
    beschreibung:
      'Die Klasse B ist der beliebteste Führerschein in Deutschland. Sie berechtigt zum Führen von Kraftfahrzeugen bis 3,5 Tonnen zulässige Gesamtmasse. Mit dem B-Führerschein darfst du auch Anhänger bis 750 kg ziehen.',
    inhalte: [
      'Mindestens 14 Doppelstunden Theorieunterricht (90 Min.)',
      '12 Pflicht-Sonderfahrten: Überlandfahrt, Autobahn, Nachtfahrt',
      'Individuelle Übungsfahrstunden (je nach Lernfortschritt)',
      'Theorieprüfung beim TÜV/DEKRA',
      'Praktische Fahrprüfung beim TÜV/DEKRA',
    ],
    badge: 'Meistgewählt',
  },
  {
    id: 'klasse-be',
    key: 'BE',
    icon: '🚗🔗',
    name: 'Klasse BE',
    untertitel: 'PKW mit großem Anhänger',
    alter: 'Ab 18 Jahren (Klasse B Voraussetzung)',
    farbe: '#00D4FF',
    beschreibung:
      'Die Klasse BE erweitert deinen B-Führerschein um das Recht, Anhänger mit mehr als 750 kg zulässiger Gesamtmasse zu ziehen. Pflicht für Camper, Pferdeanhänger und größere Transporte.',
    inhalte: [
      'Kurzausbildung (Klasse B Voraussetzung)',
      '5 Pflicht-Sonderfahrten mit Anhänger',
      'Individuelle Übungsfahrstunden mit Anhänger',
      'Praktische Fahrprüfung beim TÜV/DEKRA',
    ],
    hinweis: 'Setzt gültige Klasse B voraus',
  },
  {
    id: 'klasse-b196',
    key: 'B196',
    icon: '🏍️',
    name: 'Klasse B196',
    untertitel: 'Motorrad ohne Prüfung',
    alter: 'Ab 25 Jahren, mind. 5 Jahre Klasse B',
    farbe: '#005A8A',
    beschreibung:
      'Die Klasse B196 ermöglicht das Führen von Motorrädern bis 125 ccm ohne separate Prüfung. Voraussetzung sind mindestens 5 Jahre Fahrpraxis mit Klasse B und das Mindestalter von 25 Jahren.',
    inhalte: [
      '10 Pflichtfahrstunden (à 45 Min.) auf dem Motorrad',
      'Abschließende Testfahrt',
      'Keine Prüfung beim TÜV/DEKRA erforderlich',
      'Nur mit gültigem B-Führerschein (mind. 5 Jahre)',
    ],
    hinweis: 'Keine Prüfung nötig — nur Pflichtfahrstunden',
    badge: 'Ohne Prüfung',
  },
  {
    id: 'klasse-am',
    key: 'AM',
    icon: '🛵',
    name: 'Klasse AM',
    untertitel: 'Kleinkraftrad bis 45 km/h',
    alter: 'Ab 15 Jahren (mit begl. Fahren) / Ab 16 Jahren',
    farbe: '#00D4FF',
    beschreibung:
      'Die Klasse AM berechtigt zum Führen von Kleinkrafträdern (Mopeds, Rolller) bis 45 km/h und vierrädrigen Leichtfahrzeugen. Ideal für Jugendliche die früh mobil werden wollen.',
    inhalte: [
      'Theorieunterricht (Grundlagen)',
      'Praktische Ausbildung auf dem Kleinkraftrad',
      'Theorieprüfung beim TÜV/DEKRA',
      'Praktische Fahrprüfung beim TÜV/DEKRA',
    ],
  },
  {
    id: 'klasse-a1',
    key: 'A1',
    icon: '🏍️',
    name: 'Klasse A1',
    untertitel: 'Leichtkraftrad bis 125 ccm',
    alter: 'Ab 16 Jahren',
    farbe: '#00D4FF',
    beschreibung:
      'Klasse A1 ist die Einstiegsklasse für Motorräder bis 125 ccm und maximal 11 kW Leistung. Der erste Schritt in die Zweiradwelt — ideal für junge Fahrer.',
    inhalte: [
      '14+ Doppelstunden Theorieunterricht',
      '12 Pflicht-Sonderfahrten auf dem Motorrad',
      'Individuelle Übungsfahrstunden',
      'Theorieprüfung beim TÜV/DEKRA',
      'Praktische Fahrprüfung beim TÜV/DEKRA',
    ],
  },
  {
    id: 'klasse-a2',
    key: 'A2',
    icon: '🏍️',
    name: 'Klasse A2',
    untertitel: 'Motorrad bis 35 kW',
    alter: 'Ab 18 Jahren',
    farbe: '#00D4FF',
    beschreibung:
      'Die Klasse A2 erlaubt das Fahren von Motorrädern bis 35 kW und maximal 0,2 kW/kg Leistungsgewicht. Der ideale Zwischenschritt bevor du mit 24 Jahren zur unbeschränkten Klasse A wechselst.',
    inhalte: [
      '14+ Doppelstunden Theorieunterricht',
      '12 Pflicht-Sonderfahrten',
      'Individuelle Übungsfahrstunden',
      'Theorieprüfung beim TÜV/DEKRA',
      'Praktische Fahrprüfung beim TÜV/DEKRA',
    ],
  },
  {
    id: 'klasse-a',
    key: 'A',
    icon: '🏍️',
    name: 'Klasse A',
    untertitel: 'Motorrad unbeschränkt',
    alter: 'Ab 24 Jahren (oder 21 J. mit 2 Jahren A2)',
    farbe: '#005A8A',
    beschreibung:
      'Die Klasse A ist der unbeschränkte Motorradführerschein. Alle Motorräder, alle Leistungsklassen. Das ultimative Ziel für Motorradenthusiasten.',
    inhalte: [
      '14+ Doppelstunden Theorieunterricht',
      '12 Pflicht-Sonderfahrten',
      'Individuelle Übungsfahrstunden',
      'Theorieprüfung beim TÜV/DEKRA',
      'Praktische Fahrprüfung beim TÜV/DEKRA',
    ],
    badge: 'Unbeschränkt',
  },
]

export default function FuehrerscheinklassenPage() {
  return (
    <>
      {/* =========================================
          PAGE HERO
          ========================================= */}
      <section
        className="relative pt-32 pb-20 overflow-hidden page-hero"
        style={{ background: 'linear-gradient(180deg, #080B14 0%, #0A0C14 100%)' }}
        aria-labelledby="klassen-page-heading"
      >
        <div
          className="absolute inset-0 hero-grid-bg opacity-60"
          aria-hidden="true"
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(0,212,255,0.15), transparent 70%)',
            filter: 'blur(40px)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-badge mb-5 mx-auto w-fit" style={{ animation: 'fadeInUp 0.5s ease both' }}>
            7 Klassen
          </div>
          <h1
            id="klassen-page-heading"
            className="section-title mb-5"
            style={{ animation: 'fadeInUp 0.6s ease 0.1s both', fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Führerscheinklassen{' '}
            <span className="gradient-text">& Preise</span>
          </h1>
          <p
            className="section-subtitle mx-auto text-center"
            style={{ animation: 'fadeInUp 0.6s ease 0.2s both' }}
          >
            Von Pkw bis Motorrad — alle Klassen mit transparenten Preisen und
            interaktivem Rechner.
          </p>
        </div>
      </section>

      {/* =========================================
          KLASSEN LISTE
          ========================================= */}
      <section className="py-20 bg-bg" aria-label="Führerscheinklassen Übersicht">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {klassen.map((klasse, index) => (
            <article
              key={klasse.id}
              id={klasse.id}
              className={`reveal accent-card p-8 md:p-10 scroll-mt-24`}
              aria-labelledby={`${klasse.id}-heading`}
            >
              <div className="grid md:grid-cols-5 gap-8">
                {/* Left: Info */}
                <div className="md:col-span-3">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl" aria-hidden="true">{klasse.icon}</span>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h2
                          id={`${klasse.id}-heading`}
                          className="font-heading text-2xl md:text-3xl font-bold text-text-primary"
                        >
                          {klasse.name}
                        </h2>
                        {klasse.badge && (
                          <span className="text-xs bg-accent/10 text-accent border border-accent/20 px-2.5 py-0.5 rounded-full font-semibold">
                            {klasse.badge}
                          </span>
                        )}
                      </div>
                      <p
                        className="font-semibold text-base"
                        style={{ color: klasse.farbe }}
                      >
                        {klasse.untertitel}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-sm text-muted">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{klasse.alter}</span>
                  </div>

                  {klasse.hinweis && (
                    <div className="flex items-start gap-2 bg-accent/5 border border-accent/15 rounded-lg px-3 py-2 mb-4 text-xs text-accent/80">
                      <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {klasse.hinweis}
                    </div>
                  )}

                  <p className="text-muted text-sm leading-relaxed mb-5">
                    {klasse.beschreibung}
                  </p>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
                      Ausbildungsinhalte
                    </p>
                    <ul className="space-y-2">
                      {klasse.inhalte.map((inhalt) => (
                        <li key={inhalt} className="flex items-start gap-2.5 text-sm text-muted">
                          <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {inhalt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Quick CTA */}
                <div className="md:col-span-2 flex flex-col justify-center">
                  <div
                    className="rounded-xl border border-white/8 p-6"
                    style={{ background: 'rgba(0,212,255,0.02)' }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
                      Interesse an Klasse {klasse.key}?
                    </p>
                    <p className="text-muted text-sm mb-5">
                      Berechne jetzt deine Kosten mit unserem Preisrechner oder kontaktiere uns direkt.
                    </p>
                    <div className="space-y-3">
                      <Link
                        href={`#preisrechner`}
                        className="btn-primary w-full text-center justify-center block"
                      >
                        Kosten berechnen
                      </Link>
                      <Link
                        href="/kontakt"
                        className="btn-outline w-full text-center justify-center block"
                      >
                        Anfragen
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================
          PREISRECHNER
          ========================================= */}
      <section
        id="preisrechner"
        className="py-24 scroll-mt-16"
        style={{ background: 'linear-gradient(180deg, #0A0C14 0%, #0D1220 100%)' }}
        aria-labelledby="rechner-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <div className="section-badge mb-4 mx-auto w-fit">Preisrechner</div>
            <h2 id="rechner-heading" className="section-title mb-4" style={{ color: '#F0F4FF', WebkitTextFillColor: '#F0F4FF' }}>
              Berechne deine{' '}
              <span className="gradient-text">Kosten transparent</span>
            </h2>
            <p className="section-subtitle mx-auto text-center" style={{ color: '#94A3B8' }}>
              Wähle deine Klasse, passe die Fahrstunden an und sieh sofort, was dein Führerschein ungefähr kosten wird.
            </p>
          </div>

          <div className="reveal">
            <PriceCalculator />
          </div>

          <div className="mt-6 text-center reveal">
            <p className="text-xs text-muted">
              Alle Preise in Euro inkl. MwSt. · Angaben sind Richtwerte — der Endpreis hängt vom individuellen Lernfortschritt ab. ·
              Unverbindliche Berechnung ohne Gewähr.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          CTA
          ========================================= */}
      <section className="py-16 bg-surface/30 border-t border-white/5" aria-label="Kontakt CTA">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
            Noch Fragen zu den Klassen?
          </h2>
          <p className="text-muted mb-6">
            Ruf uns an oder schreib uns — wir beraten dich persönlich und kostenlos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+498191447823" className="btn-primary">
              08191 447823
            </a>
            <Link href="/kontakt" className="btn-outline">
              Kontaktformular
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
