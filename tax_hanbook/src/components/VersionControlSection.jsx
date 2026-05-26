import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  RefreshCw, GitCompare, Save, RotateCcw, Calendar, Bell,
  History, FileText, Settings, ArrowLeftRight, Columns2, ScanText,
} from 'lucide-react';
import RichTextEditor from './RichTextEditor';
import './VersionControlSection.css';

// ── Diff helpers ─────────────────────────────────────────────────────────────

function stripHtml(html) {
  if (!html) return '';
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
}

function diffWords(oldStr, newStr) {
  const tok = (s) => (s || '').split(/(\s+)/);
  const a = tok(oldStr);
  const b = tok(newStr);
  const m = a.length;
  const n = b.length;

  if (m * n > 300000) {
    return [{ type: 'remove', value: oldStr }, { type: 'add', value: newStr }];
  }

  const dp = Array.from({ length: m + 1 }, () => new Uint32Array(n + 1));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1] + 1
        : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  const result = [];
  let i = m, j = n;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && a[i - 1] === b[j - 1]) {
      result.unshift({ type: 'equal', value: a[i - 1] }); i--; j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      result.unshift({ type: 'add', value: b[j - 1] }); j--;
    } else {
      result.unshift({ type: 'remove', value: a[i - 1] }); i--;
    }
  }
  return result;
}

function DiffView({ leftHtml, rightHtml }) {
  const tokens = useMemo(
    () => diffWords(stripHtml(leftHtml), stripHtml(rightHtml)),
    [leftHtml, rightHtml],
  );

  const hasChanges = tokens.some((t) => t.type !== 'equal');

  return (
    <div className="vc-diff-wrap">
      <div className="vc-diff-legend">
        <span className="vc-diff-legend__rm">Removed</span>
        <span className="vc-diff-legend__add">Added</span>
        {!hasChanges && <span className="vc-diff-legend__same">No differences found</span>}
      </div>
      <div className="vc-diff-body">
        {tokens.map((tok, idx) =>
          tok.type === 'equal' ? (
            <span key={idx}>{tok.value}</span>
          ) : tok.type === 'add' ? (
            <ins key={idx} className="vc-diff-add">{tok.value}</ins>
          ) : (
            <del key={idx} className="vc-diff-rm">{tok.value}</del>
          ),
        )}
      </div>
    </div>
  );
}

const STORAGE_KEY = 'rra_admin_version_store_v1';

const defaultSettings = () => ({
  notifyOnPublish: false,
  notifyReviewDue: true,
  reviewIntervalDays: 90,
  nextReviewAt: null,
});

function readStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { documents: {} };
    const p = JSON.parse(raw);
    return p && typeof p === 'object' && p.documents ? p : { documents: {} };
  } catch {
    return { documents: {} };
  }
}

function writeStore(store) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function getDoc(store, path) {
  const d = store.documents[path];
  if (!d) return { versions: [], settings: defaultSettings() };
  return {
    versions: Array.isArray(d.versions) ? d.versions : [],
    settings: { ...defaultSettings(), ...(d.settings || {}) },
  };
}

function setDoc(store, path, doc) {
  return {
    ...store,
    documents: { ...store.documents, [path]: doc },
  };
}

function newId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  return `v-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

const LIVE_KEY = '__live__';

function formatPageName(path) {
  if (!path) return '';
  return path
    .replace(/^\//, '')
    .split(/[\/\-\_]/)
    .filter((w) => w.length > 0)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default function VersionControlSection({ apiFetch, user, showToast, auditLogs }) {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPath, setSelectedPath] = useState('');
  const [live, setLive] = useState(null);
  const [store, setStore] = useState(readStore);
  const [workspace, setWorkspace] = useState('publish');
  const [compareLeft, setCompareLeft] = useState(LIVE_KEY);
  const [compareRight, setCompareRight] = useState('');
  const [publishTitle, setPublishTitle] = useState('');
  const [publishBody, setPublishBody] = useState('');
  const [publishEffective, setPublishEffective] = useState('');
  const [publishExpires, setPublishExpires] = useState('');
  const [publishNote, setPublishNote] = useState('');
  const [saving, setSaving] = useState(false);
  const [diffMode, setDiffMode] = useState(false);

  const authorLabel = [user?.firstName, user?.lastName].filter(Boolean).join(' ').trim() || user?.email || 'Admin';

  const loadPages = useCallback(async () => {
    setLoading(true);
    try {
      const list = await apiFetch('/api/admin/content');
      setPages(Array.isArray(list) ? list : []);
    } catch (e) {
      showToast(e.message || 'Failed to load pages', 'error');
      setPages([]);
    } finally {
      setLoading(false);
    }
  }, [apiFetch, showToast]);

  useEffect(() => { loadPages(); }, [loadPages]);

  const persist = useCallback((next) => { writeStore(next); setStore(next); }, []);

  const pushSnapshot = useCallback((snapshot) => {
    const st = readStore();
    const d = getDoc(st, selectedPath);
    const capped = [snapshot, ...(d.versions || [])].slice(0, 50);
    persist(setDoc(st, selectedPath, { ...d, versions: capped }));
  }, [selectedPath, persist]);

  const refreshLive = useCallback(async (path) => {
    if (!path) { setLive(null); return; }
    try {
      const row = await apiFetch(`/api/admin/content/page?path=${encodeURIComponent(path)}`);
      setLive(row);
      setPublishTitle(row.pageTitle || '');
      setPublishBody(row.content ?? '');
    } catch {
      const fromList = pages.find((p) => p.pagePath === path);
      if (fromList) {
        setLive(fromList);
        setPublishTitle(fromList.pageTitle || '');
        setPublishBody(fromList.content ?? '');
      } else {
        setLive(null);
      }
    }
  }, [apiFetch, pages]);

  useEffect(() => {
    if (!selectedPath && pages.length) {
      const first = pages.find((p) => p.active !== false) || pages[0];
      if (first?.pagePath) setSelectedPath(first.pagePath);
    }
  }, [pages, selectedPath]);

  useEffect(() => {
    if (selectedPath) refreshLive(selectedPath);
  }, [selectedPath, refreshLive]);

  const doc = useMemo(() => getDoc(store, selectedPath), [store, selectedPath]);
  const versions = doc.versions;
  const settings = doc.settings;

  const auditForPath = useMemo(() => {
    if (!selectedPath || !auditLogs?.length) return [];
    return auditLogs.filter(
      (l) => l.action === 'SAVE_PAGE_CONTENT' &&
        (l.targetId === selectedPath || (l.details || '').includes(selectedPath)),
    );
  }, [auditLogs, selectedPath]);

  const compareOptions = useMemo(() => {
    const kindName = { baseline: 'Original (baseline)', rollback: 'Pre-rollback snapshot', snapshot: 'Previous version' };
    const opts = [{ value: LIVE_KEY, label: 'Live (current)' }];
    versions.forEach((v, i) => {
      const date = v.at ? new Date(v.at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';
      const who  = (v.authorLabel || v.authorEmail || '').slice(0, 20) || 'admin';
      const base = kindName[v.kind] || 'Previous version';
      opts.push({
        value: v.id,
        label: i === 0 ? `${base} — ${date} (latest backup)` : `${base} — ${date} · ${who}`,
      });
    });
    return opts;
  }, [versions]);

  const getCompareText = (key) => {
    if (key === LIVE_KEY) return live?.content ?? '';
    return versions.find((x) => x.id === key)?.content ?? '';
  };

  // Auto-pair: picking live → other side gets latest backup, and vice-versa
  const latestBackupValue = compareOptions.length > 1 ? compareOptions[1].value : '';

  const handleLeftChange = useCallback((val) => {
    setCompareLeft(val);
    if (val === LIVE_KEY) {
      setCompareRight(latestBackupValue || LIVE_KEY);
    } else {
      setCompareRight(LIVE_KEY);
    }
  }, [latestBackupValue]);

  const handleRightChange = useCallback((val) => {
    setCompareRight(val);
    if (val === LIVE_KEY) {
      setCompareLeft(latestBackupValue || LIVE_KEY);
    } else {
      setCompareLeft(LIVE_KEY);
    }
  }, [latestBackupValue]);

  // Seed defaults once options are ready
  useEffect(() => {
    if (!compareOptions.find((o) => o.value === compareLeft)) setCompareLeft(LIVE_KEY);
    if (compareOptions.length > 1 && !compareOptions.find((o) => o.value === compareRight)) {
      setCompareRight(compareOptions[1].value);
    }
  }, [compareOptions]); // eslint-disable-line react-hooks/exhaustive-deps

  const updateSettings = useCallback((patch, { silent } = {}) => {
    const st = readStore();
    const d = getDoc(st, selectedPath);
    const next = setDoc(st, selectedPath, { ...d, settings: { ...d.settings, ...patch } });
    persist(next);
    if (!silent) showToast('Settings saved');
  }, [selectedPath, persist, showToast]);

  const scheduleNextReview = useCallback((fromDate = new Date()) => {
    const st = readStore();
    const d = getDoc(st, selectedPath);
    const days = Number(d.settings.reviewIntervalDays) || 90;
    const end = new Date(fromDate);
    end.setDate(end.getDate() + days);
    updateSettings({ nextReviewAt: end.toISOString() }, { silent: true });
    showToast('Next review scheduled');
  }, [selectedPath, updateSettings, showToast]);

  const maybeNotifyPublish = async (path, title) => {
    const st = readStore();
    const d = getDoc(st, path);
    if (!d.settings.notifyOnPublish) return;
    try {
      await apiFetch('/api/admin/notifications', {
        method: 'POST',
        body: JSON.stringify({
          title: 'Handbook content updated',
          message: `An administrator published changes to "${title || path}".`,
          pagePath: path,
        }),
      });
      showToast('Audience notification created');
    } catch {
      showToast('Could not create notification', 'error');
    }
  };

  const handleSavePublish = async (e) => {
    e.preventDefault();
    if (!selectedPath || !live) return;
    const prevTitle = live.pageTitle || '';
    const prevBody = live.content ?? '';
    if (prevBody === publishBody && prevTitle === publishTitle) {
      showToast('No changes to save', 'error');
      return;
    }
    setSaving(true);
    try {
      await apiFetch('/api/admin/content', {
        method: 'POST',
        body: JSON.stringify({ pagePath: selectedPath, pageTitle: publishTitle, content: publishBody }),
      });
      pushSnapshot({
        id: newId(),
        pageTitle: prevTitle,
        content: prevBody,
        authorEmail: user?.email,
        authorLabel,
        at: new Date().toISOString(),
        effectiveFrom: publishEffective || null,
        expiresAt: publishExpires || null,
        changeNote: publishNote || 'Published update',
        kind: 'snapshot',
      });
      await maybeNotifyPublish(selectedPath, publishTitle);
      showToast('Published — previous revision saved in history');
      setPublishNote('');
      await loadPages();
      await refreshLive(selectedPath);
      const st = readStore();
      const d = getDoc(st, selectedPath);
      if (d.settings.notifyReviewDue && d.settings.nextReviewAt) {
        if (new Date(d.settings.nextReviewAt) <= new Date())
          showToast('Content review was due — reschedule from Settings', 'error');
      }
    } catch (err) {
      showToast(err.message || 'Save failed', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleRollback = (v) => {
    if (!v?.content || !live) return;
    if (!window.confirm('Replace live content with this snapshot? The current live version will be archived first.')) return;
    const previousLive = { pageTitle: live.pageTitle || '', content: live.content ?? '' };
    setSaving(true);
    (async () => {
      try {
        await apiFetch('/api/admin/content', {
          method: 'POST',
          body: JSON.stringify({
            pagePath: selectedPath,
            pageTitle: v.pageTitle || live.pageTitle,
            content: v.content,
          }),
        });
        pushSnapshot({
          id: newId(),
          pageTitle: previousLive.pageTitle,
          content: previousLive.content,
          authorEmail: user?.email,
          authorLabel,
          at: new Date().toISOString(),
          effectiveFrom: null,
          expiresAt: null,
          changeNote: `Before rollback to ${v.at ? new Date(v.at).toLocaleString() : 'history'}`,
          kind: 'rollback',
        });
        await maybeNotifyPublish(selectedPath, v.pageTitle || live.pageTitle);
        showToast('Rolled back successfully');
        await loadPages();
        await refreshLive(selectedPath);
      } catch (err) {
        showToast(err.message || 'Rollback failed', 'error');
      } finally {
        setSaving(false);
      }
    })();
  };

  const recordBaseline = () => {
    if (!live) return;
    pushSnapshot({
      id: newId(),
      pageTitle: live.pageTitle || '',
      content: live.content ?? '',
      authorEmail: user?.email,
      authorLabel,
      at: new Date().toISOString(),
      effectiveFrom: null,
      expiresAt: null,
      changeNote: 'Manual baseline snapshot',
      kind: 'baseline',
    });
    showToast('Baseline saved to history');
  };

  const reviewDue = settings.nextReviewAt && new Date(settings.nextReviewAt) <= new Date();
  const reviewLabel = settings.nextReviewAt
    ? new Date(settings.nextReviewAt).toLocaleDateString()
    : 'Not scheduled';

  const TABS = [
    { id: 'publish',  label: 'Edit & Publish', icon: Save },
    { id: 'history',  label: 'History',         icon: History },
    { id: 'compare',  label: 'Compare',          icon: ArrowLeftRight },
    { id: 'settings', label: 'Settings',         icon: Settings },
  ];

  const kindLabel = { baseline: 'Baseline', rollback: 'Pre-rollback', snapshot: 'Backup' };

  return (
    <div className="ad-section vc-root">

      {/* ── Section header ── */}
      <div className="vc-top-bar">
        <div className="vc-top-bar__left">
          <h2>Version Control</h2>
          <p className="vc-lead">Edit and publish content, roll back to previous versions, or compare revisions.</p>
        </div>
        <button type="button" className="ad-btn ad-btn-secondary vc-refresh-btn" onClick={loadPages} disabled={loading}>
          <RefreshCw size={14} className={loading ? 'vc-spin' : ''} />
          Refresh
        </button>
      </div>

      {loading && !pages.length ? (
        <div className="ad-loading"><div className="ad-spinner" /> Loading pages…</div>
      ) : (
        <>
          {/* ── Page selector ── */}
          <div className="vc-page-card">
            <div className="vc-page-card__select-row">
              <div className="vc-page-card__select-wrap">
                <label className="vc-label" htmlFor="vc-page-select">Page</label>
                <select
                  id="vc-page-select"
                  className="vc-select"
                  value={selectedPath}
                  onChange={(e) => setSelectedPath(e.target.value)}
                >
                  {pages.length === 0 && <option value="">No pages in CMS</option>}
                  {pages.map((p) => (
                    <option key={p.id ?? p.pagePath} value={p.pagePath}>
                      {p.pageTitle || formatPageName(p.pagePath)}{p.active === false ? ' (hidden)' : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="vc-stats-row">
              <div className="vc-stat">
                <span className="vc-stat__label">Last edited</span>
                <span className="vc-stat__value">
                  {live?.lastEditedAt ? new Date(live.lastEditedAt).toLocaleDateString() : '—'}
                </span>
              </div>
              <div className="vc-stat">
                <span className="vc-stat__label">Saved versions</span>
                <span className="vc-stat__value">{versions.length}</span>
              </div>
              <div className={`vc-stat${reviewDue ? ' vc-stat--due' : ''}`}>
                <Calendar size={12} />
                <span className="vc-stat__label">Next review</span>
                <span className="vc-stat__value">{reviewLabel}</span>
              </div>
              <div className="vc-stat">
                <span className="vc-stat__label">Editor</span>
                <span className="vc-stat__value">{live?.lastEditedBy || '—'}</span>
              </div>
            </div>
          </div>

          {/* ── Tabs ── */}
          <div className="vc-tabs" role="tablist">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={workspace === id}
                className={`vc-tab${workspace === id ? ' vc-tab--on' : ''}`}
                onClick={() => setWorkspace(id)}
              >
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>

          {/* ── Edit & Publish ── */}
          {workspace === 'publish' && (
            <div className="vc-panel">
              <form onSubmit={handleSavePublish} className="vc-publish-form">
                <div className="vc-field">
                  <label className="vc-label" htmlFor="vc-pub-title">Page title</label>
                  <input
                    id="vc-pub-title"
                    className="vc-input"
                    value={publishTitle}
                    onChange={(e) => setPublishTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="vc-field">
                  <label className="vc-label">Content</label>
                  <RichTextEditor
                    value={publishBody}
                    onChange={setPublishBody}
                    placeholder="Start typing content here…"
                  />
                </div>

                <div className="vc-publish-meta">
                  <div className="vc-field">
                    <label className="vc-label" htmlFor="vc-pub-eff">Effective date <span className="vc-optional">(optional)</span></label>
                    <input id="vc-pub-eff" type="date" className="vc-input" value={publishEffective} onChange={(e) => setPublishEffective(e.target.value)} />
                  </div>
                  <div className="vc-field">
                    <label className="vc-label" htmlFor="vc-pub-exp">Expiry date <span className="vc-optional">(optional)</span></label>
                    <input id="vc-pub-exp" type="date" className="vc-input" value={publishExpires} onChange={(e) => setPublishExpires(e.target.value)} />
                  </div>
                  <div className="vc-field vc-field--wide">
                    <label className="vc-label" htmlFor="vc-pub-note">Change note</label>
                    <input
                      id="vc-pub-note"
                      className="vc-input"
                      value={publishNote}
                      onChange={(e) => setPublishNote(e.target.value)}
                      placeholder="e.g., Updated tax rates for 2025"
                    />
                  </div>
                </div>

                <div className="vc-publish-footer">
                  <button type="submit" className="ad-btn ad-btn-primary" disabled={saving || !live}>
                    {saving ? '⏳ Saving…' : <><Save size={14} /> Save &amp; Publish</>}
                  </button>
                  <span className="vc-save-hint">Current version is backed up automatically before each publish.</span>
                </div>
              </form>
            </div>
          )}

          {/* ── History ── */}
          {workspace === 'history' && (
            <div className="vc-panel">
              <div className="vc-history-header">
                <p className="vc-hint">Full revision history for this page. Roll back to any saved version or compare with live.</p>
                <button type="button" className="ad-btn ad-btn-secondary" onClick={recordBaseline} disabled={!live}>
                  <FileText size={14} /> Save current as baseline
                </button>
              </div>

              <div className="vc-history-list">
                {/* Live entry */}
                <div className="vc-entry vc-entry--live">
                  <div className="vc-entry__track">
                    <span className="vc-dot vc-dot--live" />
                  </div>
                  <div className="vc-entry__body">
                    <div className="vc-entry__top">
                      <strong className="vc-entry__kind">Live</strong>
                      <span className="vc-entry__badge vc-entry__badge--live">current</span>
                    </div>
                    <span className="vc-entry__meta">
                      {live?.lastEditedBy || '—'} · {live?.lastEditedAt ? new Date(live.lastEditedAt).toLocaleString() : '—'}
                    </span>
                  </div>
                </div>

                {versions.length === 0 && (
                  <div className="vc-empty-state">
                    <FileText size={28} />
                    <p>No saved versions yet.</p>
                    <p className="vc-empty-state__sub">Versions are created automatically each time you publish, or you can save a baseline manually.</p>
                  </div>
                )}

                {versions.map((v) => (
                  <div key={v.id} className="vc-entry">
                    <div className="vc-entry__track">
                      <span className="vc-dot" />
                    </div>
                    <div className="vc-entry__body">
                      <div className="vc-entry__top">
                        <strong className="vc-entry__kind">{kindLabel[v.kind] || 'Snapshot'}</strong>
                        {v.changeNote && <span className="vc-entry__note">{v.changeNote}</span>}
                      </div>
                      <span className="vc-entry__meta">
                        {v.authorLabel || v.authorEmail || '—'} · {v.at ? new Date(v.at).toLocaleString() : '—'}
                      </span>
                      {(v.effectiveFrom || v.expiresAt) && (
                        <span className="vc-entry__dates">
                          {v.effectiveFrom && <span>Effective {v.effectiveFrom}</span>}
                          {v.expiresAt && <span>Expires {v.expiresAt}</span>}
                        </span>
                      )}
                      <div className="vc-entry__actions">
                        <button
                          type="button"
                          className="vc-entry__action"
                          onClick={() => { handleLeftChange(v.id); setWorkspace('compare'); }}
                        >
                          <GitCompare size={12} /> Compare with live
                        </button>
                        <button
                          type="button"
                          className="vc-entry__action vc-entry__action--warn"
                          disabled={saving}
                          onClick={() => handleRollback(v)}
                        >
                          <RotateCcw size={12} /> Rollback
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {auditForPath.length > 0 && (
                  <>
                    <div className="vc-history-divider">Server audit log</div>
                    {auditForPath.map((l) => (
                      <div key={l.id} className="vc-entry vc-entry--audit">
                        <div className="vc-entry__track">
                          <span className="vc-dot vc-dot--audit" />
                        </div>
                        <div className="vc-entry__body">
                          <div className="vc-entry__top">
                            <strong className="vc-entry__kind">{l.adminEmail}</strong>
                            <span className="vc-entry__badge">audit</span>
                          </div>
                          <span className="vc-entry__meta">{l.details || l.action}</span>
                          <span className="vc-entry__meta">{l.createdAt ? new Date(l.createdAt).toLocaleString() : '—'}</span>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          )}

          {/* ── Compare ── */}
          {workspace === 'compare' && (
            <div className="vc-panel">
              <div className="vc-compare-controls">
                <div className="vc-field">
                  <label className="vc-label">Original / older version</label>
                  <select className="vc-select" value={compareLeft} onChange={(e) => handleLeftChange(e.target.value)}>
                    {compareOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>
                <span className="vc-vs">vs</span>
                <div className="vc-field">
                  <label className="vc-label">Edited / newer version</label>
                  <select className="vc-select" value={compareRight} onChange={(e) => handleRightChange(e.target.value)}>
                    {compareOptions.map((o) => <option key={`r-${o.value}`} value={o.value}>{o.label}</option>)}
                  </select>
                </div>
                <div className="vc-compare-mode-btns">
                  <button
                    type="button"
                    className={`vc-mode-btn${!diffMode ? ' vc-mode-btn--on' : ''}`}
                    onClick={() => setDiffMode(false)}
                    title="Side-by-side view"
                  >
                    <Columns2 size={14} /> Side by side
                  </button>
                  <button
                    type="button"
                    className={`vc-mode-btn${diffMode ? ' vc-mode-btn--on' : ''}`}
                    onClick={() => setDiffMode(true)}
                    title="Show what changed"
                  >
                    <ScanText size={14} /> Show changes
                  </button>
                </div>
              </div>

              {diffMode ? (
                <DiffView
                  leftHtml={getCompareText(compareLeft)}
                  rightHtml={getCompareText(compareRight)}
                />
              ) : (
                <>
                  <p className="vc-hint">Read-only preview. Switch to "Show changes" to highlight differences.</p>
                  <div className="vc-compare-panes">
                    <div className="vc-pane">
                      <span className="vc-pane__label">Original</span>
                      <div
                        className="vc-preview"
                        dangerouslySetInnerHTML={{ __html: getCompareText(compareLeft) || '<p style="color:var(--ad-muted);font-style:italic">— No content —</p>' }}
                      />
                    </div>
                    <div className="vc-pane">
                      <span className="vc-pane__label">Edited</span>
                      <div
                        className="vc-preview"
                        dangerouslySetInnerHTML={{ __html: getCompareText(compareRight) || '<p style="color:var(--ad-muted);font-style:italic">— No content —</p>' }}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* ── Settings ── */}
          {workspace === 'settings' && (
            <div className="vc-panel vc-settings-panel">
              <div className="vc-settings-grid">
                <div className="vc-settings-card">
                  <div className="vc-settings-card__head">
                    <Bell size={16} />
                    <h3>Notifications</h3>
                  </div>
                  <label className="vc-check">
                    <input
                      type="checkbox"
                      checked={!!settings.notifyOnPublish}
                      onChange={(e) => updateSettings({ notifyOnPublish: e.target.checked })}
                    />
                    <div>
                      <span className="vc-check__title">Notify audience on publish</span>
                      <span className="vc-check__sub">Creates a handbook notification for all users when this page is published.</span>
                    </div>
                  </label>
                  <label className="vc-check">
                    <input
                      type="checkbox"
                      checked={!!settings.notifyReviewDue}
                      onChange={(e) => updateSettings({ notifyReviewDue: e.target.checked })}
                    />
                    <div>
                      <span className="vc-check__title">Review overdue alert</span>
                      <span className="vc-check__sub">Shows a warning toast when publishing if the scheduled review date has passed.</span>
                    </div>
                  </label>
                </div>

                <div className="vc-settings-card">
                  <div className="vc-settings-card__head">
                    <Calendar size={16} />
                    <h3>Content Review Schedule</h3>
                  </div>
                  <div className={`vc-review-status${reviewDue ? ' vc-review-status--due' : ''}`}>
                    <span className="vc-review-status__label">Next review</span>
                    <strong className="vc-review-status__date">{reviewLabel}</strong>
                    {reviewDue && <span className="vc-review-status__badge">Overdue</span>}
                  </div>
                  <div className="vc-field">
                    <label className="vc-label" htmlFor="vc-interval">Review interval (days)</label>
                    <input
                      id="vc-interval"
                      type="number"
                      min={1}
                      className="vc-input vc-input--sm"
                      value={settings.reviewIntervalDays ?? 90}
                      onChange={(e) => {
                        const days = Number(e.target.value) || 90;
                        const st = readStore();
                        const d = getDoc(st, selectedPath);
                        persist(setDoc(st, selectedPath, { ...d, settings: { ...d.settings, reviewIntervalDays: days } }));
                      }}
                    />
                  </div>
                  <button type="button" className="ad-btn ad-btn-secondary vc-schedule-btn" onClick={() => scheduleNextReview(new Date())}>
                    <RotateCcw size={14} /> Reset review clock from today
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
