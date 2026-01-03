/**
 * Translations for German and English
 */

export const languages = {
  de: 'Deutsch',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'de';

export const translations = {
  de: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Über mich',
    'nav.services': 'Leistungen',
    'nav.contact': 'Kontakt',
    'nav.bookAppointment': 'Termin anfragen',

    // Hero
    'hero.title': 'Mobile Kinderosteopathie',
    'hero.titleHighlight': 'in Leipzig',
    'hero.subtitle': 'Osteopathische Behandlung für Ihr Kind – bei Ihnen zuhause. In vertrauter Umgebung, entspannt und ohne Stress.',
    'hero.cta.primary': 'Termin anfragen',
    'hero.cta.secondary': 'Mehr erfahren',

    // USPs
    'usp.experience.title': '20+ Jahre Erfahrung',
    'usp.experience.text': 'Langjährige Erfahrung in der Arbeit mit Kindern – als Physiotherapeutin und Osteopathin.',
    'usp.homeVisit.title': 'Behandlung zuhause',
    'usp.homeVisit.text': 'Ihr Kind wird in seiner vertrauten Umgebung behandelt – entspannter und ohne stressige Anfahrt.',
    'usp.specialized.title': 'Spezialisiert auf Kinder',
    'usp.specialized.text': 'Ausschließlich Behandlung von Säuglingen, Kleinkindern und Kindern – mit sanften, kindgerechten Methoden.',

    // About Preview
    'about.title': 'Über mich',
    'about.intro': 'Ich bin Susanne Hoppe, Physiotherapeutin und zertifizierte Kinder-Osteopathin mit über 20 Jahren Erfahrung in der Arbeit mit Kindern.',
    'about.text': 'Als mobile Osteopathin komme ich zu Ihnen nach Hause – damit Ihr Kind in seiner vertrauten Umgebung behandelt werden kann, entspannt und ohne Stress.',
    'about.link': 'Mehr über mich erfahren',

    // CTA Section
    'cta.title': 'Haben Sie Fragen oder möchten einen Termin?',
    'cta.text': 'Ich freue mich auf Ihre Nachricht und beantworte gerne alle Fragen rund um die osteopathische Behandlung Ihres Kindes.',
    'cta.button': 'Kontakt aufnehmen',

    // Footer
    'footer.tagline': 'Mobile Kinderosteopathie in Leipzig. Behandlung bei Ihnen zuhause.',
    'footer.navigation': 'Navigation',
    'footer.legal': 'Rechtliches',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.copyright': 'Alle Rechte vorbehalten.',

    // Accessibility
    'a11y.skipToContent': 'Zum Inhalt springen',
    'a11y.openMenu': 'Menü öffnen',

    // Services Page
    'services.title': 'Leistungen',
    'services.subtitle': 'Osteopathische Behandlung für Kinder aller Altersgruppen – sanft, kindgerecht und bei Ihnen zuhause.',
    'services.babies.title': 'Säuglinge (0-12 Monate)',
    'services.babies.text': 'Sanfte osteopathische Behandlung für die Kleinsten.',
    'services.toddlers.title': 'Kleinkinder (1-6 Jahre)',
    'services.toddlers.text': 'Unterstützung in der wichtigen Entwicklungsphase.',
    'services.children.title': 'Schulkinder (6-14 Jahre)',
    'services.children.text': 'Begleitung durch Schulzeit und Wachstumsphasen.',
    'services.commonIssues': 'Häufige Behandlungsanlässe:',
    'services.process.title': 'Ablauf einer Behandlung',
    'services.pricing.title': 'Kosten',

    // Contact Page
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Ich freue mich auf Ihre Nachricht.',
    'contact.info': 'Kontaktdaten',
    'contact.phone': 'Telefon',
    'contact.email': 'E-Mail',
    'contact.area': 'Einsatzgebiet',
    'contact.form.title': 'Nachricht senden',
    'contact.form.name': 'Name',
    'contact.form.email': 'E-Mail',
    'contact.form.phone': 'Telefon',
    'contact.form.childAge': 'Alter des Kindes',
    'contact.form.message': 'Nachricht',
    'contact.form.privacy': 'Ich habe die Datenschutzerklärung gelesen und bin mit der Verarbeitung meiner Daten einverstanden.',
    'contact.form.submit': 'Nachricht senden',
    'contact.form.required': 'Pflichtfelder',

    // Meta
    'meta.description': 'Mobile Kinderosteopathie in Leipzig - Susanne Hoppe. Osteopathische Behandlung für Ihr Kind bei Ihnen zuhause.',
  },

  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.bookAppointment': 'Book Appointment',

    // Hero
    'hero.title': 'Mobile Pediatric Osteopathy',
    'hero.titleHighlight': 'in Leipzig',
    'hero.subtitle': 'Osteopathic treatment for your child – at your home. In a familiar environment, relaxed and stress-free.',
    'hero.cta.primary': 'Book Appointment',
    'hero.cta.secondary': 'Learn More',

    // USPs
    'usp.experience.title': '20+ Years Experience',
    'usp.experience.text': 'Extensive experience working with children – as a physiotherapist and osteopath.',
    'usp.homeVisit.title': 'Treatment at Home',
    'usp.homeVisit.text': 'Your child is treated in their familiar environment – more relaxed and without stressful travel.',
    'usp.specialized.title': 'Specialized in Children',
    'usp.specialized.text': 'Exclusively treating infants, toddlers, and children – with gentle, child-appropriate methods.',

    // About Preview
    'about.title': 'About Me',
    'about.intro': 'I am Susanne Hoppe, a physiotherapist and certified pediatric osteopath with over 20 years of experience working with children.',
    'about.text': 'As a mobile osteopath, I come to your home – so your child can be treated in their familiar environment, relaxed and stress-free.',
    'about.link': 'Learn more about me',

    // CTA Section
    'cta.title': 'Have questions or want to book an appointment?',
    'cta.text': 'I look forward to hearing from you and am happy to answer all questions about osteopathic treatment for your child.',
    'cta.button': 'Get in Touch',

    // Footer
    'footer.tagline': 'Mobile pediatric osteopathy in Leipzig. Treatment at your home.',
    'footer.navigation': 'Navigation',
    'footer.legal': 'Legal',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': 'All rights reserved.',

    // Accessibility
    'a11y.skipToContent': 'Skip to content',
    'a11y.openMenu': 'Open menu',

    // Services Page
    'services.title': 'Services',
    'services.subtitle': 'Osteopathic treatment for children of all ages – gentle, child-appropriate, and at your home.',
    'services.babies.title': 'Babies (0-12 months)',
    'services.babies.text': 'Gentle osteopathic treatment for the little ones.',
    'services.toddlers.title': 'Toddlers (1-6 years)',
    'services.toddlers.text': 'Support during this important developmental phase.',
    'services.children.title': 'School Children (6-14 years)',
    'services.children.text': 'Accompanying through school years and growth phases.',
    'services.commonIssues': 'Common reasons for treatment:',
    'services.process.title': 'Treatment Process',
    'services.pricing.title': 'Pricing',

    // Contact Page
    'contact.title': 'Contact',
    'contact.subtitle': 'I look forward to hearing from you.',
    'contact.info': 'Contact Information',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.area': 'Service Area',
    'contact.form.title': 'Send Message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.childAge': "Child's Age",
    'contact.form.message': 'Message',
    'contact.form.privacy': 'I have read the privacy policy and agree to the processing of my data.',
    'contact.form.submit': 'Send Message',
    'contact.form.required': 'Required fields',

    // Meta
    'meta.description': 'Mobile pediatric osteopathy in Leipzig - Susanne Hoppe. Osteopathic treatment for your child at your home.',
  },
} as const;

export type TranslationKey = keyof typeof translations.de;

/**
 * Get translation for a given key and language
 */
export function t(key: TranslationKey, lang: Lang = defaultLang): string {
  return translations[lang][key] || translations.de[key] || key;
}

/**
 * Get all translations for a language
 */
export function getTranslations(lang: Lang) {
  return translations[lang];
}

/**
 * Get URL for a page in a specific language
 */
export function getLocalizedUrl(path: string, lang: Lang): string {
  if (lang === defaultLang) {
    return path;
  }
  return `/en${path === '/' ? '' : path}`;
}
