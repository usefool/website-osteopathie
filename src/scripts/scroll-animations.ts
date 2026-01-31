/**
 * Scroll Animations with Motion One
 * Dezente, organische Animationen für die Osteopathie Website
 */

import { animate, inView } from 'motion';

/**
 * Check if user prefers reduced motion
 */
function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Make elements visible immediately (for reduced motion or fallback)
 */
function showAllElements(): void {
  const selectors = [
    '.photo-pile-item',
    '.about-photo',
    '.card-split',
    '.split-photo',
    '.qualification-card',
    '.qualification-tags li',
    '.service-card',
    '.info-card',
    '.networking-content',
    '.cta-content',
  ];

  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
    });
  });
}

// Easing curves
const easeOut = [0.25, 0.1, 0.25, 1] as const;
const easeOutBack = [0.34, 1.3, 0.64, 1] as const;

/**
 * Animate photo - ONLY opacity, so CSS transform/hover stays intact
 */
function animatePhotoFadeIn(element: HTMLElement, duration: number = 0.8, delay: number = 0): void {
  element.style.opacity = '0';

  setTimeout(() => {
    animate(
      element,
      { opacity: [0, 1] },
      { duration, easing: [0.25, 0.1, 0.25, 1] }
    ).finished.then(() => {
      element.style.opacity = '1';
    });
  }, delay);
}

/**
 * Animate photo pile - ONLY opacity
 */
function animatePhotoPile(items: HTMLElement[]): void {
  items.forEach((item, i) => {
    animatePhotoFadeIn(item, 0.8, i * 150);
  });
}

/**
 * Animate element with transform (for non-photo elements)
 */
function animateElement(
  element: HTMLElement,
  fromTransform: string,
  toTransform: string,
  duration: number,
  easing: readonly number[] = easeOut,
  delay: number = 0
): void {
  element.style.opacity = '0';
  element.style.transform = fromTransform;

  setTimeout(() => {
    animate(
      element,
      {
        opacity: [0, 1],
        transform: [fromTransform, toTransform]
      },
      { duration, easing }
    ).finished.then(() => {
      element.style.opacity = '1';
      element.style.removeProperty('transform');
    });
  }, delay);
}

/**
 * Initialize animations for the homepage
 */
function initHomeAnimations(): void {
  // Photo pile - only fade
  const photoPile = document.querySelector('.photo-pile');
  if (photoPile) {
    inView(photoPile, () => {
      const items = Array.from(document.querySelectorAll('.photo-pile-item')) as HTMLElement[];
      if (items.length) {
        animatePhotoPile(items);
      }
    }, { margin: '-10% 0px' });
  }

  // About photo - only fade
  const aboutPhoto = document.querySelector('.about-teaser .about-photo') as HTMLElement;
  if (aboutPhoto) {
    inView(aboutPhoto, () => {
      animatePhotoFadeIn(aboutPhoto, 1);
    }, { margin: '-10% 0px' });
  }

  // Service cards
  const servicesGrid = document.querySelector('.services-grid');
  if (servicesGrid) {
    inView(servicesGrid, () => {
      const cards = Array.from(document.querySelectorAll('.card-split')) as HTMLElement[];
      cards.forEach((card, i) => {
        animateElement(card, 'translateY(25px)', 'translateY(0px)', 0.6, easeOut, i * 150);
      });
    }, { margin: '-15% 0px' });
  }

  // Split photo - only fade
  const splitPhoto = document.querySelector('.split-section .split-photo') as HTMLElement;
  if (splitPhoto) {
    inView(splitPhoto, () => {
      animatePhotoFadeIn(splitPhoto, 1);
    }, { margin: '-10% 0px' });
  }

  // CTA content
  const ctaContent = document.querySelector('.cta-section .cta-content') as HTMLElement;
  if (ctaContent) {
    inView(ctaContent, () => {
      animateElement(ctaContent, 'translateY(20px) scale(0.98)', 'translateY(0px) scale(1)', 0.7);
    }, { margin: '-15% 0px' });
  }
}

/**
 * Initialize animations for the About page
 */
function initAboutAnimations(): void {
  // Hero photo - only fade
  const heroPhoto = document.querySelector('.hero .about-photo') as HTMLElement;
  if (heroPhoto) {
    setTimeout(() => {
      animatePhotoFadeIn(heroPhoto, 1);
    }, 200);
  }

  // Split photo - only fade
  const splitPhoto = document.querySelector('.split-section .split-photo') as HTMLElement;
  if (splitPhoto) {
    inView(splitPhoto, () => {
      animatePhotoFadeIn(splitPhoto, 1);
    }, { margin: '-10% 0px' });
  }

  // Qualification cards
  const qualificationsGrid = document.querySelector('.qualifications-grid');
  if (qualificationsGrid) {
    inView(qualificationsGrid, () => {
      const cards = Array.from(document.querySelectorAll('.qualification-card')) as HTMLElement[];
      cards.forEach((card, i) => {
        animateElement(card, 'translateY(25px)', 'translateY(0px)', 0.6, easeOut, i * 100);
      });
    }, { margin: '-15% 0px' });
  }

  // Qualification tags
  const qualificationTags = document.querySelector('.qualification-tags');
  if (qualificationTags) {
    inView(qualificationTags, () => {
      const tags = Array.from(document.querySelectorAll('.qualification-tags li')) as HTMLElement[];
      tags.forEach((tag, i) => {
        animateElement(tag, 'scale(0.85)', 'scale(1)', 0.4, easeOutBack, i * 50);
      });
    }, { margin: '-15% 0px' });
  }

  // Networking content
  const networkingContent = document.querySelector('.networking-content') as HTMLElement;
  if (networkingContent) {
    inView(networkingContent, () => {
      animateElement(networkingContent, 'translateY(25px)', 'translateY(0px)', 0.7);
    }, { margin: '-15% 0px' });
  }

  // CTA content
  const ctaContent = document.querySelector('.cta-section .cta-content') as HTMLElement;
  if (ctaContent) {
    inView(ctaContent, () => {
      animateElement(ctaContent, 'translateY(20px) scale(0.98)', 'translateY(0px) scale(1)', 0.7);
    }, { margin: '-15% 0px' });
  }
}

/**
 * Initialize animations for the Services page
 */
function initServicesAnimations(): void {
  // Service cards
  const servicesList = document.querySelector('.services-list');
  if (servicesList) {
    inView(servicesList, () => {
      const cards = Array.from(document.querySelectorAll('.service-card')) as HTMLElement[];
      cards.forEach((card, i) => {
        animateElement(card, 'translateY(25px)', 'translateY(0px)', 0.6, easeOut, i * 150);
      });
    }, { margin: '-15% 0px' });
  }

  // Info card
  const infoCard = document.querySelector('.info-card') as HTMLElement;
  if (infoCard) {
    inView(infoCard, () => {
      animateElement(infoCard, 'translateY(20px) scale(0.98)', 'translateY(0px) scale(1)', 0.7);
    }, { margin: '-15% 0px' });
  }

  // CTA content
  const ctaContent = document.querySelector('.cta-section .cta-content') as HTMLElement;
  if (ctaContent) {
    inView(ctaContent, () => {
      animateElement(ctaContent, 'translateY(20px) scale(0.98)', 'translateY(0px) scale(1)', 0.7);
    }, { margin: '-15% 0px' });
  }
}

/**
 * Detect current page and initialize
 */
function detectPageAndInit(): void {
  const path = window.location.pathname;

  // Home page (DE: /, EN: /en)
  if (path === '/' || path === '/index.html' || path === '/en' || path === '/en/') {
    initHomeAnimations();
  // About page (DE: /ueber-mich, EN: /en/about)
  } else if (path.includes('ueber-mich') || path.includes('/en/about')) {
    initAboutAnimations();
  // Services page (DE: /leistungen, EN: /en/services)
  } else if (path.includes('leistungen') || path.includes('/en/services')) {
    initServicesAnimations();
  }
}

/**
 * Main initialization
 */
export function initScrollAnimations(): void {
  if (prefersReducedMotion()) {
    showAllElements();
    return;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', detectPageAndInit);
  } else {
    detectPageAndInit();
  }
}
