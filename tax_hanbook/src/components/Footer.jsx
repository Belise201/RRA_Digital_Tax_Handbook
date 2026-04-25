import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';
import './Footer.css';

const Footer = () => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslations(currentLanguage);

  const TwitterIcon = ({ size = 14, color = 'currentColor' }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      style={{ color }}
    >
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );

  return (
    <footer className="global-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-title">{t('footer.socialMedia')}</h4>
          <ul className="social-links">
            <li>
              <a href="https://x.com/rrainfo" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon twitter"><TwitterIcon size={14} /></span>
                <span className="social-text">rrainfo</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/RwandaRevenueAuthority" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon facebook"><Facebook size={14} /></span>
                <span className="social-text">Rwanda Revenue Authority</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/rwandarevenue/" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon instagram"><Instagram size={14} /></span>
                <span className="social-text">Rwandarevenue</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@rwandarevenueauthority6148" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon youtube"><Youtube size={14} /></span>
                <span className="social-text">Rwanda Revenue Authority</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">{t('footer.helpContacts')}</h4>
          <ul className="footer-menu">
            <li>
              <a href="tel:3004" className="footer-link">3004 ({t('footer.localCalls')})</a>
            </li>
            <li>
              <a href="tel:+250788185500" className="footer-link">+250 (0) 788 185 500 ({t('footer.internationalCalls')})</a>
            </li>
            <li>
              <a href="https://ecms.rra.gov.rw/home?lang=en" target="_blank" rel="noopener noreferrer" className="footer-link">
                {t('footer.sendLetter')}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
