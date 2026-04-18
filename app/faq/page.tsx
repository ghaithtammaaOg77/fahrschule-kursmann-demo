'use client'

import { useState } from 'react'
import Link from 'next/link'

interface FaqItem {
  frage: string
  antwort: string
  kategorie: string
}

const faqItems: FaqItem[] = [
  {
    kategorie: 'Allgemein',
    frage: 'Wie lange dauert die Führerscheinausbildung?',
    antwort:
      'Die Dauer hängt von deinem Lernfortschritt und deiner Verfügbarkeit ab. Durchschnittlich dauert die Klasse B etwa 3–6 Monate. Mit intensivem Training (Intensivkurs) ist es auch in 4–8 Wochen möglich. Die gesetzlichen Pflichtfahrten und Theorieunterrichtsstunden sind Mindestvoraussetzungen.',
  },
  {
    kategorie: 'Allgemein',
    frage: 'Wie viele Fahrstunden brauche ich?',
    antwort:
      'Das Gesetz schreibt für Klasse B 12 Pflicht-Sonderfahrten vor (Überlandfahrt, Autobahn, Nachtfahrt). Zusätzlich kommen individuelle Übungsfahrstunden dazu — im Schnitt 20 Stunden, aber das variiert je nach Vorkenntnissen und Lerntyp. Wir beraten dich ehrlich und ohne unnötige Stunden zu empfehlen.',
  },
  {
    kategorie: 'Allgemein',
    frage: 'Was passiert, wenn ich die Prüfung nicht bestehe?',
    antwort:
      'Kein Problem — das passiert den Besten. Nach einer nicht bestandenen Prüfung kannst du nach einer Mindestwartezeit erneut antreten. Dein Fahrlehrer analysiert mit dir, was verbessert werden muss, und bereitet dich gezielt auf den nächsten Versuch vor. Die Prüfungsgebühren fallen erneut an.',
  },
  {
    kategorie: 'Allgemein',
    frage: 'Kann ich den Theorieunterricht auch online machen?',
    antwort:
      'Ja! Wir bieten Theorieunterricht sowohl vor Ort in unserer Fahrschule als auch online an. Für die theoretische Prüfung beim TÜV/DEKRA musst du jedoch persönlich erscheinen. Für das selbstständige Lernen empfehlen wir zudem die offiziellen Lern-Apps (z.B. DEGENER oder Fahrschule.de).',
  },
  {
    kategorie: 'Kosten',
    frage: 'Was kostet der Führerschein insgesamt?',
    antwort:
      'Die Kosten hängen von der Führerscheinklasse und der Anzahl der benötigten Übungsfahrstunden ab. Mit unserem Preisrechner auf der Klassen-Seite kannst du deine individuellen Kosten transparent berechnen. Für Klasse B liegt der Durchschnitt inklusive aller Prüfungsgebühren zwischen 2.500 € und 3.500 €.',
  },
  {
    kategorie: 'Kosten',
    frage: 'Kann ich den Führerschein auf Raten zahlen?',
    antwort:
      'Ja, wir bieten flexible Zahlungsvereinbarungen an. Sprich uns beim Erstgespräch einfach darauf an — wir finden gemeinsam eine Lösung, die zu dir passt. Eine übliche Aufteilung ist: Grundbetrag bei Anmeldung, Fahrstunden laufend, Prüfungsgebühren vor der Prüfung.',
  },
  {
    kategorie: 'Ausbildung',
    frage: 'Welche Dokumente brauche ich zur Anmeldung?',
    antwort:
      'Für die Anmeldung benötigst du: Personalausweis oder Reisepass (inkl. Meldebescheinigung), Lichtbild (Passfoto), Sehtest-Bescheinigung (beim Optiker oder TÜV), Nachweis Erste-Hilfe-Kurs (8 Stunden), Bei Minderjährigen: Einwilligung der Erziehungsberechtigten.',
  },
  {
    kategorie: 'Ausbildung',
    frage: 'Bietet ihr auch Intensivkurse an?',
    antwort:
      'Ja, auf Anfrage ist eine intensive Ausbildung mit mehreren Fahrstunden pro Woche möglich. Das setzt voraus, dass du zeitlich flexibel bist und regelmäßig üben kannst. Kontaktiere uns für eine individuelle Planung — wir prüfen die Verfügbarkeit unserer Fahrlehrer.',
  },
  {
    kategorie: 'Führerscheinklassen',
    frage: 'Was ist der Unterschied zwischen Klasse B und BE?',
    antwort:
      'Die Klasse B berechtigt zum Fahren von Pkw bis 3,5 Tonnen. Mit der Klasse BE darfst du zusätzlich Anhänger mit mehr als 750 kg zulässiger Gesamtmasse ziehen. Typische Beispiele: Wohnwagen, Pferdeanhänger, schwere Bootsanhänger. Für leichtere Anhänger bis 750 kg ist der B-Schein ausreichend.',
  },
  {
    kategorie: 'Führerscheinklassen',
    frage: 'Ab welchem Alter kann ich meinen Führerschein machen?',
    antwort:
      'Das hängt von der Klasse ab: AM ab 15 J. (begleitetes Fahren), A1 ab 16 Jahren, Klasse B ab 17 J. (BF17) / ab 18 Jahren selbstständig, A2 ab 18 Jahren, Klasse BE ab 18 Jahren, Klasse A ab 24 Jahren (oder 21 J. mit A2-Vorerfahrung), B196 ab 25 Jahren mit mind. 5 Jahre Klasse B.',
  },
]

const kategorien = Array.from(new Set(faqItems.map((f) => f.kategorie)))

export default function FaqPage() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [activeKategorie, setActiveKategorie] = useState<string>('Alle')

  const gefiltert =
    activeKategorie === 'Alle'
      ? faqItems
      : faqItems.filter((f) => f.kategorie === activeKategorie)

  return (
    <>
      {/* Page Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #080B14 0%, #0A0C14 100%)' }}
        aria-labelledby="faq-heading"
      >
        <div className="absolute inset-0 hero-grid-bg opacity-60" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-badge mb-5 mx-auto w-fit" style={{ animation: 'fadeInUp 0.5s ease both' }}>
            FAQ
          </div>
          <h1
            id="faq-heading"
            className="section-title mb-5"
            style={{ animation: 'fadeInUp 0.6s ease 0.1s both', fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Häufig gestellte{' '}
            <span className="gradient-text">Fragen</span>
          </h1>
          <p
            className="section-subtitle mx-auto text-center"
            style={{ animation: 'fadeInUp 0.6s ease 0.2s both' }}
          >
            Alles was du über deine Führerscheinausbildung wissen musst.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-bg" aria-label="FAQ Liste">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Kategorie Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center" role="group" aria-label="FAQ Kategorien filtern">
            {['Alle', ...kategorien].map((kat) => (
              <button
                key={kat}
                onClick={() => setActiveKategorie(kat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  activeKategorie === kat
                    ? 'bg-accent/10 border-accent/40 text-accent'
                    : 'border-white/8 text-muted hover:border-white/20 hover:text-text-primary'
                }`}
                aria-pressed={activeKategorie === kat}
              >
                {kat}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-3" role="list" aria-label="FAQ Einträge">
            {gefiltert.map((item, index) => {
              const id = `faq-${index}`
              const isOpen = openId === id

              return (
                <div
                  key={id}
                  className={`faq-item reveal ${isOpen ? 'open' : ''}`}
                  role="listitem"
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpenId(isOpen ? null : id)}
                    aria-expanded={isOpen}
                    aria-controls={`${id}-answer`}
                    id={`${id}-btn`}
                  >
                    <span className="pr-4">{item.frage}</span>
                    <span className="faq-icon" aria-hidden="true">+</span>
                  </button>
                  <div
                    id={`${id}-answer`}
                    className="faq-answer"
                    role="region"
                    aria-labelledby={`${id}-btn`}
                    hidden={!isOpen}
                  >
                    {item.antwort}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Still questions? */}
          <div className="mt-14 text-center p-8 rounded-2xl bg-surface/30 border border-white/8 reveal">
            <div className="text-3xl mb-3" aria-hidden="true">💬</div>
            <h2 className="font-heading text-xl font-bold text-text-primary mb-2">
              Deine Frage ist nicht dabei?
            </h2>
            <p className="text-muted text-sm mb-5">
              Kein Problem — ruf uns einfach an oder schreib uns. Wir antworten schnell und persönlich.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:+498191447823" className="btn-primary text-sm py-2.5 px-6">
                08191 447823
              </a>
              <a
                href="https://wa.me/498191447823"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm py-2.5 px-6"
              >
                WhatsApp schreiben
              </a>
              <Link href="/kontakt" className="btn-outline text-sm py-2.5 px-6">
                Kontaktformular
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
