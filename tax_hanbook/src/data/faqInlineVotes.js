export const FAQ_INLINE_VOTES_KEY = 'rra_faq_inline_votes_v1';

function readBlob() {
  try {
    const raw = localStorage.getItem(FAQ_INLINE_VOTES_KEY);
    if (!raw) return { counts: {}, user: {} };
    const p = JSON.parse(raw);
    if (!p || typeof p !== 'object') return { counts: {}, user: {} };
    return {
      counts: p.counts && typeof p.counts === 'object' ? p.counts : {},
      user: p.user && typeof p.user === 'object' ? p.user : {},
    };
  } catch {
    return { counts: {}, user: {} };
  }
}

function writeBlob(blob) {
  localStorage.setItem(FAQ_INLINE_VOTES_KEY, JSON.stringify(blob));
}

/** Always returns non-negative integers (defaults 0 until someone votes). */
export function getInlineCounts(itemId) {
  const c = readBlob().counts[itemId];
  return {
    up: Math.max(0, Number(c?.up) || 0),
    down: Math.max(0, Number(c?.down) || 0),
  };
}

export function getUserInlineVote(itemId) {
  const v = readBlob().user[itemId];
  return v === 'up' || v === 'down' ? v : null;
}

/**
 * Toggle / switch inline vote for seeded FAQ ids. Same thumb again removes vote.
 * @param {string} itemId
 * @param {'up'|'down'} target
 */
export function toggleInlineFaqVote(itemId, target) {
  const blob = readBlob();
  const prev = blob.user[itemId];
  const cur = blob.counts[itemId] || { up: 0, down: 0 };
  const counts = { ...cur, up: Math.max(0, Number(cur.up) || 0), down: Math.max(0, Number(cur.down) || 0) };

  if (prev === target) {
    counts[target] = Math.max(0, counts[target] - 1);
    delete blob.user[itemId];
  } else if (prev === 'up' || prev === 'down') {
    counts[prev] = Math.max(0, counts[prev] - 1);
    counts[target] = (counts[target] || 0) + 1;
    blob.user[itemId] = target;
  } else {
    counts[target] = (counts[target] || 0) + 1;
    blob.user[itemId] = target;
  }

  blob.counts[itemId] = counts;
  writeBlob(blob);
}
