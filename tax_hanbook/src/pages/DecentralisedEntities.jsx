import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import FaqTopicSection from '../components/FaqTopicSection';
import CommunityFaqTopicSection from '../components/CommunityFaqTopicSection';
import { DECENTRALISED_ENTITIES_ACCORDION_ITEMS } from '../data/decentralisedEntitiesAccordionItems';

const DecentralisedEntities = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== '#faq-decentralised-entities') return;
    const id = window.setTimeout(() => {
      document.getElementById('faq-decentralised-entities')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
    return () => window.clearTimeout(id);
  }, [location.hash, location.pathname]);

  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Building2 size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Taxes &amp; fees — decentralised entities</h1>
              <div className="professional-title-divider" />
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <p className="content-paragraph" style={{ marginBottom: 0 }}>
            Local Government Taxes (LGT) and fees collected by RRA on behalf of districts: what they are, how they relate
            to RRA, and how to declare using the LGT system or M-Declaration.
          </p>
        </section>

        <FaqTopicSection
          sectionId="faq-decentralised-entities"
          heading="Taxes and fees levied by decentralised entities — questions and answers"
          items={DECENTRALISED_ENTITIES_ACCORDION_ITEMS}
        />
        <CommunityFaqTopicSection categoryKey="decentralised-entities" />
      </div>
    </div>
  );
};

export default DecentralisedEntities;
