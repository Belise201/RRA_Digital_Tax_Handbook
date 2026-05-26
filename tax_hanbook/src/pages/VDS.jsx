import { Shield } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';

const VDS = () => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslations(currentLanguage);

  return (
    <div className="page-container notranslate" translate="no">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Shield size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">{t('vds.title')}</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* What is VDS */}
        <section className="content-section">
          <h2>{t('vds.whatIsVDS.title')}</h2>
          <p className="content-paragraph">{t('vds.whatIsVDS.description')}</p>
          <ul className="content-list">
            {t('vds.whatIsVDS.benefits').map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
        </section>

        {/* Basis of VDS */}
        <section className="content-section">
          <h2>{t('vds.basis.title')}</h2>
          <p className="content-paragraph">
            <strong>{t('vds.basis.article94.title')}</strong>
            {' — '}
            {t('vds.basis.article94.description')}
          </p>
          <p className="content-paragraph">
            <strong>{t('vds.basis.ministerialOrder.title')}</strong>
            {' — '}
            {t('vds.basis.ministerialOrder.description')}
          </p>
        </section>

        {/* Eligibility */}
        <section className="content-section">
          <h2>{t('vds.eligibility.title')}</h2>
          <ul className="content-list">
            {t('vds.eligibility.criteria').map((criterion, i) => (
              <li key={i}>{criterion}</li>
            ))}
          </ul>
        </section>

        {/* Where to apply */}
        <section className="content-section">
          <h2>{t('vds.application.title')}</h2>
          <p className="content-paragraph">
            {t('vds.application.description')}{' '}
            <a
              href="https://www.rra.gov.rw"
              target="_blank"
              rel="noopener noreferrer"
              className="content-link notranslate"
              translate="no"
            >
              {t('vds.application.website')}
            </a>
          </p>
        </section>

        {/* Notices */}
        <section className="content-section">
          <h2>{t('vds.notices.important.title')}</h2>
          <p className="content-paragraph">{t('vds.notices.important.description')}</p>
        </section>

        <section className="content-section">
          <h2>{t('vds.notices.payment.title')}</h2>
          <p className="content-paragraph">{t('vds.notices.payment.description')}</p>
        </section>
      </div>
    </div>
  );
};

export default VDS;
