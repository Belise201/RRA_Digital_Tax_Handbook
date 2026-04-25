import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  Edit3, EyeOff, Eye, Save, X, AlertTriangle, CheckCircle, Loader,
  Bold, Italic, Underline, List, Heading1, Heading2, Undo2, Redo2,
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import './AdminEditBar.css';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

/**
 * Floating edit bar + WYSIWYG editor for admins.
 *
 * Props:
 *   pagePath    – current page path, e.g. "/vat"
 *   pageTitle   – display title of the current page
 *   pageData    – PageContentDTO | null (from usePageContent)
 *   onSaved     – callback after a successful save / hide / show
 *   getPageHTML – () => string  — returns the live rendered HTML of the page
 *                 Used to pre-fill the editor when no override exists yet.
 */
const AdminEditBar = ({ pagePath, pageTitle, pageData, onSaved, getPageHTML }) => {
  const { user }         = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving]       = useState(false);
  const [hiding, setHiding]       = useState(false);
  const [toast, setToast]         = useState(null);
  const editorRef = useRef(null);   // the contentEditable div


  const showToast = (msg, ok = true) => {
    setToast({ msg, ok });
    setTimeout(() => setToast(null), 3500);
  };

  // ── Open editor ─────────────────────────────────────
  const openEditor = () => setShowModal(true);

  // When the modal becomes visible, populate the editor once.
  useEffect(() => {
    if (!showModal || !editorRef.current) return;
    // Priority: saved override → live rendered page HTML → empty
    const html = pageData?.content?.trim()
      ? pageData.content
      : (getPageHTML?.() || '');
    editorRef.current.innerHTML = html;
    // Move cursor to start
    const range = document.createRange();
    range.selectNodeContents(editorRef.current);
    range.collapse(true);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    editorRef.current.focus();
  }, [showModal]); // intentionally only runs when modal opens

  // ── Toolbar commands ────────────────────────────────
  const exec = useCallback((cmd, value = null) => {
    editorRef.current?.focus();
    document.execCommand(cmd, false, value);
  }, []);

  // ── Save ────────────────────────────────────────────
  const saveContent = async () => {
    const content = editorRef.current?.innerHTML || '';
    setSaving(true);
    try {
      // 1. Save the page content override
      const r = await fetch(`${API}/api/admin/content`, {
        method:  'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:  `Bearer ${user.token}`,
        },
        body: JSON.stringify({ pagePath, pageTitle, content }),
      });
      if (!r.ok) throw new Error(await r.text());

      // 2. Explicitly create a notification so the bell always lights up.
      //    (Done from the frontend so it works even if the backend was not
      //    restarted after the auto-notification code was added.)
      const label = pageTitle || pagePath;
      await fetch(`${API}/api/admin/notifications`, {
        method:  'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:  `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          title:    `Page Updated: ${label}`,
          message:  `The administrator has updated "${label}". Click "View Page" to see the latest version.`,
          pagePath: pagePath,
        }),
      });

      showToast('Page updated! Users can see the changes and have been notified.');
      setShowModal(false);
      onSaved?.();
    } catch (e) {
      showToast(e.message || 'Save failed', false);
    } finally {
      setSaving(false);
    }
  };

  // ── Hide / Show page ────────────────────────────────
  const toggleHide = async () => {
    setHiding(true);
    try {
      let r;
      if (pageData) {
        const endpoint = pageData.active
          ? `/api/admin/content/${pageData.id}/hide`
          : `/api/admin/content/${pageData.id}/show`;
        r = await fetch(`${API}${endpoint}`, {
          method:  'PATCH',
          headers: { Authorization: `Bearer ${user.token}` },
        });
      } else {
        r = await fetch(`${API}/api/admin/content/hide-path`, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` },
          body: JSON.stringify({ pagePath, pageTitle }),
        });
      }
      if (!r.ok) throw new Error(await r.text());
      showToast(`Page ${(pageData?.active ?? true) ? 'hidden' : 'restored'} successfully.`);
      onSaved?.();
    } catch (e) {
      showToast(e.message || 'Action failed', false);
    } finally {
      setHiding(false);
    }
  };

  const isHidden    = pageData && !pageData.active;
  const hasOverride = pageData && pageData.active && pageData.content;

  return (
    <>
      {/* ── Sub-header toolbar strip ─────────────────────────────────────
          Sticky bar that sits just below the fixed header (top: 80px),
          above the page content. Only admins see it.                    */}
      <div className="aeb-bar">
        <div className="aeb-bar__actions">
          <button className="aeb-bar__btn aeb-bar__btn--edit" onClick={openEditor}>
            <Edit3 size={13} /> Edit Page Content
          </button>
          <button
            className={`aeb-bar__btn ${isHidden ? 'aeb-bar__btn--show' : 'aeb-bar__btn--hide'}`}
            onClick={toggleHide}
            disabled={hiding}
          >
            {hiding
              ? <Loader size={13} className="aeb-spin" />
              : isHidden
                ? <><Eye    size={13} /> Restore Page</>
                : <><EyeOff size={13} /> Hide Page</>}
          </button>
        </div>
      </div>

      {/* ── WYSIWYG editor modal — rendered via Portal so it escapes all
              stacking contexts (header z-3000, sidebar z-1000, etc.) ── */}
      {showModal && createPortal(
        <div
          className="aeb-overlay"
          onClick={e => e.target === e.currentTarget && setShowModal(false)}
        >
          <div className="aeb-modal">

            {/* Header */}
            <div className="aeb-modal__head">
              <div>
                <h2 className="aeb-modal__title">Edit: {pageTitle || pagePath}</h2>
                <p className="aeb-modal__subtitle">
                  Click anywhere in the content to edit it. Changes go live immediately for all visitors.
                </p>
              </div>
              <button className="aeb-modal__close" onClick={() => setShowModal(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Formatting toolbar */}
            <div className="aeb-toolbar">
              <button className="aeb-toolbar__btn" title="Bold (Ctrl+B)"      onMouseDown={e => { e.preventDefault(); exec('bold'); }}>
                <Bold      size={15} />
              </button>
              <button className="aeb-toolbar__btn" title="Italic (Ctrl+I)"    onMouseDown={e => { e.preventDefault(); exec('italic'); }}>
                <Italic    size={15} />
              </button>
              <button className="aeb-toolbar__btn" title="Underline (Ctrl+U)" onMouseDown={e => { e.preventDefault(); exec('underline'); }}>
                <Underline size={15} />
              </button>
              <div className="aeb-toolbar__divider" />
              <button className="aeb-toolbar__btn" title="Heading 1"  onMouseDown={e => { e.preventDefault(); exec('formatBlock', 'h1'); }}>
                <Heading1  size={15} />
              </button>
              <button className="aeb-toolbar__btn" title="Heading 2"  onMouseDown={e => { e.preventDefault(); exec('formatBlock', 'h2'); }}>
                <Heading2  size={15} />
              </button>
              <button className="aeb-toolbar__btn" title="Paragraph"  onMouseDown={e => { e.preventDefault(); exec('formatBlock', 'p'); }}>
                P
              </button>
              <button className="aeb-toolbar__btn" title="Bullet list" onMouseDown={e => { e.preventDefault(); exec('insertUnorderedList'); }}>
                <List      size={15} />
              </button>
              <div className="aeb-toolbar__divider" />
              <button className="aeb-toolbar__btn" title="Undo (Ctrl+Z)" onMouseDown={e => { e.preventDefault(); exec('undo'); }}>
                <Undo2     size={15} />
              </button>
              <button className="aeb-toolbar__btn" title="Redo (Ctrl+Y)" onMouseDown={e => { e.preventDefault(); exec('redo'); }}>
                <Redo2     size={15} />
              </button>
            </div>

            {/* The editable content area */}
            <div
              ref={editorRef}
              className="aeb-editor"
              contentEditable
              suppressContentEditableWarning
              spellCheck
              data-placeholder="Describe what was updated on this page, e.g. 'Updated the VAT rate table and added new exemption categories.'"
            />

            {/* Info tip */}
            <div className="aeb-modal__tip">
              <AlertTriangle size={13} />
              Your changes will <strong>immediately replace</strong> this page for all visitors.
              Logged-in users will also receive a 🔔 notification telling them the page was updated.
            </div>

            {/* Footer */}
            <div className="aeb-modal__foot">
              <button className="aeb-modal__btn aeb-modal__btn--cancel" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button
                className="aeb-modal__btn aeb-modal__btn--save"
                onClick={saveContent}
                disabled={saving}
              >
                {saving
                  ? <><Loader size={14} className="aeb-spin" /> Saving…</>
                  : <><Save   size={14} /> Save &amp; Publish</>}
              </button>
            </div>

          </div>
        </div>,
        document.body,
      )}

      {/* ── Toast — also via Portal so it's always on top ── */}
      {toast && createPortal(
        <div className={`aeb-toast ${toast.ok ? 'aeb-toast--ok' : 'aeb-toast--err'}`}>
          {toast.ok ? <CheckCircle size={16} /> : <AlertTriangle size={16} />}
          {toast.msg}
        </div>,
        document.body,
      )}
    </>
  );
};

export default AdminEditBar;
