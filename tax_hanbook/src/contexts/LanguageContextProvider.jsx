import { LanguageContext } from './LanguageContext';
import { useState, useCallback } from 'react';

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const stored = localStorage.getItem('tax-handbook-language');
    const lang = stored && ['en', 'fr', 'rw'].includes(stored) ? stored : 'en';
    // Apply the body gate synchronously on first render so GT never gets a window
    // to auto-translate when the stored language is English.
    if (lang === 'en') {
      document.body.classList.add('notranslate');
      document.body.setAttribute('translate', 'no');
    } else {
      document.body.classList.remove('notranslate');
      document.body.removeAttribute('translate');
    }
    return lang;
  });

  const languages = {
    en: { name: 'English', flag: '/images/flags/uk-flag.svg', code: 'en' },
    fr: { name: 'Français', flag: '/images/flags/france-flag.svg', code: 'fr' },
    rw: { name: 'Kinyarwanda', flag: '/images/flags/rwanda-flag.svg', code: 'rw' },
  };

  const changeLanguage = useCallback((languageCode) => {
    if (!languages[languageCode]) return;

    if (languageCode === 'en') {
      // Clear the googtrans cookie in all forms GT may have set it
      const expired = '; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
      document.cookie = `googtrans=${expired}`;
      document.cookie = `googtrans=${expired}; domain=${window.location.hostname}`;
      document.cookie = `googtrans=${expired}; domain=.${window.location.hostname}`;

      // Hard gate: prevent GT from touching any body content immediately.
      document.body.classList.add('notranslate');
      document.body.setAttribute('translate', 'no');

      // Cancel any in-flight FR/RW retry loops and reset the combo.
      if (typeof window.__rraSetTranslation === 'function') {
        window.__rraSetTranslation('en');
      }

      // Update React state instantly — t() components flip to English immediately
      setCurrentLanguage('en');
      localStorage.setItem('tax-handbook-language', 'en');
      document.documentElement.lang = 'en';

      // Signal App to remount page content so GT-modified DOM is replaced with fresh React DOM
      window.dispatchEvent(new CustomEvent('rra-restore-english'));
      return;
    }

    // Non-English: lift the body block before triggering GT.
    document.body.classList.remove('notranslate');
    document.body.removeAttribute('translate');

    setCurrentLanguage(languageCode);
    localStorage.setItem('tax-handbook-language', languageCode);
    document.documentElement.lang = languageCode;

    // Set googtrans cookie so GT picks up the language after navigation
    document.cookie = `googtrans=/en/${languageCode}; path=/`;
    document.cookie = `googtrans=/en/${languageCode}; path=/; domain=${window.location.hostname}`;

    // Cancel any in-flight opposite-direction retries, then apply the new language.
    if (typeof window.__rraSetTranslation === 'function') {
      window.__rraSetTranslation(languageCode);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    currentLanguage,
    changeLanguage,
    languages,
    currentLanguageInfo: languages[currentLanguage] || languages.en,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
