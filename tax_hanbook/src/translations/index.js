import { en } from './en';
import { fr } from './fr';
import { rw } from './rw';

export const translations = {
  en,
  fr,
  rw
};

export const getTranslation = (obj, path) => {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : null;
  }, obj);
};

export const useTranslations = (language) => {
  const translation = translations[language] || translations.en;

  const t = (key) => {
    const value = getTranslation(translation, key);
    if (value !== null) return value;
    // Fallback to English if key missing in current language
    const fallback = getTranslation(translations.en, key);
    return fallback !== null ? fallback : key;
  };

  return { t, translation };
};
