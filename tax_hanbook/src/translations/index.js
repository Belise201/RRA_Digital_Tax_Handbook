import { en } from './en';
import { fr } from './fr';
import { rw } from './rw';

export const translations = {
  en,
  fr,
  rw
};

// Utility function to get nested translation values
export const getTranslation = (obj, path) => {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : null;
  }, obj);
};

// Hook to use translations
export const useTranslations = (language) => {
  const translation = translations[language] || translations.en;
  
  const t = (key) => {
    const value = getTranslation(translation, key);
    return value !== null ? value : key;
  };
  
  return { t, translation };
};
