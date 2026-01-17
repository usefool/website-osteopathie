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
