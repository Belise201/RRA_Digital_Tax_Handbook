import { useState } from 'react';
import { X, Mail, Lock, LogIn, Eye, EyeOff, AlertCircle, UserCircle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import './LoginModal.css';

const LoginModal = ({ onClose, onSwitchToSignUp, onAuthenticated }) => {
  const { login } = useAuth();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole]         = useState('taxpayer');
  const [showPwd, setShowPwd]   = useState(false);
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password, role);
      onAuthenticated?.();
      onClose();
    } catch (err) {
      setError(err.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-overlay notranslate" translate="no" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="auth-modal" role="dialog" aria-modal="true" aria-labelledby="login-title">

        {/* Header */}
        <div className="auth-modal-header">
          <div className="auth-modal-logo" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="./images/rra-logo.png" alt="RRA Logo" style={{ width: '100%', height: '100%', maxHeight: '80px', objectFit: 'contain' }} />
          </div>
          <button className="auth-modal-close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="auth-error" role="alert">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form className="auth-form" onSubmit={handleSubmit} noValidate autoComplete="off">
          <div className="auth-field">
            <label htmlFor="login-email" className="auth-label">Email Address</label>
            <div className="auth-input-wrapper">
              <Mail size={16} className="auth-input-icon" />
              <input
                id="login-email"
                type="email"
                className="auth-input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
                autoFocus
              />
            </div>
          </div>

          <div className="auth-field">
            <label htmlFor="login-password" className="auth-label">Password</label>
            <div className="auth-input-wrapper">
              <Lock size={16} className="auth-input-icon" />
              <input
                id="login-password"
                type={showPwd ? 'text' : 'password'}
                className="auth-input auth-input--padded-right"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
              <button
                type="button"
                className="auth-toggle-pwd"
                onClick={() => setShowPwd(!showPwd)}
                aria-label={showPwd ? 'Hide password' : 'Show password'}
              >
                {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="auth-field">
            <label htmlFor="login-role" className="auth-label">Role</label>
            <div className="auth-input-wrapper">
              <UserCircle size={16} className="auth-input-icon" />
              <select
                id="login-role"
                className="auth-input"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="taxpayer">Taxpayer</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          <button
            id="login-submit-btn"
            type="submit"
            className="auth-submit-btn"
            disabled={loading}
          >
            {loading ? (
              <span className="auth-spinner" />
            ) : (
              <>
                Sign In
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="auth-switch-text">
          Don&apos;t have an account?{' '}
          <button
            id="switch-to-signup-btn"
            type="button"
            className="auth-switch-link"
            onClick={onSwitchToSignUp}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;

