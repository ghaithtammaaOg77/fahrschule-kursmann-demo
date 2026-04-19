'use client'

import { useState, useMemo } from 'react'

type KlasseKey = 'B' | 'BE' | 'B196' | 'AM' | 'A1' | 'A2' | 'A'

interface KlasseData {
  name: string
  shortName: string
  icon: string
  beschreibung: string
  grundbetrag: number
  lehrmaterial: number
  ersteHilfe: number
  uebungsPreis?: number
  sonderfahrten?: { anzahl: number; preis: number; label: string }
  pflichtfahrten?: { anzahl: number; preis: number; label: string }
  testfahrt?: number
  fahrpruefungFahrschule?: number
  theorieGebührFahrschule?: number
  tuevPraktisch?: number
  tuevTheoretisch?: number
  hinweis?: string
  defaultExtraStunden: number
  minExtra: number
  maxExtra: number
  typAvg: number // typical extra hours for avg estimate
}

const KLASSEN_DATA: Record<KlasseKey, KlasseData> = {
  B: {
    name: 'Klasse B — Autoführerschein (PKW)',
    shortName: 'B',
    icon: '🚗',
    beschreibung: 'Der klassische Pkw-Führerschein. Berechtigt zum Fahren von Kraftfahrzeugen bis 3,5 t.',
    grundbetrag: 350,
    lehrmaterial: 70,
    ersteHilfe: 60,
    uebungsPreis: 65,
    sonderfahrten: { anzahl: 12, preis: 75, label: '12 Pflicht-Sonderfahrten (Überlandfahrt, Autobahn, Nacht)' },
    fahrpruefungFahrschule: 200,
    theorieGebührFahrschule: 50,
    tuevPraktisch: 130,
    tuevTheoretisch: 25,
    defaultExtraStunden: 20,
    minExtra: 0,
    maxExtra: 50,
    typAvg: 20,
  },
  BE: {
    name: 'Klasse BE — PKW mit großem Anhänger',
    shortName: 'BE',
    icon: '🚗🚛',
    beschreibung: 'Erweiterung für PKW mit Anhänger über 750 kg. Setzt Klasse B voraus.',
    grundbetrag: 250,
    lehrmaterial: 70,
    ersteHilfe: 60,
    uebungsPreis: 75,
    sonderfahrten: { anzahl: 5, preis: 85, label: '5 Pflicht-Sonderfahrten' },
    fahrpruefungFahrschule: 250,
    tuevPraktisch: 130,
    hinweis: 'Nur wenn Klasse B bereits vorhanden — sonst gelten die Kosten von Klasse B zuzüglich dieser Werte.',
    defaultExtraStunden: 10,
    minExtra: 0,
    maxExtra: 25,
    typAvg: 10,
  },
  B196: {
    name: 'Klasse B196 — Motorrad ohne Prüfung',
    shortName: 'B196',
    icon: '🏍️',
    beschreibung: 'Motorrad fahren ohne separate Prüfung. Ab 25 Jahren, mind. 5 Jahre Klasse B.',
    grundbetrag: 240,
    lehrmaterial: 0,
    ersteHilfe: 0,
    pflichtfahrten: { anzahl: 10, preis: 70, label: '10 Pflicht-Fahrstunden (à 45 Min.)' },
    testfahrt: 60,
    hinweis: 'Nur wenn Klasse B bereits vorhanden. Keine Prüfung erforderlich — rein fahrerische Ausbildung.',
    defaultExtraStunden: 0,
    minExtra: 0,
    maxExtra: 0,
    typAvg: 0,
  },
  AM: {
    name: 'Klasse AM — Kleinkraftrad (bis 45 km/h)',
    shortName: 'AM',
    icon: '🛵',
    beschreibung: 'Für Kleinkrafträder und vierrädrige Leichtfahrzeuge bis 45 km/h.',
    grundbetrag: 350,
    lehrmaterial: 70,
    ersteHilfe: 60,
    uebungsPreis: 60,
    fahrpruefungFahrschule: 200,
    theorieGebührFahrschule: 50,
    tuevPraktisch: 130,
    tuevTheoretisch: 25,
    defaultExtraStunden: 12,
    minExtra: 0,
    maxExtra: 30,
    typAvg: 12,
  },
  A1: {
    name: 'Klasse A1 — Leichtkraftrad (bis 125 ccm)',
    shortName: 'A1',
    icon: '🏍️',
    beschreibung: 'Für Motorräder bis 125 ccm und 11 kW. Ab 16 Jahren.',
    grundbetrag: 350,
    lehrmaterial: 70,
    ersteHilfe: 60,
    uebungsPreis: 60,
    sonderfahrten: { anzahl: 12, preis: 70, label: '12 Pflicht-Sonderfahrten' },
    fahrpruefungFahrschule: 200,
    theorieGebührFahrschule: 50,
    tuevPraktisch: 160,
    tuevTheoretisch: 25,
    defaultExtraStunden: 12,
    minExtra: 0,
    maxExtra: 30,
    typAvg: 12,
  },
  A2: {
    name: 'Klasse A2 — Motorrad bis 35 kW',
    shortName: 'A2',
    icon: '🏍️',
    beschreibung: 'Für Motorräder bis 35 kW und max. 0,2 kW/kg. Ab 18 Jahren.',
    grundbetrag: 350,
    lehrmaterial: 70,
    ersteHilfe: 60,
    uebungsPreis: 65,
    sonderfahrten: { anzahl: 12, preis: 75, label: '12 Pflicht-Sonderfahrten' },
    fahrpruefungFahrschule: 200,
    theorieGebührFahrschule: 50,
    tuevPraktisch: 160,
    tuevTheoretisch: 25,
    defaultExtraStunden: 12,
    minExtra: 0,
    maxExtra: 30,
    typAvg: 12,
  },
  A: {
    name: 'Klasse A — Motorrad unbeschränkt',
    shortName: 'A',
    icon: '🏍️',
    beschreibung: 'Unbeschränkter Motorradführerschein. Ab 24 Jahren (oder 21 J. mit A2-Vorerfahrung).',
    grundbetrag: 350,
    lehrmaterial: 70,
    ersteHilfe: 60,
    uebungsPreis: 65,
    sonderfahrten: { anzahl: 12, preis: 75, label: '12 Pflicht-Sonderfahrten' },
    fahrpruefungFahrschule: 200,
    theorieGebührFahrschule: 50,
    tuevPraktisch: 160,
    tuevTheoretisch: 25,
    defaultExtraStunden: 12,
    minExtra: 0,
    maxExtra: 30,
    typAvg: 12,
  },
}

const KLASSEN_ORDER: KlasseKey[] = ['B', 'BE', 'B196', 'AM', 'A1', 'A2', 'A']

function formatEur(amount: number): string {
  return amount.toLocaleString('de-DE') + ' €'
}

interface PriceRowItem {
  label: string
  value: number
  highlight?: boolean
  sub?: boolean
}

export default function PriceCalculator() {
  const [selectedKlasse, setSelectedKlasse] = useState<KlasseKey>('B')
  const [extraStunden, setExtraStunden] = useState<number>(20)

  const klasse = KLASSEN_DATA[selectedKlasse]

  // Update extra hours when class changes
  const handleKlasseChange = (key: KlasseKey) => {
    setSelectedKlasse(key)
    setExtraStunden(KLASSEN_DATA[key].defaultExtraStunden)
  }

  const priceItems = useMemo((): PriceRowItem[] => {
    const items: PriceRowItem[] = []

    // Grundbetrag (Verwaltung, Theorie, Anmeldung)
    items.push({ label: 'Grundbetrag (Verwaltung, Theorie, Anmeldung)', value: klasse.grundbetrag })

    // Lehrmaterial
    if (klasse.lehrmaterial > 0) {
      items.push({ label: 'Lehrmaterial', value: klasse.lehrmaterial })
    }

    // Erste-Hilfe-Kurs
    if (klasse.ersteHilfe > 0) {
      items.push({ label: 'Erste-Hilfe-Kurs', value: klasse.ersteHilfe })
    }

    // Pflichtfahrten (B196)
    if (klasse.pflichtfahrten) {
      items.push({
        label: `${klasse.pflichtfahrten.label} (à ${formatEur(klasse.pflichtfahrten.preis)})`,
        value: klasse.pflichtfahrten.anzahl * klasse.pflichtfahrten.preis,
        sub: true,
      })
    }

    // Testfahrt (B196)
    if (klasse.testfahrt) {
      items.push({ label: 'Testfahrt', value: klasse.testfahrt })
    }

    // Sonderfahrten (Pflicht)
    if (klasse.sonderfahrten) {
      items.push({
        label: `${klasse.sonderfahrten.label} (à ${formatEur(klasse.sonderfahrten.preis)})`,
        value: klasse.sonderfahrten.anzahl * klasse.sonderfahrten.preis,
        sub: true,
      })
    }

    // Theorieprüfung Fahrschule
    if (klasse.theorieGebührFahrschule) {
      items.push({ label: 'Theorieprüfung (Fahrschule)', value: klasse.theorieGebührFahrschule })
    }

    // Fahrprüfung Fahrschule
    if (klasse.fahrpruefungFahrschule) {
      items.push({ label: 'Fahrprüfung (Fahrschule)', value: klasse.fahrpruefungFahrschule })
    }

    // TÜV Theoretisch
    if (klasse.tuevTheoretisch) {
      items.push({ label: 'TÜV/DEKRA – Theorieprüfung', value: klasse.tuevTheoretisch })
    }

    // TÜV Praktisch
    if (klasse.tuevPraktisch) {
      items.push({ label: 'TÜV/DEKRA – Fahrprüfung', value: klasse.tuevPraktisch })
    }

    return items
  }, [klasse])

  const fixedTotal = useMemo(() => priceItems.reduce((sum, item) => sum + item.value, 0), [priceItems])

  const extraTotal = useMemo(
    () => (klasse.uebungsPreis ? extraStunden * klasse.uebungsPreis : 0),
    [klasse, extraStunden]
  )

  const grandTotal = fixedTotal + extraTotal

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-black/8">
      {/* Klassen Tabs */}
      <div className="p-4 border-b border-black/8 bg-surface-2/50">
        <p className="text-xs text-muted font-semibold uppercase tracking-widest mb-3">
          Führerscheinklasse wählen
        </p>
        <div className="flex flex-wrap gap-2">
          {KLASSEN_ORDER.map((key) => (
            <button
              key={key}
              onClick={() => handleKlasseChange(key)}
              className={`calc-tab ${selectedKlasse === key ? 'active' : ''}`}
              aria-pressed={selectedKlasse === key}
            >
              <span className="mr-1.5">{KLASSEN_DATA[key].icon}</span>
              {key}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* Class Header */}
        <div className="mb-6">
          <h3 className="font-heading text-xl font-bold text-text-primary mb-1">
            {klasse.name}
          </h3>
          <p className="text-muted text-sm">{klasse.beschreibung}</p>
          {klasse.hinweis && (
            <div className="mt-3 flex items-start gap-2 bg-accent/5 border border-accent/15 rounded-lg px-3 py-2.5">
              <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xs text-accent/80">{klasse.hinweis}</p>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Price Breakdown */}
          <div>
            <p className="text-xs text-muted font-semibold uppercase tracking-widest mb-3">
              Kostenaufstellung
            </p>
            <div className="space-y-0">
              {priceItems.map((item, i) => (
                <div key={i} className="price-row">
                  <span className={`label ${item.sub ? 'pl-0' : ''}`}>
                    {item.sub && (
                      <span className="inline-block w-2 h-0.5 bg-accent/40 mr-2 mb-0.5 rounded-full" aria-hidden="true" />
                    )}
                    {item.label}
                  </span>
                  <span className="value ml-4 text-right">{formatEur(item.value)}</span>
                </div>
              ))}

              {/* Extra Übungsstunden */}
              {klasse.uebungsPreis !== undefined && klasse.maxExtra > 0 && (
                <div className="price-row">
                  <span className="label flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full bg-accent"
                      aria-hidden="true"
                      style={{ flexShrink: 0 }}
                    />
                    {extraStunden} Übungsfahrstunden
                    <span className="text-xs text-muted/70">
                      (à {formatEur(klasse.uebungsPreis)})
                    </span>
                  </span>
                  <span className="value ml-4 text-right text-accent">{formatEur(extraTotal)}</span>
                </div>
              )}
            </div>

            {/* Total */}
            <div className="mt-4 pt-4 border-t border-accent/20">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-text-primary">
                  Geschätzte Gesamtkosten
                </span>
                <span
                  className="font-heading text-2xl font-bold gradient-text"
                  aria-live="polite"
                >
                  {formatEur(grandTotal)}
                </span>
              </div>
              <p className="text-xs text-muted mt-1.5">
                * Endpreis hängt vom individuellen Lernfortschritt ab.
                Durchschnittlich {klasse.typAvg > 0 ? `${klasse.typAvg} Übungsfahrstunden.` : 'feste Kosten.'}
              </p>
            </div>
          </div>

          {/* Slider + Visual */}
          <div>
            {klasse.uebungsPreis !== undefined && klasse.maxExtra > 0 ? (
              <div>
                <p className="text-xs text-muted font-semibold uppercase tracking-widest mb-4">
                  Übungsfahrstunden anpassen
                </p>
                <div
                  className="relative p-5 rounded-xl border border-black/8 bg-surface-2 mb-5"
                >
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="font-heading text-4xl font-bold text-accent">
                      {extraStunden}
                    </span>
                    <span className="text-muted text-sm">Stunden</span>
                  </div>
                  <input
                    type="range"
                    min={klasse.minExtra}
                    max={klasse.maxExtra}
                    value={extraStunden}
                    onChange={(e) => setExtraStunden(Number(e.target.value))}
                    className="w-full"
                    aria-label="Anzahl der Übungsfahrstunden"
                    style={{
                      background: `linear-gradient(to right, #00D4FF ${((extraStunden - klasse.minExtra) / (klasse.maxExtra - klasse.minExtra)) * 100}%, #1A2235 0%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-muted mt-1.5">
                    <span>{klasse.minExtra}</span>
                    <span>{klasse.maxExtra} Std.</span>
                  </div>
                </div>

                {/* Cost bar visualization */}
                <div className="space-y-2.5">
                  <p className="text-xs text-muted font-semibold uppercase tracking-widest mb-3">
                    Kostenverteilung
                  </p>
                  {[
                    { label: 'Fixkosten', value: fixedTotal - extraTotal, total: grandTotal, color: '#00D4FF' },
                    { label: 'Übungsfahrstunden', value: extraTotal, total: grandTotal, color: '#8B5CF6' },
                  ].map((bar) => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-xs text-muted mb-1">
                        <span>{bar.label}</span>
                        <span className="font-medium">{formatEur(bar.value)}</span>
                      </div>
                      <div className="h-2 bg-surface-2 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: grandTotal > 0 ? `${(bar.value / grandTotal) * 100}%` : '0%',
                            background: bar.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // B196 / fixed cost classes
              <div className="p-5 rounded-xl border border-accent/20 bg-accent/5">
                <div className="text-center">
                  <span className="text-5xl block mb-3" aria-hidden="true">{klasse.icon}</span>
                  <p className="text-accent font-semibold text-sm mb-1">Fixe Gesamtkosten</p>
                  <p className="font-heading text-4xl font-bold gradient-text mb-3">
                    {formatEur(grandTotal)}
                  </p>
                  <p className="text-muted text-sm">
                    Alle Kosten sind bei dieser Klasse fest kalkulierbar.
                  </p>
                </div>
              </div>
            )}

            {/* CTA */}
            <a
              href="/kontakt"
              className="btn-primary w-full text-center justify-center mt-5 block"
            >
              Jetzt kostenfrei anfragen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
