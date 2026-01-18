# Projekt-Wissen

## Animation mit Motion One

### Wichtig: CSS Hover-Effekte erhalten

Wenn Elemente CSS `transform` und `:hover` Effekte haben (z.B. Fotos mit `rotate` und hover `scale`), dann bei Motion One Animationen:

**Problem:** Motion One verwendet die Web Animations API, die `transform` auf einer separaten Ebene animiert. Nach der Animation bleibt diese Ebene aktiv und überschreibt CSS `:hover` Effekte.

**Lösung:** Für Elemente mit CSS transform/hover **nur `opacity` animieren**, nicht `transform`:

```typescript
// RICHTIG - CSS transform + hover bleibt intakt
function animatePhotoFadeIn(element: HTMLElement, duration: number = 0.8): void {
  element.style.opacity = '0';
  animate(element, { opacity: [0, 1] }, { duration });
}

// FALSCH - überschreibt CSS transform/hover
animate(element, { opacity: 1, transform: 'rotate(0deg)' }, { duration });
```

**Betroffene Elemente:**
- `.about-photo` (rotate -2deg, hover: rotate 0deg + scale)
- `.split-photo` (rotate +2deg, hover: rotate 0deg + scale)
- `.photo-pile-item` (verschiedene rotations + hover)

## Dateistruktur Animationen

```
src/
  scripts/
    scroll-animations.ts   # Motion One scroll-triggered animations
  styles/
    global.css            # CSS initial states (opacity: 0) + prefers-reduced-motion
```

## Mobile-Optimierung

### Breakpoints

- `<400px` - Sehr kleine Screens (iPhone SE, Galaxy A)
- `<640px` - Mobile allgemein
- `768px+` - Tablet/Desktop

### Handwritten Tags: Brush-Hintergrund auf Mobile

**Problem:** Die `.tag-handwritten` Elemente verwenden ein `::before` Pseudo-Element mit Brush-SVG als Hintergrund. Bei mehrzeiligem Text (auf kleinen Screens) passt der horizontale Brush nicht mehr.

**Lösung:** Auf Mobile (<640px) wird das `::before` ausgeblendet und stattdessen das Original-Brush-PNG als `background-image` direkt auf dem Element verwendet:

```css
@media (max-width: 639px) {
  .tag-handwritten::before {
    display: none;
  }
  .tag-handwritten {
    background-image: url('/brush-mobile.png');
    background-size: 100% 100%;
  }
}
```

**Dateien:**
- `public/brush-mobile.png` - Extrahiert aus brush1.svg (127KB)
- `src/styles/global.css` - Mobile breakpoints und brush-background

### Weitere Mobile-Anpassungen

- **Carousel-Dots:** 14px statt 10px für bessere Touch-Bedienung
- **Photo-Pile:** Reduzierte Größe und Rotation auf <400px
- **Card-Split:** Vertikal gestapelt auf <400px (Bild über Text)
- **Slideshow (Über Mich):** 100% Breite statt 85% auf <400px
