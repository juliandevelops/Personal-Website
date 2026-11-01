# Personal-Website — Julian Schumacher

Das eigentliche Next.js-Projekt liegt im Unterordner `personal-website/`. Alle Befehle sind dort auszuführen.

```bash
cd personal-website
npm run dev      # Dev-Server
npm run build    # Production-Build (als Verifikation nutzen)
npm run lint     # ESLint
```

## Was diese Seite ist

- Die **persönliche** Website von Julian: "Wer ist der Mensch hinter der Seite" — Gewohnheiten, Interessen, Gedanken.
- Sie ist **nicht** die professionelle Seite. Projekte, GitHub, YouTube, Berufliches gehören auf `juliandevelops.com` (dorthin zeigt auch `/projects` per Redirect). Berufsbezogene Inhalte hier bewusst weglassen oder nur verlinken.
- Öffentliche Seite: nichts Privates, aber persönlicher Ton erlaubt und erwünscht.

## Design-Regeln (nicht verhandelbar)

Keine klassischen "AI-Look"-Muster. Konkret verboten:

- **Keine Eyebrows** (kleine Uppercase-Labels über Überschriften, z.B. "PERSONAL SPACE")
- **Keine Gradients** auf Flächen, Frames oder Hintergründen — auch keine dezenten Radial-Gradients als "Atmosphäre"
- **Keine Glares/Shades/Glassmorphism**, keine großen weichen Ambient-Shadows als Deko
- **Keine "AI-Pills"** (abgerundete Badges/Chips als Aufzählung, z.B. "Based in Germany", "Security focused")
- Kein generisches AI-Design-Vokabular im Ton ("calm, clear, dependable", "What matters to me", "Stay in touch")

Stattdessen: solides Handwerk. Flache Flächen, klare Typografie, echte Hierarchie, Ecken und Kanten dürfen sichtbar sein. Inspiration: klassische Print-/Editorial-Designs, nicht Dribbble 2024.

## Texte und Ton

- Texte sollen konkret und persönlich sein, nicht generisch. Statt "I enjoy building products that feel simple" lieber das, was Julian tatsächlich macht und warum.
- Keine Floskeln, keine Buzzwords, keine Wiederholungen derselben Aussage über mehrere Sektionen.
- Aktuelle Sprachwahl der Seite: siehe Abschnitt "Design-Entscheidungen" unten, sobald festgelegt.

## Technik

- Next.js (App Router) + React + TypeScript
- Styling: Tailwind CSS 4 (`@use "tailwindcss"`) + SCSS-Module pro Komponente; `globals.scss` definiert CSS-Variablen und Basiselemente
- Fonts via `next/font/google` (aktuell IBM Plex Serif + IBM Plex Sans)
- Thoughts-Einträge sind Markdown-Dateien in `public/thoughts/`, erste Zeile ist die Überschrift
- Deployment über Vercel (`https://julianschumacher.dev`)

## Design-Entscheidungen (gemeinsam mit Julian festgelegt)

> Dieser Abschnitt wird während des Redesigns gepflegt. Entscheidungen hier sind verbindlich.

- **Ton:** locker, fast Blog-Ton. Erste Person, konkrete Details, eigene Meinung erlaubt, kein Startup-Vokabular.
- **Sprache:** Englisch als Grundsprache. Optional später ein DE-Switch — Struktur daher i18n-fähig halten (Texte zentral verwaltet), aber kein Zwang, jeden Text zweisprachig zu pflegen.
- **Struktur Startseite:** Hero, Now-Sektion (konkret, was gerade läuft), Interessen (konkret statt gleichförmiger Karten). Thoughts bleibt Unterseite (Markdown in `public/thoughts/`).
- **Raus:** Values-Karten, Story-Duplikat (`id="story"` doppelt), große eigene Connect-Sektion. Kontakt läuft dezent über Footer/Mail.
- **Design-Richtung:** Warm-papierig mit Editorial-Disziplin (A+B). Warme Creme/Tannengrün-Basis **bleibt** — bewusster Kontrast zur dunklen, pragmatischen, editorialen professionellen Seite (juliandevelops.com). Dafür: keine Gradients, keine Shadows, 1px-Hairlines, eckige Radien, strengere Typo-Hierarchie.
- **Typography:** IBM Plex Serif (Headlines) + IBM Plex Sans (Body) statt Fraunces/Source Sans 3 — Engineering-Grundhaltung statt "schnörkeliger" Serif. Editorial-Prinzip bleibt.
- **Interessen-Priorität (verbindlich):** 1. Cybersecurity & AI, 2. Software, 3. Blender/Rendering/Simulation, 4. Hardware, 5. Musik. Automotive (DHBW bei einem Hersteller, seit Okt. 2026) bewusst niedrigschwellig: nur als Now-Eintrag ("zu früh für Anekdoten") und als Beispiel in Rendering/Hardware — kein eigener Interessen-Punkt.
- **Zwei-Seiten-Struktur:** Neben den On-Screen-Interessen gibt es die Bewegungs-Seite (Gym, Laufen/Running, Parkour; Kampfsport als ehrlicher "noch nicht"-Eintrag). Umsetzung als eigene nummerierte Sektion "Off screen" in derselben EntryList-Sprache — die Dualität ist die Struktur, kein Extra-Erklärtext.
- **Externe Links:** kleines Pfeil-Suffix via CSS (`::after`, ~0.65em, super, gedämpft) statt langer inline-↗-Zeichen.
- **Portrait:** frei statt eingeengt — größer (~220px), ohne Haarline-Rahmen, ohne Grayscale-Filter; Caption bleibt.
- **Konkretes Design-System (umgesetzt):**
  - Papierkorn: feines SVG-Noise (ca. 3% Opacity) auf der ganzen Seite statt Gradients/Glow
  - Masthead: sticky, global auf allen Seiten — Name links (IBM Plex Serif), Nav rechts (all-small-caps: "Thoughts", "Professional site"). Erweitert sich per `env(safe-area-inset-top)` + `viewportFit: "cover"` unter die Statusleiste (Dynamic Island), damit nichts dahinter durchscrollt; auf Mobile bricht die Nav unter die Brand-Zeile um; `overflow-x: clip` auf body gegen horizontales Scrollen
  - Hero: typografisches Statement als H1 ("...This page is about *everything else*."), Lede mit Drop Cap, Portrait klein mit Kursiv-Bildunterschrift, Kontakt als Definitions-Meta-Block (Where/Mail/Elsewhere)
  - Sektionen: nummerierte Druck-Markierung ("01 What I'm up to ——————"), Hairline oben 1px
  - Grünes flächiges Panel (invers: Tannengrün mit Creme-Text) als Kontrastmoment für den Sprung zur professionellen Seite
  - EntryList: `<dl>` mit Index-Nummern (01, 02, 03), Term-Spalte 200px, Hairline-Divider — keine Karten-Grids
  - Footer: Colophon-Stil — 3 Link-Spalten (Elsewhere/Socials/Housekeeping) + Colophon-Zeile ("Set in IBM Plex Serif & IBM Plex Sans · Built with Next.js"), Text-Links ohne Icons
  - Trennlinien: 1px Hairlines `rgba(46, 42, 35, 0.22)` (schwach) / `rgba(46, 42, 35, 0.45)` (stark) statt Shadows
  - Radien: 3px statt Pill/18–24px
  - Links/Buttons: primary = flächiges Tannengrün, secondary = Outline, inverse = Outline auf Grün, ghost = Text-Link mit Underline-Offset; Hover über Farben, nie über Transform/Shadow
  - Startseite verlinkt den neuesten Thoughts-Eintrag automatisch (liest `public/thoughts/`, sortiert nach Dateiname absteigend)

## Bekannte Altlasten

- `npm run lint` ist kaputt: `next lint` existiert in Next 16 nicht mehr (wird als Verzeichnis interpretiert). Verifikation daher über `npm run build` (läuft inkl. TypeScript-Check). Wenn Lint wieder gebraucht wird: auf ESLint-CLI umstellen.

## Erledigte Aufräumarbeiten (Redesign 2026-10)

- Doppelte `id="story"` entfernt (Sektionen gekürzt auf: Hero, Now, Interests, Thoughts-Teaser)
- Tippfehler "technolgies" entfernt (Texte komplett neu)
- `width/height={12.5}` bei Footer-Icons → 13
- Gold `#B0892E` im Footer → Palette-Variable
- Timeline- und InfoCard-Komponenten entfernt, ersetzt durch EntryList
