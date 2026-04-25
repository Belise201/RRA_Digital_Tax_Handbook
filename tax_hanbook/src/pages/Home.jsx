import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Globe, Clock, Award } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';

const Home = () => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslations(currentLanguage);

  return (
    <div className="home-page">
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
            <a href="tel:3004" className="btn btn-secondary">
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
            <div className="stat-number">2025</div>
            <div className="stat-label">{t('home.stats.updated')}</div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="disclaimer-section" style={{
        background: 'white',
        borderRadius: '0.75rem',
        padding: '2rem',
        marginBottom: '2.5rem',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        border: '1px solid var(--border)'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '1.5rem',
          color: '#093e61',
          textAlign: 'center'
        }}>Disclaimer</h2>
        <div style={{
          color: 'var(--text-secondary)',
          lineHeight: '1.8',
          fontSize: '0.9375rem',
          marginBottom: '1.5rem'
        }}>
          <p style={{ marginBottom: '1rem' }}>
            This information is strictly for the purpose of guidance to our stakeholders and is subject to change on amendment of tax legislation and any other regulations governing tax administration.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            The information in this handbook is updated in the online version, as and when required.
          </p>
        </div>

        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '1.5rem',
          marginTop: '1.5rem'
        }}>
          <p style={{
            color: 'var(--text-primary)',
            fontWeight: 600,
            marginBottom: '0.75rem',
            fontSize: '0.9375rem'
          }}>
            © Rwanda Revenue Authority 2025
          </p>
          <p style={{
            color: 'var(--text-secondary)',
            marginBottom: '0.5rem',
            fontSize: '0.875rem'
          }}>
            First published 2018. All rights reserved.
          </p>
          <p style={{
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
            fontSize: '0.875rem'
          }}>
            Second published 2025. All rights reserved.
          </p>
        </div>

        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '1.5rem',
          marginTop: '1.5rem'
        }}>
          <p style={{
            color: 'var(--text-primary)',
            fontWeight: 600,
            marginBottom: '0.75rem',
            fontSize: '0.9375rem'
          }}>
            Principal Author: Alasdair Mackintosh, Tax Policy Advisor
          </p>
          <p style={{
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
            fontSize: '0.875rem'
          }}>
            Co-Author of the Local Government Taxes and Fees Chapter: Dr. Christopher Nell
          </p>
        </div>

        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '1.5rem',
          marginTop: '1.5rem'
        }}>
          <p style={{
            color: 'var(--text-primary)',
            fontWeight: 600,
            marginBottom: '0.75rem',
            fontSize: '0.9375rem'
          }}>
            Principal Validation Team:
          </p>
          <p style={{
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
            fontSize: '0.875rem',
            lineHeight: '1.6'
          }}>
            Agnes Kanyangeyo, Drocelle Mukashyaka, William Musoni, Denis Mukama, Victor Uwayezu, Consolé Munyankindi, Gerard Abiyingoma, Jeanne Mujawayezu, Harshil Parekh, Aline Shumbusho, Claude Kagaba, Egide Musafiri, Ernest Karasira, Kieran Byrne and Assumpta Mukabaranga.
          </p>
        </div>

        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '1.5rem',
          marginTop: '1.5rem'
        }}>
          <p style={{
            color: 'var(--text-primary)',
            fontWeight: 600,
            marginBottom: '0.75rem',
            fontSize: '0.9375rem'
          }}>
            Updated and reviewed by:
          </p>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
            lineHeight: '1.6'
          }}>
            Naphtal Hakizimana, Victor Uwayezu, Claudien Uzabakiliho, Marc Nshimiye, and Eraste Hitiyaremye.
          </p>
        </div>
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
                className="contact-link-clickable"
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
