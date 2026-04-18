# CLAUDE.md — Fahrschule Kursmann

## Projektübersicht

Dies ist die Demo-Website für **Fahrschule Kursmann**, eine Fahrschule in Landsberg am Lech, Bayern.
Dient als Portfolio-Stück für Ghaith's Webdesign-Angebot.

**Ziel der Website:** Neue Fahrschüler gewinnen, Vertrauen aufbauen, Kontaktaufnahme ermöglichen.
**Sprache:** Ausschließlich Deutsch.
**Preismodell:** Business (499€)
**Typ:** Mehrere Unterseiten (kein One-Pager)

---

## Features & Funktionen

- WhatsApp-Button (feste Nummer: 08191 447823)
- Bildergalerie (Fahrzeuge — Bilder werden vom Kunden in den Projektordner gelegt)
- Preisrechner ({PLATZHALTER: Preisinfos in separater Datei im Projektordner})
- Bewertungssektion
- FAQ-Sektion
- Mehrere Unterseiten (siehe Seitenstruktur)

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Sprache:** TypeScript
- **Deployment:** Vercel
- **Keine** zusätzlichen UI-Libraries ohne explizite Genehmigung

---

## Projektstruktur

{PLATZHALTER: Wird nach Projektstart mit tatsächlicher Ordnerstruktur befüllt}

---

## Design & Branding

### Farbpalette
{Farben aus Branding-Material übernehmen — KEINE Hex-Codes erfinden}

### Stil
- **Modern + animationsreich** — das ist die wichtigste Design-Vorgabe
- Smooth Animationen (Scroll-Reveals, Hover-Effekte, Page Transitions)
- Ein starkes standout-Element pro Seite (z.B. animierter Hero, interaktiver Preisrechner)
- Mobile-first — immer zuerst für Mobilgeräte designen
- Klare Typografie, strukturierte Layouts
- Keine generischen KI-Ästhetiken (kein Inter, kein lila Gradient)
- 2 Google Fonts via CDN (kein Arial/Inter/Roboto)

---

## Bilder — Regel

**Inhaltsbilder** (Fahrzeuge, Mitarbeiter, echte Situationen):
❌ NIEMALS KI-generieren — wirkt unecht und ist für Kunden irreführend
❌ NIEMALS urheberrechtlich geschützte Bilder verwenden
✅ Nur vom Kunden gelieferte Bilder — Dateipfad-Platzhalter für noch fehlende
✅ Bildnamen: keyword-basiert in kebab-case (z.B. `fahrschule-kursmann-polo.webp`)

**Dekorative Bilder** (Hero-Hintergrund, Straßen-Atmosphäre — nicht personenbezogen):
✅ KI-generiert oder lizenzfrei (Unsplash, Pexels) erlaubt

**Fahrzeug-Galerie (Demo):**
✅ Lizenzfreie Fotos von Unsplash/Pexels verwenden (VW Polo, Golf — typische Fahrschulfahrzeuge)
✅ Jedes Bild mit Kommentar versehen: `/* TODO: durch echtes Kundenfahrzeug-Foto ersetzen */`
— Kein Kunde liefert Bilder, da es sich um eine Demo handelt

---

## Seitenstruktur (Mehrere Unterseiten)

### / — Startseite
- Hero mit Slogan + CTA „Führerschein anfragen"
- Kurze Übersicht der Führerscheinklassen (mit Link zur Klassen-Seite)
- Bewertungsvorschau (3 Top-Bewertungen)
- CTA-Banner → Preisrechner

### /fuehrerscheinklassen — Führerscheinklassen
- {PLATZHALTER: Alle Klassen + Infos aus Leistungsdatei im Projektordner}
- Preisrechner für Gesamtkosten (Datei mit Preisinfos im Projektordner)

### /fahrzeuge — Galerie
- Bildergalerie aller Fahrschulfahrzeuge
- {PLATZHALTER: Bilder vom Kunden im Projektordner}

### /bewertungen — Bewertungen
- Öffentliche Bewertungssektion (Name, Sterne, Text)
- Nutzer kann nur eigene Bewertung löschen (lokaler Token)

### /faq — FAQ
- {PLATZHALTER: Häufige Fragen — nach Absprache mit Kunden eintragen}

### /kontakt — Kontakt
- Kontaktformular (Name, Nachricht → info@fahrschule-kursmann.de)
- WhatsApp-Button → wa.me/4981914478​23
- Adresse + Öffnungszeiten
- Google Maps Embed (optional)

### Footer (alle Seiten)
- Logo + Kurzinfo
- Social Media: {PLATZHALTER: Links oder keine}
- Impressum: `{IMPRESSUM — PLATZHALTER}`
- Datenschutz: `{DATENSCHUTZ — PLATZHALTER}`
- Copyright: `© 2025 Fahrschule Kursmann`

---

## Öffnungszeiten

{PLATZHALTER: Öffnungszeiten vom Kunden eintragen}

---

## Kontaktdaten (immer exakt so verwenden)

```
Telefon:        08191 447823
WhatsApp:       08191 447823
WhatsApp-Link:  https://wa.me/4981914478​23
E-Mail:         info@fahrschule-kursmann.de
Adresse:        Hauptstraße 14, 86899 Landsberg am Lech
Gebiet:         Landsberg am Lech, Bayern
```

---

## Externe Datei-Abhängigkeiten

Diese Dateien werden im Projektordner erwartet — noch nicht vorhanden:
- `{PLATZHALTER: Leistungsdatei}` — alle Führerscheinklassen mit Beschreibungen
- `{PLATZHALTER: Preisdatei}` — alle Preise für den Preisrechner
- Fahrzeugbilder im Ordner `/public/images/fahrzeuge/`

Vor dem Build: Prüfen ob diese Dateien existieren — NIEMALS Inhalte erfinden.

---

## Coding-Regeln

1. **Vor jeder Änderung:** Datei komplett lesen, nie blind editieren
2. **Mobile-first:** Immer mit kleinstem Breakpoint beginnen
3. **Nur 2 Google Fonts** via CDN — nie Arial, Inter oder Roboto
4. **CSS-Variablen** für alle Farben: `--color-bg`, `--color-surface`, `--color-accent`, `--color-text`
5. **Deutsch** überall: Texte, Labels, Buttons, Fehlermeldungen
6. **Keine Preise** hardcoded — nur aus der Preisdatei lesen
7. Bei Änderungen >3 Dateien: erst Plan beschreiben, dann auf Bestätigung warten
8. Impressum + Datenschutz: NIEMALS erfinden — nur Platzhalter setzen

---

## Qualitätsziele

- Lighthouse Score: 90+ (Performance, Accessibility, SEO)
- Keine kaputten Links oder leeren Sections auf initial load
- Alle Bilder: deutsches alt-Text, loading="lazy", WebP, <100KB
- WhatsApp-Button auf jeder Seite sichtbar
- Schema JSON-LD: `DrivingSchool`
- Meta Title: „Fahrschule Kursmann – Führerschein | Landsberg am Lech" (≤60 Zeichen)
- Meta Description ≤160 Zeichen pro Seite
- sitemap.xml + robots.txt bei Auslieferung

---

## Was diese Website NICHT ist

- Kein Online-Buchungssystem (nur Kontaktformular)
- Kein Blog
- Keine mehrsprachige Seite
- Kein Online-Shop
