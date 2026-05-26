import React from 'react';
import { FileText } from 'lucide-react';
import FaqTopicSection from '../components/FaqTopicSection';
import CommunityFaqTopicSection from '../components/CommunityFaqTopicSection';
const EIS_FAQ_ITEMS = [
  {
    id: 'eis-sum-q1',
    question: 'What is the Electronic Invoicing System (EIS)?',
    answer:
      'EIS is RRA’s electronic invoicing solution used to issue compliant sales invoices (a type of EBM) so that VAT and other taxes can be traced from transactions.',
  },
  {
    id: 'eis-sum-q2',
    question: 'Who must use EIS?',
    answer:
      'Taxpayers who are required to issue electronic invoices for their taxable supplies must register for and use EIS according to RRA rules for their sector and turnover.',
  },
  {
    id: 'eis-sum-q3',
    question: 'How does EIS relate to VAT declarations?',
    answer:
      'Sales recorded through EIS support your VAT bookkeeping. VAT taxpayers should keep all input invoices and use EIS (EBM-type invoicing) for sales as explained in the VAT declaration steps on this handbook.',
  },
  {
    id: 'eis-sum-q4',
    question: 'Where do I get help if my EIS device or portal fails?',
    answer:
      'Contact the RRA call centre or visit an RRA office for assistance with registration, connectivity, or invoice issuance issues.',
  },
];

const EisSum = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Electronic Invoicing System (EIS) Summary</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <FaqTopicSection items={EIS_FAQ_ITEMS} defaultExpandFirst={false} />
                <CommunityFaqTopicSection categoryKey="eis-sum" />
            </div>
        </div>
    );
};

export default EisSum;

