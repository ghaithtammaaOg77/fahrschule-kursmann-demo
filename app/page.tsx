import type { Metadata } from 'next'
import Link from 'next/link'
import StatsCounter from '@/components/StatsCounter'

export const metadata: Metadata = {
  title: 'Fahrschule Kursmann – Führerschein | Landsberg am Lech',
  description:
    'Fahrschule Kursmann in Landsberg am Lech – alle Führerscheinklassen (B, BE, A1, A2, A, AM, B196). Persönliche Betreuung, faire Preise, hohe Erfolgsquote.',
  alternates: { canonical: 'https://fahrschule-kursmann.de/' },
}

const klassen = [
  {
    key: 'B',
    icon: '🚗',
    titel: 'Klasse B',
    untertitel: 'Autoführerschein (PKW)',
    text: 'Der meistgefragte Führerschein. Berechtigt zum Fahren von Pkw bis 3,5 Tonnen — dein Einstieg in die Mobilität.',
    badge: 'Beliebteste Wahl',
    href: '/fuehrerscheinklassen#klasse-b',
  },
  {
    key: 'BE',
    icon: '🚗🔗',
    titel: 'Klasse BE',
    untertitel: 'PKW mit Anhänger',
    text: 'Erweiterung für PKW mit schwerem Anhänger über 750 kg. Perfekt für Camping, Transport und Freizeit.',
    href: '/fuehrerscheinklassen#klasse-be',
  },
  {
    key: 'B196',
    icon: '🏍️',
    titel: 'Klasse B196',
    untertitel: 'Motorrad ohne Prüfung',
    text: 'Ab 25 Jahren mit Klasse B: Motorrad fahren ohne separate Prüfung. Nur 10 Pflichtfahrten nötig.',
    href: '/fuehrerscheinklassen#klasse-b196',
  },
  {
    key: 'AM',
    icon: '🛵',
    titel: 'Klasse AM',
    untertitel: 'Kleinkraftrad bis 45 km/h',
    text: 'Für Mopeds und Kleinkrafträder bis 45 km/h. Bereits ab 15 Jahren mit begleitetem Fahren.',
    href: '/fuehrerscheinklassen#klasse-am',
  },
  {
    key: 'A1',
    icon: '🏍️',
    titel: 'Klasse A1',
    untertitel: 'Leichtkraftrad bis 125 ccm',
    text: 'Motorräder bis 125 ccm und 11 kW. Ab 16 Jahren der erste Schritt in die Motorradwelt.',
    href: '/fuehrerscheinklassen#klasse-a1',
  },
  {
    key: 'A2',
    icon: '🏍️',
    titel: 'Klasse A2',
    untertitel: 'Motorrad bis 35 kW',
    text: 'Mittelklasse-Motorräder bis 35 kW. Ab 18 Jahren — der richtige Zwischenschritt zur unbeschränkten Klasse A.',
    href: '/fuehrerscheinklassen#klasse-a2',
  },
  {
    key: 'A',
    icon: '🏍️',
    titel: 'Klasse A',
    untertitel: 'Motorrad unbeschränkt',
    text: 'Kein Limit. Alle Motorräder ohne Leistungsbeschränkung. Ab 24 Jahren oder 21 J. mit A2-Vorerfahrung.',
    href: '/fuehrerscheinklassen#klasse-a',
  },
]

const bewertungen = [
  {
    name: 'Max M.',
    sterne: 5,
    text: 'Absolute Top-Fahrschule! Sehr geduldige und kompetente Fahrlehrer. Ich habe auf Anhieb bestanden. Immer wieder!',
    datum: 'März 2025',
  },
  {
    name: 'Sarah K.',
    sterne: 5,
    text: 'Schon meinen zweiten Führerschein hier gemacht. Super Atmosphäre, flexible Terminplanung und wirklich gute Vorbereitung auf die Prüfung.',
    datum: 'Februar 2025',
  },
  {
    name: 'Jonas W.',
    sterne: 5,
    text: 'Dank Fahrschule Kursmann auf Anhieb bestanden! Mein Fahrlehrer hat mir genau gezeigt worauf es ankommt. Klare Empfehlung.',
    datum: 'Januar 2025',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="star-rating" aria-label={`${count} von 5 Sternen`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* =========================================
          HERO
          ========================================= */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Subtle blue tint overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 70% 30%, rgba(0,119,182,0.07) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className="section-badge mb-6"
              style={{ animation: 'fadeInUp 0.5s ease forwards' }}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Fahrschule in Landsberg am Lech
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="section-title mb-6 leading-[1.05]"
              style={{
                animation: 'fadeInUp 0.6s ease 0.1s both',
                fontSize: 'clamp(40px, 6vw, 76px)',
              }}
            >
              Führerschein in Landsberg am Lech.
              <br />
              <span className="gradient-text">Dein Weg nach vorne.</span>
            </h1>

            {/* Subtext */}
            <p
              className="section-subtitle mb-10 text-lg"
              style={{ animation: 'fadeInUp 0.6s ease 0.2s both' }}
            >
              Persönliche Betreuung, moderne Fahrzeuge und eine nachgewiesene Erfolgsquote —
              bei Fahrschule Kursmann in Landsberg am Lech kommst du sicher ans Ziel.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4"
              style={{ animation: 'fadeInUp 0.6s ease 0.3s both' }}
            >
              <Link href="/kontakt" className="btn-primary text-base py-4 px-8">
                Führerschein anfragen
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/fuehrerscheinklassen" className="btn-outline text-base py-4 px-8">
                Preise berechnen
              </Link>
            </div>

            {/* Trust bar */}
            <div
              className="flex flex-wrap items-center gap-6 mt-10 pt-10 border-t border-black/10"
              style={{ animation: 'fadeInUp 0.6s ease 0.4s both' }}
            >
              {[
                { icon: '✓', text: 'Kostenlose Erstberatung' },
                { icon: '✓', text: 'Flexible Termingestaltung' },
                { icon: '✓', text: 'Theorieunterricht online & vor Ort' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-muted">
                  <span className="text-accent font-bold">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40"
          style={{ animation: 'fadeIn 1s ease 1s both' }}
          aria-hidden="true"
        >
          <span className="text-xs text-muted uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-muted flex items-start justify-center pt-1.5">
            <div
              className="w-1 h-2 bg-muted rounded-full"
              style={{ animation: 'float 2s ease-in-out infinite' }}
            />
          </div>
        </div>
      </section>

      {/* =========================================
          STATS
          ========================================= */}
      <section className="py-8 bg-surface border-b border-black/5" aria-label="Fakten über uns">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter />
        </div>
      </section>

      {/* =========================================
          FÜHRERSCHEINKLASSEN ÜBERSICHT
          ========================================= */}
      <section className="py-24 bg-bg" aria-labelledby="klassen-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-14 reveal">
            <div className="section-badge mb-4 mx-auto w-fit">
              Führerscheinklassen
            </div>
            <h2 id="klassen-heading" className="section-title mb-4">
              Dein Führerschein,{' '}
              <span className="gradient-text">deine Wahl</span>
            </h2>
            <p className="section-subtitle mx-auto text-center">
              Wir bieten alle gängigen Führerscheinklassen an —
              von Pkw über Motorrad bis Kleinkraftrad.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 stagger-children">
            {klassen.map((klasse) => (
              <Link
                key={klasse.key}
                href={klasse.href}
                className="accent-card p-6 group cursor-pointer reveal"
                aria-label={`${klasse.titel} – ${klasse.untertitel}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl" aria-hidden="true">{klasse.icon}</span>
                  {klasse.badge && (
                    <span className="text-xs bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded-full font-semibold">
                      {klasse.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-0.5">
                  {klasse.titel}
                </h3>
                <p className="text-accent text-sm font-medium mb-3">{klasse.untertitel}</p>
                <p className="text-muted text-sm leading-relaxed">{klasse.text}</p>
                <div className="mt-4 flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Mehr erfahren
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          CTA BANNER → PREISRECHNER
          ========================================= */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0D1526 0%, #0A1020 50%, #111827 100%)',
        }}
        aria-labelledby="preisrechner-cta-heading"
      >
        {/* Accent glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 60% 50%, rgba(0,212,255,0.08) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl reveal">
            <div className="section-badge mb-5 w-fit">
              Preisrechner
            </div>
            <h2 id="preisrechner-cta-heading" className="section-title mb-5">
              Was kostet{' '}
              <span className="gradient-text">dein Führerschein?</span>
            </h2>
            <p className="section-subtitle mb-8">
              Mit unserem interaktiven Preisrechner bekommst du eine transparente Kostenübersicht für jede Führerscheinklasse —
              individuell auf dich angepasst.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/fuehrerscheinklassen" className="btn-primary py-4 px-8 text-base">
                Preise berechnen
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
              <Link href="/kontakt" className="btn-outline py-4 px-8 text-base">
                Persönlich beraten lassen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          WARUM KURSMANN
          ========================================= */}
      <section className="py-24 bg-surface" aria-labelledby="vorteile-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div className="reveal-left">
              <div className="section-badge mb-4 w-fit">Warum Kursmann?</div>
              <h2 id="vorteile-heading" className="section-title mb-6">
                Ausbildung auf{' '}
                <span className="gradient-text">höchstem Niveau</span>
              </h2>
              <p className="section-subtitle mb-8">
                Wir glauben, dass jeder Fahrschüler eine persönliche und individuelle Betreuung verdient.
                Bei uns bist du nicht Nummer 23 auf einer Liste — du bist unser Schüler.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: '👨‍🏫',
                    titel: 'Erfahrene Fahrlehrer',
                    text: 'Qualifizierte Fahrlehrer mit jahrelanger Erfahrung und Geduld für jeden Lerntyp.',
                  },
                  {
                    icon: '🚗',
                    titel: 'Moderne Fahrzeuge',
                    text: 'Neueste Fahrzeuggeneration mit modernster Sicherheitsausstattung und Fahrassistenzsystemen.',
                  },
                  {
                    icon: '📱',
                    titel: 'Flexible Theoriezeiten',
                    text: 'Theorieunterricht vor Ort und online — du lernst wann und wo es dir passt.',
                  },
                  {
                    icon: '💬',
                    titel: 'Direkte Kommunikation',
                    text: 'Erreichbar per Telefon und WhatsApp — schnelle Antworten, keine langen Wartezeiten.',
                  },
                ].map((item) => (
                  <div key={item.titel} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center flex-shrink-0 text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-0.5">{item.titel}</h3>
                      <p className="text-muted text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual card */}
            <div className="reveal-right">
              <div className="relative">
                {/* Main card */}
                <div
                  className="glass-card rounded-2xl p-8 border border-black/8"
                  style={{ background: 'linear-gradient(135deg, rgba(0,119,182,0.05), rgba(0,74,128,0.03))' }}
                >
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-3" aria-hidden="true">🏆</div>
                    <h3 className="font-heading text-2xl font-bold text-text-primary">
                      Deine Fahrschule <br />in Landsberg
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {[
                      { label: 'Standort', value: 'Hauptstraße 14, Landsberg am Lech' },
                      { label: 'Telefon', value: '08191 447823' },
                      { label: 'Gebiet', value: 'Landsberg, Kaufering, Penzing & Umgebung' },
                      { label: 'Klassen', value: 'B, BE, B196, AM, A1, A2, A' },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-start gap-4 py-2.5 border-b border-black/8 last:border-0 text-sm">
                        <span className="text-muted flex-shrink-0">{row.label}</span>
                        <span className="text-text-primary text-right">{row.value}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/kontakt" className="btn-primary w-full justify-center mt-6 block text-center">
                    Jetzt kontaktieren
                  </Link>
                </div>

                {/* Floating accent badge */}
                <div
                  className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-3 border border-accent/25 flex items-center gap-2.5"
                  style={{ animation: 'float 5s ease-in-out infinite' }}
                  aria-hidden="true"
                >
                  <span className="text-xl">⭐</span>
                  <div>
                    <div className="text-sm font-bold text-text-primary">4.9 / 5.0</div>
                    <div className="text-xs text-muted">Kundenbewertung</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          BEWERTUNGEN VORSCHAU
          ========================================= */}
      <section className="py-24 bg-bg" aria-labelledby="bewertungen-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <div className="section-badge mb-4 mx-auto w-fit">Kundenstimmen</div>
            <h2 id="bewertungen-heading" className="section-title mb-4">
              Was unsere{' '}
              <span className="gradient-text">Schüler sagen</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            {bewertungen.map((b) => (
              <article
                key={b.name}
                className="accent-card p-6 reveal"
                aria-label={`Bewertung von ${b.name}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <StarRating count={b.sterne} />
                  <span className="text-xs text-muted">{b.datum}</span>
                </div>
                <blockquote>
                  <p className="text-text-primary text-sm leading-relaxed mb-4">
                    &ldquo;{b.text}&rdquo;
                  </p>
                  <footer>
                    <cite className="text-muted text-sm font-medium not-italic">— {b.name}</cite>
                  </footer>
                </blockquote>
              </article>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <Link href="/bewertungen" className="btn-outline py-3 px-8">
              Alle Bewertungen lesen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          FINAL CTA
          ========================================= */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #070A12 0%, #0D1520 100%)',
        }}
        aria-labelledby="final-cta-heading"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.1) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 id="final-cta-heading" className="section-title mb-5">
            Bereit für deinen{' '}
            <span className="gradient-text">Führerschein?</span>
          </h2>
          <p className="section-subtitle mx-auto text-center mb-8">
            Kontaktiere uns jetzt für eine kostenfreie Erstberatung.
            Wir rufen auch gerne zurück — einfach WhatsApp schreiben.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn-primary py-4 px-10 text-base">
              Jetzt anfragen
            </Link>
            <a href="https://wa.me/498191447823" target="_blank" rel="noopener noreferrer"
              className="btn-outline py-4 px-10 text-base flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp schreiben
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
