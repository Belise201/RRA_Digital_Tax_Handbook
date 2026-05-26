import { useEffect, useRef, useState } from 'react';
import './RichTextEditor.css';

/**
 * Simple WYSIWYG Rich Text Editor
 * No external dependencies - uses contentEditable
 */
const RichTextEditor = ({ value, onChange, placeholder = 'Start typing...' }) => {
  const editorRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || '';
    }
  }, [value]);

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const insertLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      execCommand('createLink', url);
    }
  };

  const insertList = (type) => {
    execCommand(type === 'ul' ? 'insertUnorderedList' : 'insertOrderedList');
  };

  const changeHeading = (e) => {
    const tag = e.target.value;
    if (tag) {
      execCommand('formatBlock', tag);
    }
  };

  return (
    <div className={`rte-container ${isFocused ? 'rte-container--focused' : ''}`}>
      {/* Toolbar */}
      <div className="rte-toolbar">
        <div className="rte-toolbar-group">
          <select className="rte-select" onChange={changeHeading} defaultValue="">
            <option value="">Normal</option>
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
            <option value="h4">Heading 4</option>
            <option value="p">Paragraph</option>
          </select>
        </div>

        <div className="rte-toolbar-group">
          <button
            type="button"
            className="rte-btn"
            onClick={() => execCommand('bold')}
            title="Bold (Ctrl+B)"
          >
            <strong>B</strong>
          </button>
          <button
            type="button"
            className="rte-btn"
            onClick={() => execCommand('italic')}
            title="Italic (Ctrl+I)"
          >
            <em>I</em>
          </button>
          <button
            type="button"
            className="rte-btn"
            onClick={() => execCommand('underline')}
            title="Underline (Ctrl+U)"
          >
            <u>U</u>
          </button>
          <button
            type="button"
            className="rte-btn"
            onClick={() => execCommand('strikeThrough')}
            title="Strikethrough"
          >
            <s>S</s>
          </button>
        </div>

        <div className="rte-toolbar-group">
          <button
            type="button"
            className="rte-btn"
            onClick={() => insertList('ul')}
            title="Bullet List"
          >
            ☰
          </button>
          <button
            type="button"
            className="rte-btn"
            onClick={() => insertList('ol')}
            title="Numbered List"
          >
            ≡
          </button>
        </div>

        <div className="rte-toolbar-group">
          <button
            type="button"
            className="rte-btn"
            onClick={() => execCommand('justifyLeft')}
            title="Align Left"
          >
            ⬅
          </button>
          <button
            type="button"
            className="rte-btn"
            onClick={() => execCommand('justifyCenter')}
            title="Align Center"
          >
            ↔
          </button>
          <button
            type="button"
            className="rte-btn"
            onClick={() => execCommand('justifyRight')}
            title="Align Right"
          >
            ➡
          </button>
        </div>

        <div className="rte-toolbar-group">
          <button
            type="button"
            className="rte-btn"
            onClick={insertLink}
            title="Insert Link"
          >
            🔗
          </button>
          <button
            type="button"
            className="rte-btn"
            onClick={() => execCommand('unlink')}
            title="Remove Link"
          >
            ⛓️‍💥
          </button>
        </div>

        <div className="rte-toolbar-group">
          <button
            type="button"
            className="rte-btn"
            onClick={() => execCommand('removeFormat')}
            title="Clear Formatting"
          >
            ✖
          </button>
        </div>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        className="rte-editor"
        contentEditable
        onInput={handleInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        data-placeholder={placeholder}
        suppressContentEditableWarning
      />
    </div>
  );
};

export default RichTextEditor;
