/**
 * Sanitizes captured / saved handbook HTML for the CMS editor and for publishing.
 * Keeps `class` and most attributes so typography and layout match the live React page;
 * removes scripts, inline handlers, and React hydration attributes only.
 */
export function sanitizeHandbookHtml(html) {
  if (!html || typeof document === 'undefined') return html || '';
  const div = document.createElement('div');
  div.innerHTML = html;
  div.querySelectorAll('svg, script, style, noscript').forEach((el) => el.remove());
  div.querySelectorAll('a[href]').forEach((a) => {
    const href = a.getAttribute('href');
    if (href && /^\s*javascript:/i.test(href)) a.removeAttribute('href');
  });
  div.querySelectorAll('*').forEach((el) => {
    [...el.attributes].forEach((attr) => {
      const n = attr.name.toLowerCase();
      if (n.startsWith('on')) {
        el.removeAttribute(attr.name);
      } else if (n.startsWith('data-react')) {
        el.removeAttribute(attr.name);
      }
    });
  });
  return div.innerHTML;
}
