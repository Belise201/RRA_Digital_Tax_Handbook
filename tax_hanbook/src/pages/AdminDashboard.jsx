import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Users, Bell, FileText, ClipboardList,
  BarChart2, BookOpen, LogOut, ChevronRight,
  Trash2, Edit, Plus, EyeOff, Download, RefreshCw,
  Shield, Activity, Search, TrendingUp, AlertTriangle, CheckCircle
} from 'lucide-react';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts';
import { useAuth } from '../hooks/useAuth';
import './AdminDashboard.css';

const API = import.meta.env.VITE_API_ROOT_URL || 'http://localhost:8080';
const COLORS = ['#093e61', '#0a4f7a', '#0c6098', '#1d7cb8', '#4fa8d5', '#a8d4ec'];

// ── Metric Card ───────────────────────────────────────────────────────────────
const MetricCard = ({ icon, label, value, color }) => (
  <div className={`ad-metric-card ad-metric-card--${color}`}>
    <div className="ad-metric-icon">{icon}</div>
    <div className="ad-metric-body">
      <div className="ad-metric-value">{(value ?? 0).toLocaleString()}</div>
      <div className="ad-metric-label">{label}</div>
    </div>
  </div>
);

// ── Overview Section ──────────────────────────────────────────────────────────
const OverviewSection = ({ metrics, onRefresh }) => (
  <div className="ad-section">
    <div className="ad-section-header">
      <h2>Dashboard Overview</h2>
      <button className="ad-btn ad-btn-secondary" onClick={onRefresh}>
        <RefreshCw size={15} /> Refresh
      </button>
    </div>

    {!metrics ? (
      <div className="ad-loading"><div className="ad-spinner" />Loading metrics…</div>
    ) : (
      <>
        <div className="ad-cards">
          <MetricCard icon={<TrendingUp size={22} />} label="Total Page Views"      value={metrics.totalPageViews}      color="blue"   />
          <MetricCard icon={<TrendingUp size={22} />} label="Views Today"            value={metrics.pageViewsToday}      color="sky"    />
          <MetricCard icon={<Activity   size={22} />} label="Sessions Today"         value={metrics.activeSessionsToday} color="indigo" />
          <MetricCard icon={<Search     size={22} />} label="Searches Today"         value={metrics.searchesToday}       color="teal"   />
          <MetricCard icon={<Users      size={22} />} label="Total Users"            value={metrics.totalUsers}          color="purple" />
          <MetricCard icon={<Shield     size={22} />} label="Admins"                 value={metrics.totalAdmins}         color="rose"   />
          <MetricCard icon={<Users      size={22} />} label="Taxpayers"              value={metrics.totalTaxpayers}      color="green"  />
          <MetricCard icon={<Bell       size={22} />} label="Active Notifications"   value={metrics.activeNotifications} color="amber"  />
        </div>

        <div className="ad-charts-row">
          {metrics.dailyViews?.length > 0 && (
            <div className="ad-chart-card">
              <h3>Page Views — Last 30 Days</h3>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={metrics.dailyViews}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} tickFormatter={d => d.slice(5)} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="views" stroke="#093e61" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          {metrics.topPages?.length > 0 && (
            <div className="ad-chart-card">
              <h3>Top Pages</h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={metrics.topPages.slice(0, 8)} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" tick={{ fontSize: 10 }} />
                  <YAxis type="category" dataKey="pagePath" width={120} tick={{ fontSize: 10 }}
                    tickFormatter={p => p.length > 18 ? p.slice(0, 18) + '…' : p} />
                  <Tooltip />
                  <Bar dataKey="views" fill="#093e61" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        <div className="ad-charts-row">
          {metrics.topSearchTerms?.length > 0 && (
            <div className="ad-chart-card">
              <h3>Top Search Terms</h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={metrics.topSearchTerms.slice(0, 8)}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="term" tick={{ fontSize: 10 }}
                    tickFormatter={t => t.length > 12 ? t.slice(0, 12) + '…' : t} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#0c6098" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          <div className="ad-chart-card">
            <h3>User Distribution</h3>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Taxpayers', value: metrics.totalTaxpayers || 0 },
                    { name: 'Admins',    value: metrics.totalAdmins    || 0 },
                  ]}
                  cx="50%" cy="50%" outerRadius={80} dataKey="value"
                >
                  <Cell fill={COLORS[0]} />
                  <Cell fill={COLORS[2]} />
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </>
    )}
  </div>
);

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

// ── Notifications Section ─────────────────────────────────────────────────────
const NotificationsSection = ({ notifications, onDeactivate, onDelete, onCreate }) => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ title: '', message: '', pagePath: '' });

  const submit = () => {
    if (!form.title || !form.message) return;
    onCreate(form);
    setForm({ title: '', message: '', pagePath: '' });
    setShow(false);
  };

  return (
    <div className="ad-section">
      <div className="ad-section-header">
        <h2>Notifications</h2>
        <button className="ad-btn ad-btn-primary" onClick={() => setShow(true)}><Plus size={15} /> New</button>
      </div>
      <div className="ad-table-wrap">
        <table className="ad-table">
          <thead><tr><th>Title</th><th>Message</th><th>Page</th><th>Status</th><th>Date</th><th>Actions</th></tr></thead>
          <tbody>
            {notifications.map(n => (
              <tr key={n.id}>
                <td><strong>{n.title}</strong></td>
                <td className="ad-cell-truncate">{n.message}</td>
                <td>{n.pagePath || <span className="ad-muted">Global</span>}</td>
                <td><span className={`ad-badge ${n.active ? 'ad-badge--active' : 'ad-badge--inactive'}`}>{n.active ? 'Active' : 'Off'}</span></td>
                <td>{n.createdAt ? new Date(n.createdAt).toLocaleDateString() : '—'}</td>
                <td className="ad-table-actions">
                  {n.active && <button className="ad-btn-icon ad-btn-icon--warn" onClick={() => onDeactivate(n.id)}><EyeOff size={15} /></button>}
                  <button className="ad-btn-icon ad-btn-icon--danger" onClick={() => onDelete(n.id)}><Trash2 size={15} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {notifications.length === 0 && <p className="ad-empty">No notifications yet.</p>}
      </div>

      {show && (
        <div className="ad-modal-overlay" onClick={e => e.target === e.currentTarget && setShow(false)}>
          <div className="ad-modal">
            <h3>New Notification</h3>
            <label>Title *</label>
            <input className="ad-input" value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} placeholder="Title" />
            <label>Message *</label>
            <textarea className="ad-input ad-textarea" value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} placeholder="Message…" />
            <label>Page path (blank = global)</label>
            <input className="ad-input" value={form.pagePath} onChange={e => setForm(p => ({ ...p, pagePath: e.target.value }))} placeholder="/definitions" />
            <div className="ad-modal-actions">
              <button className="ad-btn ad-btn-secondary" onClick={() => setShow(false)}>Cancel</button>
              <button className="ad-btn ad-btn-primary" onClick={submit}>Publish</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── Content Section ───────────────────────────────────────────────────────────
const ContentSection = ({ content, onSave, onDelete, onViewHandbook }) => {
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({ pagePath: '', pageTitle: '', content: '' });

  const openNew  = () => { setForm({ pagePath: '', pageTitle: '', content: '' }); setModal('new'); };
  const openEdit = c  => { setForm({ pagePath: c.pagePath, pageTitle: c.pageTitle || '', content: c.content || '' }); setModal(c.id); };

  const submit = () => {
    if (!form.pagePath) return;
    onSave(form, modal === 'new');
    setModal(null);
  };

  return (
    <div className="ad-section">
      <div className="ad-section-header">
        <h2>Handbook Content</h2>
        <div className="ad-header-actions">
          <button className="ad-btn ad-btn-primary"   onClick={openNew}><Plus size={15} /> Add Content</button>
          <button className="ad-btn ad-btn-secondary" onClick={onViewHandbook}><BookOpen size={15} /> View Handbook</button>
        </div>
      </div>
      <p className="ad-info-text">Content saved here appears instantly on the corresponding handbook page for all visitors.</p>
      <div className="ad-table-wrap">
        <table className="ad-table">
          <thead><tr><th>Page Path</th><th>Title</th><th>Last Edited</th><th>Editor</th><th>Actions</th></tr></thead>
          <tbody>
            {content.map(c => (
              <tr key={c.id}>
                <td><code>{c.pagePath}</code></td>
                <td>{c.pageTitle || '—'}</td>
                <td>{c.lastEditedAt ? new Date(c.lastEditedAt).toLocaleString() : '—'}</td>
                <td>{c.lastEditedBy || '—'}</td>
                <td className="ad-table-actions">
                  <button className="ad-btn-icon" onClick={() => openEdit(c)}><Edit size={15} /></button>
                  <button className="ad-btn-icon ad-btn-icon--danger" onClick={() => onDelete(c.id)}><Trash2 size={15} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {content.length === 0 && <p className="ad-empty">No content overrides yet.</p>}
      </div>

      {modal !== null && (
        <div className="ad-modal-overlay" onClick={e => e.target === e.currentTarget && setModal(null)}>
          <div className="ad-modal ad-modal--wide">
            <h3>{modal === 'new' ? 'Add' : 'Edit'} Page Content</h3>
            <label>Page path *</label>
            <input className="ad-input" value={form.pagePath}
              onChange={e => setForm(p => ({ ...p, pagePath: e.target.value }))}
              placeholder="/definitions" disabled={modal !== 'new'} />
            <label>Page title</label>
            <input className="ad-input" value={form.pageTitle}
              onChange={e => setForm(p => ({ ...p, pageTitle: e.target.value }))} placeholder="Definitions" />
            <label>Content (HTML or plain text)</label>
            <textarea className="ad-input ad-textarea ad-textarea--tall" value={form.content}
              onChange={e => setForm(p => ({ ...p, content: e.target.value }))} placeholder="Updated content…" />
            <div className="ad-modal-actions">
              <button className="ad-btn ad-btn-secondary" onClick={() => setModal(null)}>Cancel</button>
              <button className="ad-btn ad-btn-primary"   onClick={submit}>Save &amp; Publish</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

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

// ── Reports Section ───────────────────────────────────────────────────────────
const ReportsSection = ({ onExportPDF, onExportExcel, onExportAudit }) => (
  <div className="ad-section">
    <div className="ad-section-header"><h2>Export Reports</h2></div>
    <div className="ad-report-cards">
      <div className="ad-report-card">
        <BarChart2 size={40} className="ad-report-icon" />
        <h3>Analytics Report</h3>
        <p>Page views, top pages, search terms, user stats and 30-day trend.</p>
        <div className="ad-report-actions">
          <button className="ad-btn ad-btn-primary"   onClick={onExportPDF}  ><Download size={15} /> PDF</button>
          <button className="ad-btn ad-btn-secondary" onClick={onExportExcel}><Download size={15} /> Excel</button>
        </div>
      </div>
      <div className="ad-report-card">
        <ClipboardList size={40} className="ad-report-icon" />
        <h3>Audit Log Report</h3>
        <p>Full admin activity log with timestamps and details.</p>
        <div className="ad-report-actions">
          <button className="ad-btn ad-btn-secondary" onClick={onExportAudit}><Download size={15} /> Excel</button>
        </div>
      </div>
    </div>
  </div>
);

// ── Main AdminDashboard ───────────────────────────────────────────────────────
const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [toast, setToast] = useState(null);

  const [metrics,       setMetrics]       = useState(null);
  const [users,         setUsers]         = useState([]);
  const [auditLogs,     setAuditLogs]     = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [content,       setContent]       = useState([]);

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

  const loadMetrics       = useCallback(async () => { try { setMetrics(await apiFetch('/api/admin/dashboard')); }       catch(e) { console.error('metrics',e); } }, [apiFetch]);
  const loadUsers         = useCallback(async () => { try { setUsers(await apiFetch('/api/admin/users')); }             catch(e) { console.error('users',e); }   }, [apiFetch]);
  const loadAuditLogs     = useCallback(async () => { try { setAuditLogs(await apiFetch('/api/admin/audit-logs')); }    catch(e) { console.error('audit',e); }   }, [apiFetch]);
  const loadNotifications = useCallback(async () => { try { setNotifications(await apiFetch('/api/admin/notifications')); } catch(e) { console.error('notif',e); } }, [apiFetch]);
  const loadContent       = useCallback(async () => { try { setContent(await apiFetch('/api/admin/content')); }         catch(e) { console.error('content',e); } }, [apiFetch]);

  useEffect(() => { loadMetrics(); }, [loadMetrics]);

  useEffect(() => {
    if (activeTab === 'users')         loadUsers();
    if (activeTab === 'audit')         loadAuditLogs();
    if (activeTab === 'notifications') loadNotifications();
    if (activeTab === 'content')       loadContent();
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

  // ── Notification actions ─────────────────────────────────────────────────────
  const createNotif = async (form) => {
    try { await apiFetch('/api/admin/notifications', { method: 'POST', body: JSON.stringify(form) }); showToast('Published'); loadNotifications(); }
    catch(e) { showToast(e.message, 'error'); }
  };
  const deactivateNotif = async (id) => {
    try { await apiFetch(`/api/admin/notifications/${id}/deactivate`, { method: 'PATCH' }); showToast('Deactivated'); loadNotifications(); }
    catch(e) { showToast(e.message, 'error'); }
  };
  const deleteNotif = async (id) => {
    if (!window.confirm('Delete notification?')) return;
    try { await apiFetch(`/api/admin/notifications/${id}`, { method: 'DELETE' }); showToast('Deleted'); loadNotifications(); }
    catch(e) { showToast(e.message, 'error'); }
  };

  // ── Content actions ──────────────────────────────────────────────────────────
  const saveContent = async (form) => {
    try { await apiFetch('/api/admin/content', { method: 'POST', body: JSON.stringify(form) }); showToast('Saved & published'); loadContent(); }
    catch(e) { showToast(e.message, 'error'); }
  };
  const deleteContent = async (id) => {
    if (!window.confirm('Delete content?')) return;
    try { await apiFetch(`/api/admin/content/${id}`, { method: 'DELETE' }); showToast('Deleted'); loadContent(); }
    catch(e) { showToast(e.message, 'error'); }
  };

  // ── Exports ──────────────────────────────────────────────────────────────────
  const exportPDF = async () => {
    try {
      const { jsPDF } = await import('jspdf');
      const { default: autoTable } = await import('jspdf-autotable');
      const doc = new jsPDF();
      doc.setFontSize(16); doc.text('RRA Analytics Report', 14, 18);
      doc.setFontSize(10); doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 25);
      autoTable(doc, { startY: 30, head: [['Metric','Value']], body: [
        ['Total Page Views', metrics?.totalPageViews ?? 0],
        ['Views Today',      metrics?.pageViewsToday  ?? 0],
        ['Sessions Today',   metrics?.activeSessionsToday ?? 0],
        ['Searches Today',   metrics?.searchesToday    ?? 0],
        ['Total Users',      metrics?.totalUsers       ?? 0],
      ]});
      const y = doc.lastAutoTable.finalY + 8;
      autoTable(doc, { startY: y, head: [['Page','Views']], body: (metrics?.topPages ?? []).map(p => [p.pagePath, p.views]) });
      doc.save('rra-analytics.pdf');
      showToast('PDF exported');
    } catch(e) { showToast(e.message, 'error'); }
  };

  const exportExcel = async () => {
    try {
      const XLSX = await import('xlsx');
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet([
        ['Metric','Value'],
        ['Total Page Views', metrics?.totalPageViews ?? 0],
        ['Views Today',      metrics?.pageViewsToday  ?? 0],
        ['Sessions Today',   metrics?.activeSessionsToday ?? 0],
        ['Searches Today',   metrics?.searchesToday    ?? 0],
        ['Total Users',      metrics?.totalUsers       ?? 0],
      ]), 'Metrics');
      if (metrics?.topPages?.length)      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(metrics.topPages),      'Top Pages');
      if (metrics?.topSearchTerms?.length) XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(metrics.topSearchTerms), 'Searches');
      if (users.length) XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(users.map(u => ({ Email: u.email, Name: `${u.firstName} ${u.lastName}`, Role: u.role }))), 'Users');
      XLSX.writeFile(wb, 'rra-report.xlsx');
      showToast('Excel exported');
    } catch(e) { showToast(e.message, 'error'); }
  };

  const exportAuditExcel = async () => {
    try {
      const XLSX = await import('xlsx');
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(auditLogs.map(l => ({
        Time: l.createdAt, Admin: l.adminEmail, Action: l.action, Entity: l.targetEntity, Details: l.details,
      }))), 'Audit Log');
      XLSX.writeFile(wb, 'audit-log.xlsx');
      showToast('Audit log exported');
    } catch(e) { showToast(e.message, 'error'); }
  };

  const navItems = [
    { id: 'overview',       label: 'Overview',       icon: <LayoutDashboard size={18} /> },
    { id: 'users',          label: 'Users',           icon: <Users           size={18} /> },
    { id: 'notifications',  label: 'Notifications',   icon: <Bell            size={18} /> },
    { id: 'content',        label: 'Content',         icon: <FileText        size={18} /> },
    { id: 'audit',          label: 'Audit Log',       icon: <ClipboardList   size={18} /> },
    { id: 'reports',        label: 'Reports',         icon: <BarChart2       size={18} /> },
  ];

  return (
    <div className="ad-layout">
      {/* Sidebar */}
      <aside className="ad-sidebar">
        <div className="ad-sidebar-brand">
          <img src="/images/rra-logo.png" alt="RRA" className="ad-sidebar-logo"
            onError={e => { e.target.style.display = 'none'; }} />
          <span>Admin Panel</span>
        </div>
        <nav className="ad-nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`ad-nav-item ${activeTab === item.id ? 'ad-nav-item--active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.icon}
              <span>{item.label}</span>
              {activeTab === item.id && <ChevronRight size={14} className="ad-nav-chevron" />}
            </button>
          ))}
        </nav>
        <div className="ad-sidebar-footer">
          <button className="ad-nav-item ad-nav-item--handbook" onClick={() => navigate('/')}>
            <BookOpen size={18} /><span>View Handbook</span>
          </button>
          <button className="ad-nav-item ad-nav-item--logout" onClick={() => { logout(); navigate('/'); }}>
            <LogOut size={18} /><span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="ad-main">
        <header className="ad-topbar">
          <h1 className="ad-topbar-title">{navItems.find(n => n.id === activeTab)?.label}</h1>
          <div className="ad-topbar-right">
            <div className="ad-topbar-user">
              <div className="ad-avatar">{user?.firstName?.[0]?.toUpperCase() ?? 'A'}</div>
              <div>
                <div className="ad-topbar-name">{user?.firstName} {user?.lastName}</div>
                <div className="ad-topbar-role">Administrator</div>
              </div>
            </div>
          </div>
        </header>

        <main className="ad-content">
          {activeTab === 'overview'      && <OverviewSection      metrics={metrics} onRefresh={loadMetrics} />}
          {activeTab === 'users'         && <UsersSection         users={users} currentUserEmail={user?.email} onRefresh={loadUsers} onUpdateRole={updateRole} onDelete={deleteUser} />}
          {activeTab === 'notifications' && <NotificationsSection notifications={notifications} onDeactivate={deactivateNotif} onDelete={deleteNotif} onCreate={createNotif} />}
          {activeTab === 'content'       && <ContentSection       content={content} onSave={saveContent} onDelete={deleteContent} onViewHandbook={() => navigate('/')} />}
          {activeTab === 'audit'         && <AuditSection         logs={auditLogs} />}
          {activeTab === 'reports'       && <ReportsSection       onExportPDF={exportPDF} onExportExcel={exportExcel} onExportAudit={exportAuditExcel} />}
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
