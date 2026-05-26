import { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { getApprovedFaqsByCategory } from '../data/faqStorage';
import '../pages/Faq.css';

export default function CommunityFaqTopicSection({ categoryKey }) {
  const faqs = useMemo(() => getApprovedFaqsByCategory(categoryKey), [categoryKey]);
  const [expandedId, setExpandedId] = useState(null);

  if (!faqs.length) return null;

  return (
    <section id="community-faq-section" className="content-section faq-topic-section">
      <h2 className="faq-topic-section__title">Community approved questions</h2>
      <ul className="faq-list" role="list">
        {faqs.map((faq) => {
          const isOpen = expandedId === faq.id;
          const qId = `community-faq-q-${faq.id}`;
          const aId = `community-faq-a-${faq.id}`;

          return (
            <li className={`faq-item${isOpen ? ' faq-item--open' : ''}`} key={faq.id}>
              <button
                type="button"
                className="faq-item__question"
                id={qId}
                aria-expanded={isOpen}
                aria-controls={aId}
                onClick={() => setExpandedId((prev) => (prev === faq.id ? null : faq.id))}
              >
                <span className="faq-item__category">Community</span>
                <span className="faq-item__qtext">{faq.question}</span>
                <ChevronDown className="faq-item__chev" size={20} aria-hidden />
              </button>
              <div
                id={aId}
                role="region"
                aria-labelledby={qId}
                className={`faq-item__answer-wrap${isOpen ? '' : ' faq-item__answer-wrap--collapsed'}`}
                hidden={!isOpen}
              >
                <div className="faq-item__answer">
                  <div className="faq-item__body faq-item__body--rich" style={{ whiteSpace: 'pre-wrap' }}>
                    {faq.answer || 'Answer will be published soon.'}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
