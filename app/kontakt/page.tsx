'use client'

import { useState } from 'react'

const oeffnungszeiten = [
  { tag: 'Montag', zeiten: '08:00 – 18:00 Uhr' },
  { tag: 'Dienstag', zeiten: '08:00 – 18:00 Uhr' },
  { tag: 'Mittwoch', zeiten: '10:00 – 20:00 Uhr' },
  { tag: 'Donnerstag', zeiten: '08:00 – 18:00 Uhr' },
  { tag: 'Freitag', zeiten: '08:00 – 16:00 Uhr' },
  { tag: 'Samstag', zeiten: '09:00 – 12:00 Uhr (Theorie)' },
  { tag: 'Sonntag', zeiten: 'Geschlossen' },
]

const heute = new Date().toLocaleDateString('de-DE', { weekday: 'long' })

export default function KontaktPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    telefon: '',
    klasse: '',
    nachricht: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!form.name.trim()) newErrors.name = 'Bitte gib deinen Namen ein.'
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      newErrors.email = 'Bitte gib eine gültige E-Mail-Adresse ein.'
    }
    if (!form.nachricht.trim() || form.nachricht.trim().length < 10) {
      newErrors.nachricht = 'Bitte schreibe mindestens 10 Zeichen.'
    }
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    setLoading(true)
    // Demo: Simulate form submission
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* Page Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden page-hero"
        style={{ background: 'linear-gradient(180deg, #080B14 0%, #0A0C14 100%)' }}
        aria-labelledby="kontakt-heading"
      >
        <div className="absolute inset-0 hero-grid-bg opacity-60" aria-hidden="true" />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.1), transparent 70%)', filter: 'blur(40px)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-badge mb-5 mx-auto w-fit" style={{ animation: 'fadeInUp 0.5s ease both' }}>
            Kontakt
          </div>
          <h1
            id="kontakt-heading"
            className="section-title mb-5"
            style={{ animation: 'fadeInUp 0.6s ease 0.1s both', fontSize: 'clamp(36px, 5vw, 64px)', color: '#F0F4FF', WebkitTextFillColor: '#F0F4FF' }}
          >
            Wir sind{' '}
            <span className="gradient-text">für dich da</span>
          </h1>
          <p
            className="section-subtitle mx-auto text-center"
            style={{ animation: 'fadeInUp 0.6s ease 0.2s both' }}
          >
            Schreib uns, ruf an oder komm einfach vorbei — wir beraten dich kostenlos und unverbindlich.
          </p>
        </div>
      </section>

      {/* Kontakt Content */}
      <section className="py-20 bg-bg" aria-label="Kontaktformular und Informationen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* LEFT: Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Kontaktdaten */}
              <div className="accent-card p-6 reveal-left">
                <h2 className="font-heading text-xl font-bold text-text-primary mb-5">
                  Kontaktdaten
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      ),
                      label: 'Adresse',
                      content: <span>Hauptstraße 14<br />86899 Landsberg am Lech</span>,
                    },
                    {
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      ),
                      label: 'Telefon',
                      content: <a href="tel:+498191447823" className="hover:text-accent transition-colors">08191 447823</a>,
                    },
                    {
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      ),
                      label: 'E-Mail',
                      content: <a href="mailto:info@fahrschule-kursmann.de" className="hover:text-accent transition-colors break-all">info@fahrschule-kursmann.de</a>,
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-muted uppercase tracking-wide font-medium mb-0.5">{item.label}</p>
                        <div className="text-sm text-text-primary">{item.content}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/498191447823"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center gap-3 p-3.5 rounded-xl bg-green-500/8 border border-green-500/20 hover:bg-green-500/12 transition-colors"
                  aria-label="Auf WhatsApp schreiben"
                >
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div>
                    <p className="text-green-400 text-sm font-semibold">Direkt via WhatsApp</p>
                    <p className="text-muted text-xs">Schnelle Antworten — oft in Minuten</p>
                  </div>
                  <svg className="w-4 h-4 text-green-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Öffnungszeiten */}
              <div className="accent-card p-6 reveal-left">
                <h2 className="font-heading text-xl font-bold text-text-primary mb-5">
                  Öffnungszeiten
                </h2>
                <div className="space-y-2.5">
                  {oeffnungszeiten.map((oz) => {
                    const isHeute = oz.tag === heute
                    const isGeschlossen = oz.zeiten === 'Geschlossen'
                    return (
                      <div
                        key={oz.tag}
                        className={`flex justify-between items-center py-2 border-b border-white/5 last:border-0 text-sm ${
                          isHeute ? 'text-accent' : isGeschlossen ? 'text-muted/50' : 'text-text-primary'
                        }`}
                      >
                        <span className={`font-medium ${isHeute ? '' : 'text-muted'}`}>
                          {oz.tag}
                          {isHeute && (
                            <span className="ml-2 text-xs bg-accent/10 border border-accent/20 px-1.5 py-0.5 rounded-full text-accent">
                              Heute
                            </span>
                          )}
                        </span>
                        <span className={isGeschlossen ? 'text-muted/50' : ''}>{oz.zeiten}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Maps Embed */}
              <div className="rounded-xl overflow-hidden border border-white/8 reveal-left" aria-label="Karte: Fahrschule Kursmann Standort">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.0!2d10.8696!3d48.0503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDAzJzAxLjEiTiAxMMKwNTInMTAuNiJF!5e0!3m2!1sde!2sde!4v1"
                  width="100%"
                  height="240"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fahrschule Kursmann auf Google Maps"
                />
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="lg:col-span-3 reveal">
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/8">
                <h2 className="font-heading text-2xl font-bold text-text-primary mb-2">
                  Führerschein anfragen
                </h2>
                <p className="text-muted text-sm mb-7">
                  Füll das Formular aus — wir melden uns innerhalb eines Werktages bei dir.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div
                      className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-4"
                      aria-hidden="true"
                    >
                      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-text-primary mb-2">
                      Nachricht gesendet!
                    </h3>
                    <p className="text-muted text-sm">
                      Wir haben deine Anfrage erhalten und melden uns bald bei dir.
                      <br />
                      Du kannst uns auch direkt anrufen: <a href="tel:+498191447823" className="text-accent hover:underline">08191 447823</a>
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate aria-label="Kontaktformular">
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
                          Vollständiger Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={`form-input ${errors.name ? 'border-red-400/60' : ''}`}
                          placeholder="Max Mustermann"
                          required
                          autoComplete="name"
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1" role="alert">{errors.name}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
                          E-Mail-Adresse *
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={`form-input ${errors.email ? 'border-red-400/60' : ''}`}
                          placeholder="max@beispiel.de"
                          required
                          autoComplete="email"
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1" role="alert">{errors.email}</p>}
                      </div>

                      {/* Telefon */}
                      <div>
                        <label htmlFor="telefon" className="block text-sm font-medium text-text-primary mb-1.5">
                          Telefon (optional)
                        </label>
                        <input
                          id="telefon"
                          type="tel"
                          value={form.telefon}
                          onChange={(e) => setForm({ ...form, telefon: e.target.value })}
                          className="form-input"
                          placeholder="08191 123456"
                          autoComplete="tel"
                        />
                      </div>

                      {/* Führerscheinklasse */}
                      <div>
                        <label htmlFor="klasse" className="block text-sm font-medium text-text-primary mb-1.5">
                          Gewünschte Klasse
                        </label>
                        <select
                          id="klasse"
                          value={form.klasse}
                          onChange={(e) => setForm({ ...form, klasse: e.target.value })}
                          className="form-input"
                          style={{ appearance: 'none' }}
                        >
                          <option value="">Bitte wählen...</option>
                          <option value="B">Klasse B – Autoführerschein</option>
                          <option value="BE">Klasse BE – PKW mit Anhänger</option>
                          <option value="B196">Klasse B196 – Motorrad ohne Prüfung</option>
                          <option value="AM">Klasse AM – Kleinkraftrad</option>
                          <option value="A1">Klasse A1 – Leichtkraftrad</option>
                          <option value="A2">Klasse A2 – Motorrad bis 35 kW</option>
                          <option value="A">Klasse A – Motorrad unbeschränkt</option>
                          <option value="unsicher">Ich bin noch unsicher</option>
                        </select>
                      </div>
                    </div>

                    {/* Nachricht */}
                    <div className="mt-5">
                      <label htmlFor="nachricht" className="block text-sm font-medium text-text-primary mb-1.5">
                        Deine Nachricht *
                      </label>
                      <textarea
                        id="nachricht"
                        value={form.nachricht}
                        onChange={(e) => setForm({ ...form, nachricht: e.target.value })}
                        className={`form-input resize-none ${errors.nachricht ? 'border-red-400/60' : ''}`}
                        rows={5}
                        placeholder="Ich interessiere mich für den Führerschein und hätte gerne eine Erstberatung..."
                        required
                      />
                      {errors.nachricht && <p className="text-red-400 text-xs mt-1" role="alert">{errors.nachricht}</p>}
                    </div>

                    {/* Datenschutz Hinweis */}
                    <p className="text-xs text-muted mt-3">
                      Mit dem Absenden stimmst du der Verarbeitung deiner Daten gemäß unserer{' '}
                      <a href="/datenschutz" className="text-accent hover:underline">Datenschutzerklärung</a> zu.
                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      className={`btn-primary mt-5 w-full justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                      aria-busy={loading}
                    >
                      {loading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          Anfrage senden
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
