/**
 * Automatic page translation service.
 * Uses Google Translate's free public endpoint with localStorage caching.
 * Each unique (text, language) pair is cached permanently after the first fetch.
 */

const CACHE_VER = '1';
const KEY_PFX = `rra_pt${CACHE_VER}_`;

function djb2(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) + h) ^ str.charCodeAt(i);
  }
  return (h >>> 0).toString(36);
}

function cacheKey(text, lang) {
  return KEY_PFX + lang + '_' + djb2(text.slice(0, 300));
}

async function fetchTranslation(text, lang) {
  const url =
    `https://translate.googleapis.com/translate_a/single` +
    `?client=gtx&sl=en&tl=${lang}&dt=t&q=${encodeURIComponent(text)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  return json[0]
    .filter(Boolean)
    .map((s) => s[0] || '')
    .join('');
}

async function translateText(text, lang) {
  const trimmed = text.trim();
  if (!trimmed || trimmed.length < 2 || lang === 'en') return text;

  const key = cacheKey(trimmed, lang);
  try {
    const hit = localStorage.getItem(key);
    if (hit !== null) return hit;

    const result = await fetchTranslation(trimmed, lang);
    try {
      localStorage.setItem(key, result);
    } catch {
      // localStorage full — skip caching
    }
    return result;
  } catch {
    return text; // network or API error → keep original
  }
}

function ancestorBlocks(node) {
  let el = node.parentElement;
  while (el) {
    const t = el.tagName;
    if (t === 'SCRIPT' || t === 'STYLE' || t === 'NOSCRIPT') return true;
    if (t === 'CODE' || t === 'PRE') return true;
    if (t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT') return true;
    if (el.getAttribute && el.getAttribute('translate') === 'no') return true;
    if (el.classList && el.classList.contains('notranslate')) return true;
    el = el.parentElement;
  }
  return false;
}

/**
 * Translate all visible text nodes inside `root` to `lang`.
 * Mutations are applied in-place on the cloned/live element.
 */
export async function translateAllTextNodes(root, lang) {
  if (!root || lang === 'en') return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const pending = [];
  let node;
  while ((node = walker.nextNode())) {
    const raw = node.textContent;
    if (raw.trim().length < 2) continue;
    if (ancestorBlocks(node)) continue;
    pending.push({ node, raw });
  }

  await Promise.all(
    pending.map(async ({ node, raw }) => {
      const trimmed = raw.trim();
      const translated = await translateText(trimmed, lang);
      if (translated !== trimmed) {
        // Preserve surrounding whitespace
        const start = raw.indexOf(trimmed);
        node.textContent =
          raw.slice(0, start) + translated + raw.slice(start + trimmed.length);
      }
    })
  );
}
