import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, languages, currentLanguageInfo } = useLanguage();
  const { t } = useTranslations(currentLanguage);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (languageCode) => {
    changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('common.selectLanguage')}
      >
        <img
          src={currentLanguageInfo.flag}
          alt={`${currentLanguageInfo.name} flag`}
          className="language-flag"
        />
        <span className="language-name">{currentLanguageInfo.name}</span>
        <ChevronDown size={14} className={`chevron ${isOpen ? 'rotate' : ''}`} />
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {Object.entries(languages).map(([code, language]) => (
            <button
              key={code}
              className={`language-option ${code === currentLanguage ? 'active' : ''}`}
              onClick={() => handleLanguageChange(code)}
            >
              <img
                src={language.flag}
                alt={`${language.name} flag`}
                className="language-flag"
              />
              <span className="language-name">{language.name}</span>
              {code === currentLanguage && (
                <div className="checkmark">✓</div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
