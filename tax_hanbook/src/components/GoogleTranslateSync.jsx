import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

/**
 * Keeps Google Translate in sync with the app's language state on every SPA navigation.
 *
 * English mode: adds `notranslate` to <body> so GT cannot touch any DOM, then calls
 * __rraSetTranslation('en') which increments the sequence counter and cancels any
 * in-flight French/RW retry loops from a previous translation call.
 *
 * Non-English mode: removes `notranslate` from <body> and calls __rraSetTranslation
 * (with retries) to apply the translation to freshly rendered content.
 */
export default function GoogleTranslateSync() {
  const location = useLocation();
  const { currentLanguage } = useLanguage();
  const timersRef = useRef([]);

  useEffect(() => {
    const clear = () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
    clear();

    if (currentLanguage === 'en') {
      // Hard gate: GT respects notranslate and will not touch any element inside body.
      document.body.classList.add('notranslate');
      document.body.setAttribute('translate', 'no');

      // Cancel any in-flight FR/RW retry loop and reset the combo element.
      const resetGT = () => {
        if (typeof window.__rraSetTranslation === 'function') {
          window.__rraSetTranslation('en');
        }
      };
      resetGT();
      // Retry after short delays to override GT's own auto-translate that fires on new DOM.
      timersRef.current.push(setTimeout(resetGT, 120));
      timersRef.current.push(setTimeout(resetGT, 350));
      timersRef.current.push(setTimeout(resetGT, 700));

      return () => clear();
    }

    // Non-English: lift the body-level block and apply the selected language.
    document.body.classList.remove('notranslate');
    document.body.removeAttribute('translate');

    const apply = () => {
      if (typeof window.__rraSetTranslation === 'function') {
        window.__rraSetTranslation(currentLanguage);
      }
    };

    apply();
    timersRef.current.push(setTimeout(apply, 80));
    timersRef.current.push(setTimeout(apply, 250));
    timersRef.current.push(setTimeout(apply, 600));

    return () => clear();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLanguage, location.pathname, location.key]);

  return null;
}
