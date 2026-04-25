import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const API_ROOT = import.meta.env.VITE_API_ROOT_URL || 'http://localhost:8080';

const HandbookLiveContent = ({ children }) => {
  const location = useLocation();
  const { user, isAdmin } = useAuth();
  const [override, setOverride] = useState(null);
  const [allPages, setAllPages] = useState([]);
  const [editorOpen, setEditorOpen] = useState(false);
  const [draft, setDraft] = useState({ title: '', contentHtml: '', changeSummary: '' });
  const [status, setStatus] = useState('');

  const path = useMemo(() => location.pathname || '/', [location.pathname]);
  const adminEdit = useMemo(() => new URLSearchParams(location.search).get('adminEdit') === '1', [location.search]);
  const canEdit = Boolean(user?.token && isAdmin() && adminEdit);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await fetch(`${API_ROOT}/api/content/page?path=${encodeURIComponent(path)}`);
        const data = await res.json();
        if (data?.contentHtml) {
          setOverride(data);
          setDraft((prev) => ({
            ...prev,
            title: data.title || path,
            contentHtml: data.contentHtml || '',
          }));
        } else {
          setOverride(null);
          setDraft((prev) => ({
            ...prev,
            title: path,
            contentHtml: '',
          }));
        }
      } catch {
        setOverride(null);
      }
    };
    fetchPage();
  }, [path]);

  useEffect(() => {
    if (!canEdit) return;
    const fetchAll = async () => {
      const res = await fetch(`${API_ROOT}/api/admin/content/pages`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const data = await res.json().catch(() => []);
      setAllPages(Array.isArray(data) ? data : []);
    };
    fetchAll();
  }, [canEdit, user?.token]);

  const saveCurrent = async () => {
    setStatus('');
    const res = await fetch(`${API_ROOT}/api/admin/content/page`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        path,
        title: draft.title || path,
        contentHtml: draft.contentHtml,
        published: true,
        changeSummary: draft.changeSummary || 'Content update',
      }),
    });
    if (res.ok) {
      setStatus('Saved and published.');
      const data = await fetch(`${API_ROOT}/api/content/page?path=${encodeURIComponent(path)}`).then((r) => r.json());
      setOverride(data?.contentHtml ? data : null);
    } else {
      setStatus('Failed to save.');
    }
  };

  const deletePage = async (id) => {
    await fetch(`${API_ROOT}/api/admin/content/page/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${user.token}` },
    });
    setStatus('Deleted selected page override.');
    setAllPages((prev) => prev.filter((p) => p.id !== id));
    if (override?.path === path) setOverride(null);
  };

  return (
    <div>
      {override?.contentHtml ? (
        <div dangerouslySetInnerHTML={{ __html: override.contentHtml }} />
      ) : (
        children
      )}

      {canEdit && (
        <div style={{ position: 'fixed', right: 12, bottom: 12, zIndex: 5000 }}>
          <button onClick={() => setEditorOpen((s) => !s)} style={btnStyle}>
            {editorOpen ? 'Close Editor' : 'Edit Handbook'}
          </button>
          {editorOpen && (
            <div style={panelStyle}>
              <h4 style={{ margin: 0 }}>Admin Content Manager</h4>
              <div style={{ fontSize: 12, marginTop: 6 }}>Path: {path}</div>
              <input style={inputStyle} value={draft.title} onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))} placeholder="Page title" />
              <textarea style={textStyle} value={draft.contentHtml} onChange={(e) => setDraft((d) => ({ ...d, contentHtml: e.target.value }))} placeholder="HTML content..." />
              <input style={inputStyle} value={draft.changeSummary} onChange={(e) => setDraft((d) => ({ ...d, changeSummary: e.target.value }))} placeholder="Change summary" />
              <button onClick={saveCurrent} style={btnStyle}>Save & Publish</button>
              {status && <div style={{ marginTop: 6, fontSize: 12 }}>{status}</div>}
              <hr />
              <div style={{ maxHeight: 140, overflow: 'auto', fontSize: 12 }}>
                {allPages.map((p) => (
                  <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', gap: 8, marginBottom: 4 }}>
                    <span>{p.path}</span>
                    <button onClick={() => deletePage(p.id)}>Delete</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const panelStyle = {
  marginTop: 8,
  width: 380,
  background: '#fff',
  border: '1px solid #ddd',
  borderRadius: 8,
  padding: 10,
  boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
};

const btnStyle = {
  background: '#0b5fa4',
  color: '#fff',
  border: 'none',
  borderRadius: 6,
  padding: '8px 10px',
  cursor: 'pointer',
};

const inputStyle = {
  width: '100%',
  marginTop: 8,
  padding: 6,
};

const textStyle = {
  width: '100%',
  marginTop: 8,
  minHeight: 120,
  padding: 6,
};

export default HandbookLiveContent;
