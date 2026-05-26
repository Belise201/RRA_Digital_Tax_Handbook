import React from 'react';
import { FileText } from 'lucide-react';
import FaqTopicSection from '../components/FaqTopicSection';
import CommunityFaqTopicSection from '../components/CommunityFaqTopicSection';

const VAT_FAQ_ITEMS = [
  {
    id: 'vat-sum-q1',
    question: 'Who must register for VAT?',
    answer:
      'Businesses with annual turnover above FRW 20,000,000 (and other cases required by law) must register for VAT and account for VAT on taxable supplies.',
  },
  {
    id: 'vat-sum-q2',
    question: 'What is the standard VAT rate in Rwanda?',
    answer:
      'The standard VAT rate is 18% on taxable supplies unless a supply is exempt or zero-rated under the VAT law.',
  },
  {
    id: 'vat-sum-q3',
    question: 'Why are EIS invoices important for VAT?',
    answer:
      'Accurate bookkeeping and issuing Electronic Invoicing System (EIS) invoices for sales helps match outputs and inputs and supports correct VAT declarations.',
  },
  {
    id: 'vat-sum-q4',
    question: 'When do I declare and pay VAT?',
    answer:
      'VAT is normally declared monthly or quarterly, with payment by the 15th of the following period. Use E-Tax to submit annexures and the declaration, then pay using the RRA reference on the acknowledgement.',
  },
  {
    id: 'vat-step-1',
    question: 'Step 1: Bookkeeping and issuing EIS invoices',
    answer: (
      <p>
        Ensure accurate bookkeeping including retaining all VAT invoices for inputs and using Electronic Invoicing System
        (EIS), a type of EBM, to issue EIS invoices for all sales.
      </p>
    ),
  },
  {
    id: 'vat-step-2',
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
    id: 'vat-step-3',
    question: 'Step 3: Download, complete, validate and save annexures',
    answer: (
      <p>
        Download, complete, validate and save the applicable Annexures. This includes tabs for sales, locally purchased
        inputs, imported inputs, VAT reverse charge and VAT retained by public institutions.
      </p>
    ),
  },
  {
    id: 'vat-step-4',
    question: 'Step 4: Complete declaration form, upload annexures and submit',
    answer: (
      <p>Complete the declaration form, upload annexures, confirm accuracy and submit the VAT declaration.</p>
    ),
  },
  {
    id: 'vat-step-5',
    question: 'Step 5: View acknowledgement receipt and pay taxes',
    answer: (
      <p>
        Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a
        bank.
      </p>
    ),
  },
];

const VatSum = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Value Added Tax (VAT) Summary</h1>
              <div className="professional-title-divider" />
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <FaqTopicSection items={VAT_FAQ_ITEMS} defaultExpandFirst={false} />
        <CommunityFaqTopicSection categoryKey="vat-sum" />
      </div>
    </div>
  );
};

export default VatSum;
