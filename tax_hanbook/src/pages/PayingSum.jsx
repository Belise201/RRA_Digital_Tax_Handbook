import React from 'react';
import { FileText } from 'lucide-react';
import FaqTopicSection from '../components/FaqTopicSection';
import CommunityFaqTopicSection from '../components/CommunityFaqTopicSection';
import { PayingTaxTypesSummaryTable } from '../data/payingTaxTypesSummaryTable';

const PAYING_FAQ_ITEMS = [
  {
    id: 'paying-sum-q1',
    question: 'How can I pay taxes after declaring in E-Tax?',
    answer:
      'Use the RRA reference on your acknowledgement receipt and pay via E-Payment, mobile money (e.g. MTN/Airtel), Mobicash, or at a bank, depending on what is available for that tax type.',
  },
  {
    id: 'paying-sum-q2',
    question: 'Where can I see deadlines for each tax?',
    answer: (
      <>
        <p>Expand the row below for the full Tax Types Summary table with deadlines and links to handbook pages.</p>
      </>
    ),
  },
  {
    id: 'paying-sum-tax-table',
    question: 'Tax Types Summary (deadlines and handbook links)',
    answer: <PayingTaxTypesSummaryTable />,
  },
  {
    id: 'paying-sum-q3',
    question: 'When is PAYE usually due?',
    answer:
      'PAYE is commonly due by the 15th of the month following the month of payment (or the 15th after the quarter for quarterly cases). Confirm on the PAYE page and your RRA notices.',
  },
  {
    id: 'paying-sum-q4',
    question: 'When is annual income tax due?',
    answer:
      'Annual income tax (PIT/CIT) for many businesses is due by 31 March of the year following the tax year, with quarterly instalments where applicable. See the summary table above.',
  },
];

const PayingSum = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Paying Taxes Summary</h1>
              <div className="professional-title-divider" />
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <FaqTopicSection items={PAYING_FAQ_ITEMS} defaultExpandFirst={false} />
        <CommunityFaqTopicSection categoryKey="paying-sum" />
      </div>
    </div>
  );
};

export default PayingSum;
