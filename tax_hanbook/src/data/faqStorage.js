/** Local FAQ queue for admin dashboard (pending community questions). */

export const FAQ_STORAGE_KEY = 'tax_handbook_admin_faq_queue_v1';
export const FAQ_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  DISQUALIFIED: 'disqualified',
};

/** Handbook route for each FAQ submit category (Community approved questions appear on this page). */
export const FAQ_CATEGORY_PAGE_PATHS = {
  'registration-summary': '/registration-summary',
  obligations: '/obligations',
  'decentralised-entities': '/decentralised-entities',
  deregistration: '/deregistration',
  'domestic-e-tax': '/domestic-e-tax',
  'pit-cit-sum': '/pit-cit-sum',
  'paye-sum': '/paye-sum',
  'vat-sum': '/vat-sum',
  'eis-sum': '/eis-sum',
  'excise-sum': '/excise-sum',
  'wht-sum': '/wht-sum',
  'customs-sum': '/customs-sum',
  'paying-sum': '/paying-sum',
};

export function getFaqTopicPagePath(categoryKey) {
  const path = FAQ_CATEGORY_PAGE_PATHS[categoryKey];
  return path || '/faq';
}

/** Page + hash so "View" opens the Community approved questions block. */
export function getFaqAnswerNotificationPagePath(categoryKey) {
  const base = FAQ_CATEGORY_PAGE_PATHS[categoryKey];
  if (!base) return '/faq';
  return `${base}#community-faq-section`;
}

export const FAQ_CATEGORY_OPTIONS = [
  { key: 'registration-summary', label: 'Registration' },
  { key: 'obligations', label: 'Obligations & Bookkeeping' },
  { key: 'decentralised-entities', label: 'Decentralised Entities Taxes & Fees' },
  { key: 'deregistration', label: 'De-Registration' },
  { key: 'domestic-e-tax', label: 'Domestic Taxes and E-Tax' },
  { key: 'pit-cit-sum', label: 'Income Tax (PIT and CIT)' },
  { key: 'paye-sum', label: 'Pay As You Earn (PAYE)' },
  { key: 'vat-sum', label: 'Value Added Tax (VAT)' },
  { key: 'eis-sum', label: 'Electronic Invoicing System (EIS)' },
  { key: 'excise-sum', label: 'Excise Duty' },
  { key: 'wht-sum', label: 'Withholding Taxes' },
  { key: 'customs-sum', label: 'Customs' },
  { key: 'paying-sum', label: 'Paying Taxes' },
];

const CATEGORY_MAP = FAQ_CATEGORY_OPTIONS.reduce((acc, item) => {
  acc[item.key] = item.label;
  return acc;
}, {});

function safeParse(json) {
  try {
    const v = JSON.parse(json);
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

export function loadFaqs() {
  if (typeof window === 'undefined') return [];
  const raw = window.localStorage.getItem(FAQ_STORAGE_KEY);
  if (!raw) return [];
  return safeParse(raw).map(normalizeFaq).filter(Boolean);
}

export function saveFaqs(list) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(FAQ_STORAGE_KEY, JSON.stringify(Array.isArray(list) ? list : []));
}

function normalizeFaq(entry) {
  if (!entry || typeof entry !== 'object') return null;

  const categoryKey = entry.categoryKey || entry.category || 'general';
  const category = CATEGORY_MAP[categoryKey] || entry.category || 'General';
  const status = [FAQ_STATUS.PENDING, FAQ_STATUS.APPROVED, FAQ_STATUS.DISQUALIFIED].includes(entry.status)
    ? entry.status
    : FAQ_STATUS.PENDING;

  return {
    id: entry.id || `faq_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    categoryKey,
    category,
    question: String(entry.question || '').trim(),
    answer: String(entry.answer || '').trim(),
    author: String(entry.author || 'Anonymous').trim(),
    authorEmail: String(entry.authorEmail || '').trim(),
    submittedByEmail: String(entry.submittedByEmail || '').trim(),
    status,
    createdAt: entry.createdAt || new Date().toISOString(),
    reviewedAt: entry.reviewedAt || null,
    reviewedBy: entry.reviewedBy || null,
    disqualifyReason: entry.disqualifyReason || '',
    votes: entry.votes && typeof entry.votes === 'object'
      ? { up: Number(entry.votes.up) || 0, down: Number(entry.votes.down) || 0 }
      : { up: 0, down: 0 },
    relatedLinks: Array.isArray(entry.relatedLinks) ? entry.relatedLinks : [],
  };
}

export function submitFaqQuestion({ categoryKey, question, author, authorEmail, submitterEmail }) {
  const cleanQuestion = String(question || '').trim();
  if (!cleanQuestion) throw new Error('Question is required.');
  if (!categoryKey) throw new Error('Category is required.');
  const accountEmail = String(submitterEmail || '').trim();
  if (!accountEmail) throw new Error('You must be signed in to submit a question.');

  const record = normalizeFaq({
    categoryKey,
    category: CATEGORY_MAP[categoryKey] || categoryKey,
    question: cleanQuestion,
    author: String(author || 'Anonymous').trim() || 'Anonymous',
    authorEmail: String(authorEmail || '').trim(),
    submittedByEmail: accountEmail,
    answer: '',
    status: FAQ_STATUS.PENDING,
    createdAt: new Date().toISOString(),
  });

  const next = [record, ...loadFaqs()];
  saveFaqs(next);
  return record;
}

export function getApprovedFaqsByCategory(categoryKey) {
  return loadFaqs().filter(
    (faq) => faq.status === FAQ_STATUS.APPROVED && faq.categoryKey === categoryKey,
  );
}

export function getApprovedFaqs() {
  return loadFaqs().filter((faq) => faq.status === FAQ_STATUS.APPROVED);
}
