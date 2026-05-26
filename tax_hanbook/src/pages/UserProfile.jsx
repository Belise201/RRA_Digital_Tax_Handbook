import { useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Shield, Edit3, Save, X,
  CheckCircle, AlertCircle, Eye, EyeOff, KeyRound,
  BadgeCheck, Camera, Trash2
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import './UserProfile.css';

// ── Password strength ─────────────────────────────────────────────────────────
const getStrength = (pw) => {
  if (!pw) return { score: 0, label: '', color: '' };
  let s = 0;
  if (pw.length >= 8)  s++;
  if (pw.length >= 12) s++;
  if (/[A-Z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  if (s <= 1) return { score: s, label: 'Weak',   color: '#ef4444' };
  if (s <= 3) return { score: s, label: 'Fair',   color: '#f59e0b' };
  if (s === 4) return { score: s, label: 'Good',  color: '#3b82f6' };
  return             { score: s, label: 'Strong', color: '#22c55e' };
};

// ── Toast ─────────────────────────────────────────────────────────────────────
const Toast = ({ message, type, onClose }) => (
  <div className={`up-toast up-toast--${type}`} role="alert">
    {type === 'success' ? <CheckCircle size={15} /> : <AlertCircle size={15} />}
    <span>{message}</span>
    <button className="up-toast__close" onClick={onClose} aria-label="Dismiss"><X size={13} /></button>
  </div>
);

// ── Page ──────────────────────────────────────────────────────────────────────
const UserProfile = () => {
  const { user, updateProfile, updatePassword, isTaxpayer } = useAuth();
  const navigate = useNavigate();

  // Personal info
  const [editingInfo, setEditingInfo]       = useState(false);
  const [firstName,   setFirstName]         = useState(user?.firstName || '');
  const [lastName,    setLastName]          = useState(user?.lastName  || '');
  const [infoLoading, setInfoLoading]       = useState(false);

  // Password
  const [currentPw,  setCurrentPw]  = useState('');
  const [newPw,      setNewPw]      = useState('');
  const [confirmPw,  setConfirmPw]  = useState('');
  const [showCur,    setShowCur]    = useState(false);
  const [showNew,    setShowNew]    = useState(false);
  const [showCon,    setShowCon]    = useState(false);
  const [pwLoading,  setPwLoading]  = useState(false);

  // Toast
  const [toast, setToast] = useState(null);
  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  }, []);

  const isTax = isTaxpayer();

  useEffect(() => {
    if (!user) return;
    setFirstName(user.firstName || '');
    setLastName(user.lastName || '');
  }, [user]);

  // Avatar
  const avatarKey    = `rra_avatar_${user?.email}`;
  const [avatarUrl, setAvatarUrl] = useState(() => localStorage.getItem(`rra_avatar_${user?.email}`) || '');
  const fileInputRef = useRef(null);

  const handleAvatarUpload = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { showToast('Please select an image file.', 'error'); return; }
    if (file.size > 5 * 1024 * 1024)    { showToast('Image must be under 5 MB.', 'error');    return; }
    const reader = new FileReader();
    reader.onload = (ev) => {
      setAvatarUrl(ev.target.result);
      localStorage.setItem(avatarKey, ev.target.result);
      showToast('Profile photo updated!');
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  }, [avatarKey, showToast]);

  const handleAvatarRemove = useCallback(() => {
    setAvatarUrl('');
    localStorage.removeItem(avatarKey);
    showToast('Profile photo removed.');
  }, [avatarKey, showToast]);

  // Derived
  const initials = `${user?.firstName?.[0] || ''}${user?.lastName?.[0] || ''}`.toUpperCase() || '?';
  const fullName  = `${user?.firstName || ''} ${user?.lastName || ''}`.trim();
  const strength  = getStrength(newPw);

  // Handlers
  const handleInfoSave = async () => {
    if (!firstName.trim() || !lastName.trim()) { showToast('Both names are required.', 'error'); return; }
    setInfoLoading(true);
    try {
      await updateProfile(firstName.trim(), lastName.trim());
      setEditingInfo(false);
      showToast('Profile updated!');
    } catch (err) { showToast(err.message, 'error'); }
    finally { setInfoLoading(false); }
  };

  const handleInfoCancel = () => {
    setFirstName(user?.firstName || '');
    setLastName(user?.lastName  || '');
    setEditingInfo(false);
  };

  const handlePwSubmit = async (e) => {
    e.preventDefault();
    if (!currentPw || !newPw || !confirmPw) { showToast('All fields are required.', 'error'); return; }
    if (newPw.length < 8)   { showToast('New password must be at least 8 characters.', 'error'); return; }
    if (newPw !== confirmPw){ showToast('New passwords do not match.', 'error'); return; }
    if (newPw === currentPw){ showToast('New password must differ from current.', 'error'); return; }
    setPwLoading(true);
    try {
      await updatePassword(currentPw, newPw);
      setCurrentPw(''); setNewPw(''); setConfirmPw('');
      showToast('Password changed successfully!');
    } catch (err) { showToast(err.message, 'error'); }
    finally { setPwLoading(false); }
  };

  if (!user) { navigate('/'); return null; }

  return (
    <div className="up-page">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <header className="up-page-intro">
        <h1 className="up-page-heading">Your account</h1>
        <p className="up-page-lead">
          {isTax
            ? 'You can change how your name appears and your password. Your sign-in email and account type are kept on file and can only be updated by the handbook administrator.'
            : 'You can change how your name appears and your password. Your sign-in email and role were set when this account was created.'}
        </p>
      </header>

      <div className="up-hero-card">
        <div className="up-avatar-wrap">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="up-avatar-file-input"
            onChange={handleAvatarUpload}
            aria-label="Upload profile photo"
          />
          <button
            type="button"
            className="up-avatar-btn"
            onClick={() => fileInputRef.current?.click()}
            title="Replace photo"
            aria-label="Change profile photo"
          >
            {avatarUrl
              ? <img src={avatarUrl} alt="" className="up-avatar up-avatar--photo" />
              : <div className="up-avatar">{initials}</div>
            }
            <span className="up-avatar-overlay">
              <Camera size={18} />
              <span className="up-avatar-overlay__text">Photo</span>
            </span>
          </button>
          {avatarUrl && (
            <button type="button" className="up-avatar-remove" onClick={handleAvatarRemove} title="Remove photo" aria-label="Remove photo">
              <Trash2 size={10} />
            </button>
          )}
        </div>

        <div className="up-hero-info">
          <p className="up-hero-name">{fullName || 'Add your name below'}</p>
          <p className="up-hero-role">{user.role === 'ADMIN' ? 'Administrator' : 'Taxpayer'}</p>
          <span className={`up-role-badge up-role-badge--${user.role.toLowerCase()}`}>
            {user.role === 'ADMIN'
              ? <><Shield size={10} /> Admin access</>
              : <><BadgeCheck size={10} /> Taxpayer access</>}
          </span>
          <p className="up-hero-photo-note">Photo is saved on this device for the handbook only.</p>
        </div>
      </div>

      <div className="up-section-card up-section-card--record" id="account-record">
        <div className="up-section-head">
          <h2 className="up-section-title">On file with your account</h2>
          <span className="up-admin-pill">Read only</span>
        </div>
        <div className="up-section-body">
          <div className="up-field-grid up-field-grid--2">
            <div className="up-field up-field-grid--full">
              <span className="up-field-label">Sign-in email</span>
              <span className="up-field-value up-field-value--mono">{user.email}</span>
            </div>
            <div className="up-field">
              <span className="up-field-label">Account type</span>
              <span className={`up-role-value up-role-value--${user.role.toLowerCase()}`}>
                {user.role === 'ADMIN'
                  ? <><Shield size={13} /> Administrator</>
                  : <><BadgeCheck size={13} /> Taxpayer</>}
              </span>
            </div>
            <div className="up-field">
              <span className="up-field-label">Status</span>
              <span className="up-status-active"><span className="up-dot" /> Active</span>
            </div>
          </div>
          <p className="up-hint">
            {isTax
              ? 'If your email or account type needs to be corrected, use the handbook contact options or speak to your RRA handbook administrator.'
              : 'Email and role changes are done when the account is issued. Use your usual IT or system contact if something is wrong.'}
          </p>
        </div>
      </div>

      <div className="up-section-card" id="display-name">
        <div className="up-section-head">
          <h2 className="up-section-title">Display name</h2>
          <div className="up-head-actions">
            {editingInfo ? (
              <>
                <button type="button" className="up-cancel-btn" onClick={handleInfoCancel} disabled={infoLoading}>
                  <X size={13} /> Cancel
                </button>
                <button type="button" className="up-save-btn" onClick={handleInfoSave} disabled={infoLoading}>
                  {infoLoading ? <><span className="up-spinner" /> Saving…</> : <><Save size={13} /> Save</>}
                </button>
              </>
            ) : (
              <button type="button" className="up-edit-btn" onClick={() => setEditingInfo(true)}>
                <Edit3 size={13} /> Edit
              </button>
            )}
          </div>
        </div>

        <div className="up-section-body">
          {editingInfo ? (
            <div className="up-field-grid up-field-grid--2">
              <div className="up-field">
                <label className="up-field-label" htmlFor="up-fn">First name</label>
                <input id="up-fn" className="up-input" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" autoFocus />
              </div>
              <div className="up-field">
                <label className="up-field-label" htmlFor="up-ln">Last name</label>
                <input id="up-ln" className="up-input" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" />
              </div>
            </div>
          ) : (
            <div className="up-field-grid up-field-grid--2">
              <div className="up-field">
                <span className="up-field-label">First name</span>
                <span className="up-field-value">{user.firstName || <em className="up-field-value--muted">Not set</em>}</span>
              </div>
              <div className="up-field">
                <span className="up-field-label">Last name</span>
                <span className="up-field-value">{user.lastName || <em className="up-field-value--muted">Not set</em>}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="up-section-card" id="change-password">
        <div className="up-section-head">
          <h2 className="up-section-title">Password</h2>
        </div>
        <div className="up-section-body">
          <form className="up-pw-form" onSubmit={handlePwSubmit} noValidate>
            <div className="up-field-grid up-field-grid--2">

              <div className="up-field">
                <label className="up-field-label" htmlFor="up-cur-pw">Current password</label>
                <div className="up-input-wrap">
                  <input
                    id="up-cur-pw"
                    className="up-input"
                    type={showCur ? 'text' : 'password'}
                    value={currentPw}
                    onChange={(e) => setCurrentPw(e.target.value)}
                    placeholder="Current password"
                    autoComplete="current-password"
                  />
                  <button type="button" className="up-eye" onClick={() => setShowCur((p) => !p)} aria-label="Show or hide password">
                    {showCur ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>

              <div className="up-field">
                <label className="up-field-label" htmlFor="up-new-pw">New password</label>
                <div className="up-input-wrap">
                  <input
                    id="up-new-pw"
                    className="up-input"
                    type={showNew ? 'text' : 'password'}
                    value={newPw}
                    onChange={(e) => setNewPw(e.target.value)}
                    placeholder="At least 8 characters"
                    autoComplete="new-password"
                  />
                  <button type="button" className="up-eye" onClick={() => setShowNew((p) => !p)} aria-label="Show or hide password">
                    {showNew ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
                {newPw && (
                  <div className="up-strength">
                    <div className="up-strength__bar">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <div
                          key={n}
                          className="up-strength__seg"
                          style={{ background: n <= strength.score ? strength.color : '#e5e7eb' }}
                        />
                      ))}
                    </div>
                    <span className="up-strength__label" style={{ color: strength.color }}>{strength.label}</span>
                  </div>
                )}
              </div>

              <div className="up-field">
                <label className="up-field-label" htmlFor="up-con-pw">Confirm new password</label>
                <div className="up-input-wrap">
                  <input
                    id="up-con-pw"
                    className={`up-input${confirmPw && confirmPw !== newPw ? ' up-input--error' : ''}${confirmPw && confirmPw === newPw ? ' up-input--ok' : ''}`}
                    type={showCon ? 'text' : 'password'}
                    value={confirmPw}
                    onChange={(e) => setConfirmPw(e.target.value)}
                    placeholder="Repeat new password"
                    autoComplete="new-password"
                  />
                  <button type="button" className="up-eye" onClick={() => setShowCon((p) => !p)} aria-label="Show or hide password">
                    {showCon ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
                {confirmPw && confirmPw !== newPw && (
                  <p className="up-field-error"><AlertCircle size={11} /> Passwords do not match</p>
                )}
                {confirmPw && confirmPw === newPw && newPw && (
                  <p className="up-field-ok"><CheckCircle size={11} /> Passwords match</p>
                )}
              </div>

            </div>

            <div className="up-pw-submit-row">
              <button type="submit" className="up-save-btn" disabled={pwLoading}>
                {pwLoading ? <><span className="up-spinner" /> Updating…</> : <><KeyRound size={13} /> Update password</>}
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default UserProfile;
