import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  Edit3, EyeOff, Eye, Save, X, AlertTriangle, CheckCircle, Loader,
  Bold, Italic, Underline, List, Heading1, Heading2, Undo2, Redo2,
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { sanitizeHandbookHtml } from '../utils/sanitizeHandbookHtml';
import { getApiRoot } from '../config/api';
import './AdminEditBar.css';

const API = getApiRoot();

/**
 * Floating edit actions + WYSIWYG editor for admins.
 *
 * Props:
 *   pagePath    – current page path, e.g. "/vat"
 *   pageTitle   – display title of the current page
 *   pageData    – PageContentDTO | null (from usePageContent)
 *   onSaved     – callback after a successful save / hide / show
 *   getPageHTML – () => string  — returns the live rendered HTML of the page
 *                 Used to pre-fill the editor when no override exists yet.
 */
const AdminEditBar = ({
  pagePath,
  pageTitle,
  pageData,
  onSaved,
  getPageHTML,
  allowHtmlOverride = true,
}) => {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [hiding, setHiding] = useState(false);
  const [toast, setToast] = useState(null);
  const [changeSummary, setChangeSummary] = useState('');
  const editorRef = useRef(null);

  const showToast = (msg, ok = true) => {
    setToast({ msg, ok });
    setTimeout(() => setToast(null), 3500);
  };

  const openEditor = () => {
    setChangeSummary('');
    setShowModal(true);
  };

  // Lock page scroll while editing so the handbook layout behind does not shift.
  useEffect(() => {
    if (!showModal) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showModal]);

  // When the modal opens, populate the editor from the latest page snapshot.
  useEffect(() => {
    if (!showModal || !editorRef.current) return;
    const raw = pageData?.content?.trim()
      ? pageData.content
      : (getPageHTML?.() || '');
    const html = sanitizeHandbookHtml(raw);
    editorRef.current.innerHTML = html;
    const range = document.createRange();
    range.selectNodeContents(editorRef.current);
    range.collapse(true);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    editorRef.current.focus();
  }, [showModal, pagePath, pageData?.content, pageData?.id, getPageHTML]);

  const exec = useCallback((cmd, value = null) => {
    editorRef.current?.focus();
    document.execCommand(cmd, false, value);
  }, []);

  const saveContent = async () => {
    if (!allowHtmlOverride) {
      showToast('Publishing saved HTML is not enabled for this screen. Open a handbook article page to publish changes.', false);
      return;
    }

    const summary = changeSummary.trim();
    if (!summary) {
      showToast('Please describe what you changed (taxpayers will see this in their notification).', false);
      return;
    }

    const raw = editorRef.current?.innerHTML || '';
    const content = sanitizeHandbookHtml(raw);
    const stripped = content.replace(/<[^>]+>/g, '').replace(/\s/g, '');
    if (!stripped) {
      showToast('Page content cannot be empty.', false);
      return;
    }

    setSaving(true);
    try {
      const r = await fetch(`${API}/api/admin/content`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ pagePath, pageTitle, content }),
      });
      if (!r.ok) throw new Error(await r.text());

      const label = pageTitle || pagePath;
      const notifBody =
        `"${label}" was updated.\n\nWhat changed: ${summary}\n\nUse "View Page" to read the latest version.`;

      await fetch(`${API}/api/admin/notifications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          title: `Handbook updated: ${label}`,
          message: notifBody,
          pagePath,
        }),
      });

      showToast('Published. Everyone sees this version; taxpayers were notified.');
      setShowModal(false);
      setChangeSummary('');
      onSaved?.();
    } catch (e) {
      showToast(e.message || 'Save failed', false);
    } finally {
      setSaving(false);
    }
  };

  const toggleHide = async () => {
    setHiding(true);
    try {
      let r;
      if (pageData) {
        const endpoint = pageData.active
          ? `/api/admin/content/${pageData.id}/hide`
          : `/api/admin/content/${pageData.id}/show`;
        r = await fetch(`${API}${endpoint}`, {
          method: 'PATCH',
          headers: { Authorization: `Bearer ${user.token}` },
        });
      } else {
        r = await fetch(`${API}/api/admin/content/hide-path`, {
          method: 'POST',
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

  const isHidden = pageData && !pageData.active;

  return (
    <>
      <div
        className="aeb-sticky-toolbar notranslate"
        translate="no"
        role="region"
        aria-label="Handbook admin tools"
      >
        <div className="aeb-sticky-toolbar__inner">
          <div className="aeb-sticky-toolbar__actions">
            <button type="button" className="aeb-toolbar-btn aeb-toolbar-btn--edit" onClick={openEditor}>
              <Edit3 size={16} />
              <span>Edit content</span>
            </button>
            <button
              type="button"
              className={`aeb-toolbar-btn ${isHidden ? 'aeb-toolbar-btn--show' : 'aeb-toolbar-btn--hide'}`}
              onClick={toggleHide}
              disabled={hiding}
            >
              {hiding ? (
                <Loader size={16} className="aeb-spin" />
              ) : isHidden ? (
                <Eye size={16} />
              ) : (
                <EyeOff size={16} />
              )}
              <span>{isHidden ? 'Show content' : 'Hide content'}</span>
            </button>
          </div>
        </div>
      </div>

      {showModal && createPortal(
        <div
          className="aeb-overlay"
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
        >
          <div className="aeb-modal">
            <div className="aeb-modal__head">
              <div>
                <h2 className="aeb-modal__title">Edit handbook page: {pageTitle || pagePath}</h2>
                <p className="aeb-modal__subtitle">
                  Edit the main handbook text and structure you see here. Your styles and layout classes are kept so the page should still match the handbook design; only wording and rich content should change. The site header and sidebar are not part of this editor.
                  {allowHtmlOverride
                    ? ' When you publish, only this page’s main content area is replaced for visitors — not the app chrome around it.'
                    : ' This screen cannot publish a full-page HTML replacement (layout is fixed in the app). Open any handbook article to publish live updates.'}
                </p>
              </div>
              <button type="button" className="aeb-modal__close" onClick={() => setShowModal(false)}>
                <X size={18} />
              </button>
            </div>

            <label className="aeb-field-label" htmlFor="aeb-change-summary">
              What did you change? <span className="aeb-field-label__req">(required — shown to taxpayers)</span>
            </label>
            <textarea
              id="aeb-change-summary"
              className="aeb-summary-input"
              rows={2}
              value={changeSummary}
              onChange={(e) => setChangeSummary(e.target.value)}
              placeholder="e.g. Updated VAT registration steps and fixed a broken link."
              maxLength={500}
            />

            <div className="aeb-toolbar">
              <button type="button" className="aeb-toolbar__btn" title="Bold (Ctrl+B)" onMouseDown={(e) => { e.preventDefault(); exec('bold'); }}>
                <Bold size={15} />
              </button>
              <button type="button" className="aeb-toolbar__btn" title="Italic (Ctrl+I)" onMouseDown={(e) => { e.preventDefault(); exec('italic'); }}>
                <Italic size={15} />
              </button>
              <button type="button" className="aeb-toolbar__btn" title="Underline (Ctrl+U)" onMouseDown={(e) => { e.preventDefault(); exec('underline'); }}>
                <Underline size={15} />
              </button>
              <div className="aeb-toolbar__divider" />
              <button type="button" className="aeb-toolbar__btn" title="Heading 1" onMouseDown={(e) => { e.preventDefault(); exec('formatBlock', 'h1'); }}>
                <Heading1 size={15} />
              </button>
              <button type="button" className="aeb-toolbar__btn" title="Heading 2" onMouseDown={(e) => { e.preventDefault(); exec('formatBlock', 'h2'); }}>
                <Heading2 size={15} />
              </button>
              <button type="button" className="aeb-toolbar__btn" title="Paragraph" onMouseDown={(e) => { e.preventDefault(); exec('formatBlock', 'p'); }}>
                P
              </button>
              <button type="button" className="aeb-toolbar__btn" title="Bullet list" onMouseDown={(e) => { e.preventDefault(); exec('insertUnorderedList'); }}>
                <List size={15} />
              </button>
              <div className="aeb-toolbar__divider" />
              <button type="button" className="aeb-toolbar__btn" title="Undo (Ctrl+Z)" onMouseDown={(e) => { e.preventDefault(); exec('undo'); }}>
                <Undo2 size={15} />
              </button>
              <button type="button" className="aeb-toolbar__btn" title="Redo (Ctrl+Y)" onMouseDown={(e) => { e.preventDefault(); exec('redo'); }}>
                <Redo2 size={15} />
              </button>
            </div>

            <div
              ref={editorRef}
              className="aeb-editor"
              contentEditable
              suppressContentEditableWarning
              spellCheck
              data-placeholder="Edit the handbook text here. Use the toolbar for headings, lists, and emphasis."
            />

            <div className="aeb-modal__tip">
              <AlertTriangle size={13} />
              {allowHtmlOverride
                ? 'Publishing replaces this page in the live handbook. Logged-in taxpayers get a notification that includes your summary above.'
                : 'Save & publish is disabled here so the handbook layout stays intact. Use Hide content if this route should be unavailable to the public.'}
            </div>

            <div className="aeb-modal__foot">
              <button type="button" className="aeb-modal__btn aeb-modal__btn--cancel" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button
                type="button"
                className="aeb-modal__btn aeb-modal__btn--save"
                onClick={saveContent}
                disabled={saving || !allowHtmlOverride}
              >
                {saving ? (
                  <>
                    <Loader size={14} className="aeb-spin" />
                    Saving…
                  </>
                ) : (
                  <>
                    <Save size={14} />
                    Save &amp; publish
                  </>
                )}
              </button>
            </div>
          </div>
        </div>,
        document.body,
      )}

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
