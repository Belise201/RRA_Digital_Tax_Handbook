import React from 'react';
import { FileText } from 'lucide-react';
import FaqTopicSection from '../components/FaqTopicSection';
import CommunityFaqTopicSection from '../components/CommunityFaqTopicSection';
import {
  REGISTRATION_SUMMARY_MAIN_ITEMS,
  REGISTRATION_SUMMARY_STEP_ITEMS,
} from '../data/registrationSummaryFaqItems';

const RegistrationSummary = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Registration Summary</h1>
              <div className="professional-title-divider" />
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <FaqTopicSection items={REGISTRATION_SUMMARY_MAIN_ITEMS} heading="Questions and answers" defaultExpandFirst={false} />
        <FaqTopicSection
          items={REGISTRATION_SUMMARY_STEP_ITEMS}
          heading="Step-by-Step guide to registering as a business getting a TIN with RDB"
          defaultExpandFirst={false}
        />
        <CommunityFaqTopicSection categoryKey="registration-summary" />
      </div>
    </div>
  );
};

export default RegistrationSummary;
