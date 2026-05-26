import React from 'react';
import { FileText } from 'lucide-react';
import FaqTopicSection from '../components/FaqTopicSection';
import CommunityFaqTopicSection from '../components/CommunityFaqTopicSection';
import { ExciseDutyRatesTable } from '../data/exciseDutyRatesTable';

const EXCISE_FAQ_ITEMS = [
  {
    id: 'excise-sum-q1',
    question: 'What is Excise Duty?',
    answer:
      'Excise Duty is a tax on specific goods such as beverages, tobacco, fuel, certain vehicles, telecommunications, and other listed products, often at ad valorem or specific rates.',
  },
  {
    id: 'excise-sum-q2',
    question: 'Who must declare Excise Duty?',
    answer:
      'Manufacturers and other taxpayers liable for excise on listed products must keep production and sales records, use tax stamps where required, and declare through E-Tax.',
  },
  {
    id: 'excise-sum-q3',
    question: 'What products pay Excise Duty and what is the rate?',
    answer: (
      <>
        <ExciseDutyRatesTable />
      </>
    ),
  },
  {
    id: 'excise-sum-q4',
    question: 'How do I declare and pay Excise Duty?',
    answer:
      'Log in to https://etax.rra.gov.rw, complete annexures (e.g. raw materials and taxable sales), upload them, submit the declaration, then pay using the RRA reference on the acknowledgement.',
  },
  {
    id: 'excise-step-1',
    question: 'Step 1: Bookkeeping and issuing EBM invoices',
    answer: (
      <p>
        Ensure accurate daily registers of: taxable products manufactured, taxable products sold, raw materials used
        and production activities. Affix tax stamps to required products.
      </p>
    ),
  },
  {
    id: 'excise-step-2',
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
    id: 'excise-step-3',
    question: 'Step 3: Download, complete, validate and save annexures',
    answer: (
      <p>
        Download, complete, validate and save the Annexures. This includes tabs for raw materials and taxable sales.
      </p>
    ),
  },
  {
    id: 'excise-step-4',
    question: 'Step 4: Complete declaration form, upload annexures and submit',
    answer: (
      <p>Complete the declaration form, upload annexures, confirm accuracy and submit the Excise Duty declaration.</p>
    ),
  },
  {
    id: 'excise-step-5',
    question: 'Step 5: View acknowledgement receipt and pay taxes',
    answer: (
      <p>
        Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a
        bank.
      </p>
    ),
  },
];

const ExciseSum = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Excise Duty Summary</h1>
              <div className="professional-title-divider" />
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <FaqTopicSection items={EXCISE_FAQ_ITEMS} defaultExpandFirst={false} />
        <CommunityFaqTopicSection categoryKey="excise-sum" />
      </div>
    </div>
  );
};

export default ExciseSum;
