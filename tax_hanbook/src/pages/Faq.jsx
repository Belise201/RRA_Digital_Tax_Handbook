import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useOutletContext, useLocation } from 'react-router-dom';
import { FAQ_CATEGORY_OPTIONS, submitFaqQuestion } from '../data/faqStorage';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';
import LoginModal from '../components/LoginModal';
import SignUpModal from '../components/SignUpModal';
import './Faq.css';

export default function Faq() {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { setSearchQuery } = useOutletContext() || {};

  const { currentLanguage } = useLanguage();
  const { t } = useTranslations(currentLanguage);

  useEffect(() => {
    if (location.pathname !== '/faq') return;
    if (location.hash === '#faq-obligations') {
      navigate('/obligations#faq-obligations', { replace: true });
      return;
    }
    if (location.hash === '#faq-decentralised-entities') {
      navigate('/decentralised-entities#faq-decentralised-entities', { replace: true });
    }
  }, [location.pathname, location.hash, navigate]);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [form, setForm] = useState({
    categoryKey: FAQ_CATEGORY_OPTIONS[0]?.key || '',
    question: '',
    author: '',
    authorEmail: '',
  });
  const [message, setMessage] = useState(null);


  const openLogin  = () => { setShowLogin(true);  setShowSignUp(false); };
  const openSignUp = () => { setShowSignUp(true); setShowLogin(false);  };
  const closeModals = () => { setShowLogin(false); setShowSignUp(false); };

  const handleAuthSuccess = useCallback(() => {
    setSearchQuery?.('');
    navigate('/', { replace: true });
  }, [navigate, setSearchQuery]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!user?.email) {
      setMessage({ type: 'error', text: t('faqSubmit.errorSignIn') });
      return;
    }
    try {
      submitFaqQuestion({ ...form, submitterEmail: user.email });
      setForm((prev) => ({ ...prev, question: '', author: '', authorEmail: '' }));
      setMessage({ type: 'success', text: t('faqSubmit.successMsg') });
    } catch (err) {
      setMessage({ type: 'error', text: err.message || t('faqSubmit.errorFailed') });
    }
  };

  return (
    <div className="page-container notranslate" translate="no">
      <div className="page-content">

        {!isAdmin() && (
          <section className="faq-submit-card">

            {!user ? (
              <div className="faq-gate">
                <p className="faq-gate__heading">Have a question about taxes?</p>
                <p className="faq-gate__sub">Log in to submit it to the handbook team.</p>
                <div className="faq-gate__actions">
                  <button type="button" className="faq-gate__btn-primary" onClick={openLogin}>
                    Log in
                  </button>
                  <button type="button" className="faq-gate__btn-link" onClick={openSignUp}>
                    No account? Sign up
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="faq-submit-form">
                <label className="faq-submit-form__field">
                  <span>{t('faqSubmit.category')}</span>
                  <select
                    value={form.categoryKey}
                    onChange={(e) => setForm((prev) => ({ ...prev, categoryKey: e.target.value }))}
                    required
                  >
                    {FAQ_CATEGORY_OPTIONS.map((item) => (
                      <option key={item.key} value={item.key}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="faq-submit-form__field">
                  <span>{t('faqSubmit.question')}</span>
                  <textarea
                    rows={4}
                    value={form.question}
                    onChange={(e) => setForm((prev) => ({ ...prev, question: e.target.value }))}
                    placeholder={t('faqSubmit.questionPlaceholder')}
                    required
                  />
                </label>

                <div className="faq-submit-form__row">
                  <label className="faq-submit-form__field">
                    <span>{t('faqSubmit.authorName')}</span>
                    <input
                      type="text"
                      value={form.author}
                      onChange={(e) => setForm((prev) => ({ ...prev, author: e.target.value }))}
                      placeholder="John Doe"
                    />
                  </label>
                  <label className="faq-submit-form__field">
                    <span>{t('faqSubmit.authorEmail')}</span>
                    <input
                      type="email"
                      value={form.authorEmail}
                      onChange={(e) => setForm((prev) => ({ ...prev, authorEmail: e.target.value }))}
                      placeholder="name@example.com"
                    />
                  </label>
                </div>

                <button type="submit" className="faq-submit-form__btn">
                  {t('faqSubmit.submit')}
                </button>
              </form>
            )}

            {message && (
              <p className={`faq-submit-card__message faq-submit-card__message--${message.type}`}>
                {message.text}
              </p>
            )}
          </section>
        )}

        {showLogin && (
          <LoginModal
            onClose={closeModals}
            onSwitchToSignUp={openSignUp}
            onAuthenticated={handleAuthSuccess}
          />
        )}
        {showSignUp && (
          <SignUpModal
            onClose={closeModals}
            onSwitchToLogin={openLogin}
            onAuthenticated={handleAuthSuccess}
          />
        )}
      </div>
    </div>
  );
}
