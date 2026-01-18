/**
 * Contact Protection Script
 * Assembles email and phone from data attributes to protect against bots/scrapers
 */

// Contact data (split to avoid scraping)
const CONTACT = {
  email: {
    user: 'kontakt',
    domain: 'susanne-hoppe',
    tld: 'de'
  },
  phone: {
    display: '+49 152 051 99153',
    link: '+4915205199153'
  },
  address: {
    street: 'Hähnelstraße 28',
    zip: '04177',
    city: 'Leipzig'
  }
};

/**
 * Assembles the email address
 */
function getEmail(): string {
  return `${CONTACT.email.user}@${CONTACT.email.domain}.${CONTACT.email.tld}`;
}

/**
 * Assembles the phone number for display
 */
function getPhoneDisplay(): string {
  return CONTACT.phone.display;
}

/**
 * Assembles the phone number for tel: link
 */
function getPhoneLink(): string {
  return CONTACT.phone.link;
}

/**
 * Gets the full address
 */
function getAddress(): { street: string; zip: string; city: string; full: string } {
  return {
    ...CONTACT.address,
    full: `${CONTACT.address.street}, ${CONTACT.address.zip} ${CONTACT.address.city}`
  };
}

/**
 * Initialize contact protection - fills in all protected contact elements
 */
export function initContactProtection(): void {
  // Handle email elements
  document.querySelectorAll('[data-contact="email"]').forEach((el) => {
    const email = getEmail();

    if (el.tagName === 'A') {
      (el as HTMLAnchorElement).href = `mailto:${email}`;
      if (!el.textContent?.trim() || el.textContent === '...') {
        el.textContent = email;
      }
    } else {
      el.textContent = email;
    }
  });

  // Handle phone elements
  document.querySelectorAll('[data-contact="phone"]').forEach((el) => {
    if (el.tagName === 'A') {
      (el as HTMLAnchorElement).href = `tel:${getPhoneLink()}`;
      if (!el.textContent?.trim() || el.textContent === '...') {
        el.textContent = getPhoneDisplay();
      }
    } else {
      el.textContent = getPhoneDisplay();
    }
  });

  // Handle address elements
  document.querySelectorAll('[data-contact="address"]').forEach((el) => {
    const addr = getAddress();
    const format = el.getAttribute('data-format');

    if (format === 'full') {
      el.textContent = addr.full;
    } else if (format === 'multiline') {
      el.innerHTML = `${addr.street}<br />${addr.zip} ${addr.city}`;
    } else {
      el.textContent = addr.full;
    }
  });

  // Handle combined email display (for links that show email as text)
  document.querySelectorAll('[data-contact="email-link"]').forEach((el) => {
    const email = getEmail();
    (el as HTMLAnchorElement).href = `mailto:${email}`;
    el.textContent = email;
  });

  // Handle combined phone display (for links that show phone as text)
  document.querySelectorAll('[data-contact="phone-link"]').forEach((el) => {
    (el as HTMLAnchorElement).href = `tel:${getPhoneLink()}`;
    el.textContent = getPhoneDisplay();
  });
}

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactProtection);
  } else {
    initContactProtection();
  }
}
