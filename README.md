# Mobile Kinderosteopathie Leipzig

Website für Susanne Hoppe – Mobile Kinderosteopathie in Leipzig.

## Tech Stack

- **Framework:** Astro 5.x
- **Styling:** Tailwind CSS 4.x
- **Deployment:** Cloudflare Pages
- **Sprachen:** Deutsch / English

## Entwicklung

```bash
# Dependencies installieren
npm install

# Dev-Server starten (localhost:4321)
npm run dev

# Produktions-Build
npm run build

# Build-Preview
npm run preview
```

## Projektstruktur

```
src/
├── pages/
│   ├── index.astro          # Startseite (DE)
│   ├── ueber-mich.astro     # Über mich
│   ├── leistungen.astro     # Leistungen
│   ├── kontakt.astro        # Kontakt
│   ├── en/                  # Englische Seiten
│   └── project/             # Projekt-Dokumentation
│       ├── designs/         # 6 Typo-Varianten (S1-S6)
│       └── designs-archive/ # Archiv (T1-T18, V1-V24)
├── layouts/
│   └── BaseLayout.astro
├── i18n/
│   └── translations.ts
└── styles/
    └── global.css
```

## Design

**V24 Dark Luxury** – Gewähltes Design mit:
- Navy (#0a1628)
- Gold (#c9a962)
- Cream (#f9f7f3)

### Typografie-Varianten

**Dunkle Varianten (S1-S6):**
| Variante | Schrift | Stil |
|----------|---------|------|
| S1 | Playfair Display | Klassisch elegant |
| S2 | Newsreader | Cool Silver |
| S3 | Crimson Pro | High Contrast |
| S4 | Inter | Modern minimalistisch |
| S5 | Manrope | Kräftig modern |
| S6 | Space Grotesk | Tech/Cool |

**Helle Varianten (L1-L3):**
| Variante | Schrift | Farbpalette |
|----------|---------|-------------|
| L1 | Lora + Source Sans | Erdtöne (Warm Sand + Terrakotta) |
| L2 | Cormorant Garamond + DM Sans | Soft Blush (Cream + Dusty Rose) |
| L3 | Libre Baskerville + Inter | Sage Grün (Off-White + Sage) |

## Deployment

Automatisches Deployment via Cloudflare Pages bei Push auf `main`.

## Lizenz

Privates Projekt.
