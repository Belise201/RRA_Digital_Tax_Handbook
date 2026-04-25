import { LanguageContext } from './LanguageContext';
import { useState, useEffect, useRef } from 'react';

/** Clear the googtrans cookie so GT doesn't auto-translate a freshly-mounted tree */
function clearGoogTransCookie() {
  const hostname = window.location.hostname;
  document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + hostname;
  document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
}

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem('tax-handbook-language') || 'en';
  });

  /**
   * Incrementing this key forces the entire React tree (Routes + pages)
   * to unmount and remount, which discards all Google Translate DOM
   * modifications and renders clean English without any page reload.
   */
  const [remountKey, setRemountKey] = useState(0);

  const gtReadyRef = useRef(false);

  const languages = {
    en: { name: 'English',     flag: './images/flags/uk-flag.svg',     code: 'en' },
    fr: { name: 'Français',    flag: './images/flags/france-flag.svg', code: 'fr' },
    rw: { name: 'Kinyarwanda', flag: './images/flags/rwanda-flag.svg', code: 'rw' },
  };

  /**
   * On mount: if the stored language is non-English, wait for Google
   * Translate's hidden <select> to appear, then re-apply it.
   */
  useEffect(() => {
    if (currentLanguage === 'en') {
      document.documentElement.lang = 'en';
      return;
    }

    let attempts = 0;
    const interval = setInterval(() => {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        clearInterval(interval);
        gtReadyRef.current = true;
        if (typeof window.__rraSetTranslation === 'function') {
          window.__rraSetTranslation(currentLanguage);
        }
      }
      if (++attempts > 40) clearInterval(interval);
    }, 250);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeLanguage = (languageCode) => {
    setCurrentLanguage(languageCode);
    localStorage.setItem('tax-handbook-language', languageCode);
    document.documentElement.lang = languageCode;

    if (languageCode === 'en') {
      // Clear the googtrans cookie so GT doesn't auto-translate the
      // freshly-mounted React tree, then force a full remount via key change.
      clearGoogTransCookie();
      setRemountKey(k => k + 1);
      return;
    }

    // For French / Kinyarwanda: trigger Google Translate via the hidden select
    if (typeof window.__rraSetTranslation === 'function') {
      window.__rraSetTranslation(languageCode);
    }
  };

  const value = {
    currentLanguage,
    changeLanguage,
    languages,
    currentLanguageInfo: languages[currentLanguage] || languages.en,
    remountKey,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
