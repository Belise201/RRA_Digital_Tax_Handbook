import { FileText } from 'lucide-react';
import FaqTopicSection from '../components/FaqTopicSection';
import CommunityFaqTopicSection from '../components/CommunityFaqTopicSection';
import {
  DOMESTIC_TAXES_ETAX_QA_ITEMS,
  DOMESTIC_TAXES_ETAX_STEP_ITEMS,
  GAMING_TAX_ACCORDION_ITEMS,
  MINING_ROYALTY_ACCORDION_ITEMS,
  CAPITAL_GAINS_ACCORDION_ITEMS,
  ROAD_LEVY_ACCORDION_ITEMS,
  TOURISM_TAX_ACCORDION_ITEMS,
  DECENTRALISED_SUMMARY_ACCORDION_ITEMS,
} from '../data/domesticEtaxAccordionData';

const DomesticETax = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Domestic Taxes and E-Tax Summary</h1>
              <div className="professional-title-divider" />
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <FaqTopicSection
          heading="Domestic Taxes and E-Tax Summary"
          items={DOMESTIC_TAXES_ETAX_QA_ITEMS}
          defaultExpandFirst={false}
        />
        <FaqTopicSection
          heading="Step-by-Step guide to using E-Tax to declare and pay domestic taxes"
          items={DOMESTIC_TAXES_ETAX_STEP_ITEMS}
          defaultExpandFirst={false}
        />
        <FaqTopicSection heading="Gaming Taxes Summary" items={GAMING_TAX_ACCORDION_ITEMS} defaultExpandFirst={false} />
        <FaqTopicSection heading="Mining Royalty Tax Summary" items={MINING_ROYALTY_ACCORDION_ITEMS} defaultExpandFirst={false} />
        <FaqTopicSection heading="Capital Gains Tax Summary" items={CAPITAL_GAINS_ACCORDION_ITEMS} defaultExpandFirst={false} />
        <FaqTopicSection heading="Road Maintenance Levy Summary" items={ROAD_LEVY_ACCORDION_ITEMS} defaultExpandFirst={false} />
        <FaqTopicSection heading="Tourism Tax Summary" items={TOURISM_TAX_ACCORDION_ITEMS} defaultExpandFirst={false} />
        <FaqTopicSection
          heading="Decentralised Entities Taxes and Fees Summary"
          items={DECENTRALISED_SUMMARY_ACCORDION_ITEMS}
          defaultExpandFirst={false}
        />
        <CommunityFaqTopicSection categoryKey="domestic-e-tax" />
      </div>
    </div>
  );
};

export default DomesticETax;
