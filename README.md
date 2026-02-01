# Mobile Kinderosteopathie Leipzig

Website für **Susanne Hoppe** – Mobile Kinderosteopathie in Leipzig.

**Live:** https://susanne-hoppe.de

## Tech Stack

- **Framework:** [Astro 5.x](https://astro.build/) (Static Site Generator)
- **Styling:** Vanilla CSS mit Custom Properties
- **Animationen:** [Motion One](https://motion.dev/) (Scroll-Animationen)
- **Fonts:** Lora (Serif), Source Sans 3 (Sans), Caveat (Handschrift)
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com/)
- **Sprachen:** Deutsch (Standard), Englisch

## Schnellstart

```bash
# Dependencies installieren
npm install

# Dev-Server starten (localhost:3000)
npm run dev

# Produktions-Build erstellen
npm run build

# Vorschau des Builds
npm run preview

# Deploy zu Cloudflare Pages
npx wrangler pages deploy dist --project-name=susanne-osteopathie
```

## Projektstruktur

```
src/
├── pages/                  # Alle Seiten
│   ├── index.astro         # Startseite (DE)
│   ├── ueber-mich.astro    # Über mich
│   ├── leistungen.astro    # Leistungen
│   ├── kontakt.astro       # Kontakt
│   ├── impressum.astro     # Impressum
│   ├── datenschutz.astro   # Datenschutz
│   ├── 404.astro           # Fehlerseite
│   └── en/                 # Englische Seiten
│       ├── index.astro
│       ├── about.astro
│       ├── services.astro
│       ├── contact.astro
│       ├── imprint.astro
│       ├── privacy.astro
│       └── 404.astro
├── layouts/
│   └── BaseLayout.astro    # Haupt-Layout (Header, Footer, Meta)
├── components/
│   └── LanguageSwitcher.astro  # Sprachumschalter (Flaggen)
├── styles/
│   └── global.css          # Globale Styles & CSS-Variablen
├── scripts/
│   ├── scroll-animations.ts    # Scroll-basierte Animationen
│   └── contact-protection.ts   # E-Mail/Telefon Spam-Schutz
└── i18n/
    └── translations.ts     # Übersetzungen DE/EN

public/                     # Statische Assets (Bilder, Fonts)
dist/                       # Build-Output (generiert)
```

## Seiten

| Deutsch | Englisch | Beschreibung |
|---------|----------|--------------|
| `/` | `/en` | Startseite |
| `/ueber-mich` | `/en/about` | Über Susanne Hoppe |
| `/leistungen` | `/en/services` | Behandlungsangebote |
| `/kontakt` | `/en/contact` | Kontaktformular & Infos |
| `/impressum` | `/en/imprint` | Impressum |
| `/datenschutz` | `/en/privacy` | Datenschutzerklärung |

## Mehrsprachigkeit (i18n)

Die Website nutzt Astro's native i18n-Unterstützung:

- **Deutsch** ist die Standardsprache (ohne URL-Präfix)
- **Englisch** hat den Präfix `/en`
- Sprachumschalter zeigt Flaggen-Icons
- hreflang-Tags für SEO sind automatisch gesetzt

Übersetzungen befinden sich in `src/i18n/translations.ts`.

## Design

**Farbschema "Erdtöne"** – warm, natürlich, beruhigend:

| Element | Farbe | Hex |
|---------|-------|-----|
| Hintergrund | Warm Sand | `#faf6f1` |
| Hintergrund Alt | Soft Beige | `#f0ebe4` |
| Akzent | Terrakotta | `#c67d5a` |
| Akzent Hover | Terrakotta Hell | `#d4916e` |
| Text | Dunkelbraun | `#3d2e24` |
| Text Muted | Mittelbraun | `#6b5648` |

## Deployment

Die Website wird auf **Cloudflare Pages** gehostet.

```bash
# Manuelles Deployment
npm run build
npx wrangler pages deploy dist --project-name=susanne-osteopathie
```

Die Domain `susanne-hoppe.de` ist mit dem Cloudflare-Projekt verbunden.

## Entwicklungshinweise

- **Bilder:** WebP-Format bevorzugen, Fallback als JPEG/PNG
- **Animationen:** Nur `opacity` bei Elementen mit CSS `:hover` animieren (siehe `CLAUDE.md`)
- **Änderungen:** Bei Textänderungen immer beide Sprachversionen aktualisieren
