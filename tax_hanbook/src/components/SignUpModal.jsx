import { useState } from 'react';
import { X, Mail, Lock, User, UserPlus, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';
import './LoginModal.css';

const SignUpModal = ({ onClose, onSwitchToLogin }) => {
  const { register } = useAuth();
  const { currentLanguage } = useLanguage();
  const { t } = useTranslations(currentLanguage);

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', password: '', confirmPassword: '',
  });
  const [showPwd, setShowPwd]         = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError]             = useState('');
  const [loading, setLoading]         = useState(false);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirmPassword) {
      setError(t('auth.signup.passwordMismatch'));
      return;
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      await register(form.firstName, form.lastName, form.email, form.password);
      onClose();
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const pwdMatch = form.confirmPassword && form.password === form.confirmPassword;

  return (
    <div className="auth-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="auth-modal auth-modal--signup" role="dialog" aria-modal="true" aria-labelledby="signup-title">

        {/* Header */}
        <div className="auth-modal-header">
          <div className="auth-modal-logo" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="./images/rra-logo.png" alt="RRA Logo" style={{ width: '100%', height: '100%', maxHeight: '80px', objectFit: 'contain' }} />
          </div>
          <button className="auth-modal-close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Taxpayer notice */}
        <div className="auth-role-notice">
          <span className="auth-role-badge auth-role-badge--taxpayer">{t('auth.login.taxpayer')}</span>
          <span className="auth-role-hint"> — {t('auth.signup.subtitle')}</span>
        </div>

        {/* Error */}
        {error && (
          <div className="auth-error" role="alert">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="auth-field-row">
            <div className="auth-field">
              <label htmlFor="signup-fname" className="auth-label">{t('auth.signup.firstName')}</label>
              <div className="auth-input-wrapper">
                <User size={16} className="auth-input-icon" />
                <input
                  id="signup-fname"
                  type="text"
                  className="auth-input"
                  placeholder={t('auth.signup.firstNamePlaceholder')}
                  value={form.firstName}
                  onChange={update('firstName')}
                  required
                  autoFocus
                />
              </div>
            </div>
            <div className="auth-field">
              <label htmlFor="signup-lname" className="auth-label">{t('auth.signup.lastName')}</label>
              <div className="auth-input-wrapper">
                <User size={16} className="auth-input-icon" />
                <input
                  id="signup-lname"
                  type="text"
                  className="auth-input"
                  placeholder={t('auth.signup.lastNamePlaceholder')}
                  value={form.lastName}
                  onChange={update('lastName')}
                  required
                />
              </div>
            </div>
          </div>

          <div className="auth-field">
            <label htmlFor="signup-email" className="auth-label">{t('auth.signup.email')}</label>
            <div className="auth-input-wrapper">
              <Mail size={16} className="auth-input-icon" />
              <input
                id="signup-email"
                type="email"
                className="auth-input"
                placeholder={t('auth.signup.emailPlaceholder')}
                value={form.email}
                onChange={update('email')}
                required
                autoComplete="email"
              />
            </div>
          </div>

          <div className="auth-field">
            <label htmlFor="signup-password" className="auth-label">{t('auth.signup.password')}</label>
            <div className="auth-input-wrapper">
              <Lock size={16} className="auth-input-icon" />
              <input
                id="signup-password"
                type={showPwd ? 'text' : 'password'}
                className="auth-input auth-input--padded-right"
                placeholder={t('auth.signup.passwordPlaceholder')}
                value={form.password}
                onChange={update('password')}
                required
                autoComplete="new-password"
              />
              <button type="button" className="auth-toggle-pwd" onClick={() => setShowPwd(!showPwd)}
                aria-label={showPwd ? 'Hide password' : 'Show password'}>
                {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="auth-field">
            <label htmlFor="signup-confirm" className="auth-label">{t('auth.signup.confirmPassword')}</label>
            <div className="auth-input-wrapper">
              <Lock size={16} className="auth-input-icon" />
              <input
                id="signup-confirm"
                type={showConfirm ? 'text' : 'password'}
                className={`auth-input auth-input--padded-right ${pwdMatch ? 'auth-input--valid' : ''}`}
                placeholder={t('auth.signup.confirmPasswordPlaceholder')}
                value={form.confirmPassword}
                onChange={update('confirmPassword')}
                required
                autoComplete="new-password"
              />
              {pwdMatch && <CheckCircle size={16} className="auth-input-valid-icon" />}
              <button type="button" className="auth-toggle-pwd" onClick={() => setShowConfirm(!showConfirm)}
                aria-label={showConfirm ? 'Hide password' : 'Show password'}>
                {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            id="signup-submit-btn"
            type="submit"
            className="auth-submit-btn auth-submit-btn--signup"
            disabled={loading}
          >
            {loading ? (
              <span className="auth-spinner" />
            ) : (
              <>
                <UserPlus size={16} />
                {t('auth.signup.submit')}
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="auth-switch-text">
          {t('auth.signup.hasAccount')}{' '}
          <button
            id="switch-to-login-btn"
            type="button"
            className="auth-switch-link"
            onClick={onSwitchToLogin}
          >
            {t('auth.signup.signIn')}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpModal;
