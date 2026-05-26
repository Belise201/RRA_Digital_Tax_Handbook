import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FileText } from 'lucide-react';
import CommunityFaqTopicSection from '../components/CommunityFaqTopicSection';
import { DEREGISTRATION_CONTENT_SECTIONS } from '../data/deregistrationFaqItems';

const Deregistration = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== '#deregistration-faq') return;
    const id = window.setTimeout(() => {
      document.getElementById('deregistration-faq')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
    return () => window.clearTimeout(id);
  }, [location.hash, location.pathname]);

  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">De-Registration</h1>
              <div className="professional-title-divider" />
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <p className="content-paragraph" style={{ marginBottom: 0 }}>
            This chapter explains documents, de-registering for a specific tax type (dormancy), when full de-registration
            applies, and how to apply using RRA online services (E-Tax).
          </p>
        </section>

        <div id="deregistration-faq">
          {DEREGISTRATION_CONTENT_SECTIONS.map((section) => (
            <section key={section.id} id={section.id} className="content-section">
              <h2>{section.title}</h2>
              {section.body}
            </section>
          ))}
          <CommunityFaqTopicSection categoryKey="deregistration" />
        </div>
      </div>
    </div>
  );
};

export default Deregistration;
