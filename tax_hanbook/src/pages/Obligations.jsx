import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BookMarked } from 'lucide-react';
import FaqTopicSection from '../components/FaqTopicSection';
import CommunityFaqTopicSection from '../components/CommunityFaqTopicSection';
import { OBLIGATIONS_ACCORDION_ITEMS } from '../data/obligationsAccordionItems';

const Obligations = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== '#faq-obligations') return;
    const id = window.setTimeout(() => {
      document.getElementById('faq-obligations')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
    return () => window.clearTimeout(id);
  }, [location.hash, location.pathname]);

  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <BookMarked size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Obligations &amp; Bookkeeping</h1>
              <div className="professional-title-divider" />
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <p className="content-paragraph" style={{ marginBottom: 0 }}>
            Core duties for taxpayers in Rwanda: keeping RRA informed, maintaining books of account, filing and paying
            on time, and cooperating with the tax administration.
          </p>
        </section>

        <FaqTopicSection
          sectionId="faq-obligations"
          heading="Obligations &amp; Bookkeeping — questions and answers"
          items={OBLIGATIONS_ACCORDION_ITEMS}
        />
        <CommunityFaqTopicSection categoryKey="obligations" />
      </div>
    </div>
  );
};

export default Obligations;
