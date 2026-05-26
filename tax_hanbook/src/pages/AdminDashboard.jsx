import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Users, Bell, ClipboardList,
  BarChart2, BookOpen, LogOut, ChevronRight, ChevronDown,
  Trash2, Download, RefreshCw,
  Shield, Activity, Search, TrendingUp, AlertTriangle, CheckCircle,
  FileBarChart, Sun, Moon, User, HelpCircle,
  Edit3, Save, X, Eye, EyeOff, KeyRound, Camera,
  AlertCircle, BadgeCheck, History, ExternalLink,
} from 'lucide-react';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts';
import { useAuth } from '../hooks/useAuth';
import VersionControlSection from '../components/VersionControlSection';
import {
  FAQ_STORAGE_KEY,
  FAQ_STATUS,
  loadFaqs as loadAdminFaqs,
  saveFaqs as saveAdminFaqs,
  getFaqAnswerNotificationPagePath,
} from '../data/faqStorage';
import {
  generateAdminFormalPdf,
  formatReportDate,
  parseInputDateStart,
  parseInputDateEnd,
  filterAuditLogs,
  filterUsersByCreated,
  filterDailyViews,
} from '../utils/adminFormalPdfReport';
import './AdminDashboard.css';

const API = import.meta.env.VITE_API_ROOT_URL || 'http://localhost:8080';

/** Static nav labels for global search (avoids re-running index every render from new icon elements). */
const ADMIN_GLOBAL_NAV = [
  { tab: 'overview', title: 'Dashboard', group: 'Main', keywords: 'metrics analytics charts views' },
  { tab: 'users', title: 'Users', group: 'Management', keywords: 'taxpayer admin accounts' },
  { tab: 'audit', title: 'Audit Log', group: 'Analytics', keywords: 'activity history admin actions' },
  { tab: 'versions', title: 'Version control', group: 'Management', keywords: 'versions changelog rollback compare publish timeline audit reminder' },
  { tab: 'hidden-pages', title: 'Hidden pages', group: 'Management', keywords: 'hide hidden unhide restore visibility publish handbook routes' },
  { tab: 'reports', title: 'Reports', group: 'Analytics', keywords: 'export pdf download customize formal report' },
  { tab: 'faq', title: 'Taxpayer questions', group: 'FAQ', keywords: 'taxpayer submitted community questions answers approval' },
  { tab: 'profile', title: 'My Profile', group: 'Account', keywords: 'password settings avatar' },
];

// ── Metric Card ───────────────────────────────────────────────────────────────
const MetricCard = ({ icon, label, value, color }) => {
  const safeVal = value ?? 0;
  return (
    <div className={`ad-metric-card ad-metric-card--${color}`}>
      <div className="ad-metric-icon">{icon}</div>
      <div className="ad-metric-value">{safeVal.toLocaleString()}</div>
      <div className="ad-metric-label">{label}</div>
    </div>
  );
};

// ── Overview Section ──────────────────────────────────────────────────────────
const OverviewSection = ({ metrics, onRefresh, onOpenReportsTab, hideOverview, onToggleHideOverview }) => {
  const tv   = metrics?.totalPageViews      ?? 0;
  const pvt  = metrics?.pageViewsToday      ?? 0;
  const tu   = metrics?.totalUsers          ?? 0;
  const an   = metrics?.activeNotifications ?? 0;
  const ast  = metrics?.activeSessionsToday ?? 0;
  const st   = metrics?.searchesToday       ?? 0;
  const tap  = metrics?.totalTaxpayers      ?? 0;
  const tadm = metrics?.totalAdmins         ?? 0;

  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await onRefresh();
    setTimeout(() => setRefreshing(false), 600);
  };

  return (
    <div className="ad-section">
      <div className="ad-section-header">
        <h2>Dashboard</h2>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button
            className="ad-btn ad-btn-secondary"
            onClick={onToggleHideOverview}
            title={hideOverview ? 'Show Overview Content' : 'Hide Overview Content'}
          >
            {hideOverview ? <Eye size={14} /> : <EyeOff size={14} />}
            {hideOverview ? 'Show Content' : 'Hide Content'}
          </button>
          <button
            className="ad-btn ad-btn-secondary"
            onClick={handleRefresh}
            disabled={refreshing}
          >
            <RefreshCw size={14} className={refreshing ? 'ad-spin' : ''} />
            {refreshing ? 'Refreshing…' : 'Refresh'}
          </button>

          <button
            type="button"
            className="ad-btn-generate"
            onClick={onOpenReportsTab}
            title="Customize filters and download a formal PDF"
          >
            <FileBarChart size={15} /> PDF reports
          </button>
        </div>
      </div>

      {!metrics ? (
        <div className="ad-loading"><div className="ad-spinner" />Loading metrics…</div>
      ) : (
        <>
          {!hideOverview && (
            <>
              <div className="ad-cards">
                <MetricCard icon={<TrendingUp size={22} />} label="Total Page Views"     value={tv}   color="teal"   />
                <MetricCard icon={<Activity   size={22} />} label="Sessions Today"       value={ast}  color="blue"   />
                <MetricCard icon={<Users      size={22} />} label="Total Users"          value={tu}   color="sky"    />
                <MetricCard icon={<Bell       size={22} />} label="Active Notifications" value={an}   color="amber"  />
              </div>

              <div className="ad-stats-strip">
                <div className="ad-stat-chip ad-stat-chip--purple">
                  <TrendingUp size={14} /><span className="ad-stat-chip__val">{pvt.toLocaleString()}</span><span className="ad-stat-chip__lbl">Views Today</span>
                </div>
                <div className="ad-stat-chip ad-stat-chip--indigo">
                  <Search size={14} /><span className="ad-stat-chip__val">{st.toLocaleString()}</span><span className="ad-stat-chip__lbl">Searches Today</span>
                </div>
                <div className="ad-stat-chip ad-stat-chip--green">
                  <Users size={14} /><span className="ad-stat-chip__val">{tap.toLocaleString()}</span><span className="ad-stat-chip__lbl">Taxpayers</span>
                </div>
                <div className="ad-stat-chip ad-stat-chip--rose">
                  <Shield size={14} /><span className="ad-stat-chip__val">{tadm.toLocaleString()}</span><span className="ad-stat-chip__lbl">Admins</span>
                </div>
              </div>
            </>
          )}

          <div className="ad-charts-row">
            {metrics.dailyViews?.length > 0 && (
              <div className="ad-chart-card">
                <div className="ad-chart-header">
                  <h3>Page Views — Last 30 Days</h3>
                  <span className="ad-chart-pill"><Activity size={11} /> Monthly</span>
                </div>
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={metrics.dailyViews}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fontSize: 10 }} tickFormatter={d => d.slice(5)} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip
                      contentStyle={{ background: '#242840', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, color: '#fff' }}
                    />
                    <Bar dataKey="views" fill="#1a6fa8" radius={[4,4,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}

            <div className="ad-chart-card">
              <div className="ad-chart-header">
                <h3>User Distribution</h3>
                <span className="ad-chart-pill"><Activity size={11} /> Overview</span>
              </div>
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Taxpayers', value: tap  || 0 },
                      { name: 'Admins',    value: tadm || 0 },
                    ]}
                    cx="50%" cy="50%"
                    innerRadius={55} outerRadius={85}
                    dataKey="value"
                    paddingAngle={3}
                  >
                    <Cell fill="#1a6fa8" />
                    <Cell fill="#9b59b6" />
                  </Pie>
                  <Legend iconType="circle" iconSize={8} />
                  <Tooltip
                    contentStyle={{ background: '#242840', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {(metrics.topPages?.length > 0 || metrics.topSearchTerms?.length > 0) && (
            <div className="ad-charts-row">
              {metrics.topPages?.length > 0 && (
                <div className="ad-chart-card">
                  <div className="ad-chart-header">
                    <h3>Top Pages</h3>
                    <span className="ad-chart-pill"><TrendingUp size={11} /> Views</span>
                  </div>
                  <ResponsiveContainer width="100%" height={240}>
                    <BarChart data={metrics.topPages.slice(0, 8)} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" tick={{ fontSize: 10 }} />
                      <YAxis type="category" dataKey="pagePath" width={110} tick={{ fontSize: 10 }}
                        tickFormatter={p => p.length > 16 ? p.slice(0, 16) + '…' : p} />
                      <Tooltip
                        contentStyle={{ background: '#242840', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, color: '#fff' }}
                      />
                      <Bar dataKey="views" fill="#1a6fa8" radius={[0,4,4,0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}

              {metrics.topSearchTerms?.length > 0 && (
                <div className="ad-chart-card">
                  <div className="ad-chart-header">
                    <h3>Top Search Terms</h3>
                    <span className="ad-chart-pill"><Search size={11} /> Count</span>
                  </div>
                  <ResponsiveContainer width="100%" height={240}>
                    <BarChart data={metrics.topSearchTerms.slice(0, 8)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="term" tick={{ fontSize: 10 }}
                        tickFormatter={t => t.length > 10 ? t.slice(0, 10) + '…' : t} />
                      <YAxis tick={{ fontSize: 10 }} />
                      <Tooltip
                        contentStyle={{ background: '#242840', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, color: '#fff' }}
                      />
                      <Bar dataKey="count" fill="#2ecc71" radius={[4,4,0,0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

// ── Users Section ─────────────────────────────────────────────────────────────
const UsersSection = ({ users, currentUserEmail, onRefresh, onUpdateRole, onDelete }) => (
  <div className="ad-section">
    <div className="ad-section-header">
      <h2>User Management</h2>
      <button className="ad-btn ad-btn-secondary" onClick={onRefresh}><RefreshCw size={15} /> Refresh</button>
    </div>
    <div className="ad-table-wrap">
      <table className="ad-table">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Role</th><th>Joined</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.firstName} {u.lastName}</td>
              <td>{u.email}</td>
              <td><span className={`ad-badge ad-badge--${u.role.toLowerCase()}`}>{u.role}</span></td>
              <td>{u.createdAt ? new Date(u.createdAt).toLocaleDateString() : '—'}</td>
              <td className="ad-table-actions">
                {u.role === 'TAXPAYER'
                  ? <button className="ad-btn-icon ad-btn-icon--warn" title="Promote to Admin" onClick={() => onUpdateRole(u.id, 'ADMIN')}><Shield size={15} /></button>
                  : <button className="ad-btn-icon" title="Demote to Taxpayer" onClick={() => onUpdateRole(u.id, 'TAXPAYER')}><Users size={15} /></button>
                }
                {u.email !== currentUserEmail && (
                  <button className="ad-btn-icon ad-btn-icon--danger" title="Delete" onClick={() => onDelete(u.id, u.email)}><Trash2 size={15} /></button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {users.length === 0 && <p className="ad-empty">No users found.</p>}
    </div>
  </div>
);

// ── Audit Log Section ─────────────────────────────────────────────────────────
const AuditSection = ({ logs }) => {
  const [filter, setFilter] = useState('');
  const filtered = logs.filter(l =>
    !filter ||
    l.action?.includes(filter.toUpperCase()) ||
    l.adminEmail?.includes(filter) ||
    l.details?.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className="ad-section">
      <div className="ad-section-header">
        <h2>Audit Log</h2>
        <input className="ad-input ad-input--sm" placeholder="Filter…"
          value={filter} onChange={e => setFilter(e.target.value)} />
      </div>
      <div className="ad-table-wrap">
        <table className="ad-table">
          <thead><tr><th>Time</th><th>Admin</th><th>Action</th><th>Entity</th><th>Details</th></tr></thead>
          <tbody>
            {filtered.map(l => (
              <tr key={l.id}>
                <td className="ad-nowrap">{l.createdAt ? new Date(l.createdAt).toLocaleString() : '—'}</td>
                <td>{l.adminEmail}</td>
                <td><code className="ad-action-code">{l.action}</code></td>
                <td>{l.targetEntity || '—'}</td>
                <td className="ad-cell-truncate">{l.details || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <p className="ad-empty">No logs found.</p>}
      </div>
    </div>
  );
};

// ── Hidden handbook pages (soft-hide / restore) ───────────────────────────────
const HiddenPagesSection = ({ apiFetch, showToast }) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const all = await apiFetch('/api/admin/content');
      const list = Array.isArray(all) ? all : [];
      setRows(list.filter((r) => r && r.active === false));
    } catch (e) {
      showToast(e.message || 'Failed to load page list', 'error');
      setRows([]);
    } finally {
      setLoading(false);
    }
  }, [apiFetch, showToast]);

  useEffect(() => {
    load();
  }, [load]);

  const unhide = async (id) => {
    setBusyId(id);
    try {
      await apiFetch(`/api/admin/content/${id}/show`, { method: 'PATCH' });
      showToast('Page is visible to the public again.');
      await load();
    } catch (e) {
      showToast(e.message || 'Could not restore page', 'error');
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="ad-section">
      <div className="ad-section-header">
        <h2>Hidden pages</h2>
        <button type="button" className="ad-btn ad-btn-secondary" onClick={load} disabled={loading}>
          <RefreshCw size={15} className={loading ? 'ad-spin' : ''} />
          Refresh
        </button>
      </div>
      <p style={{ margin: '0 0 1.25rem', maxWidth: '72ch', fontSize: '0.9rem', color: 'var(--ad-muted, #94a3b8)', lineHeight: 1.55 }}>
        Routes listed here are hidden from visitors (handbook menu and direct links show as unavailable). You can still open them while signed in as admin. Use <strong>Unhide</strong> to publish a page again.
      </p>
      {loading ? (
        <div className="ad-loading">
          <div className="ad-spinner" />
          Loading…
        </div>
      ) : (
        <div className="ad-table-wrap">
          <table className="ad-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Path</th>
                <th>Last edited</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td>{r.pageTitle || '—'}</td>
                  <td>
                    <code className="ad-action-code">{r.pagePath || '—'}</code>
                  </td>
                  <td className="ad-nowrap">
                    {r.lastEditedAt ? new Date(r.lastEditedAt).toLocaleString() : '—'}
                    {r.lastEditedBy && (
                      <span style={{ display: 'block', fontSize: 11, opacity: 0.85 }}>{r.lastEditedBy}</span>
                    )}
                  </td>
                  <td className="ad-table-actions">
                    <a
                      className="ad-btn ad-btn-secondary"
                      href={r.pagePath?.startsWith('/') ? r.pagePath : `/${r.pagePath || ''}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}
                    >
                      <ExternalLink size={14} />
                      Open
                    </a>
                    <button
                      type="button"
                      className="ad-btn ad-btn-primary"
                      disabled={busyId === r.id}
                      onClick={() => unhide(r.id)}
                    >
                      {busyId === r.id ? '…' : <><Eye size={14} /> Unhide</>}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {rows.length === 0 && <p className="ad-empty">No hidden pages. All handbook routes with a CMS record are currently visible.</p>}
        </div>
      )}
    </div>
  );
};

// ── Taxpayer questions (handbook FAQ submissions) ───────────────────────────
const FaqSection = ({ showToast, apiFetch }) => {
  const [faqs,   setFaqs]   = useState(() => loadAdminFaqs());
  const [filter, setFilter] = useState('pending');
  const [editId, setEditId] = useState(null);
  const [editAnswer, setEditAnswer] = useState('');

  const reload = () => setFaqs(loadAdminFaqs());
  useEffect(() => {
    reload();
  }, []);

  const notifyTaxpayerAnswered = async (faqRow) => {
    if (!faqRow || faqRow.status !== FAQ_STATUS.APPROVED) return;
    const answer = String(faqRow.answer || '').trim();
    if (!answer) return;
    const recipient = (faqRow.submittedByEmail || faqRow.authorEmail || '').trim();
    if (!recipient) return;
    const pagePath = getFaqAnswerNotificationPagePath(faqRow.categoryKey);
    const q = (faqRow.question || '').trim();
    const qSnippet = q.length > 200 ? `${q.slice(0, 200)}…` : q;
    try {
      await apiFetch('/api/admin/notifications', {
        method: 'POST',
        body: JSON.stringify({
          title: 'Your handbook question was answered',
          message:
            `Your question in "${faqRow.category}" has been answered. Use View to open the handbook topic — your answer appears under Community approved questions.\n\nQuestion: ${qSnippet}`,
          pagePath,
          recipientEmail: recipient,
        }),
      });
    } catch (e) {
      console.warn('[FAQ] taxpayer notification failed', e);
      showToast('Uploaded, but notifying the taxpayer failed. Check that the backend is running.', 'error');
    }
  };

  /** Save answer and mark uploaded (visible to taxpayers on the topic page). */
  const confirmUpload = (id) => {
    if (!editAnswer.trim()) {
      showToast('Please enter an answer before uploading.', 'error');
      return;
    }
    const prev = loadAdminFaqs().find((f) => f.id === id);
    const updated = loadAdminFaqs().map((f) => (f.id === id
      ? {
        ...f,
        answer: editAnswer.trim(),
        status: FAQ_STATUS.APPROVED,
        reviewedAt: new Date().toISOString(),
      }
      : f));
    saveAdminFaqs(updated);
    setFaqs(updated);
    setEditId(null);
    showToast(
      prev?.status === FAQ_STATUS.PENDING
        ? 'Answer uploaded. Taxpayers can see it under Community approved questions on the topic page.'
        : 'Updated answer uploaded for taxpayers.',
    );
    const row = updated.find((f) => f.id === id);
    if (prev?.status === FAQ_STATUS.PENDING) {
      void notifyTaxpayerAnswered(row);
    }
  };
  const reject = (id) => {
    const reason = window.prompt('Disqualify reason (optional):', '') || '';
    const updated = loadAdminFaqs().map((f) => (f.id === id
      ? {
        ...f,
        status: FAQ_STATUS.DISQUALIFIED,
        disqualifyReason: reason.trim(),
        reviewedAt: new Date().toISOString(),
      }
      : f));
    saveAdminFaqs(updated); setFaqs(updated);
    showToast('Question disqualified.');
  };
  const startEdit = (faq) => {
    setEditId(faq.id);
    setEditAnswer(faq.answer || '');
  };

  const visible = faqs.filter(f => filter === 'all' ? true : f.status === filter);
  const pendingCount = faqs.filter(f => f.status === FAQ_STATUS.PENDING).length;

  return (
    <div className="ad-section">
      <div className="ad-section-header">
        <div>
          <h2>Taxpayer questions</h2>
          <p style={{ margin: '6px 0 0', fontSize: 13, color: 'var(--ad-muted)', maxWidth: 720, lineHeight: 1.5 }}>
            New questions submitted by signed-in taxpayers from the handbook. Use <strong>Answer</strong> to write a reply, then <strong>Upload</strong> so it appears on the topic page under <strong>Community approved questions</strong>. Use <strong>Edit Answer</strong> only after an answer has been uploaded; then upload again to publish changes. The taxpayer is notified when their question is first answered.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          {(['pending','approved','disqualified','all']).map(s => (
            <button key={s} className={`ad-btn ${filter === s ? 'ad-btn-primary' : 'ad-btn-secondary'}`}
              onClick={() => setFilter(s)} style={{ textTransform: 'capitalize' }}>
              {s === 'pending'
                ? `Pending${pendingCount ? ` (${pendingCount})` : ''}`
                : s === 'all'
                  ? 'All'
                  : s === 'disqualified'
                    ? 'Disqualified'
                    : 'Approved'}
            </button>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="ad-empty" style={{ padding: '48px 0', textAlign: 'center' }}>
          {filter === 'pending' ? 'No taxpayer questions awaiting review.' : 'No questions found.'}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {visible.map(faq => (
            <div key={faq.id} className="ad-chart-card" style={{ padding: '18px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 9px', borderRadius: 50, background: 'rgba(26,111,168,0.15)', color: 'var(--ad-accent)' }}>{faq.category}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 9px', borderRadius: 50,
                      background: faq.status === FAQ_STATUS.APPROVED
                        ? 'rgba(34,197,94,0.15)'
                        : faq.status === FAQ_STATUS.DISQUALIFIED
                          ? 'rgba(239,68,68,0.15)'
                          : 'rgba(245,158,11,0.15)',
                      color: faq.status === FAQ_STATUS.APPROVED
                        ? '#22c55e'
                        : faq.status === FAQ_STATUS.DISQUALIFIED
                          ? '#ef4444'
                          : '#f59e0b' }}>
                      {faq.status}
                    </span>
                    <span style={{ fontSize: 11, color: 'var(--ad-muted)' }}>Submitted {faq.createdAt ? new Date(faq.createdAt).toLocaleString() : '—'}</span>
                  </div>
                  <p style={{ margin: '0 0 6px', fontSize: 12, color: 'var(--ad-muted)' }}>
                    <strong>Account</strong>{' '}
                    {(faq.submittedByEmail || faq.authorEmail || '—').trim() || '—'}
                    {faq.author ? <> · <strong>Name</strong> {faq.author}</> : null}
                  </p>
                  <p style={{ margin: '0 0 8px', fontWeight: 600, fontSize: 14.5, color: 'var(--ad-text)' }}>{faq.question}</p>
                  {editId === faq.id ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <textarea
                        value={editAnswer}
                        onChange={e => setEditAnswer(e.target.value)}
                        rows={4}
                        style={{ width: '100%', boxSizing: 'border-box', padding: '10px 12px', borderRadius: 8,
                          border: '1.5px solid var(--ad-border)', background: 'var(--ad-bg)',
                          color: 'var(--ad-text)', fontFamily: 'inherit', fontSize: 13.5, resize: 'vertical' }}
                      />
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button type="button" className="ad-btn ad-btn-primary" onClick={() => confirmUpload(faq.id)}>
                          Upload
                        </button>
                        <button type="button" className="ad-btn ad-btn-secondary" onClick={() => setEditId(null)}>Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <p style={{ margin: 0, fontSize: 13.5, color: 'var(--ad-muted)', lineHeight: 1.6 }}>
                      {faq.answer || 'No admin answer yet.'}
                    </p>
                  )}
                  {faq.status === FAQ_STATUS.DISQUALIFIED && faq.disqualifyReason ? (
                    <p style={{ marginTop: 8, fontSize: 12.5, color: '#ef4444' }}>
                      Disqualified reason: {faq.disqualifyReason}
                    </p>
                  ) : null}
                </div>
                {editId !== faq.id && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flexShrink: 0 }}>
                    {faq.status === FAQ_STATUS.PENDING && (
                      <button type="button" className="ad-btn ad-btn-primary" onClick={() => startEdit(faq)}>
                        Answer
                      </button>
                    )}
                    {(faq.status === FAQ_STATUS.APPROVED || faq.status === FAQ_STATUS.DISQUALIFIED) && (
                      <button type="button" className="ad-btn ad-btn-secondary" onClick={() => startEdit(faq)}>
                        Edit Answer
                      </button>
                    )}
                    <button type="button" className="ad-btn" style={{ background: 'rgba(239,68,68,0.12)', color: '#ef4444', border: 'none', cursor: 'pointer', padding: '7px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600 }}
                      onClick={() => reject(faq.id)}>Disqualify</button>
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', gap: 16, marginTop: 8, fontSize: 12, color: 'var(--ad-muted)', borderTop: '1px solid var(--ad-border)', paddingTop: 10 }}>
                <span>👍 {faq.votes?.up ?? 0} helpful</span>
                <span>👎 {faq.votes?.down ?? 0} not helpful</span>
                <span>{faq.relatedLinks?.length || 0} related links</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ── Reports Section (formal PDF only — no Excel) ─────────────────────────────
const defaultRangeIso = () => {
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - 30);
  return { start: start.toISOString().slice(0, 10), end: end.toISOString().slice(0, 10) };
};

const sanitizeFile = (s) => String(s || 'report').replace(/[^\w\-]+/g, '_').replace(/_+/g, '_').slice(0, 80);

const ReportsSection = ({ metrics, users, auditLogs, user, showToast, onRefreshMetrics }) => {
  const range0 = useMemo(() => defaultRangeIso(), []);
  const [dateStart, setDateStart] = useState(range0.start);
  const [dateEnd, setDateEnd] = useState(range0.end);
  const [reportType, setReportType] = useState('analytics');
  const [adminFilter, setAdminFilter] = useState('');
  const [organizationName, setOrganizationName] = useState('Rwanda Revenue Authority');
  const [preparedBy, setPreparedBy] = useState(() => {
    const n = [user?.firstName, user?.lastName].filter(Boolean).join(' ').trim();
    return n || user?.email || '';
  });
  const [signatureDate, setSignatureDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [generating, setGenerating] = useState(false);

  const [inclMetrics, setInclMetrics] = useState(true);
  const [inclTopPages, setInclTopPages] = useState(true);
  const [inclSearches, setInclSearches] = useState(true);
  const [inclDaily, setInclDaily] = useState(true);
  const [inclUsers, setInclUsers] = useState(true);
  const [inclAudit, setInclAudit] = useState(true);

  useEffect(() => {
    const n = [user?.firstName, user?.lastName].filter(Boolean).join(' ').trim();
    if (n || user?.email) setPreparedBy((prev) => (prev ? prev : n || user?.email || ''));
  }, [user?.firstName, user?.lastName, user?.email]);

  const adminEmails = useMemo(() => {
    const set = new Set();
    (auditLogs || []).forEach((l) => {
      if (l.adminEmail) set.add(l.adminEmail);
    });
    return Array.from(set).sort();
  }, [auditLogs]);

  const startD = parseInputDateStart(dateStart);
  const endD = parseInputDateEnd(dateEnd);

  const buildAndDownload = async () => {
    if (dateStart && dateEnd && startD && endD && startD > endD) {
      showToast('Report end date must be on or after the start date.', 'error');
      return;
    }

    const periodLabel =
      dateStart && dateEnd
        ? `${formatReportDate(startD)} - ${formatReportDate(endD)}`
        : 'All dates (where applicable)';
    const now = new Date();
    const dateGen = formatReportDate(now);

    const filteredAudit = filterAuditLogs(auditLogs, startD, endD, adminFilter);
    const filteredUsers = filterUsersByCreated(users, startD, endD);
    const filteredDaily = filterDailyViews(metrics?.dailyViews, startD, endD);

    const needsMetrics =
      reportType === 'analytics' ||
      (reportType === 'combined' && (inclMetrics || inclTopPages || inclSearches || inclDaily));
    if (needsMetrics && !metrics) {
      showToast('Dashboard metrics are not loaded yet. Open the Dashboard tab briefly, then try again.', 'error');
      return;
    }

    const tables = [];
    let reportTitle = 'Handbook Admin Report';
    const typeLabel =
      reportType === 'analytics'
        ? 'Analytics summary'
        : reportType === 'users'
          ? 'User directory'
          : reportType === 'audit'
            ? 'Admin audit activity'
            : 'Combined report';

    const pushCombined = () => {
      if (inclMetrics && metrics) {
        tables.push({
          sectionTitle: 'Dashboard metrics (live snapshot)',
          head: [['Metric', 'Value']],
          body: [
            ['Total page views', String(metrics.totalPageViews ?? 0)],
            ['Page views today', String(metrics.pageViewsToday ?? 0)],
            ['Sessions today', String(metrics.activeSessionsToday ?? 0)],
            ['Searches today', String(metrics.searchesToday ?? 0)],
            ['Total users', String(metrics.totalUsers ?? 0)],
            ['Taxpayers', String(metrics.totalTaxpayers ?? 0)],
            ['Admins', String(metrics.totalAdmins ?? 0)],
            ['Active notifications', String(metrics.activeNotifications ?? 0)],
          ],
        });
      }
      if (inclTopPages && metrics?.topPages?.length) {
        tables.push({
          sectionTitle: 'Top pages (all-time ranking in dashboard)',
          head: [['#', 'Page', 'Views']],
          body: metrics.topPages.map((p, i) => [String(i + 1), p.pagePath || '—', String(p.views ?? 0)]),
        });
      }
      if (inclSearches && metrics?.topSearchTerms?.length) {
        tables.push({
          sectionTitle: 'Top search terms',
          head: [['#', 'Term', 'Count']],
          body: metrics.topSearchTerms.map((s, i) => [String(i + 1), s.term || '—', String(s.count ?? 0)]),
        });
      }
      if (inclDaily) {
        const rows = (filteredDaily.length ? filteredDaily : metrics?.dailyViews || []).slice(0, 60);
        if (rows.length) {
          tables.push({
            sectionTitle: `Daily page views${filteredDaily.length ? ' (within selected period)' : ''}`,
            head: [['Date', 'Views']],
            body: rows.map((d) => [d.date || '—', String(d.views ?? 0)]),
          });
        }
      }
      if (inclUsers) {
        tables.push({
          sectionTitle: `Users (${filteredUsers.length} in period)`,
          head: [['#', 'Email', 'Name', 'Role', 'Registered']],
          body:
            filteredUsers.length > 0
              ? filteredUsers.map((u, i) => [
                  String(i + 1),
                  u.email || '—',
                  [u.firstName, u.lastName].filter(Boolean).join(' ') || '—',
                  u.role || '—',
                  u.createdAt ? formatReportDate(new Date(u.createdAt)) : '—',
                ])
              : [['—', 'No users with registration in this period.', '', '', '']],
        });
      }
      if (inclAudit) {
        tables.push({
          sectionTitle: `Audit log (${filteredAudit.length} entries)`,
          head: [['#', 'When (UTC)', 'Admin', 'Action', 'Entity', 'Details']],
          body:
            filteredAudit.length > 0
              ? filteredAudit.slice(0, 400).map((l, i) => [
                  String(i + 1),
                  l.createdAt ? String(l.createdAt).replace('T', ' ').slice(0, 19) : '—',
                  l.adminEmail || '—',
                  l.action || '—',
                  l.targetEntity || '—',
                  (l.details || '—').slice(0, 120),
                ])
              : [['—', 'No audit entries in this period / filters.', '', '', '', '']],
        });
      }
    };

    if (reportType === 'combined') {
      if (!inclMetrics && !inclTopPages && !inclSearches && !inclDaily && !inclUsers && !inclAudit) {
        showToast('Choose at least one section to include in the combined report.', 'error');
        return;
      }
      reportTitle = 'Tax Handbook — Combined Admin Report';
      pushCombined();
    } else if (reportType === 'analytics') {
      reportTitle = 'Tax Handbook — Analytics Report';
      tables.push({
        sectionTitle: 'Dashboard metrics',
        head: [['Metric', 'Value']],
        body: [
          ['Total page views', String(metrics?.totalPageViews ?? 0)],
          ['Page views today', String(metrics?.pageViewsToday ?? 0)],
          ['Sessions today', String(metrics?.activeSessionsToday ?? 0)],
          ['Searches today', String(metrics?.searchesToday ?? 0)],
          ['Total users', String(metrics?.totalUsers ?? 0)],
          ['Taxpayers', String(metrics?.totalTaxpayers ?? 0)],
          ['Admins', String(metrics?.totalAdmins ?? 0)],
          ['Active notifications', String(metrics?.activeNotifications ?? 0)],
        ],
      });
      if (metrics?.topPages?.length) {
        tables.push({
          sectionTitle: 'Top pages',
          head: [['#', 'Page', 'Views']],
          body: metrics.topPages.map((p, i) => [String(i + 1), p.pagePath || '—', String(p.views ?? 0)]),
        });
      }
      if (metrics?.topSearchTerms?.length) {
        tables.push({
          sectionTitle: 'Top search terms',
          head: [['#', 'Term', 'Count']],
          body: metrics.topSearchTerms.map((s, i) => [String(i + 1), s.term || '—', String(s.count ?? 0)]),
        });
      }
      const dv = filteredDaily.length ? filteredDaily : metrics?.dailyViews || [];
      if (dv.length) {
        tables.push({
          sectionTitle: filteredDaily.length ? 'Daily page views (selected period)' : 'Daily page views (last 30 days in dashboard)',
          head: [['Date', 'Views']],
          body: dv.slice(0, 45).map((d) => [d.date || '—', String(d.views ?? 0)]),
        });
      }
    } else if (reportType === 'users') {
      reportTitle = 'Tax Handbook — User Directory Report';
      tables.push({
        sectionTitle: `Registered users (${filteredUsers.length})`,
        head: [['#', 'Email', 'Name', 'Role', 'Registered']],
        body:
          filteredUsers.length > 0
            ? filteredUsers.map((u, i) => [
                String(i + 1),
                u.email || '—',
                [u.firstName, u.lastName].filter(Boolean).join(' ') || '—',
                u.role || '—',
                u.createdAt ? formatReportDate(new Date(u.createdAt)) : '—',
              ])
            : [['—', 'No users registered in the selected period.', '', '', '']],
      });
    } else if (reportType === 'audit') {
      reportTitle = 'Tax Handbook — Admin Audit Report';
      tables.push({
        sectionTitle: `Activity (${filteredAudit.length} entries)`,
        head: [['#', 'When (UTC)', 'Admin', 'Action', 'Entity', 'Details']],
        body:
          filteredAudit.length > 0
            ? filteredAudit.slice(0, 500).map((l, i) => [
                String(i + 1),
                l.createdAt ? String(l.createdAt).replace('T', ' ').slice(0, 19) : '—',
                l.adminEmail || '—',
                l.action || '—',
                l.targetEntity || '—',
                (l.details || '—').slice(0, 140),
              ])
            : [['—', 'No audit entries for the selected period or admin filter.', '', '', '', '']],
      });
    }

    const filterNote = [
      adminFilter ? `Admin filter: ${adminFilter}` : null,
      !dateStart && !dateEnd ? null : `Date range applied to users, audit, and daily views.`,
    ]
      .filter(Boolean)
      .join(' ');

    const detailRows = [
      { label: 'Organization name:', value: organizationName },
      { label: 'Report period:', value: periodLabel },
      { label: 'Report type:', value: typeLabel },
      { label: 'Prepared by:', value: preparedBy || user?.email || '—' },
      { label: 'Date generated:', value: dateGen },
    ];
    if (filterNote) detailRows.push({ label: 'Filters:', value: filterNote });
    detailRows.push({
      label: 'Note:',
      value:
        'Analytics totals are live dashboard values. User registrations, audit entries, and daily view rows are filtered by the report period and admin filter where applicable.',
    });

    if (tables.length === 0) {
      showToast('Nothing to include in this PDF for the selected options or data.', 'error');
      return;
    }

    setGenerating(true);
    try {
      if (onRefreshMetrics) await onRefreshMetrics();
      await generateAdminFormalPdf({
        fileName: `${sanitizeFile(reportTitle)}_${now.toISOString().slice(0, 10)}.pdf`,
        organizationName,
        contactRight: ['P.O. Box 6239', 'Kigali, Rwanda', 'info@rra.gov.rw', 'www.rra.gov.rw'],
        reportTitle,
        reportPeriodText: periodLabel,
        preparedBy: preparedBy || user?.email || '—',
        dateGeneratedText: dateGen,
        signatureDateText: formatReportDate(parseInputDateStart(signatureDate) || now),
        footerGeneratedBy: 'Generated by Tax Handbook Admin',
        reportDetailRows: detailRows,
        tables,
      });
      showToast('PDF downloaded');
    } catch (e) {
      showToast(e?.message || 'PDF failed', 'error');
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="ad-section">
      <div className="ad-section-header ad-section-header--reports">
        <div>
          <h2>Reports</h2>
          <p className="ad-report-sub">Formal PDF only (no Excel). Customize filters, then generate.</p>
        </div>
      </div>

      <div className="ad-report-builder">
        <div className="ad-report-builder__grid">
          <label className="ad-report-field">
            <span>Report type</span>
            <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
              <option value="analytics">Analytics summary</option>
              <option value="users">User directory</option>
              <option value="audit">Admin audit activity</option>
              <option value="combined">Combined (pick sections below)</option>
            </select>
          </label>

          <label className="ad-report-field">
            <span>Period start</span>
            <input type="date" value={dateStart} onChange={(e) => setDateStart(e.target.value)} />
          </label>

          <label className="ad-report-field">
            <span>Period end</span>
            <input type="date" value={dateEnd} onChange={(e) => setDateEnd(e.target.value)} />
          </label>

          <label className="ad-report-field">
            <span>Audit: action by (admin email)</span>
            <select value={adminFilter} onChange={(e) => setAdminFilter(e.target.value)}>
              <option value="">All admins</option>
              {adminEmails.map((em) => (
                <option key={em} value={em}>
                  {em}
                </option>
              ))}
            </select>
          </label>

          <label className="ad-report-field ad-report-field--wide">
            <span>Organization name (header)</span>
            <input
              type="text"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              placeholder="Rwanda Revenue Authority"
            />
          </label>

          <label className="ad-report-field ad-report-field--wide">
            <span>Prepared by (signature block)</span>
            <input type="text" value={preparedBy} onChange={(e) => setPreparedBy(e.target.value)} placeholder="Name or unit" />
          </label>

          <label className="ad-report-field">
            <span>Signature date</span>
            <input type="date" value={signatureDate} onChange={(e) => setSignatureDate(e.target.value)} />
          </label>
        </div>

        {reportType === 'combined' && (
          <fieldset className="ad-report-sections">
            <legend>Include in PDF</legend>
            <label className="ad-report-check">
              <input type="checkbox" checked={inclMetrics} onChange={(e) => setInclMetrics(e.target.checked)} />
              Dashboard metrics
            </label>
            <label className="ad-report-check">
              <input type="checkbox" checked={inclTopPages} onChange={(e) => setInclTopPages(e.target.checked)} />
              Top pages
            </label>
            <label className="ad-report-check">
              <input type="checkbox" checked={inclSearches} onChange={(e) => setInclSearches(e.target.checked)} />
              Top search terms
            </label>
            <label className="ad-report-check">
              <input type="checkbox" checked={inclDaily} onChange={(e) => setInclDaily(e.target.checked)} />
              Daily views (uses period when data exists)
            </label>
            <label className="ad-report-check">
              <input type="checkbox" checked={inclUsers} onChange={(e) => setInclUsers(e.target.checked)} />
              Users (registered in period)
            </label>
            <label className="ad-report-check">
              <input type="checkbox" checked={inclAudit} onChange={(e) => setInclAudit(e.target.checked)} />
              Audit log (in period; respects admin filter)
            </label>
          </fieldset>
        )}

        <div className="ad-report-actions-bar">
          <button type="button" className="ad-btn ad-btn-primary ad-btn-pdf" disabled={generating} onClick={buildAndDownload}>
            <Download size={16} /> {generating ? 'Generating…' : 'Generate PDF'}
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Password strength helper ──────────────────────────────────────────────────
const getAdminPwStrength = (pw) => {
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

// ── Profile Section (admin self-profile) ─────────────────────────────────────
const ProfileSection = ({ user, updateProfile, updatePassword, showToast }) => {
  const [editingInfo, setEditingInfo] = useState(false);
  const [firstName,   setFirstName]   = useState(user?.firstName || '');
  const [lastName,    setLastName]    = useState(user?.lastName  || '');
  const [infoLoading, setInfoLoading] = useState(false);

  const [currentPw,  setCurrentPw]  = useState('');
  const [newPw,      setNewPw]      = useState('');
  const [confirmPw,  setConfirmPw]  = useState('');
  const [showCur,    setShowCur]    = useState(false);
  const [showNew,    setShowNew]    = useState(false);
  const [showCon,    setShowCon]    = useState(false);
  const [pwLoading,  setPwLoading]  = useState(false);

  const avatarKey    = `rra_avatar_${user?.email}`;
  const [avatarUrl,  setAvatarUrl]  = useState(() => localStorage.getItem(`rra_avatar_${user?.email}`) || '');
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
      showToast('Profile photo updated!', 'success');
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  }, [avatarKey, showToast]);

  const handleAvatarRemove = useCallback(() => {
    setAvatarUrl('');
    localStorage.removeItem(avatarKey);
    showToast('Photo removed.', 'success');
  }, [avatarKey, showToast]);

  const initials = `${user?.firstName?.[0] || ''}${user?.lastName?.[0] || ''}`.toUpperCase() || '?';
  const fullName  = `${user?.firstName || ''} ${user?.lastName || ''}`.trim();
  const strength  = getAdminPwStrength(newPw);

  const handleInfoSave = async () => {
    if (!firstName.trim() || !lastName.trim()) { showToast('Both names are required.', 'error'); return; }
    setInfoLoading(true);
    try {
      await updateProfile(firstName.trim(), lastName.trim());
      setEditingInfo(false);
      showToast('Profile updated!', 'success');
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
    if (newPw.length < 8)   { showToast('New password must be ≥ 8 characters.', 'error'); return; }
    if (newPw !== confirmPw){ showToast('New passwords do not match.', 'error'); return; }
    if (newPw === currentPw){ showToast('New password must differ from current.', 'error'); return; }
    setPwLoading(true);
    try {
      await updatePassword(currentPw, newPw);
      setCurrentPw(''); setNewPw(''); setConfirmPw('');
      showToast('Password changed!', 'success');
    } catch (err) { showToast(err.message, 'error'); }
    finally { setPwLoading(false); }
  };

  return (
    <div className="ad-section">
      <div className="ad-section-header">
        <h2>My Profile</h2>
      </div>

      {/* ── Hero card ── */}
      <div className="adp-hero">
        {/* Avatar */}
        <div className="adp-avatar-wrap">
          <input ref={fileInputRef} type="file" accept="image/*"
            style={{ display: 'none' }} onChange={handleAvatarUpload} aria-label="Upload photo" />
          <button className="adp-avatar-btn"
            onClick={() => fileInputRef.current?.click()}
            title="Click to change photo" aria-label="Change photo">
            {avatarUrl
              ? <img src={avatarUrl} alt="Profile" className="adp-avatar adp-avatar--photo" />
              : <div className="adp-avatar">{initials}</div>
            }
            <span className="adp-avatar-overlay">
              <Camera size={18} />
              <span className="adp-avatar-overlay__text">Change</span>
            </span>
          </button>
          {avatarUrl && (
            <button className="adp-avatar-remove" onClick={handleAvatarRemove} title="Remove photo">
              <Trash2 size={10} />
            </button>
          )}
        </div>

        <div className="adp-hero-info">
          <p className="adp-hero-name">{fullName || 'Administrator'}</p>
          <p className="adp-hero-role">⚡ Administrator</p>
          <p className="adp-hero-email">{user?.email}</p>
          <span className="adp-role-badge">
            <Shield size={10} /> Admin
          </span>
        </div>
      </div>

      {/* ── Personal Information ── */}
      <div className="adp-card">
        <div className="adp-card-head">
          <h3 className="adp-card-title">Personal Information</h3>
          <div className="adp-head-actions">
            {editingInfo ? (
              <>
                <button className="adp-btn adp-btn--ghost" onClick={handleInfoCancel} disabled={infoLoading}>
                  <X size={13} /> Cancel
                </button>
                <button className="adp-btn adp-btn--save" onClick={handleInfoSave} disabled={infoLoading}>
                  {infoLoading ? <><span className="adp-spinner" /> Saving…</> : <><Save size={13} /> Save</>}
                </button>
              </>
            ) : (
              <button className="adp-btn adp-btn--edit" onClick={() => setEditingInfo(true)}>
                <Edit3 size={13} /> Edit
              </button>
            )}
          </div>
        </div>
        <div className="adp-card-body">
          {editingInfo ? (
            <div className="adp-field-row">
              <div className="adp-field">
                <label className="adp-field-label">First Name</label>
                <input className="adp-input" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First name" autoFocus />
              </div>
              <div className="adp-field">
                <label className="adp-field-label">Last Name</label>
                <input className="adp-input" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last name" />
              </div>
            </div>
          ) : (
            <div className="adp-info-grid">
              <div className="adp-info-item">
                <span className="adp-info-label">First Name</span>
                <span className="adp-info-value">{user?.firstName || '—'}</span>
              </div>
              <div className="adp-info-item">
                <span className="adp-info-label">Last Name</span>
                <span className="adp-info-value">{user?.lastName || '—'}</span>
              </div>
              <div className="adp-info-item">
                <span className="adp-info-label">Full Name</span>
                <span className="adp-info-value">{fullName || '—'}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Account Details ── */}
      <div className="adp-card">
        <div className="adp-card-head">
          <h3 className="adp-card-title">Account Details</h3>
        </div>
        <div className="adp-card-body">
          <div className="adp-info-grid">
            <div className="adp-info-item adp-info-item--full">
              <span className="adp-info-label">Email Address</span>
              <span className="adp-info-value adp-info-value--mono">{user?.email}</span>
            </div>
            <div className="adp-info-item">
              <span className="adp-info-label">Role</span>
              <span className="adp-info-value" style={{ color: '#f59e0b', fontWeight: 700 }}>
                <Shield size={13} style={{ marginRight: 4, verticalAlign: 'middle' }} />Administrator
              </span>
            </div>
            <div className="adp-info-item">
              <span className="adp-info-label">Status</span>
              <span className="adp-info-value" style={{ color: '#22c55e', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                Active
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Change Password ── */}
      <div className="adp-card">
        <div className="adp-card-head">
          <h3 className="adp-card-title">Change Password</h3>
        </div>
        <div className="adp-card-body">
          <form onSubmit={handlePwSubmit} noValidate>
            <div className="adp-field-row">
              {/* Current */}
              <div className="adp-field">
                <label className="adp-field-label">Current Password</label>
                <div className="adp-input-wrap">
                  <input className="adp-input" type={showCur ? 'text' : 'password'}
                    value={currentPw} onChange={e => setCurrentPw(e.target.value)}
                    placeholder="Current password" autoComplete="current-password" />
                  <button type="button" className="adp-eye" onClick={() => setShowCur(p => !p)}>
                    {showCur ? <EyeOff size={14}/> : <Eye size={14}/>}
                  </button>
                </div>
              </div>
              {/* New */}
              <div className="adp-field">
                <label className="adp-field-label">New Password</label>
                <div className="adp-input-wrap">
                  <input className="adp-input" type={showNew ? 'text' : 'password'}
                    value={newPw} onChange={e => setNewPw(e.target.value)}
                    placeholder="Min. 8 characters" autoComplete="new-password" />
                  <button type="button" className="adp-eye" onClick={() => setShowNew(p => !p)}>
                    {showNew ? <EyeOff size={14}/> : <Eye size={14}/>}
                  </button>
                </div>
                {newPw && (
                  <div className="adp-strength">
                    <div className="adp-strength__bar">
                      {[1,2,3,4,5].map(n => (
                        <div key={n} className="adp-strength__seg"
                          style={{ background: n <= strength.score ? strength.color : 'rgba(255,255,255,0.1)' }} />
                      ))}
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: strength.color, minWidth: 38 }}>{strength.label}</span>
                  </div>
                )}
              </div>
              {/* Confirm */}
              <div className="adp-field">
                <label className="adp-field-label">Confirm New Password</label>
                <div className="adp-input-wrap">
                  <input
                    className={`adp-input${confirmPw && confirmPw !== newPw ? ' adp-input--err' : ''}${confirmPw && confirmPw === newPw ? ' adp-input--ok' : ''}`}
                    type={showCon ? 'text' : 'password'}
                    value={confirmPw} onChange={e => setConfirmPw(e.target.value)}
                    placeholder="Repeat new password" autoComplete="new-password" />
                  <button type="button" className="adp-eye" onClick={() => setShowCon(p => !p)}>
                    {showCon ? <EyeOff size={14}/> : <Eye size={14}/>}
                  </button>
                </div>
                {confirmPw && confirmPw !== newPw && (
                  <p style={{ color: '#f87171', fontSize: 12, margin: '4px 0 0', display: 'flex', gap: 4, alignItems: 'center' }}>
                    <AlertCircle size={11} /> Passwords do not match
                  </p>
                )}
                {confirmPw && confirmPw === newPw && newPw && (
                  <p style={{ color: '#4ade80', fontSize: 12, margin: '4px 0 0', display: 'flex', gap: 4, alignItems: 'center' }}>
                    <CheckCircle size={11} /> Passwords match
                  </p>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <button type="submit" className="adp-btn adp-btn--save" disabled={pwLoading}>
                {pwLoading ? <><span className="adp-spinner" /> Updating…</> : <><KeyRound size={13} /> Update Password</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// ── Main AdminDashboard ───────────────────────────────────────────────────────
const AdminDashboard = () => {
  const { user, logout, updateProfile, updatePassword } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [openNavGroups, setOpenNavGroups] = useState({});
  const [toast, setToast] = useState(null);
  const [hideOverview, setHideOverview] = useState(false);

  const [metrics,       setMetrics]       = useState(null);
  const [users,         setUsers]         = useState([]);
  const [auditLogs,     setAuditLogs]     = useState([]);

  const [topbarSearch, setTopbarSearch] = useState('');
  const [theme, setTheme] = useState(() => localStorage.getItem('ad-theme') || 'dark');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchHighlight, setSearchHighlight] = useState(-1);
  const userMenuRef = useRef(null);
  const adminSearchRef = useRef(null);

  const showToast = useCallback((msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  }, []);

  const authHeader = () => ({
    Authorization: `Bearer ${user?.token}`,
    'Content-Type': 'application/json',
  });

  const apiFetch = useCallback(async (url, opts = {}) => {
    const res = await fetch(`${API}${url}`, {
      headers: authHeader(),
      ...opts,
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || `HTTP ${res.status}`);
    }
    return res.json();
  }, [user?.token]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadMetrics   = useCallback(async () => { try { setMetrics(await apiFetch('/api/admin/dashboard')); } catch(e) { console.error('metrics',e); } }, [apiFetch]);
  const loadUsers     = useCallback(async () => { try { setUsers(await apiFetch('/api/admin/users')); } catch(e) { console.error('users',e); } }, [apiFetch]);
  const loadAuditLogs = useCallback(async (limit = 200) => {
    try {
      setAuditLogs(await apiFetch(`/api/admin/audit-logs?limit=${limit}`));
    } catch (e) {
      console.error('audit', e);
    }
  }, [apiFetch]);

  useEffect(() => { loadMetrics(); }, [loadMetrics]);

  useEffect(() => {
    if (!user?.token) return;
    loadUsers();
    loadAuditLogs(200);
  }, [user?.token]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (activeTab === 'users') loadUsers();
    if (activeTab === 'audit' || activeTab === 'versions') loadAuditLogs(200);
    if (activeTab === 'reports') loadAuditLogs(1500);
  }, [activeTab]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── User actions ────────────────────────────────────────────────────────────
  const updateRole = async (id, role) => {
    try { await apiFetch(`/api/admin/users/${id}/role`, { method: 'PUT', body: JSON.stringify({ role }) }); showToast('Role updated'); loadUsers(); }
    catch(e) { showToast(e.message, 'error'); }
  };
  const deleteUser = async (id, email) => {
    if (!window.confirm(`Delete "${email}"?`)) return;
    try { await apiFetch(`/api/admin/users/${id}`, { method: 'DELETE' }); showToast('User deleted'); loadUsers(); }
    catch(e) { showToast(e.message, 'error'); }
  };

  const openReportsTab = useCallback(() => setActiveTab('reports'), []);
  const navGroups = [
    {
      label: 'Main',
      items: [
        { id: 'overview', label: 'Dashboard', icon: <LayoutDashboard size={17} /> },
      ],
    },
    {
      label: 'Management',
      items: [
        { id: 'users', label: 'Users', icon: <Users size={17} /> },
        { id: 'versions', label: 'Version control', icon: <History size={17} /> },
        { id: 'hidden-pages', label: 'Hidden pages', icon: <EyeOff size={17} /> },
      ],
    },
    {
      label: 'Analytics',
      items: [
        { id: 'audit',   label: 'Audit Log', icon: <ClipboardList size={17} /> },
        { id: 'reports', label: 'Reports',   icon: <BarChart2     size={17} /> },
      ],
    },
    {
      label: 'FAQ',
      items: [
        { id: 'faq', label: 'Taxpayer questions', icon: <HelpCircle size={17} /> },
      ],
    },
    {
      label: 'Account',
      items: [
        { id: 'profile', label: 'My Profile', icon: <User size={17} /> },
      ],
    },
  ];

  const toggleNavGroup = useCallback((label) => {
    setOpenNavGroups((prev) => ({ ...prev, [label]: !prev[label] }));
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('ad-theme', next);
  };

  // Close user menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const globalSearchHits = useMemo(() => {
    const raw = topbarSearch.trim();
    if (raw.length < 2) return [];
    const q = raw.toLowerCase();
    const out = [];
    let k = 0;
    const add = (hit) => { out.push({ ...hit, key: `gs-${k++}` }); };

    ADMIN_GLOBAL_NAV.forEach((nav) => {
      const blob = `${nav.title} ${nav.group} ${nav.keywords}`.toLowerCase();
      if (blob.includes(q)) add({ tab: nav.tab, category: 'Section', title: nav.title, subtitle: nav.group });
    });

    (users || []).forEach((u) => {
      const blob = `${u.email || ''} ${u.firstName || ''} ${u.lastName || ''} ${u.role || ''}`.toLowerCase();
      if (blob.includes(q)) {
        const name = [u.firstName, u.lastName].filter(Boolean).join(' ').trim();
        add({ tab: 'users', category: 'User', title: name || u.email, subtitle: `${u.email} · ${u.role}` });
      }
    });

    (auditLogs || []).forEach((l) => {
      const blob = `${l.action || ''} ${l.adminEmail || ''} ${l.details || ''} ${l.targetEntity || ''} ${l.targetId || ''}`.toLowerCase();
      if (blob.includes(q)) {
        const d = l.details || '';
        const det = d.slice(0, 96);
        add({
          tab: 'audit',
          category: 'Audit',
          title: l.action || 'Log entry',
          subtitle: `${l.adminEmail || ''} · ${det}${d.length > 96 ? '…' : ''}`,
        });
      }
    });

    if (metrics?.topPages?.length) {
      metrics.topPages.forEach((p) => {
        if ((p.pagePath || '').toLowerCase().includes(q)) {
          add({ tab: 'overview', category: 'Analytics', title: p.pagePath, subtitle: `${Number(p.views) || 0} page views` });
        }
      });
    }
    if (metrics?.topSearchTerms?.length) {
      metrics.topSearchTerms.forEach((s) => {
        if ((s.term || '').toLowerCase().includes(q)) {
          add({ tab: 'overview', category: 'Search analytics', title: `"${s.term}"`, subtitle: `${Number(s.count) || 0} searches` });
        }
      });
    }

    let faqs = [];
    try {
      faqs = JSON.parse(localStorage.getItem(FAQ_STORAGE_KEY) || '[]');
    } catch {
      faqs = [];
    }
    (faqs || []).forEach((f) => {
      const blob = `${f.question || ''} ${f.answer || ''} ${f.category || ''} ${f.author || ''}`.toLowerCase();
      if (blob.includes(q)) {
        add({
          tab: 'faq',
          category: 'Taxpayer questions',
          title: (f.question || 'Question').slice(0, 120),
          subtitle: `${f.status || ''}${f.category ? ` · ${f.category}` : ''}`,
        });
      }
    });

    return out.slice(0, 40);
  }, [topbarSearch, users, auditLogs, metrics]);

  const selectGlobalHit = (hit) => {
    setActiveTab(hit.tab);
    const g = navGroups.find((grp) => grp.items.some((it) => it.id === hit.tab));
    if (g) setOpenNavGroups((prev) => ({ ...prev, [g.label]: true }));
    setTopbarSearch('');
    setSearchOpen(false);
    setSearchHighlight(-1);
  };

  useEffect(() => {
    const close = (e) => {
      if (adminSearchRef.current && !adminSearchRef.current.contains(e.target)) {
        setSearchOpen(false);
        setSearchHighlight(-1);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  useEffect(() => {
    setSearchHighlight(-1);
  }, [topbarSearch]);

  return (
    <div className="ad-layout notranslate" data-ad-theme={theme} translate="no">
      {/* Sidebar */}
      <aside className="ad-sidebar">
        <div className="ad-sidebar-brand">
          <img src="/images/rra-logo.png" alt="RRA" className="ad-sidebar-logo" />
        </div>
        <nav className="ad-nav">
          {navGroups.map((group) => {
            const sectionOpen = Boolean(openNavGroups[group.label]);
            return (
              <div key={group.label} className="ad-nav-group">
                <button
                  type="button"
                  className="ad-nav-group-toggle"
                  aria-expanded={sectionOpen}
                  onClick={() => toggleNavGroup(group.label)}
                >
                  <span className="ad-nav-group-toggle__text">{group.label}</span>
                  <ChevronDown
                    size={16}
                    className={`ad-nav-group-toggle__chev${sectionOpen ? ' ad-nav-group-toggle__chev--open' : ''}`}
                    aria-hidden
                  />
                </button>
                <div className={`ad-nav-group-items${sectionOpen ? ' ad-nav-group-items--open' : ''}`}>
                  {group.items.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`ad-nav-item ${activeTab === item.id ? 'ad-nav-item--active' : ''}`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      {activeTab === item.id && <ChevronRight size={13} className="ad-nav-chevron" />}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
        <div className="ad-sidebar-footer">
          <button className="ad-nav-item ad-nav-item--handbook" onClick={() => navigate('/')}>
            <BookOpen size={17} /><span>View Handbook</span>
          </button>
          <button className="ad-nav-item ad-nav-item--logout" onClick={() => { logout(); navigate('/'); }}>
            <LogOut size={17} /><span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="ad-main">
        <header className="ad-topbar">
          <div className="ad-topbar-search" ref={adminSearchRef}>
            <Search size={14} />
            <input
              type="text"
              placeholder="Search users, audit log, versions, taxpayer questions, sections…"
              value={topbarSearch}
              onChange={(e) => {
                setTopbarSearch(e.target.value);
                setSearchOpen(e.target.value.trim().length >= 2);
              }}
              onFocus={() => {
                if (topbarSearch.trim().length >= 2 && globalSearchHits.length > 0) setSearchOpen(true);
              }}
              onKeyDown={(e) => {
                if (!searchOpen && topbarSearch.trim().length >= 2 && globalSearchHits.length > 0 && (e.key === 'ArrowDown' || e.key === 'Enter')) {
                  setSearchOpen(true);
                }
                if (!searchOpen || globalSearchHits.length === 0) return;
                if (e.key === 'ArrowDown') {
                  e.preventDefault();
                  setSearchHighlight((i) => Math.min(i + 1, globalSearchHits.length - 1));
                } else if (e.key === 'ArrowUp') {
                  e.preventDefault();
                  setSearchHighlight((i) => Math.max(i - 1, -1));
                } else if (e.key === 'Escape') {
                  e.preventDefault();
                  setSearchOpen(false);
                  setSearchHighlight(-1);
                } else if (e.key === 'Enter' && searchHighlight >= 0) {
                  e.preventDefault();
                  selectGlobalHit(globalSearchHits[searchHighlight]);
                }
              }}
              autoComplete="off"
              aria-autocomplete="list"
              aria-expanded={searchOpen && globalSearchHits.length > 0}
              aria-controls="admin-global-search-list"
            />
            {searchOpen && topbarSearch.trim().length >= 2 && (
              <div className="ad-global-search-panel" id="admin-global-search-list" role="listbox">
                {globalSearchHits.length === 0 ? (
                  <div className="ad-global-search-empty">No matches across the admin platform.</div>
                ) : (
                  globalSearchHits.map((hit, idx) => (
                    <button
                      key={hit.key}
                      type="button"
                      role="option"
                      aria-selected={idx === searchHighlight}
                      className={`ad-global-search-item${idx === searchHighlight ? ' ad-global-search-item--active' : ''}`}
                      onMouseEnter={() => setSearchHighlight(idx)}
                      onMouseDown={(ev) => {
                        ev.preventDefault();
                        selectGlobalHit(hit);
                      }}
                    >
                      <span className="ad-global-search-item__badge">{hit.category}</span>
                      <span className="ad-global-search-item__main">
                        <span className="ad-global-search-item__title">{hit.title}</span>
                        <span className="ad-global-search-item__sub">{hit.subtitle}</span>
                      </span>
                      <ChevronRight size={14} className="ad-global-search-item__chev" />
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
          <div className="ad-topbar-right">
            {/* Theme toggle */}
            <button className="ad-theme-toggle" onClick={toggleTheme} title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
              <span className={`ad-theme-toggle__option ${theme === 'light' ? 'ad-theme-toggle__option--active' : ''}`}>
                <Sun size={13} /> Light
              </span>
              <span className={`ad-theme-toggle__option ${theme === 'dark' ? 'ad-theme-toggle__option--active' : ''}`}>
                <Moon size={13} /> Dark
              </span>
            </button>

            {/* Pinterest-style user menu */}
            <div className="ad-hum" ref={userMenuRef}>
              {(() => {
                const adminPhoto = localStorage.getItem(`rra_avatar_${user?.email}`);
                return (
                  <>
                    <button
                      className="ad-hum__btn"
                      onClick={() => setShowUserMenu(p => !p)}
                      aria-label="Account menu"
                    >
                      <span className="ad-hum__circle">
                        {adminPhoto
                          ? <img src={adminPhoto} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', display: 'block' }} />
                          : (user?.firstName?.[0]?.toUpperCase() ?? <User size={15} />)
                        }
                      </span>
                      <ChevronDown size={13} className={`ad-hum__chevron${showUserMenu ? ' ad-hum__chevron--open' : ''}`} />
                    </button>

                    {showUserMenu && (
                      <div className="ad-hum__panel">
                        <p className="ad-hum__section-label">Currently in</p>

                        <div className="ad-hum__identity">
                          <span className="ad-hum__identity-circle">
                            {adminPhoto
                              ? <img src={adminPhoto} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', display: 'block' }} />
                              : (user?.firstName?.[0]?.toUpperCase() ?? <User size={16} />)
                            }
                          </span>
                    <div className="ad-hum__identity-text">
                      <span className="ad-hum__identity-name">
                        {user?.firstName} {user?.lastName}
                      </span>
                      <span className="ad-hum__identity-role">⚡ Administrator</span>
                      <span className="ad-hum__identity-email">{user?.email}</span>
                    </div>
                  </div>

                  <hr className="ad-hum__divider" />

                  <button
                    className="ad-hum__item"
                    onClick={() => { navigate('/'); setShowUserMenu(false); }}
                  >
                    <BookOpen size={15} /> View Handbook
                  </button>

                  <hr className="ad-hum__divider" />

                  <button
                    className="ad-hum__item"
                    onClick={() => { setShowUserMenu(false); setActiveTab('profile'); }}
                  >
                    <User size={15} /> My Profile
                  </button>

                  <hr className="ad-hum__divider" />

                  <button
                    className="ad-hum__item ad-hum__item--logout"
                    onClick={() => { logout(); navigate('/'); }}
                  >
                    <LogOut size={15} /> Sign Out
                  </button>
                </div>
              )}
                    </>
                  );
                })()}
            </div>
          </div>
        </header>

        <main className="ad-content">
          {activeTab === 'overview'      && <OverviewSection      metrics={metrics} onRefresh={loadMetrics} onOpenReportsTab={openReportsTab} hideOverview={hideOverview} onToggleHideOverview={() => setHideOverview(!hideOverview)} />}
          {activeTab === 'users'         && <UsersSection         users={users} currentUserEmail={user?.email} onRefresh={loadUsers} onUpdateRole={updateRole} onDelete={deleteUser} />}
          {activeTab === 'audit'         && <AuditSection         logs={auditLogs} />}
          {activeTab === 'versions'      && <VersionControlSection apiFetch={apiFetch} user={user} showToast={showToast} auditLogs={auditLogs} />}
          {activeTab === 'reports'       && <ReportsSection       metrics={metrics} users={users} auditLogs={auditLogs} user={user} showToast={showToast} onRefreshMetrics={loadMetrics} />}
          {activeTab === 'profile'       && <ProfileSection       user={user} updateProfile={updateProfile} updatePassword={updatePassword} showToast={showToast} />}
          {activeTab === 'faq'           && <FaqSection           showToast={showToast} apiFetch={apiFetch} />}
          {activeTab === 'hidden-pages'  && <HiddenPagesSection   showToast={showToast} apiFetch={apiFetch} />}
        </main>
      </div>

      {/* Toast */}
      {toast && (
        <div className={`ad-toast ad-toast--${toast.type}`}>
          {toast.type === 'success' ? <CheckCircle size={16} /> : <AlertTriangle size={16} />}
          {toast.msg}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
