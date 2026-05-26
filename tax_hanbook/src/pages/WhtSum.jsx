import React from 'react';
import { FileText } from 'lucide-react';
import FaqTopicSection from '../components/FaqTopicSection';
import CommunityFaqTopicSection from '../components/CommunityFaqTopicSection';
const WHT_FAQ_ITEMS = [
  {
    id: 'wht-sum-q1',
    question: 'What are withholding taxes?',
    answer:
      'Withholding taxes are amounts a payer deducts from certain payments (interest, dividends, royalties, fees, etc.) and remits to RRA before paying the beneficiary.',
  },
  {
    id: 'wht-sum-q2',
    question: 'Must each type of withholding be declared separately?',
    answer:
      'Yes. Declare and pay each type of taxable withholding separately, using the correct annexures and declaration for that income type in E-Tax.',
  },
  {
    id: 'wht-sum-q3',
    question: 'What are the main steps on E-Tax?',
    answer:
      'Withhold tax and keep invoices, log in to https://etax.rra.gov.rw, download and complete annexures, upload them, submit the declaration, then pay using the RRA reference. The detailed steps are listed below as expandable items.',
  },
  {
    id: 'wht-step-intro',
    question: 'Declaring and paying withholding taxes (overview)',
    answer: (
      <p>Taxpayers must declare and pay withholding taxes on each type of taxable income separately.</p>
    ),
  },
  {
    id: 'wht-step-1',
    question: 'Step 1: Withhold tax on taxable payment transactions',
    answer: (
      <p>
        Before making payments subject to withholding taxes, withhold the tax due and retain the transaction invoices.
      </p>
    ),
  },
  {
    id: 'wht-step-2',
    question: 'Step 2: Login to E-Tax',
    answer: (
      <p>
        Login at{' '}
        <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">
          https://etax.rra.gov.rw
        </a>
        .
      </p>
    ),
  },
  {
    id: 'wht-step-3',
    question: 'Step 3: Download, complete, validate and save annexures',
    answer: <p>Download, complete and save the applicable Annexures.</p>,
  },
  {
    id: 'wht-step-4',
    question: 'Step 4: Complete declaration form, upload annexures and submit',
    answer: (
      <p>Complete the declaration form, upload annexures, confirm accuracy and submit the Withholding Tax declaration.</p>
    ),
  },
  {
    id: 'wht-step-5',
    question: 'Step 5: View acknowledgement receipt and pay taxes',
    answer: (
      <p>
        Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a
        bank.
      </p>
    ),
  },
];

const WhtSum = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Withholding Taxes Summary</h1>
              <div className="professional-title-divider" />
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <FaqTopicSection items={WHT_FAQ_ITEMS} defaultExpandFirst={false} />
        <CommunityFaqTopicSection categoryKey="wht-sum" />
      </div>
    </div>
  );
};

export default WhtSum;
