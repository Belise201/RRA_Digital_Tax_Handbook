import React from 'react';
import { FileText } from 'lucide-react';
import FaqTopicSection from '../components/FaqTopicSection';
import CommunityFaqTopicSection from '../components/CommunityFaqTopicSection';

const payeRateTable = (
  <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
    <thead>
      <tr style={{ backgroundColor: '#f0f0f0' }}>
        <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>
          Monthly taxable income
        </th>
        <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>
          Marginal Tax Rate
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 0 to FRW 60,000</td>
        <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>0%</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 60,001 to FRW 100,000</td>
        <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>10%</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 100,001 to FRW 200,000</td>
        <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>20%</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Above FRW 200,000</td>
        <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>30%</td>
      </tr>
    </tbody>
  </table>
);

const PAYE_FAQ_ITEMS = [
  {
    id: 'paye-sum-q1',
    question: 'What is PAYE?',
    answer:
      'Pay As You Earn (PAYE) is income tax withheld by an employer from employees’ salaries and wages and remitted to RRA on their behalf.',
  },
  {
    id: 'paye-sum-q2',
    question: 'Who must withhold and declare PAYE?',
    answer:
      'Any employer that pays employment income must register, withhold PAYE from each payment, and declare and pay the amounts withheld by the legal deadline.',
  },
  {
    id: 'paye-sum-q3',
    question: 'When are PAYE declarations and payments due?',
    answer:
      'PAYE is normally due by the 15th of the month following the month of payment (or by the 15th following the quarter for quarterly filers where applicable).',
  },
  {
    id: 'paye-sum-q4',
    question: 'What is the rate of PAYE for permanent employees?',
    answer: (
      <>
        <p>Marginal rates for monthly taxable income for permanent employees are:</p>
        {payeRateTable}
      </>
    ),
  },
];

const PayeSum = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Pay As You Earn (PAYE) Summary</h1>
              <div className="professional-title-divider" />
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <FaqTopicSection items={PAYE_FAQ_ITEMS} defaultExpandFirst={false} />
        <CommunityFaqTopicSection categoryKey="paye-sum" />
      </div>
    </div>
  );
};

export default PayeSum;
