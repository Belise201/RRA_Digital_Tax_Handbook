import { useState, useEffect, useCallback } from 'react';
import { ThumbsUp, ThumbsDown, ChevronDown } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';
import {
  getInlineCounts,
  getUserInlineVote,
  toggleInlineFaqVote,
  FAQ_INLINE_VOTES_KEY,
} from '../data/faqInlineVotes';
import '../pages/Faq.css';

/**
 * Expandable Q&A + voting. Pass `items` from the same page file (id, question, answer).
 * Vote counts start at 0 until users vote (localStorage via faqInlineVotes).
 * @param {{ id: string, question: string, answer: import('react').ReactNode }[]} items
 * @param {string} [heading] optional section title; defaults to translation
 * @param {string} [sectionId] optional id on the outer section (for in-page anchors, e.g. /faq#sectionId)
 * @param {boolean} [showTopicBadge] default false — small label before each question (omit to avoid duplicate FAQ chrome)
 * @param {boolean} [showVotes] default true — helpful / not helpful under each answer
 * @param {boolean} [defaultExpandFirst] default true — open the first question so one answer is visible on load
 */
export default function FaqTopicSection({
  items,
  heading,
  sectionId,
  showTopicBadge = false,
  showVotes = true,
  defaultExpandFirst = true,
}) {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslations(currentLanguage);
  const list = Array.isArray(items) ? items : [];
  const [expanded, setExpanded] = useState(() => {
    const next = new Set();
    if (defaultExpandFirst && list.length > 0 && list[0]?.id) {
      next.add(list[0].id);
    }
    return next;
  });
  const [, bump] = useState(0);

  const reloadVotes = useCallback(() => bump((n) => n + 1), []);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === FAQ_INLINE_VOTES_KEY || e.key === null) reloadVotes();
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [reloadVotes]);

  if (!list.length) return null;

  const onVote = (itemId, target) => {
    toggleInlineFaqVote(itemId, target);
    reloadVotes();
  };

  const toggleOpen = (id) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const title = heading || t('faqPage.topicHeading');

  return (
    <section id={sectionId} className="content-section faq-topic-section">
      <h2 className="faq-topic-section__title">{title}</h2>
      <ul className="faq-list" role="list">
        {list.map((faq) => (
          <FaqSeedRow
            key={faq.id}
            faq={faq}
            open={expanded.has(faq.id)}
            onToggle={() => toggleOpen(faq.id)}
            counts={getInlineCounts(faq.id)}
            userVote={getUserInlineVote(faq.id)}
            onVote={onVote}
            t={t}
            showVotes={showVotes}
            showTopicBadge={showTopicBadge}
          />
        ))}
      </ul>
    </section>
  );
}

function FaqSeedRow({ faq, open, onToggle, counts, userVote, onVote, t, showVotes, showTopicBadge }) {
  const qId = `faq-q-${faq.id}`;
  const aId = `faq-a-${faq.id}`;

  return (
    <li className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button
        type="button"
        className="faq-item__question"
        id={qId}
        aria-expanded={open}
        aria-controls={aId}
        onClick={onToggle}
      >
        {showTopicBadge ? (
          <span className="faq-item__category">{t('faqPage.topicBadge')}</span>
        ) : null}
        <span className="faq-item__qtext">{faq.question}</span>
        <ChevronDown className="faq-item__chev" size={20} aria-hidden />
      </button>
      <div
        id={aId}
        role="region"
        aria-labelledby={qId}
        className={`faq-item__answer-wrap${open ? '' : ' faq-item__answer-wrap--collapsed'}`}
        hidden={!open}
      >
        <div className="faq-item__answer">
          <div className="faq-item__body faq-item__body--rich">{faq.answer}</div>
          {showVotes ? (
            <div className="faq-item__votes">
              <button
                type="button"
                className={`faq-vote faq-vote--up${userVote === 'up' ? ' faq-vote--active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onVote(faq.id, 'up');
                }}
                aria-pressed={userVote === 'up'}
                aria-label={t('faqPage.helpfulVote')}
              >
                <ThumbsUp size={18} strokeWidth={2} />
                <span className="faq-vote__count">{counts.up}</span>
                <span className="faq-vote__label">{t('faqPage.helpful')}</span>
              </button>
              <button
                type="button"
                className={`faq-vote faq-vote--down${userVote === 'down' ? ' faq-vote--active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onVote(faq.id, 'down');
                }}
                aria-pressed={userVote === 'down'}
                aria-label={t('faqPage.notHelpfulVote')}
              >
                <ThumbsDown size={18} strokeWidth={2} />
                <span className="faq-vote__count">{counts.down}</span>
                <span className="faq-vote__label">{t('faqPage.notHelpful')}</span>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
}
