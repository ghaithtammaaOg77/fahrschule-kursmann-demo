import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fahrzeuge',
  description:
    'Die Fahrzeugflotte von Fahrschule Kursmann in Landsberg am Lech – moderne Pkw und Motorräder für optimale Fahrausbildung.',
  alternates: { canonical: 'https://fahrschule-kursmann.de/fahrzeuge' },
}

// TODO: Durch echte Kundenfahrzeug-Fotos ersetzen (WebP, <100KB, keyword-basierte Dateinamen)
const fahrzeuge = [
  {
    id: 1,
    name: 'VW Polo',
    typ: 'Pkw – Klasse B',
    beschreibung: 'Kompakter Stadtflitzer mit modernen Fahrassistenzsystemen. Ideal für Anfänger.',
    kennzeichen: 'LL-FK 1',
    farbe: 'bg-gradient-to-br from-surface to-surface-2',
    icon: '🚗',
    merkmale: ['Klimaanlage', 'Spurhalteassistent', 'Notbremsassistent', 'Einparkhilfe'],
  },
  {
    id: 2,
    name: 'VW Golf 8',
    typ: 'Pkw – Klasse B & BE',
    beschreibung: 'Moderner Kompaktwagen mit Anhängerkupplung für die BE-Ausbildung.',
    kennzeichen: 'LL-FK 2',
    farbe: 'bg-gradient-to-br from-surface to-surface-2',
    icon: '🚗',
    merkmale: ['Anhängerkupplung', 'Klimaautomatik', 'Rückfahrkamera', 'Lane Assist'],
  },
  {
    id: 3,
    name: 'Suzuki GSX-S125',
    typ: 'Motorrad – Klasse A1',
    beschreibung: 'Leichtes Einsteiger-Motorrad für die A1-Ausbildung bis 125 ccm.',
    kennzeichen: 'LL-FK 10',
    farbe: 'bg-gradient-to-br from-surface to-surface-2',
    icon: '🏍️',
    merkmale: ['125 ccm', '11 kW', 'ABS', 'Leichtgewicht (139 kg)'],
  },
  {
    id: 4,
    name: 'Yamaha MT-07',
    typ: 'Motorrad – Klasse A2 & A',
    beschreibung: 'Sportliches Naked Bike für die A2- und A-Ausbildung.',
    kennzeichen: 'LL-FK 11',
    farbe: 'bg-gradient-to-br from-surface to-surface-2',
    icon: '🏍️',
    merkmale: ['689 ccm', '73 PS (gedrosselt: 35 kW)', 'ABS', 'Traktionskontrolle'],
  },
  {
    id: 5,
    name: 'Honda CB500F',
    typ: 'Motorrad – Klasse A2',
    beschreibung: 'Vielseitiger Allrounder für die A2-Ausbildung. Sicher und komfortabel.',
    kennzeichen: 'LL-FK 12',
    farbe: 'bg-gradient-to-br from-surface to-surface-2',
    icon: '🏍️',
    merkmale: ['471 ccm', '35 kW', 'ABS', 'Ergonomisch'],
  },
  {
    id: 6,
    name: 'Piaggio Liberty',
    typ: 'Roller – Klasse AM',
    beschreibung: 'Zuverlässiger Stadtroller für die AM-Ausbildung.',
    kennzeichen: 'LL-FK 20',
    farbe: 'bg-gradient-to-br from-surface to-surface-2',
    icon: '🛵',
    merkmale: ['50 ccm', 'bis 45 km/h', 'ABS', 'Leicht & wendig'],
  },
]

export default function FahrzeugePage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #080B14 0%, #0A0C14 100%)' }}
        aria-labelledby="fahrzeuge-heading"
      >
        <div className="absolute inset-0 hero-grid-bg opacity-60" aria-hidden="true" />
        <div
          className="absolute top-0 right-1/4 w-80 h-80 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0,212,255,0.12), transparent 70%)',
            filter: 'blur(60px)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="section-badge mb-5 mx-auto w-fit"
            style={{ animation: 'fadeInUp 0.5s ease both' }}
          >
            Unsere Fahrzeuge
          </div>
          <h1
            id="fahrzeuge-heading"
            className="section-title mb-5"
            style={{ animation: 'fadeInUp 0.6s ease 0.1s both', fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Moderne Fahrzeuge,{' '}
            <span className="gradient-text">sicheres Lernen</span>
          </h1>
          <p
            className="section-subtitle mx-auto text-center"
            style={{ animation: 'fadeInUp 0.6s ease 0.2s both' }}
          >
            Alle Fahrzeuge sind aktuell, gut gewartet und mit modernster Sicherheitstechnik ausgestattet.
          </p>
        </div>
      </section>

      {/* Fahrzeug Gallery */}
      <section className="py-20 bg-bg" aria-label="Fahrzeugflotte">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {fahrzeuge.map((fz) => (
              <article
                key={fz.id}
                className="accent-card overflow-hidden reveal"
                aria-labelledby={`fz-${fz.id}-name`}
              >
                {/* Image placeholder – TODO: durch echtes Kundenfoto ersetzen */}
                <div
                  className={`${fz.farbe} aspect-video flex items-center justify-center relative overflow-hidden`}
                  style={{
                    background: 'linear-gradient(135deg, #111827 0%, #1a2235 100%)',
                  }}
                  aria-label={`Foto von ${fz.name} – Platzhalter`}
                >
                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)',
                      backgroundSize: '30px 30px',
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative text-center">
                    <div className="text-7xl mb-2" aria-hidden="true">{fz.icon}</div>
                    <p className="text-xs text-muted/60 uppercase tracking-widest">
                      {/* TODO: durch echtes Kundenfahrzeug-Foto ersetzen */}
                      Foto folgt
                    </p>
                  </div>
                  {/* Kennzeichen badge */}
                  <div className="absolute bottom-3 right-3 bg-bg/80 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-mono text-accent border border-accent/20">
                    {fz.kennzeichen}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">
                    {fz.typ}
                  </p>
                  <h2 id={`fz-${fz.id}-name`} className="font-heading text-xl font-bold text-text-primary mb-2">
                    {fz.name}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {fz.beschreibung}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {fz.merkmale.map((m) => (
                      <span
                        key={m}
                        className="text-xs bg-surface-2 text-muted px-2.5 py-1 rounded-full border border-white/5"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-5 rounded-xl border border-white/8 bg-surface/30 text-center reveal">
            <p className="text-muted text-sm">
              <strong className="text-text-primary">Hinweis:</strong> Die gezeigten Fotos sind Platzhalter.
              Echte Fotos der Fahrzeuge werden vom Kunden bereitgestellt und ersetzt.
            </p>
          </div>
        </div>
      </section>

      {/* Merkmale */}
      <section className="py-16 bg-surface/20 border-t border-white/5" aria-labelledby="merkmale-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 id="merkmale-heading" className="font-heading text-2xl font-bold text-text-primary">
              Alle Fahrzeuge — unser Standard
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 stagger-children">
            {[
              { icon: '🛡️', titel: 'ABS & Sicherheit', text: 'Modernste Sicherheitssysteme in allen Fahrzeugen' },
              { icon: '🔧', titel: 'Top Wartung', text: 'Regelmäßige Inspektionen und Wartung' },
              { icon: '📱', titel: 'Moderner Komfort', text: 'Klimaanlage, moderne Assistenzsysteme' },
              { icon: '✅', titel: 'TÜV geprüft', text: 'Alle Fahrzeuge mit gültigem TÜV' },
            ].map((item) => (
              <div key={item.titel} className="text-center p-5 rounded-xl bg-surface/30 border border-white/5 reveal">
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-semibold text-text-primary mb-1 text-sm">{item.titel}</h3>
                <p className="text-muted text-xs">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg border-t border-white/5" aria-label="Kontakt CTA">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
            Möchtest du unsere Fahrzeuge kennenlernen?
          </h2>
          <p className="text-muted mb-6">
            Komm einfach vorbei oder ruf uns an — wir freuen uns auf dich!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn-primary">
              Termin anfragen
            </Link>
            <a href="tel:+498191447823" className="btn-outline">
              08191 447823
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
