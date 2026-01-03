# Mobile Kinderosteopathie Leipzig

Website für Susanne Hoppe – Mobile Kinderosteopathie in Leipzig.

## Status

**Design:** S7 Erdtöne (gewählt am 03.01.2025)
**Phase:** Produktionsentwicklung (Deutsche Version)

## Tech Stack

- **Framework:** Astro 5.x
- **Styling:** Tailwind CSS 4.x + CSS Custom Properties
- **Fonts:** Lora (Serif) + Source Sans 3 (Sans)
- **Deployment:** Cloudflare Pages

## Entwicklung

```bash
# Dependencies installieren
npm install

# Dev-Server starten (localhost:3000)
npm run dev

# Produktions-Build
npm run build

# Deploy zu Cloudflare
npm run deploy
```

## Seiten (6 aktiv)

| Pfad | Seite | Status |
|------|-------|--------|
| `/` | Startseite | S7 Theme |
| `/ueber-mich` | Über mich | S7 Theme |
| `/leistungen` | Leistungen | S7 Theme |
| `/kontakt` | Kontakt | S7 Theme |
| `/impressum` | Impressum | S7 Theme |
| `/datenschutz` | Datenschutz | S7 Theme |

## Projektstruktur

```
src/
├── pages/              # Aktive Seiten (nur DE)
│   ├── index.astro
│   ├── ueber-mich.astro
│   ├── leistungen.astro
│   ├── kontakt.astro
│   ├── impressum.astro
│   └── datenschutz.astro
├── layouts/
│   └── BaseLayout.astro  # S7 Theme Layout
├── styles/
│   └── global.css        # S7 Farbpalette & Utilities
├── _archive_en/          # EN-Seiten (deaktiviert)
└── _project/             # Projektdokumentation (nicht im Build)
    ├── variants/         # Design-Varianten S1-S17
    ├── designs/          # Design-Übersicht
    ├── work-log/         # Arbeitsprotokoll
    └── designs-archive/  # Archiv V1-V24, T1-T18
```

## S7 Erdtöne Design

| Element | Farbe | Hex |
|---------|-------|-----|
| Hintergrund | Warm Sand | #faf6f1 |
| Hintergrund Alt | Soft Beige | #f0ebe4 |
| Akzent | Terrakotta | #c67d5a |
| Akzent Hover | Terrakotta Hell | #d4916e |
| Text | Dunkelbraun | #3d2e24 |
| Text Muted | Mittelbraun | #6b5648 |

## Susanne Hoppe – CV

**Qualifikationen:**
- Physiotherapeutin (staatlich anerkannt seit 2002)
- Bobath-Therapeutin
- Manualtherapeutin
- Zertifizierte Kinderosteopathin

**Schwerpunkte:**
- Säuglingsbehandlung / Osteopathie
- Behandlung der Kindsmutter (im Wochenbett und darüber hinaus)

**Beruflicher Werdegang:**
| Zeitraum | Tätigkeit |
|----------|-----------|
| Seit 2002 | Staatlich anerkannte Physiotherapeutin |
| 2002–2016 | Anstellung in physiotherapeutischen Praxen |
| Seit 2016 | Angestellte Physiotherapeutin am **UKL (Universitätsklinikum Leipzig)** / Kinderklinik |

**Klinischer Schwerpunkt (UKL):**
- Neonatologie
- Kinderintensivstation
- Neuropädiatrie

## TODOs für Content

Alle Seiten haben Platzhalter für:
- Kontaktdaten (Telefon, E-Mail, Adresse)
- Portrait-Foto

## Nächste Schritte

1. Content von Susanne einholen
2. TODO-Platzhalter ersetzen
3. Kontaktformular-Backend (Cloudflare Functions)
4. Englische Version (später)

## Live

https://susanne-osteopathie.pages.dev
