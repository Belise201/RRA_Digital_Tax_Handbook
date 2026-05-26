import { FileText } from 'lucide-react';
import FaqTopicSection from '../components/FaqTopicSection';
import CommunityFaqTopicSection from '../components/CommunityFaqTopicSection';
import {
  PIT_CIT_SUMMARY_FAQ_ITEMS,
  PIT_CIT_REGIMES_ITEMS,
  PIT_CIT_MOTOR_VEHICLE_ITEMS,
  PIT_CIT_MDECL_INCOME_ITEMS,
  PIT_CIT_MDECL_MV_ITEMS,
  PIT_CIT_ETAX_FLAT_ITEMS,
  PIT_CIT_ETAX_LUMP_ITEMS,
  PIT_CIT_ETAX_REAL_ITEMS,
  PIT_CIT_ETAX_IQP_ITEMS,
} from '../data/pitCitSummaryAccordionData';

const PitCitSum = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Income Tax (PIT and CIT) Summary</h1>
              <div className="professional-title-divider" />
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <FaqTopicSection heading="Questions and answers" items={PIT_CIT_SUMMARY_FAQ_ITEMS} defaultExpandFirst={false} />
        <FaqTopicSection heading="Tax regimes and rates" items={PIT_CIT_REGIMES_ITEMS} defaultExpandFirst={false} />
        <FaqTopicSection heading="Motor vehicle income tax rates" items={PIT_CIT_MOTOR_VEHICLE_ITEMS} defaultExpandFirst={false} />
        <FaqTopicSection
          heading="M-Declaration: Flat Tax, Lump Sum or IQP"
          items={PIT_CIT_MDECL_INCOME_ITEMS}
          defaultExpandFirst={false}
        />
        <FaqTopicSection
          heading="M-Declaration: Motor vehicle income or IQP"
          items={PIT_CIT_MDECL_MV_ITEMS}
          defaultExpandFirst={false}
        />
        <FaqTopicSection heading="E-Tax: Flat Tax regime" items={PIT_CIT_ETAX_FLAT_ITEMS} defaultExpandFirst={false} />
        <FaqTopicSection heading="E-Tax: Lump Sum regime" items={PIT_CIT_ETAX_LUMP_ITEMS} defaultExpandFirst={false} />
        <FaqTopicSection heading="E-Tax: Real Regime" items={PIT_CIT_ETAX_REAL_ITEMS} defaultExpandFirst={false} />
        <FaqTopicSection heading="E-Tax: Instalment Quarterly Prepayments (IQP)" items={PIT_CIT_ETAX_IQP_ITEMS} defaultExpandFirst={false} />
        <CommunityFaqTopicSection categoryKey="pit-cit-sum" />
      </div>
    </div>
  );
};

export default PitCitSum;
