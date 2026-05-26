import { Scale } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';

const LawsRulings = () => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslations(currentLanguage);

  return (
    <div className="page-container notranslate" translate="no">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Scale size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">{t('lawsRulings.title')}</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <h2>{t('lawsRulings.wherePublished.title')}</h2>
          <p className="content-paragraph">
            {t('lawsRulings.wherePublished.description')}
          </p>
          <p className="content-paragraph">
            <a
              href="https://www.rra.gov.rw/en/laws-policies-and-rulings"
              target="_blank"
              rel="noopener noreferrer"
              className="notranslate"
              translate="no"
              style={{ color: 'var(--primary)', textDecoration: 'underline' }}
            >
              https://www.rra.gov.rw/en/laws-policies-and-rulings
            </a>
          </p>
        </section>

        <section className="content-section">
          <h2>{t('lawsRulings.howToRequest.title')}</h2>
          <p className="content-paragraph">
            {t('lawsRulings.howToRequest.description')}
          </p>
        </section>

        <section className="content-section">
          <h2>{t('lawsRulings.process.title')}</h2>
          <p className="content-paragraph">
            {t('lawsRulings.process.description')}
          </p>
          <ul className="content-list">
            <li>{t('lawsRulings.process.requirement1')}</li>
            <li>{t('lawsRulings.process.requirement2')}</li>
            <li>{t('lawsRulings.process.requirement3')}</li>
          </ul>
          <p className="content-paragraph">
            <strong>{t('lawsRulings.process.note')}</strong>{' '}
            {t('lawsRulings.process.noteText')}
          </p>
        </section>

        <section className="content-section">
          <h2>{t('lawsRulings.stayUpdated.title')}</h2>
          <p className="content-paragraph">
            {t('lawsRulings.stayUpdated.description')}
          </p>
        </section>
      </div>
    </div>
  );
};

export default LawsRulings;
