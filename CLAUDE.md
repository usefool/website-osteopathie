# Projekt-Wissen

## Mehrsprachigkeit

**Deutsch ist die Referenz.** Bei allen Änderungen an Inhalten immer auch die englische Version aktualisieren.

| Deutsch | Englisch |
|---------|----------|
| `/` | `/en` |
| `/ueber-mich` | `/en/about` |
| `/leistungen` | `/en/services` |
| `/kontakt` | `/en/contact` |
| `/impressum` | `/en/imprint` |
| `/datenschutz` | `/en/privacy` |

## Fallstricke

### Motion One + CSS Hover

Bei Elementen mit CSS `transform` und `:hover` Effekten nur **opacity animieren**, nicht transform.
Motion One's Web Animations API überschreibt sonst CSS hover-Effekte dauerhaft.

**Betrifft:** `.about-photo`, `.split-photo`, `.photo-pile-item`

### Mobile Brush-Hintergrund

Auf `<640px` wird `.tag-handwritten::before` ausgeblendet und durch `background-image: url('/brush-mobile.png')` ersetzt.
Grund: Horizontaler Brush passt nicht bei mehrzeiligem Text auf kleinen Screens.
