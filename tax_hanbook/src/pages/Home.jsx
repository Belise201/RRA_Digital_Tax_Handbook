import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Globe, Clock, Award } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';

const HANDBOOK_REVIEWERS = [
  'Naphtal Hakizimana',
  'Victor Uwayezu',
  'Claudien Uzabakiliho',
  'Marc Nshimiye',
  'Eraste Hitiyaremye',
];

const HANDBOOK_VALIDATION_TEAM = [
  'Agnes Kanyangeyo',
  'Drocelle Mukashyaka',
  'William Musoni',
  'Denis Mukama',
  'Victor Uwayezu',
  'Consolé Munyankindi',
  'Gerard Abiyingoma',
  'Jeanne Mujawayezu',
  'Harshil Parekh',
  'Aline Shumbusho',
  'Claude Kagaba',
  'Egide Musafiri',
  'Ernest Karasira',
  'Kieran Byrne',
  'Assumpta Mukabaranga',
];

const Home = () => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslations(currentLanguage);

  return (
    <div className="home-page notranslate" translate="no">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <Award size={12} />
            <span>{t('home.hero.badge')}</span>
          </div>
          <h1 className="hero-title">
            {t('home.hero.title')}
          </h1>
          <p className="hero-subtitle">
            {t('home.hero.subtitle')}
          </p>
          <div className="hero-actions">
            <Link to="/introduction" className="btn btn-primary">
              {t('home.hero.getStarted')}
              <ArrowRight size={14} />
            </Link>
            <a href="tel:3004" className="btn btn-secondary notranslate" translate="no">
              <Phone size={14} />
              {t('home.hero.callCenter')}
            </a>
          </div>
        </div>
        <div className="hero-stats">

          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">{t('home.stats.taxTypes')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2026</div>
            <div className="stat-label">{t('home.stats.updated')}</div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="home-plain-section" aria-labelledby="home-disclaimer-heading">
        <h2 id="home-disclaimer-heading">{t('home.disclaimer.heading')}</h2>
        <p>{t('home.disclaimer.p1')}</p>
        <p>{t('home.disclaimer.p2')}</p>
      </section>

      {/* About this handbook — vertical timeline (credits) */}
      <section
        className="home-plain-section home-about-handbook"
        aria-labelledby="home-about-heading"
      >
        <h2 id="home-about-heading">{t('home.about.heading')}</h2>
        <p className="home-about-lede">{t('home.about.lede')}</p>

        <ul className="home-about-timeline">
          <li className="home-about-timeline-item">
            <div className="home-about-timeline-inner">
              <h3 className="home-about-timeline-title">{t('home.about.copyright.title')}</h3>
              <p className="home-about-timeline-meta">{t('home.about.copyright.meta')}</p>
              <ul className="home-about-meta-list home-about-timeline-body">
                <li>{t('home.about.copyright.line1')}</li>
                <li>{t('home.about.copyright.line2')}</li>
                <li>{t('home.about.copyright.line3')}</li>
              </ul>
            </div>
          </li>

          <li className="home-about-timeline-item">
            <div className="home-about-timeline-inner">
              <h3 className="home-about-timeline-title">{t('home.about.principalAuthor.title')}</h3>
              <p className="home-about-timeline-meta">{t('home.about.principalAuthor.meta')}</p>
              <p className="home-about-timeline-body home-about-timeline-body--text">
                Alasdair Mackintosh, Tax Policy Advisor
              </p>
            </div>
          </li>

          <li className="home-about-timeline-item">
            <div className="home-about-timeline-inner">
              <h3 className="home-about-timeline-title">{t('home.about.coAuthor.title')}</h3>
              <p className="home-about-timeline-meta">{t('home.about.coAuthor.meta')}</p>
              <p className="home-about-timeline-body home-about-timeline-body--text">
                Dr. Christopher Nell
              </p>
            </div>
          </li>

          <li className="home-about-timeline-item">
            <div className="home-about-timeline-inner">
              <h3 className="home-about-timeline-title">{t('home.about.reviewedBy.title')}</h3>
              <p className="home-about-timeline-meta">{t('home.about.reviewedBy.meta')}</p>
              <ul className="home-about-name-grid home-about-name-grid--sm home-about-timeline-body">
                {HANDBOOK_REVIEWERS.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          </li>

          <li className="home-about-timeline-item">
            <div className="home-about-timeline-inner">
              <h3 className="home-about-timeline-title">{t('home.about.validation.title')}</h3>
              <p className="home-about-timeline-meta">{t('home.about.validation.meta')}</p>
              <ul className="home-about-name-grid home-about-timeline-body">
                {HANDBOOK_VALIDATION_TEAM.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </section>



      {/* Contact Information Section */}
      <section className="contact-section">
        <h2>{t('home.contact.title')}</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9375rem' }}>
          {t('home.contact.subtitle')}
        </p>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon"><Phone size={16} /></div>
            <h3>{t('home.contact.callCenter.title')}</h3>
            <p style={{ margin: '0.25rem 0' }}>
              <a
                href="tel:3004"
                className="contact-link-clickable notranslate"
                translate="no"
                style={{ display: 'inline-block' }}
              >
                {t('home.contact.callCenter.tollFree')}
              </a>
            </p>
            <p>{t('home.contact.callCenter.available')}</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon"><Globe size={16} /></div>
            <h3>{t('home.contact.website.title')}</h3>
            <a
              href="https://www.rra.gov.rw"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-clickable"
              style={{ display: 'inline-block' }}
            >
              www.rra.gov.rw
            </a>
          </div>
          <div className="contact-card">
            <div className="contact-icon"><Clock size={16} /></div>
            <h3>{t('home.contact.officeHours.title')}</h3>
            <p>{t('home.contact.officeHours.days')}</p>
            <p>{t('home.contact.officeHours.time')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
