'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Bewertung {
  id: string
  name: string
  sterne: number
  text: string
  datum: string
  isDemo?: boolean
}

const DEMO_BEWERTUNGEN: Bewertung[] = [
  {
    id: 'demo-1',
    name: 'Max M.',
    sterne: 5,
    text: 'Absolute Top-Fahrschule! Die Fahrlehrer sind extrem geduldig und kompetent. Ich habe auf Anhieb bestanden. Alle Prüfungsthemen wurden perfekt vorbereitet. Klare Empfehlung für jeden in Landsberg!',
    datum: 'März 2025',
    isDemo: true,
  },
  {
    id: 'demo-2',
    name: 'Sarah K.',
    sterne: 5,
    text: 'Schon meinen zweiten Führerschein hier gemacht — A2 nach dem B-Schein. Super Atmosphäre, flexible Terminplanung und die Ausbildung ist wirklich auf den Einzelnen zugeschnitten. Würde immer wieder kommen!',
    datum: 'Februar 2025',
    isDemo: true,
  },
  {
    id: 'demo-3',
    name: 'Thomas H.',
    sterne: 4,
    text: 'Sehr gute Fahrschule mit erfahrenen Fahrlehrern. Ich hatte manchmal etwas längere Wartezeiten bei Terminen, aber die Ausbildungsqualität ist wirklich top. Nach 3 Monaten meinen B-Schein in der Tasche!',
    datum: 'Januar 2025',
    isDemo: true,
  },
  {
    id: 'demo-4',
    name: 'Lisa M.',
    sterne: 5,
    text: 'Der Theorieunterricht ist super strukturiert und die Fahrlehrer erklären wirklich alles verständlich. Preis-Leistung stimmt absolut. Danke Fahrschule Kursmann für die tolle Ausbildung!',
    datum: 'Dezember 2024',
    isDemo: true,
  },
  {
    id: 'demo-5',
    name: 'Jonas W.',
    sterne: 5,
    text: 'Auf Anhieb bestanden dank der top Vorbereitung! Mein Fahrlehrer hat mir genau gezeigt, worauf es bei der Prüfung ankommt. Sehr professionell und trotzdem entspannte Atmosphäre. 10/10!',
    datum: 'November 2024',
    isDemo: true,
  },
]

function StarRating({ count, onSelect }: { count: number; onSelect?: (n: number) => void }) {
  const [hovered, setHovered] = useState(0)

  return (
    <div className="flex gap-1" role={onSelect ? 'group' : undefined} aria-label={onSelect ? 'Sternebewertung auswählen' : `${count} von 5 Sternen`}>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
        <button
          key={star}
          type={onSelect ? 'button' : undefined}
          onClick={() => onSelect?.(star)}
          onMouseEnter={() => onSelect && setHovered(star)}
          onMouseLeave={() => onSelect && setHovered(0)}
          className={`${onSelect ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default pointer-events-none'}`}
          aria-label={onSelect ? `${star} Sterne` : undefined}
        >
          <svg
            className={`w-5 h-5 transition-colors ${
              star <= (onSelect ? (hovered || count) : count)
                ? 'text-yellow-400'
                : 'text-muted/30'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
      ))}
    </div>
  )
}

export default function BewertungenPage() {
  const [bewertungen, setBewertungen] = useState<Bewertung[]>(DEMO_BEWERTUNGEN)
  const [myReviewIds, setMyReviewIds] = useState<string[]>([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ name: '', sterne: 5, text: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Load personal reviews + own IDs from localStorage
    try {
      const stored = localStorage.getItem('kursmann_bewertungen')
      const ownIds = localStorage.getItem('kursmann_own_review_ids')
      if (stored) {
        const parsed: Bewertung[] = JSON.parse(stored)
        setBewertungen([...parsed, ...DEMO_BEWERTUNGEN])
      }
      if (ownIds) {
        setMyReviewIds(JSON.parse(ownIds))
      }
    } catch {
      // Ignore storage errors
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!form.name.trim()) {
      setError('Bitte gib deinen Namen ein.')
      return
    }
    if (form.text.trim().length < 20) {
      setError('Bitte schreibe mindestens 20 Zeichen.')
      return
    }

    const newId = `user-${Date.now()}`
    const newReview: Bewertung = {
      id: newId,
      name: form.name.trim(),
      sterne: form.sterne,
      text: form.text.trim(),
      datum: new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' }),
    }

    try {
      const stored = localStorage.getItem('kursmann_bewertungen')
      const existing: Bewertung[] = stored ? JSON.parse(stored) : []
      const updated = [newReview, ...existing]
      localStorage.setItem('kursmann_bewertungen', JSON.stringify(updated))

      const ownIds = [...myReviewIds, newId]
      localStorage.setItem('kursmann_own_review_ids', JSON.stringify(ownIds))
      setMyReviewIds(ownIds)
      setBewertungen([newReview, ...bewertungen])
    } catch {
      // Ignore
    }

    setSubmitted(true)
    setForm({ name: '', sterne: 5, text: '' })
    setTimeout(() => {
      setShowForm(false)
      setSubmitted(false)
    }, 3000)
  }

  const handleDelete = (id: string) => {
    try {
      const stored = localStorage.getItem('kursmann_bewertungen')
      const existing: Bewertung[] = stored ? JSON.parse(stored) : []
      const updated = existing.filter((b) => b.id !== id)
      localStorage.setItem('kursmann_bewertungen', JSON.stringify(updated))

      const updatedIds = myReviewIds.filter((rid) => rid !== id)
      localStorage.setItem('kursmann_own_review_ids', JSON.stringify(updatedIds))
      setMyReviewIds(updatedIds)
      setBewertungen(bewertungen.filter((b) => b.id !== id))
    } catch {
      // Ignore
    }
  }

  const avgSterne = bewertungen.reduce((sum, b) => sum + b.sterne, 0) / bewertungen.length

  return (
    <>
      {/* Page Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #080B14 0%, #0A0C14 100%)' }}
        aria-labelledby="bewertungen-page-heading"
      >
        <div className="absolute inset-0 hero-grid-bg opacity-60" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-badge mb-5 mx-auto w-fit" style={{ animation: 'fadeInUp 0.5s ease both' }}>
            Kundenstimmen
          </div>
          <h1
            id="bewertungen-page-heading"
            className="section-title mb-5"
            style={{ animation: 'fadeInUp 0.6s ease 0.1s both', fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Was unsere{' '}
            <span className="gradient-text">Schüler sagen</span>
          </h1>

          {/* Avg Rating */}
          <div
            className="flex flex-col items-center gap-2"
            style={{ animation: 'fadeInUp 0.6s ease 0.2s both' }}
          >
            <div className="flex items-center gap-3">
              <span className="font-heading text-5xl font-bold gradient-text tabular-nums">
                {avgSterne.toFixed(1)}
              </span>
              <div>
                <StarRating count={Math.round(avgSterne)} />
                <p className="text-muted text-sm mt-1">{bewertungen.length} Bewertungen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bewertungen Grid */}
      <section className="py-20 bg-bg" aria-label="Alle Bewertungen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CTA: Bewertung schreiben */}
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="font-heading text-xl font-bold text-text-primary">
                Alle Bewertungen
              </h2>
              <p className="text-muted text-sm mt-0.5">{bewertungen.length} Stimmen von Fahrschülern</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="btn-primary"
              aria-expanded={showForm}
            >
              {showForm ? 'Abbrechen' : '✏️ Bewertung schreiben'}
            </button>
          </div>

          {/* Review Form */}
          {showForm && (
            <div
              className="glass-card rounded-2xl p-6 md:p-8 mb-10 border border-accent/20"
              style={{ animation: 'slideDown 0.3s ease both' }}
              role="dialog"
              aria-labelledby="form-heading"
            >
              <h3 id="form-heading" className="font-heading text-xl font-bold text-text-primary mb-1">
                Deine Bewertung
              </h3>
              <p className="text-muted text-sm mb-5">
                Demo-Modus: Bewertungen werden lokal in deinem Browser gespeichert.
              </p>

              {submitted ? (
                <div className="text-center py-6">
                  <div className="text-4xl mb-3" aria-hidden="true">🎉</div>
                  <p className="text-accent font-semibold">Danke für deine Bewertung!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="review-name" className="block text-sm font-medium text-text-primary mb-1.5">
                        Dein Name *
                      </label>
                      <input
                        id="review-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="form-input"
                        placeholder="z.B. Max M."
                        maxLength={50}
                        required
                      />
                    </div>
                    <div>
                      <p className="block text-sm font-medium text-text-primary mb-2">
                        Sterne *
                      </p>
                      <StarRating
                        count={form.sterne}
                        onSelect={(n) => setForm({ ...form, sterne: n })}
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="review-text" className="block text-sm font-medium text-text-primary mb-1.5">
                      Deine Erfahrung * (mind. 20 Zeichen)
                    </label>
                    <textarea
                      id="review-text"
                      value={form.text}
                      onChange={(e) => setForm({ ...form, text: e.target.value })}
                      className="form-input resize-none"
                      rows={4}
                      placeholder="Erzähl uns von deiner Erfahrung bei Fahrschule Kursmann..."
                      maxLength={500}
                      required
                    />
                    <p className="text-xs text-muted mt-1 text-right">{form.text.length}/500</p>
                  </div>
                  {error && (
                    <p className="text-red-400 text-sm mt-3" role="alert">{error}</p>
                  )}
                  <div className="mt-5">
                    <button type="submit" className="btn-primary">
                      Bewertung abschicken
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {bewertungen.map((b) => (
              <article
                key={b.id}
                className="accent-card p-6 reveal relative"
                aria-labelledby={`review-${b.id}-name`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <StarRating count={b.sterne} />
                    <p id={`review-${b.id}-name`} className="font-semibold text-text-primary text-sm mt-1.5">
                      {b.name}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted">{b.datum}</span>
                    {myReviewIds.includes(b.id) && (
                      <button
                        onClick={() => handleDelete(b.id)}
                        className="text-xs text-red-400 hover:text-red-300 border border-red-400/20 hover:border-red-400/40 px-2 py-0.5 rounded transition-colors"
                        aria-label={`Bewertung von ${b.name} löschen`}
                      >
                        Löschen
                      </button>
                    )}
                  </div>
                </div>
                <blockquote>
                  <p className="text-muted text-sm leading-relaxed">
                    &ldquo;{b.text}&rdquo;
                  </p>
                </blockquote>
                {b.isDemo && (
                  <div className="mt-3 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-accent/60">Verifizierter Schüler</span>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface/20 border-t border-white/5" aria-label="Kontakt CTA">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
            Überzeugt? Starte jetzt!
          </h2>
          <p className="text-muted mb-6">
            Melde dich bei uns und werde Teil der Kursmann-Familie.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn-primary">
              Jetzt anfragen
            </Link>
            <Link href="/fuehrerscheinklassen" className="btn-outline">
              Preise ansehen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
